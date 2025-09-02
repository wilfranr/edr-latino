import * as cheerio from 'cheerio';
import fs from 'fs';

async function scrapeWeaponLocation(weaponName) {
    // Handle special cases for weapon names that differ on the wiki
    const wikiWeaponName = weaponName === 'Wakizashi' ? 'Wakizashi_GS' : weaponName;
    const searchName = wikiWeaponName.replace(/\s+/g, '+');
    const url = `https://eldenring.wiki.fextralife.com/${searchName}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            if (response.status === 404) {
                console.warn(`No wiki page found for ${weaponName} at ${url}`);
            } else {
                console.error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
            }
            return null;
        }
        const html = await response.text();
        const $ = cheerio.load(html);

        let locationText = null;

        $('h3.bonfire').each((i, el) => {
            const h3Text = $(el).text();
            if (h3Text.includes('Where to Find') || h3Text.includes('Where to find')) {
                const list = $(el).nextAll('ul').first(); // Corrected selector
                if (list.length) {
                    const locations = [];
                    list.find('li').each((i, li) => {
                        const liClone = $(li).clone();
                        liClone.find('ul, a.wiki_link[href*="Interactive+Map"]').remove();
                        let text = liClone.text().trim().replace(/:\s*$/, "");
                        text = text.replace(/\[.*?\]/g, '').trim();
                        text = text.replace(/for\s+\d+\s+Runes/g, (match) => match.replace(' ', ''));
                        text = text.replace(/\s+/g, ' ');
                        locations.push(text);
                    });
                    locationText = locations.join('; ');
                    return false; // break the loop
                }
            }
        });

        if (locationText) {
          locationText = locationText.replace(/Runes\./g, 'Runes;').trim();
        }

        return locationText;
    } catch (error) {
        console.error(`Error scraping ${weaponName}:`, error);
        return null;
    }
}

(async () => {
    const weaponsDataEs = JSON.parse(fs.readFileSync('data/weapons_es.json', 'utf-8'));
    const weaponsDataEn = JSON.parse(fs.readFileSync('data/weapons.json', 'utf-8'));

    // Create a map for faster lookups
    const weaponsEnMap = new Map(weaponsDataEn.map(w => [w.id, w]));

    for (const weapon of weaponsDataEs) {
        const weaponEn = weaponsEnMap.get(weapon.id);
        if (weaponEn) {
            console.log(`Scraping location for ${weaponEn.name}...`);
            const location = await scrapeWeaponLocation(weaponEn.name);
            if (location) {
                console.log(`  > Found location: ${location}`);
                weapon.location = location;
            } else {
                console.log(`  > Location not found.`);
                weapon.location = "N/A";
            }
        } else {
             weapon.location = "N/A";
        }
        // Add a small delay to avoid getting blocked
        await new Promise(resolve => setTimeout(resolve, 200));
    }

    // Now, update the English file with the locations from the Spanish file
    const locationsMap = new Map(weaponsDataEs.map(w => [w.id, w.location]));
    const updatedWeaponsEn = weaponsDataEn.map(weapon => {
        if (locationsMap.has(weapon.id)) {
            weapon.location = locationsMap.get(weapon.id);
        }
        return weapon;
    });

    fs.writeFileSync('data/weapons_es.json', JSON.stringify(weaponsDataEs, null, 2));
    console.log('Finished scraping. data/weapons_es.json has been updated.');
    fs.writeFileSync('data/weapons.json', JSON.stringify(updatedWeaponsEn, null, 2));
    console.log('Finished scraping. data/weapons.json has been updated.');
})();

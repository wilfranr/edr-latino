const CACHE_NAME = 'elden-ring-companion-v1';
const assetsToCache = [
  '/',
  '/index.html',
  'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Roboto:wght@300;400&display=swap'
];

// Evento 'install': se dispara cuando el Service Worker se instala.
// Aquí precargamos los assets principales de la aplicación.
self.addEventListener('install', event => {
  console.log('SW: Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('SW: Abriendo caché y añadiendo assets');
        return cache.addAll(assetsToCache);
      })
      .then(() => {
        console.log('SW: Todos los assets han sido cacheados. Instalación completa.');
        self.skipWaiting(); // Forzar al SW a activarse inmediatamente
      })
  );
});

// Evento 'fetch': se dispara cada vez que la aplicación realiza una petición de red.
// Implementa la estrategia "Cache first, falling back to network".
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // Si la respuesta está en la caché, la devolvemos.
        if (cachedResponse) {
          return cachedResponse;
        }

        // Si no, vamos a la red.
        return fetch(event.request).then(
          networkResponse => {
            // Verificamos que la respuesta de red sea válida.
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic' && networkResponse.type !== 'cors') {
              return networkResponse;
            }

            // Clonamos la respuesta porque es un stream y solo se puede consumir una vez.
            // Una copia va a la caché y la original al navegador.
            const responseToCache = networkResponse.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return networkResponse;
          }
        );
      })
  );
});
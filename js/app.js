// Registrar el Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('✅ ServiceWorker registration successful with scope: ', registration.scope);
                // Verificar si el navegador soporta beforeinstallprompt
                window.addEventListener('beforeinstallprompt', (e) => {
                    // Evitar que Chrome 67 y anteriores muestren automáticamente el prompt
                    e.preventDefault();
                    // Guardar el evento para que pueda ser activado más tarde
                    window.deferredPrompt = e;
                    console.log('👍 beforeinstallprompt event fired');
                });
            })
            .catch(function(error) {
                console.error('❌ ServiceWorker registration failed: ', error);
            });
    });
}

// Función para mostrar el botón de instalación
function showInstallButton() {
    const installButton = document.getElementById('installButton');
    if (installButton) {
        installButton.style.display = 'block';
        installButton.addEventListener('click', addToHomeScreen);
    }
}

// Función para manejar la instalación
async function addToHomeScreen() {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        // El evento beforeinstallprompt no está disponible
        return;
    }
    
    // Mostrar el prompt de instalación
    promptEvent.prompt();
    
    // Esperar a que el usuario responda al prompt
    const { outcome } = await promptEvent.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    
    // Limpiar el prompt guardado ya que no puede usarse de nuevo
    window.deferredPrompt = null;
    
    // Ocultar el botón de instalación
    const installButton = document.getElementById('installButton');
    if (installButton) {
        installButton.style.display = 'none';
    }
}

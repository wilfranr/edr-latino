const CACHE_NAME = 'elden-ring-companion-v2.1';
const STATIC_CACHE = 'elden-ring-static-v2.1';
const DYNAMIC_CACHE = 'elden-ring-dynamic-v2.1';

const assetsToCache = [
  './',
  './index.html',
  './manifest.json',
  './sw.js',
  './data/bosses.json',
  './data/weapons_es.json',
  './data/items_es.json',
  './data/locations_es.json',
  './data/regions_difficulty_es.json',
  './data/missions_es.json',
  'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Roboto:wght@300;400&display=swap',
  'https://cdn.tailwindcss.com'
];

// Evento 'install': se dispara cuando el Service Worker se instala
self.addEventListener('install', event => {
  console.log('🔄 SW: Instalando Elden Ring Companion v2.1...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('📦 SW: Abriendo caché estático y añadiendo assets');
        return cache.addAll(assetsToCache);
      })
      .then(() => {
        console.log('✅ SW: Todos los assets han sido cacheados. Instalación completa.');
        self.skipWaiting(); // Forzar al SW a activarse inmediatamente
      })
      .catch(error => {
        console.error('❌ SW: Error durante la instalación:', error);
      })
  );
});

// Evento 'activate': se dispara cuando el Service Worker se activa
self.addEventListener('activate', event => {
  console.log('🚀 SW: Activando Elden Ring Companion...');
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            // Eliminar caches antiguos
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('🗑️ SW: Eliminando caché antiguo:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('✅ SW: Activación completa. Caches antiguos eliminados.');
        return self.clients.claim(); // Tomar control de todos los clientes
      })
  );
});

// Evento 'fetch': se dispara cada vez que la aplicación realiza una petición de red
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Estrategia para archivos de datos JSON
  if (request.url.includes('/data/') && request.url.endsWith('.json')) {
    event.respondWith(
      caches.open(DYNAMIC_CACHE)
        .then(cache => {
          return cache.match(request)
            .then(cachedResponse => {
              if (cachedResponse) {
                console.log('📁 SW: Datos JSON servidos desde caché:', url.pathname);
                return cachedResponse;
              }
              
              return fetch(request)
                .then(networkResponse => {
                  if (networkResponse.ok) {
                    const responseToCache = networkResponse.clone();
                    cache.put(request, responseToCache);
                    console.log('💾 SW: Datos JSON cacheados:', url.pathname);
                  }
                  return networkResponse;
                })
                .catch(error => {
                  console.error('❌ SW: Error al obtener datos JSON:', error);
                  // Devolver respuesta offline si está disponible
                  return caches.match('./data/offline-data.json');
                });
            });
        })
    );
    return;
  }

  // Estrategia para assets estáticos
  if (request.destination === 'style' || request.destination === 'script' || request.destination === 'image') {
    event.respondWith(
      caches.match(request)
        .then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
          
          return fetch(request)
            .then(networkResponse => {
              if (networkResponse.ok) {
                const responseToCache = networkResponse.clone();
                caches.open(STATIC_CACHE)
                  .then(cache => cache.put(request, responseToCache));
              }
              return networkResponse;
            });
        })
    );
    return;
  }

  // Estrategia para la página principal
  if (request.mode === 'navigate') {
    event.respondWith(
      caches.match('./index.html')
        .then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return fetch(request);
        })
    );
    return;
  }

  // Estrategia por defecto: Cache first, fallback to network
  event.respondWith(
    caches.match(request)
      .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        
        return fetch(request)
          .then(networkResponse => {
            if (networkResponse.ok) {
              const responseToCache = networkResponse.clone();
              caches.open(DYNAMIC_CACHE)
                .then(cache => cache.put(request, responseToCache));
            }
            return networkResponse;
          });
      })
  );
});

// Evento 'message': para comunicación con la aplicación principal
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: '2.1.0' });
  }
});

// Evento 'push': para notificaciones push (futuro)
self.addEventListener('push', event => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body || 'Nueva actualización disponible en Elden Ring Companion',
      icon: './icons/icon-192x192.png',
      badge: './icons/icon-72x72.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      },
      actions: [
        {
          action: 'explore',
          title: 'Ver',
          icon: './icons/icon-72x72.png'
        },
        {
          action: 'close',
          title: 'Cerrar',
          icon: './icons/icon-72x72.png'
        }
      ]
    };

    event.waitUntil(
      self.registration.showNotification('Elden Ring Companion', options)
    );
  }
});

// Evento 'notificationclick': para manejar clics en notificaciones
self.addEventListener('notificationclick', event => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('./')
    );
  }
});
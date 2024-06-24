// service-worker.js

const CACHE_NAME = 'your-app-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/about.html',
  '/contact.html',
  '/contact.html',
  '/custer.html',
  '/detail.html',
  '/feature.html',
  '/ITservices.html',
  '/student.html',
  '/services.html',
  '/div.html',
  '/mob.html',
  '/testimonial.html',
  '/styles/main.css',
  '/owl.carousel.css',
  '/owl.carousel.js',
  '/owl.carousel.min.css',
  '/owl.carousel.min.js',
  '/waypoints.min.js',
  '/feature.css',
  '/fix.css',
  '/style.css',
  '/style.min.css',
  '/Form.css',
  '/Form.Js',
  '/jquerry.Js',
  '/main.Js',
  'counterup.min.js',
  'easing.min.js',
  'easing.js',
  '/path/to/icon.png'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

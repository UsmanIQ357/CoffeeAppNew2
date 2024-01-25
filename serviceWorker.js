const myPWA = "my-pwa-aufgaben";
const assets = [
  "index.html",
  "css/style.css"
];

self.addEventListener("install", installEvent => {
   console.log('Service Worker installing.');
});

self.addEventListener('activate', event => {
  console.log('Service Worker installing.');
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});

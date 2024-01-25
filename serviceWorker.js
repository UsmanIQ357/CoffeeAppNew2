const myPWA = "my-pwa-aufgaben";
const assets = [
  "index.html",
  "css/style.css"
];

self.addEventListener("install", installEvent => {
   console.log('Service Worker installing.');
  installEvent.waitUntil(
    caches.open(myPWA).then(cache => {
      console.log('Opened cache');
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});

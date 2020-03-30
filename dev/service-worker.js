var cacheName = "js13kPWA-v1";
var appShellFiles = ["/fonts", "/live2d", "/media", "/img", "/fonts"];

var contentToCache = appShellFiles;

self.addEventListener("install", function(e) {
  console.log("[Service Worker] Install");
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log("[Service Worker] Caching all: app shell and content");
      return cache.addAll(contentToCache);
    })
  );
});

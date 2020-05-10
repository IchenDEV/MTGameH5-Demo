var cacheName = "js13kPWA-v1";
var appShellFiles = ["/fonts/OPPOSans-B.ttf", "/live2d/hijiki/moc/hijiki.moc", "/live2d/tororo/moc/tororo.moc","/media/backmusic.2148e91f", "/img"];

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

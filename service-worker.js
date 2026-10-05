const CACHE_NAME = "rang-social-v1";

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    self.clients.claim()
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return new Response(
        "لا يوجد اتصال بالإنترنت حاليًا.",
        {
          headers: {
            "Content-Type": "text/plain; charset=utf-8"
          }
        }
      );
    })
  );
});

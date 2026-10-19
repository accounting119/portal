/* انتقل التطبيق إلى https://siwar-sa.github.io/app/ — عامل الخدمة القديم يمسح نسخته ويترك الصفحة تحوّل للرابط الجديد. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

// خدعة المتصفح حتى يعتبر موقع بطولة دوائر خانقين تطبيق رسمي ويسمح بتثبيته
self.addEventListener('fetch', function(event) {
  // هذا الكود فارغ وميأثر على شي، بس يخلي المتصفح ينطينا الضوء الأخضر
});

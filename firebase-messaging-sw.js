importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyC05TqAcGRExjLwBqwwFLrjGA-t3jI0UdQ",
    authDomain: "kdcc-85139.firebaseapp.com",
    projectId: "kdcc-85139",
    messagingSenderId: "743548860238",
    appId: "1:743548860238:web:66b66fe49cf32da352101f"
});

const messaging = firebase.messaging();

// هذا الكود المسؤول عن استلام الإشعار والموقع مغلق
messaging.onBackgroundMessage(function(payload) {
    console.log('تم استلام إشعار في الخلفية: ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/logo.png' // يمكنك تغيير هذا لاسم صورة شعار البطولة إذا كانت موجودة
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});

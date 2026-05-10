// 1. استدعاء مكتبات فايربيس (يجب أن تكون نفس الإصدار 8.10.1 المستخدم في الموقع)
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// 2. إعدادات مشروعك (انسخ إعداداتك الخاصة من ملف index.html وضعها هنا)
const firebaseConfig = {
    apiKey: "AIzaSyC05TqAcGRExjLwBqwwFLrjGA-t3jI0UdQ",
    authDomain: "kdcc-85139.firebaseapp.com",
    databaseURL: "https://kdcc-85139-default-rtdb.firebaseio.com",
    projectId: "kdcc-85139",
    storageBucket: "kdcc-85139.appspot.com",
    messagingSenderId: "743548860238",
    appId: "ضع_رقم_الـ_appId_الخاص_بك_هنا" 
};

// 3. تهيئة فايربيس في الخلفية
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// 4. دالة استلام الإشعارات والموقع مغلق أو في الخلفية
messaging.onBackgroundMessage(function(payload) {
    console.log('تم استلام إشعار والموقع مغلق: ', payload);

    const notificationTitle = payload.notification.title || 'بطولة دوائر خانقين';
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://cdn-icons-png.flaticon.com/512/188/188864.png', // أيقونة كرة قدم (تقدر تغيرها لرابط لوجو البطولة)
        badge: 'https://cdn-icons-png.flaticon.com/512/188/188864.png',
        dir: 'rtl',
        vibrate: [200, 100, 200] // رجة للموبايل
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});

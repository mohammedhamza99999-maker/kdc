importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// إعدادات فايربيس الخاصة ببطولة دوائر خانقين
firebase.initializeApp({
  apiKey: "AIzaSyC05TqAcGRExjLwBqwwFLrjGA-t3jI0UdQ",
  authDomain: "kdcc-85139.firebaseapp.com",
  databaseURL: "https://kdcc-85139-default-rtdb.firebaseio.com",
  projectId: "kdcc-85139",
  storageBucket: "kdcc-85139.firebasestorage.app",
  messagingSenderId: "743548860238",
  appId: "1:743548860238:web:66b66fe49cf32da352101f"
});

const messaging = firebase.messaging();

// استلام الإشعارات لما يكون الموقع بالخلفية أو مغلق
messaging.onBackgroundMessage(function(payload) {
  console.log('تم استلام إشعار في الخلفية ', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || 'logo.png'
  };
  
  self.registration.showNotification(notificationTitle, notificationOptions);
});

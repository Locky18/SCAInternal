importScripts('https://www.gstatic.com/firebasejs/12.18.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.18.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBvT3l8qsRNa7rdo69DsQXF6HGrGUwnug0",
  authDomain: "sca-internal-6914b.firebaseapp.com",
  projectId: "sca-internal-6914b",
  storageBucket: "sca-internal-6914b.firebasestorage.app",
  messagingSenderId: "25201436536",
  appId: "1:25201436536:web:4cb7847a422ff3e6928a8d"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  var title = (payload.notification && payload.notification.title) || 'SCA Internal';
  var body = (payload.notification && payload.notification.body) || '';
  self.registration.showNotification(title, {
    body: body,
    icon: 'icon-192.png',
    badge: 'icon-192.png'
  });
});

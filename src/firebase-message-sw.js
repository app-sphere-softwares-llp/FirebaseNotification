importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyAFOfw6UIrrS__iSP0ExZDDv3Id0cUy0jM",
    authDomain: "fcm-integration-d1cba.firebaseapp.com",
    databaseURL: "https://fcm-integration-d1cba.firebaseio.com",
    projectId: "fcm-integration-d1cba",
    storageBucket: "fcm-integration-d1cba.appspot.com",
    messagingSenderId: "442089239408",
    appId: "1:442089239408:web:842c2151ab517e872395b5",
    measurementId: "G-B0N4V9BEPT"
});
const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function(payload) {
//     console.log('[firebase-messaging-sw.js] Received background message ', payload);
//     // Customize notification here
//     const notificationTitle = 'Message is active again';
//     const notify = new Notification(title, options);

//     notify.onclick = event => {
//       event.preventDefault();
//       window.location.href = 'http://www.youtube.com';
//     };
  
//     self.registration.showNotification(notificationTitle,
//       notify);
//   });
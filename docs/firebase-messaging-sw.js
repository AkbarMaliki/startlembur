// [START initialize_firebase_in_sw]
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.344034493973
// [START initialize_firebase_in_sw]
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.2//firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.2//firebase-messaging.js');
// Initialize the Firebase app in the service worker by passing in the messagingSenderId.
firebase.initializeApp({
    apiKey:  'AIzaSyC8xKXIBigP1_lVJS-RcyK6Oi6VsyAPJU4',
    authDomain: "btnjrs-bb5e5.firebaseapp.com",
    databaseURL: "https://btnjrs-bb5e5.firebaseio.com",
    projectId: "btnjrs-bb5e5",
    storageBucket: "btnjrs-bb5e5.appspot.com",
    messagingSenderId: "344034493973",
    appId: "1:344034493973:web:25c572d28157d066daf01c",
    measurementId: "G-NSB9BCZNCY"
});
// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();
// [END initialize_firebase_in_sw]
  messaging.setBackgroundMessageHandler(payload => {
    console.log(payload)
    // const notification = JSON.parse(payload.data.notification);
    const notificationTitle = payload.data.title;
    const notificationOptions = {
      body: payload.data.body
    };
    //Show the notification :)
    return self.registration.showNotification(
      notificationTitle,
      notificationOptions
    );
  });
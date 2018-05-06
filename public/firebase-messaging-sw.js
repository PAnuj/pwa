importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-messaging.js');

var config = {
    apiKey: "AIzaSyBLHOmNySe5OKFIDV9Caz2874AbciNxb3o",
    authDomain: "awesome-apps-7e91e.firebaseapp.com",
    databaseURL: "https://awesome-apps-7e91e.firebaseio.com",
    projectId: "awesome-apps-7e91e",
    storageBucket: "awesome-apps-7e91e.appspot.com",
    messagingSenderId: "716143060371"
};

firebase.initializeApp(config);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
 const title = 'Hello World';
 const options = {
  body: payload.data.body
 };
 return self.registration.showNotification(title, options);
});
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA69pOzVXkYBkXFi5FSO_PTYVhDr-9f2FE",
    authDomain: "chat-983cd.firebaseapp.com",
    databaseURL: "https://chat-983cd.firebaseio.com",
    projectId: "chat-983cd",
    storageBucket: "chat-983cd.appspot.com",
    messagingSenderId: "903296061521"
  };
  firebase.initializeApp(config);
  //agregamos la instancia de la BD 
  const database= firebase.database();
  
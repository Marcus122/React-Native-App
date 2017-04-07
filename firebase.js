import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAKh4AUIZokqBfYAfHgowcZxTYODS4g2x0",
    authDomain: "my-project-9c79b.firebaseapp.com",
    databaseURL: "https://my-project-9c79b.firebaseio.com",
    projectId: "my-project-9c79b",
    storageBucket: "my-project-9c79b.appspot.com",
    messagingSenderId: "1096334607986"
  };
firebase.initializeApp(config);

export default firebase;
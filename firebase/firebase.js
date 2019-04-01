import * as firebase from "firebase";

//1ere projet = development database
const devConfig = {
    apiKey: "AIzaSyC4l1ODnl1dhTlUN5zT8ZbcjTuKX43A8-",
    authDomain: "ldapptest-34664.firebaseapp.com",
    databaseURL: "https://ldapptest-34664.firebaseio.com",
    projectId: "ldapptest-34664",
    storageBucket: "ldapptest-34664.appspot.com",
    messagingSenderId: "983554343988"
}

//2eme projet = production database
const pr0odConfig = {
    apiKey: "AIzaSyBYzBRkKSZT3w7dh5bv9KSy7JuwA714oXk",
    authDomain: "ldapp-4878a.firebaseapp.com",
    databaseURL: "https://ldapp-4878a.firebaseio.com",
    projectId: "ldapp-4878a",
    storageBucket: "",
    messagingSenderId: "844278515788"
}

//definie config soit dev soit prod (suivant c'est if else)
const config = process.env.NODE_ENV === "production"
    ? prodConfig
    : devConfig;

if(!firebase.apps.length){
    firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
    db,
    auth,
};

import * as firebase from "firebase";

//1ere projet = development database
const devConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
}

//2eme projet = production database
const pr0odConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
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

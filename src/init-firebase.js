import * as firebase from "firebase/app";
import "firebase/database";
import axios from 'axios';


const firebaseConfig = {
    apiKey: "AIzaSyC0plVicSA_GKIQ00b7vRXlSRbyY24CxTs",
    authDomain: "teststore-c10b9.firebaseapp.com",
    databaseURL: "https://teststore-c10b9.firebaseio.com",
    projectId: "teststore-c10b9",
    storageBucket: "teststore-c10b9.appspot.com",
    messagingSenderId: "163689727495",
    appId: "1:163689727495:web:a994730bb2106a3c9f8ca2",
    measurementId: "G-K3C2NR8CRW"
};
firebase.initializeApp(firebaseConfig);

const instance = axios.create({
    baseURL: firebaseConfig.databaseURL
})

export default instance;
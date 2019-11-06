import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDH4NbU4AOMA4u9gb8LqsqU7neuSavR1_U",
    authDomain: "teststore-bc80e.firebaseapp.com",
    databaseURL: "https://teststore-bc80e.firebaseio.com",
    projectId: "teststore-bc80e",
    storageBucket: "teststore-bc80e.appspot.com",
    messagingSenderId: "402777156139",
    appId: "1:402777156139:web:b13ae3da9c4cdbd59c586e",
    measurementId: "G-67XJ08373J"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

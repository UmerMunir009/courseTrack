// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth,getReactNativePersistance } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS05wT3ypKptdndmv2baMkQsgkZHHVwT4",
  authDomain: "coursetrackapp.firebaseapp.com",
  projectId: "coursetrackapp",
  storageBucket: "coursetrackapp.firebasestorage.app",
  messagingSenderId: "446929287332",
  appId: "1:446929287332:web:291f14363af84054aece31",
  measurementId: "G-7MBJNN15F3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//required storage for authentication (check whether you are authenticated or not)
const auth=initializeAuth(app,{
    persistence:getReactNativePersistance(ReactNativeAsyncStorage)
})
const analytics = getAnalytics(app);
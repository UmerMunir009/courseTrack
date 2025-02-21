import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS05wT3ypKptdndmv2baMkQsgkZHHVwT4",
  authDomain: "coursetrackapp.firebaseapp.com",
  projectId: "coursetrackapp",
  storageBucket: "coursetrackapp.appspot.com",
  messagingSenderId: "446929287332",
  appId: "1:446929287332:web:291f14363af84054aece31",
  measurementId: "G-7MBJNN15F3",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Initialize Auth with AsyncStorage persistence
const auth = getApps().length
  ? getAuth()
  : initializeAuth(app, {
      persistence: getReactNativePersistence(ReactNativeAsyncStorage),
    });

// Initialize Firestore
export const db = getFirestore(app);
export { auth };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.Api_Key,
  authDomain: import.meta.env.Auth_Domain,
  projectId: import.meta.env.Project_Id,
  storageBucket: import.meta.env.Storage_Bucket,
  messagingSenderId: import.meta.env.Messaging_Sender_Id,
  appId: import.meta.env.App_Id
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
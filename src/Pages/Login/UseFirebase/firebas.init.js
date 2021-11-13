import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config.";


const firebaseInitailizeAuthentication = () =>{
    initializeApp(firebaseConfig);
}

export default firebaseInitailizeAuthentication
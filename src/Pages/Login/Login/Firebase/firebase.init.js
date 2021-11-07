import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.confiq";

const initializeFirebase=()=>{
    initializeApp(firebaseConfig);

}
export default initializeFirebase;
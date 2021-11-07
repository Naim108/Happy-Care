import initializeFirebase from "../Pages/Login/Login/Firebase/firebase.init"
import {useState,useEffect} from 'react'
import { getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged,
  GoogleAuthProvider, signInWithEmailAndPassword,signInWithPopup,updateProfile} from "firebase/auth";

initializeFirebase()
const useFirebase=()=>{
    const [user, setUser] = useState({});
    const [isLoading,setIsLoading]=useState(true);
    const [authError,setAuthError]=useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const registerUser = (email, password, name, history) => {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              setAuthError('');
              const newUser = { email, displayName: name };
              setUser(newUser);
              // send name to firebase after creation
              updateProfile(auth.currentUser, {
                  displayName: name
              }).then(() => {
              }).catch((error) => {
              });
              history.replace('/');
          })
          .catch((error) => {
              setAuthError(error.message);
              console.log(error);
          })
          .finally(() => setIsLoading(false));
  }
    const signInWithGoogle=()=>{
      signInWithPopup(auth, googleProvider)
  .then((result) => {
    const user = result.user;
    setAuthError('')
    
  }).catch((error) => {
    setAuthError(error.message)
  });

    }

    const loginUser=(email,password,location,history)=>{
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => { 
    const destination=location.state.from || '/'
    history.replace(destination)
    setAuthError('')
  })
  .catch((error) => {
    setAuthError(error.message)
  });
    }
    useEffect(()=>{
        const unsubcribe=onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user)
            } else {
              setUser({})
            }
            setIsLoading(false)
          });
          return ()=>unsubcribe;

    },[])
    const logout=()=>{
      setIsLoading(true)
        signOut(auth).then(() => {
         
          }).catch((error) => {
           
          })
          .finally(()=>setIsLoading(false))
    }


    return{
        user,
        isLoading,
        authError,
        signInWithGoogle,
        registerUser,
        loginUser,
        logout
    }

}

export default useFirebase;
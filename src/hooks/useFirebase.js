import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider,updateProfile, getIdToken } from "firebase/auth";
import firebaseInitailizeAuthentication from '../Pages/Login/UseFirebase/firebas.init'


firebaseInitailizeAuthentication()

const useFirebase = () =>{
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [admin, setAdmin] = useState(false)
    const [token, setToken] = useState('')
    const auth = getAuth();
    
    const googleProvider = new GoogleAuthProvider();
    
    //CREATE REGISTER 

    const registerUser = (email, password, name, location, history) =>{
        setIsLoading(true)
        
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const newUser ={email, displayName: name, password}
            setUser(newUser)
            saveUserInDatabse(email, name, password, "POST")
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
              }).catch((error) => {
              });
              
            const destination = location?.state?.from || '/'
                history.replace(destination)
        })
        .catch((error) => {
            setError(error.message)
        })
        .finally(()=>setIsLoading(false));
    }


    
    //SING IN USER
    
    const signInUser = (email, password, location, history) => {       
        setIsLoading(true)
        
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
                const destination = location?.state?.from || '/'
                history.replace(destination)
                setError('')
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(()=>setIsLoading(false));
        }


        
        // SIGN IN WITH GOOGLE USER
        
        const signInWithGoogle = (location, history) =>{
            setIsLoading(true)
            signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user
            saveUserInDatabse(user.email, user.displayName, user.password, 'PUT')
            const destination = location?.state?.from || '/home'
            history.replace(destination)
            setError('')
        }).catch((error) => {
            setError(error.message)
        }).finally(()=>setIsLoading(false));

    }



    //MANAGER USER

    useEffect(()=>{
     const unSubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                .then(idToken => {
                    setToken(idToken)
                })
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unSubscribed

    },[auth])



    useEffect(()=>{
        fetch(`https://shielded-waters-42294.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    },[user.email])



    //SIGN OUT

    const logOut = () =>{
        setIsLoading(true)
        signOut(auth).then(() => {
        }).catch((error) => {
            setError(error.message)
        })
        .finally(()=>setIsLoading(false))
    }

    const saveUserInDatabse = (email, displayName, password, method) =>{
            const user = {email, displayName, password}
            fetch("https://shielded-waters-42294.herokuapp.com/users", {
                method: method,
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then()
    }
    
      return{
        user,
        error,
        isLoading,
        admin,
        token,
        registerUser,
        saveUserInDatabse,
        signInUser,
        signInWithGoogle,
        logOut
      }
}


export default useFirebase;
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // register
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // we used useState,Effect to state change for getting current user.
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('user in state change', currentUser);
        })
        return () => { unsubscribe() };
    }, [])

    // sign In 
    const singIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //sign out
    const logOut = () => {
        return signOut(auth);
    }

    // set context value 
    const authInfo = {
        user,
        createUser,
        singIn,
        logOut,
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
/**
 * Note: we use context api to access any value/props from context component(AuthProvider) to any where(children)
 * 1 >> create Context
 * 2 >> context provider
 * 3 >> set value
 * 4 >> use Context to other component.
 * **/

/**
 * Note: The recommended way to get the current user
 * >> onAuthStateChanged()
 * >> return () => { unsubscribe() }; used for clean previous user and call current new user autometically(call back fn)
 * 
 * **/
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCYA_xJ-Qy79xzlO96Lq8AgsGEPtnE1cWk",
    authDomain: "ecommerce-clothingdb-1e9ef.firebaseapp.com",
    projectId: "ecommerce-clothingdb-1e9ef",
    storageBucket: "ecommerce-clothingdb-1e9ef.appspot.com",
    messagingSenderId: "411790383554",
    appId: "1:411790383554:web:3b4df1c1e50ba9eee31e5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userData = await getDoc(userDocRef);

    if(!userData.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch(error) {
            console.log("Error message", error.message);
        }
    }

    return userDocRef;
}
import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";


const SignIn = () => {

    const logGoogleUsers = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };
    return (
        <div>
            <h1> SIGN IN </h1>
            <button onClick={logGoogleUsers}>
                Sign in with Google popup
            </button>
        </div>
    )
}

export default SignIn;
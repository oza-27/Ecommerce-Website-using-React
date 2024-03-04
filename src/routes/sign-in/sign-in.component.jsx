import SignUp from "../../components/sign-up-form/sign-up-form.component";
import {
    createUserDocumentFromAuth,
    signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";



const SignIn = () => {
    const logGoogleUsers = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(userDocRef);
    };
    return (
        <div>
            <h1> SIGN IN </h1>
            <button onClick={logGoogleUsers}>
                Sign in with Google popup
            </button>
            <SignUp />
        </div>
    )
}

export default SignIn;
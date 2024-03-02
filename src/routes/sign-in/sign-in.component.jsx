import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";


const SignIn = () => {

    const logGoogleUsers = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    }
    return (
        <div>
            <h1> Sign In </h1>
            <button onClick={logGoogleUsers}>
                Sign in with Google popup
            </button>
        </div>
    )
}

export default SignIn;
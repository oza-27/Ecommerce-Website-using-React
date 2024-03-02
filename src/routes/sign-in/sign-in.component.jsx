import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";


const SignIn = () => {

    const logGoogleUsers = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    }
    return (
        <div>
<<<<<<< HEAD
            <h1> Sign In </h1>
            <button onClick={logGoogleUsers}>
                Sign in with Google popup
            </button>
=======
            <h1> SIGN IN </h1>
>>>>>>> b2951de615735f42302f340123d763cff06a95e1
        </div>
    )
}

export default SignIn;
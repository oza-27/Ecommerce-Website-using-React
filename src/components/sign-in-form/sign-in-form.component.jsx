import { useState } from "react";
import { createUserDocumentFromAuth, signInAuthWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss';
import ButtonComponent, { buttonTypeClasses } from "../button/button.component";


const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const resetFormFields = () => {
        setFormFields(defaultFormFields);

    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await signInAuthWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (error) {
           console.log("User sign in failed", error);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <div className="sign-up-container">
            <h2> Already have an account? </h2>
            <span> Sign in with your email and Password </span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email} />

                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password} />
                <div className="buttons-container">
                    <ButtonComponent type="submit"> Sign In </ButtonComponent>
                    <ButtonComponent
                        type="button"
                        buttonType={buttonTypeClasses.google}
                        onClick={signInWithGoogle}>
                        Google Sign in
                    </ButtonComponent>
                </div>
            </form>
        </div>
    );
}

export default SignInForm;
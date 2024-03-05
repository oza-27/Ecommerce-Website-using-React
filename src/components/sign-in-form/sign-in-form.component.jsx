import { useState } from "react";
import { createUserDocumentFromAuth, signInAuthWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss';
import ButtonComponent from "../button/button.component";


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
        const { user } = await signInWithGooglePopup();
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert("Incorrect Password:/");
                    break
                case 'auth/user-not-found':
                    alert("Nop user associated with this email");
                    break
                default:
                    console.log(error);
            }
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
                    <ButtonComponent type="button" buttonType='google' onClick={signInWithGoogle}> Google Sign in </ButtonComponent>
                </div>
            </form>
        </div>
    );
}

export default SignInForm;
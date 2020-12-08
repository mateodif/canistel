import * as React from "react";
import SignUpForm from "../utils/SignUpForm";
interface ISignUpProps { }

const SignUp: React.FC<ISignUpProps> = props => {
    return (
        <SignUpForm />
    )
}

export default SignUp;
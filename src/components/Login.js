import { useState } from "react";
import Header from "./Header";


const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)

    const handleForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header />
            <div className="absolute bg-opacity-0">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_large.jpg"
            alt="bg-logo" />
            </div>
            <form className="absolute p-14 my-48 bg-opacity-80 bg-black w-3/12 left-0 mx-auto right-0">
            <p className="font-bold text-3xl text-white">{isSignInForm ? "Sign In" : "Sign Up"}</p>
                <input className="w-full p-2 m-2 bg-gray-500 bg-opacity-70" type="email" placeholder="example@gmail.com" />
                <input className="w-full p-2 m-2 bg-gray-500 bg-opacity-70" type="password" placeholder="password" />
                <button className="w-full p-2 m-2 bg-red-700" >{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="p-2 m-2 text-white cursor-pointer hover:underline" onClick={handleForm}>{isSignInForm ? "New to Netflix? Sign up now." : "Already Registered Sign In"}</p>
            </form>
            
        </div>
    )
};

export default Login;

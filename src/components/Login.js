import { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMAGE } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    const message = validate(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) {
      return;
    }

    setIsLoading(true);

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/161620558?v=4",
          })
            .then(() => {
              const { uid, displayName, email, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, displayName, email, photoURL }));
            })
            .catch((error) => {
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
        
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          const { uid, displayName, email, photoURL } = user;
          
          dispatch(addUser({ uid, displayName, email, photoURL }));
          setIsLoading(false);
          
        })
        .catch((error) => {
            setIsLoading(false);
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const handleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-screen md:h-auto object-cover"
          src={BG_IMAGE}
          alt="bg-logo"
        />
      </div>
      <form
        onSubmit={(event) => event.preventDefault()}
        className="absolute p-14 my-48 bg-opacity-80 bg-black w-11/12 md:w-3/12 left-0 mx-auto right-0 rounded-lg"
      >
        <p className="p-2 m-2 font-bold text-3xl text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </p>
        {!isSignInForm && (
          <input
            ref={name}
            className="w-full p-2 m-2 bg-gray-500 bg-opacity-70 text-white"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="w-full p-2 m-2 bg-gray-500 bg-opacity-70 text-white"
          type="email"
          placeholder="example@gmail.com"
        />
        <input
          ref={password}
          className="w-full p-2 m-2 bg-gray-500 bg-opacity-70 text-white"
          type="password"
          placeholder="password"
        />
        <p className="text-red-600 font-bold p-2">{errorMessage}</p>
        <button
          className="w-full p-2 m-2 bg-red-700 rounded-lg"
          onClick={handleButtonClick}
        >
            {
                isLoading && "Submitting Please wait ..."
            }
            {
                !isLoading && (
                    <>
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </>
                )
            }
        </button>
        <p
          className="p-2 m-2 text-white cursor-pointer hover:underline"
          onClick={handleForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already Registered Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;

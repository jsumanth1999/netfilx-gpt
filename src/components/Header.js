import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  console.log(user);
  const navigate = useNavigate();

  useEffect(() => {
   const unsubscribe  = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(addUser({ uid, displayName, email, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-44"
          src={LOGO}
          alt="logo"
        />
        {user && (
          <div className="flex">
            <p className="m-3 py-3 text-center text-white">{user.displayName}</p>
            <button className="bg-red-500 text-white p-2 m-2" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        )}
      </div>
  );
};

export default Header;

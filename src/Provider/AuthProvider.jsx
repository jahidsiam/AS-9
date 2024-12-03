import { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/Firebase.config";

export const Authcontext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const Gitprovider = new GithubAuthProvider();

  const singInUserByGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const singInUserByGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, Gitprovider);
  };

  const creatNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (displayName, photoURL) => {
    setLoading(true);

    const profileData = {};
    if (displayName) {
      profileData.displayName = displayName;
    }
    if (photoURL) {
      profileData.photoURL = photoURL;
    }
    return updateProfile(auth.currentUser, profileData)
      .then(() => {
        console.log("User profile updated successfully");
      })
      .catch((error) => {
        console.error("Error updating user profile:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signOutUser = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      },
      (error) => {
        console.error("Authentication error:", error);
        setLoading(false);
      }
    );

    return unsubscribe; // Return the unsubscribe function for cleanup
  }, []);

  const authinfo = {
    creatNewUser,
    signInUser,
    user,
    loading,
    signOutUser,
    setLoading,
    updateUserProfile,
    singInUserByGoogle,
    singInUserByGithub,
  };
  return (
    <>
      <Authcontext.Provider value={authinfo}>{children}</Authcontext.Provider>
    </>
  );
};

export default AuthProvider;

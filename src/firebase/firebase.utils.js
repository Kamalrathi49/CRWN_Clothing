import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB0zIwxVckWGF-3dNSIJF_aY4C55kN60eg",
  authDomain: "crwn-db-1b9bb.firebaseapp.com",
  projectId: "crwn-db-1b9bb",
  storageBucket: "crwn-db-1b9bb.appspot.com",
  messagingSenderId: "56757117573",
  appId: "1:56757117573:web:be771fdb17ae7cdc5fffec",
  measurementId: "G-0W63DJ17G7",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email, additionalData } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

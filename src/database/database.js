import {
  getDocs,
  addDoc,
  collection,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export async function addDataToFirebase(collectionName, data) {
  try {
    await addDoc(collection(db, collectionName), data);
    return true;
  } catch (err) {
    return err;
  }
}

export async function fetchDataFromFirebase(collectionName) {
  let emails;
  await getDocs(collection(db, collectionName)).then((querySnapshot) => {
    emails = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  });

  return emails;
}

export async function deleteMailFromFirebase(collectionName, id) {
  await deleteDoc(doc(db, collectionName, id));
  console.log("Doc deleted");
}

export async function logIn() {
  let user;
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider)
    .then((res) => {
      user = res.user;
    })
    .catch((err) => {
      return err.message;
    });
  return user;
}

export async function logOut() {
  const auth = getAuth();
  signOut(auth);
}

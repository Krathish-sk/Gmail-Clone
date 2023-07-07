import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDctQJtCwW_vVKLOMntnwiDX78BxdHrw1Y",
  authDomain: "clone-cfaf3.firebaseapp.com",
  projectId: "clone-cfaf3",
  storageBucket: "clone-cfaf3.appspot.com",
  messagingSenderId: "656006252741",
  appId: "1:656006252741:web:36e990c5aaa9cd1fafc8ac",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

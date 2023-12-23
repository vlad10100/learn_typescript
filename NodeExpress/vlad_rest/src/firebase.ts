import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const credentials = require("../src/credentials.json");

const app = initializeApp({
  credential: cert(credentials),
});
const db = getFirestore(app);
const categories = db.collection("category");

export { categories };

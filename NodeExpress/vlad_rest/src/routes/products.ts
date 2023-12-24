import express from "express";
import { db } from "../firebase";
import {
  getDocs,
  getDoc,
  doc,
  addDoc,
  collection,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const productRoute = express.Router({ mergeParams: true });

/**
 * Get category products
 */
productRoute.get("/", async (req: express.Request, res) => {
  const { id } = req.params;
  const categoryDocRef = doc(db, "category", id);
  const productRef = collection(categoryDocRef, "products");
  const data = await getDocs(productRef);
  const resp = data.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  res.status(200).json(resp);
});

/**
 * Get product by ID
 */
productRoute.get("/:product_id", async (req: express.Request, res) => {
  const { product_id, id } = req.params;
  const categoryDocRef = doc(db, "category", id);
  const productRef = collection(categoryDocRef, "products");
  const productDoc = doc(productRef, product_id);
  const data = await getDoc(productDoc);
  res.status(200).json(data.data());
});

/**
 * Add a product
 */
productRoute.post("/", async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const categoryDocRef = doc(db, "category", id);
  const productRef = collection(categoryDocRef, "products");
  const payload = {
    name: "Product ni Vlad 1",
  };
  await addDoc(productRef, payload);
  res.status(200).json("Created a Product");
});

/**
 * Update a product
 */
productRoute.put(
  "/:product_id",
  async (req: express.Request, res: express.Response) => {
    const { id, product_id } = req.params;
    const categoryDocRef = doc(db, "category", id);
    const productRef = collection(categoryDocRef, "products");
    const productDoc = doc(productRef, product_id);
    const payload = {
      name: "Product ni Vlad updated",
    };
    await updateDoc(productDoc, payload);
    res.status(200).json("updated a Product");
  }
);

/**
 * Delete a product
 */
productRoute.delete(
  "/:product_id",
  async (req: express.Request, res: express.Response) => {
    const { id, product_id } = req.params;
    const categoryDocRef = doc(db, "category", id);
    const productRef = collection(categoryDocRef, "products");
    const productDoc = doc(productRef, product_id);

    await deleteDoc(productDoc);
    res.status(200).json("deleted a Product");
  }
);

export { productRoute };

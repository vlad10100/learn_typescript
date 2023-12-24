import express from "express";
import { db } from "../firebase";
import {
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  collection,
} from "firebase/firestore";

import { productRoute } from "./products";
const categoryRoute = express.Router({ mergeParams: true });
const categoryRef = collection(db, "category");

/**
 * Get all categories
 */
categoryRoute.get("/", async (req, res) => {
  const data = await getDocs(categoryRef);
  const resp = data.docs.map((item) => ({
    id: item.id,
    ...item.data(),
  }));
  res.status(200).json(resp);
});

/**
 * Get category by Id
 */
categoryRoute.get("/:id", async (req, res) => {
  const { id } = req.params;
  const docRef = doc(db, "category", id);
  const data = await getDoc(docRef);

  res.status(200).json({
    id: data.id,
    ...data.data(),
  });
});

/**
 * Add a category
 */
categoryRoute.post("/", async (req, res) => {
  const payload = {
    name: "category 123",
  };
  const v = await addDoc(categoryRef, payload);
  res.status(200).json("CREATE a CATEGORY");
});

/**
 * Update a Category
 */
categoryRoute.put("/:id", async (req, res) => {
  const { id } = req.params;
  const docRef = doc(db, "category", id);
  const payload = {
    name: "edamame123",
  };
  await updateDoc(docRef, payload);
  res.status(200).json("Updated a Category");
});

/**
 * Delete a Category
 */
categoryRoute.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const docRef = doc(db, "category", id);
  await deleteDoc(docRef);
  res.status(200).json("Updated a Category");
});

/**
 * Products
 */
categoryRoute.use("/:id/products", productRoute);

export { categoryRoute };

import express from "express";
import { categories } from "../firebase";

const categoryRoute = express.Router({ mergeParams: true });

categoryRoute.get("/", async (req, res) => {
  const data = await categories.get();
  const resp = data.docs.map((item) => ({
    id: item.id,
    ...item.data(),
  }));
  res.status(200).json(resp);
});

categoryRoute.get("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await categories.doc(id).get();
  const resp = data.data();
  res.status(200).json({ id, ...resp });
});

categoryRoute.post("/", async (req, res) => {
  const payload = {
    name: "category C",
  };
  const category = categories.doc("random id");
  const v = await category.set(payload);

  res.status(200).json("CREATE a CATEGORY");
});

export default categoryRoute;

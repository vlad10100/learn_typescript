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
  const query = categories.where("id", "==", id);
  const resp = await query.get();
  console.log(resp.docs);
  res.status(200).json(`GET CATEGORY: ${id}`);
});

categoryRoute.post("/", (req, res) => {
  res.status(200).json("CREATE a CATEGORY");
});

export default categoryRoute;

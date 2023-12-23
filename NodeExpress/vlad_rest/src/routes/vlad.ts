import express from "express";

const vladRoute = express.Router({ mergeParams: true });

vladRoute.get("/get-request/:id/:name", async (req, res) => {
  const { id, name } = req.params;
  console.log(id, name);
  console.log(req.path);
  res.status(200).json("HELLO WORLD");
});

export { vladRoute };

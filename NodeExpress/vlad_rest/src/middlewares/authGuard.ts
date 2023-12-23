import express from "express";

export const authGuard = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  // Do the logic
  const result: boolean = true;
  if (!result) return res.status(403).json("403 Forbidden");

  return next();
};

import express from "express";
import { get, identity, merge } from "lodash";

import { getUserBySessionToken, getUserById } from "../db/users";

export const isAuthenticated = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const sessionToken = req.cookies["VLAD-AUTH"];

    if (!sessionToken) res.sendStatus(403);

    const existingUser = await getUserBySessionToken(sessionToken);

    if (!existingUser) return res.sendStatus(403);

    merge(req, { identity: existingUser });
    return next();
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

export const isOwner = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const { id } = req.params;
    const currentUserId: string | unknown = get(req, "identity._id");
    if (!currentUserId) return res.sendStatus(400);
    if (currentUserId.toString() !== id) return res.sendStatus(403);
    next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

import { NextFunction, Request, Response } from "express";

export const list = (req: Request, res: Response, next: NextFunction) => {
  res.send(req.body);
};

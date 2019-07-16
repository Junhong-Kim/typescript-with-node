import { NextFunction, Request, Response } from "express";

export function list(req: Request, res: Response, next: NextFunction) {
  res.send(req.body);
}

import { Request, Response, NextFunction } from 'express'

export const list = (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello World!')
}

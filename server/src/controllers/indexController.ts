import {Request, Response} from 'express';

class IndexController {
  public index(req: Request, res: Response) {
    res.send('Hello XXX')
  }
}

export const indexController = new IndexController();

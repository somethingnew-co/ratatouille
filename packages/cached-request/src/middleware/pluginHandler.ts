import { BaseCache } from '../cache';
import { Request, Response, NextFunction } from 'express';

type PluginHandler = (cache: BaseCache, handler: any) => (req: Request, res: Response, next: NextFunction) => Promise<any>;

const pluginHandler: PluginHandler = (cache: BaseCache, handler: any) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const value = await handler(req);
    if (!value) {
      next();
    }
    return res.send(value);
  };

export default pluginHandler;


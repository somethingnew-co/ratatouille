import { Router, Request, Response, NextFunction } from 'express';
import { BaseCache, LRUCache, RedisCache } from './cache';
import { pluginHandler } from './middleware';


interface Endpoint {
  route: string;
  handler(req: Request, res: Response, next: NextFunction): Promise<any>;
}

interface Config {
  cache?: string;
  endpoints?: Endpoint[];
}


class CachedRequest {
  config: Config;
  cache: BaseCache;
  handler: Router;

  constructor(config: Config = {}) {
    this.config = config;
    this.cache = this.createCache(config.cache || 'memory');
    this.handler = Router(); // eslint-disable-line new-cap
    this.addEndpoints(config.endpoints || []);
  }

  /**
   * Creates an instance of the chosen cache type.
   * Defaults to in-memory cache. Throws error in case chosen cache isn't implemented.
   *
   * @param {string=} cache -  Cache type, i.e. 'memory' or 'redis://{*}' url.
   * @return {BaseCache} An instance of the selected cache that extends the BaseCache class.
   */
  createCache(cache: string): BaseCache {
    if (!cache || cache === 'memory') {
      return new LRUCache();
    }

    if (cache.startsWith('redis:')) {
      return new RedisCache(cache);
    }

    throw new Error(`Cache type ${cache} not implemented`);
  }

  /**
   * Add plugin middlewares to the router.
   *
   * @param {endpoints=} Endpoint[] -  An array of Endpoint objects, that contain handlers.
   */
  addEndpoints(endpoints: Endpoint[]): void {
    if (!endpoints) {
      return;
    }

    endpoints.forEach((endpoint: Endpoint) => {
      this.handler.use(`${endpoint.route}`, pluginHandler(this.cache, endpoint.handler));
    });
  }

}

export default CachedRequest;

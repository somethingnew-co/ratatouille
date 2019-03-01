import { createClient as createContentful } from 'contentful';
import { createClient as createRedis } from 'redis';

class ContentfulProxy {
  constructor (config) {
    this.contentful = createContentful({
      space: config.space,
      accessToken: config.accessToken,
      host: config.host || 'cdn.contentful.com',
    });
    this.redis = createRedis(config.redisUrl);
  }

  destroy() {
    this.redis.quit(); 
  }

  getRequestHandler() {
    return (req, res) => {
      res.send('hello world');
    }
  }
};

export default ContentfulProxy;

import { promisify } from 'util';
import redis, { RedisClient } from 'redis';
import BaseCache from './base';

class RedisCache extends BaseCache {
  client: RedisClient;
  getAsync: any;
  existsAsync: any;

  constructor(url: string) {
    super('redis');
    this.client = redis.createClient(url);
    this.getAsync = promisify(this.client.get).bind(this.client);
    this.existsAsync = promisify(this.client.exists).bind(this.client);
  }

  del(key: string): void {
    this.client.del(key);
  }

  flushAll(): void {
    this.client.flushall();
  }

  async get(key: string): Promise<string | undefined | null> {
    return this.getAsync(key);
  }

  async has(key: string): Promise<boolean> {
    return this.existsAsync(key).then((result: boolean) => !!result);
  }

  set(key: string, value: string): void {
    this.client.set(key, value);
  }
}

export default RedisCache;

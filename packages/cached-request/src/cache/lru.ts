import LRU from 'lru-cache';
import BaseCache from './base';


class LRUCache extends BaseCache {
  cache: LRU<string, string>;

  constructor() {
    super('memory');
    const options = {
      max: 500,
      maxAge: 1000 * 60 * 60,
    };
    this.cache = new LRU(options);
  }

  del(key: string): void {
    this.cache.del(key);
  }

  flushAll(): void {
    this.cache.reset();
  }

  async get(key: string): Promise<string | undefined | null> {
    return this.cache.get(key);
  }

  async has(key: string): Promise<boolean> {
    return this.cache.has(key);
  }

  set(key: string, value: string): void {
    this.cache.set(key, value);
  }

}

export default LRUCache;

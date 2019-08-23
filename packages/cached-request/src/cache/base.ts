abstract class BaseCache {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract del(key: string): void;
  abstract flushAll(): void;
  abstract async get(key: string): Promise<string | undefined | null>;
  abstract async has(key: string): Promise<boolean>;
  abstract set(key: string, value: string): void;
}

export default BaseCache;

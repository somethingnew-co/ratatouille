import RedisCache from './redis';
import redis from 'redis';
import redisMock from 'redis-mock';

jest.spyOn(redis, 'createClient').mockImplementation(redisMock.createClient);

const cache = new RedisCache('redis://somedomain:1234');

describe('RedisCache', () => {
  beforeEach(() => {
    cache.flushAll();
  });

  test('set and get value', async () => {
    const before = await cache.get('keyA');
    cache.set('keyA', 'valueA');
    const after = await cache.get('keyA');
    expect(before).toEqual(null);
    expect(after).toEqual('valueA');
  });

  test('delete specific key', async () => {
    cache.set('keyA', 'valueA');
    cache.set('keyB', 'valueB');
    const beforeA = await cache.get('keyA');
    const beforeB = await cache.get('keyB');
    cache.del('keyA');
    const afterA = await cache.get('keyA');
    const afterB = await cache.get('keyB');

    expect(beforeA).toEqual('valueA');
    expect(beforeB).toEqual('valueB');
    expect(afterA).toEqual(null);
    expect(afterB).toEqual('valueB');
  });

  test('flush all', async () => {
    cache.set('keyA', 'valueA');
    cache.set('keyB', 'valueB');
    const beforeA = await cache.get('keyA');
    const beforeB = await cache.get('keyB');
    cache.flushAll();
    const afterA = await cache.get('keyA');
    const afterB = await cache.get('keyB');

    expect(beforeA).toEqual('valueA');
    expect(beforeB).toEqual('valueB');
    expect(afterA).toEqual(null);
    expect(afterB).toEqual(null);
  });


  test('has key', async () => {
    const before = await cache.has('keyA');
    cache.set('keyA', 'valueA');
    const after = await cache.has('keyA');

    expect(before).toEqual(false);
    expect(after).toEqual(true);
  });
});

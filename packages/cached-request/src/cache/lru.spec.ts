import LRUCache from './lru';

const cache = new LRUCache();

describe('LRUCache', () => {
  beforeEach(() => {
    cache.flushAll();
  });

  test('set and get value', async () => {
    const before = await cache.get('keyA');
    cache.set('keyA', 'valueA');
    const after = await cache.get('keyA');
    expect(before).toEqual(undefined);
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
    expect(afterA).toEqual(undefined);
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
    expect(afterA).toEqual(undefined);
    expect(afterB).toEqual(undefined);
  });


  test('has key', async () => {
    const before = await cache.has('keyA');
    cache.set('keyA', 'valueA');
    const after = await cache.has('keyA');

    expect(before).toEqual(false);
    expect(after).toEqual(true);
  });
});

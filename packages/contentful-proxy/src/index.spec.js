import ContentfulProxy from '.';

const CONTENTFUL_SPACE = '24b43qj4mety';
const CONTENTFUL_TOKEN = '30972507fe8ce5cfd2b368257c6a7774965cca36be5d572b7d66f687cfea33f8';
const REDIS_URL = 'redis://somethingnew:ca3a46adf4494d1ec4393f0d12c74bda10c689c75490f58241795e1db33c7d4d@206.189.205.19:6379/0';

describe('ContentfulProxy', function() {
  it('with config', () => {
    const proxy = new ContentfulProxy({
      space: CONTENTFUL_SPACE,
      accessToken: CONTENTFUL_TOKEN,
      redisUrl: REDIS_URL,
    });
    expect(proxy.contentful).toBeDefined();
    expect(proxy.redis).toBeDefined();
    proxy.destroy();
  })
})

import express from 'express';
import request from 'supertest';
// import axios from 'axios';
// import MockAdapter from 'axios-mock-adapter';
import CachedRequest from './index';

// new MockAdapter(axios);

describe('Cached Request', () => {
  test('It should have a handler', async () => {
    const app = express();
    const config = {
      cache: 'memory',
      endpoints: [
        {
          route: '/contentful',
          handler: async (): Promise<any> => 'contentful.',
        },
      ],
    };
    const cachedRequest = new CachedRequest(config);
    app.use('/test', cachedRequest.handler);

    const resp = await request(app).get('/test/contentful');
    expect(resp.text).toEqual('contentful.');
  });
});

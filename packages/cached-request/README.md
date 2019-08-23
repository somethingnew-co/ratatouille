# @stnew/cached-request

Express middleware to cache requests, with plugin support for 3rd party client integrations.

## Example Usage:
```js
import axios from 'axios';
import express from 'express';
import CachedRequest from '@stnew/cached-request';

const app = express();
const config = {
  cache: 'redis://urlgoeshere',
  endpoints: [
    {
      route: '/prismic',
      handler: async (req) => {
        const { data } = await axios.get('someurl');
        return data;
      },
    },
  ],
};
const cachedRequest = new CachedRequest(config);
app.use('/api', cachedRequest.handler);```

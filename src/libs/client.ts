import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'csba7bj1j2',
  apiKey: process.env.API_KEY || '',
});

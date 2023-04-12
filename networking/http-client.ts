import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const APPLICATION_JSON = 'application/json';
const CONTENT_TYPE = 'Content-Type';

const httpClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: APPLICATION_JSON,
    [CONTENT_TYPE]: APPLICATION_JSON,
    Authorization: "Token fd0ba4ac4c25fe479e9eeb5f5a4f085c61967dda"
  },
});

export { httpClient };

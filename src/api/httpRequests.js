import axios from 'axios';
import { BASE_URL } from './constants';

const httpRequest = axios.create({
  baseURL: BASE_URL
});

export const get = async (path, query) => {
  let response = { isSuccess: true, payload: null };
  try {
    const apiKey = mockGetApiKeyFromServer();
    let params = { query: query, 'api_key': apiKey };
    response.payload = await httpRequest.get(path, { params: params });
    return response;
  } catch (e) {
    response.isSuccess = false;
    response.payload = e.message;
    return response;
  }
};

const mockGetApiKeyFromServer = () => {
  return process.env.REACT_APP_API_KEY;
};
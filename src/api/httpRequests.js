import axios from 'axios';
import { BASE_URL } from './constants';

const httpRequest = axios.create({
  baseURL: BASE_URL
});

export const get = async (path) => {
  let response = { isSuccess: true, payload: null };
  const apiKey = mockGetApiKeyFromServer();
  try {
    response.payload = await httpRequest.get(path + '?api_key=' + apiKey);
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
import axios from 'axios';

export const api = axios.create({
//   baseURL: process.env.REACT_APP_URL,
  baseURL: 'https:/inshortsapi.vercel.app/'
});
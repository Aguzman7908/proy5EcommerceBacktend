import axios from 'axios';

export const request = (url, method, data) =>
  axios({
    //url: `${import.meta.env.VITE_SERVER_API}${url}`,
    url: process.env.REACT_APP_BACKEND_URL,
    method: method,
    data: data,
    headers: {
      'Content-Type': 'application/json',
      token: localStorage.getItem('token')
        ? localStorage.getItem('token')
        : null,
    },
  });

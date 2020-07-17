import axios from 'axios';

export const getPostUrl = () => {
  return axios.get(process.env.REACT_APP_POST_URL);
};

export const getUpdateUrl = (payload) => {
  return axios.put(`${process.env.REACT_APP_POST_URL}/${payload}`);
};

export const getAddUrl = (payload) => {
  return axios.post(`${process.env.REACT_APP_POST_URL}/${payload}`);
};

export const getDeleteUrl = (payload) => {
  return axios.delete(`${process.env.REACT_APP_POST_URL}/${payload}`);
};

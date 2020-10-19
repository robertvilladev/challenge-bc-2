import axios from "axios";

export const get = async (url: string) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/${url}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const post = async (url: string, body: {}) => {
  try {
    const response = await axios.post(`http://localhost:5000/api/${url}`, body);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

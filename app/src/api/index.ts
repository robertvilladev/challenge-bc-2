import axios from "axios";

export const get = async (url: string) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/${url}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const post = async (url: string, body: any) => {
  try {
    await axios.post(`http://localhost:5000/api/${url}`, body);

    const res: Promise<any> = body.passengerId
      ? await get(`passengers/${body.passengerId}`)
      : await get(`passengers`);

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const destroy = async (url: string) => {
  try {
    await axios.delete(`http://localhost:5000/api/${url}`);

    const res: Promise<any> = await get(url);
    return res;
  } catch (error) {
    console.log(error);
  }
};

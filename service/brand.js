import axios from "axios";
const url = "http://localhost:3000";

export const getBrand = async () => {
  const respone = await axios.get(`${url}/brand`);

  return respone.data;
};

export const getBrandById = async (id) => {
  const respone = await axios.get(`${url}/brand?id=${id}`);
  return respone.data;
};

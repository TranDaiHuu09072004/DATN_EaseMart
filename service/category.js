import axios from "axios";
const url = "http://localhost:3000";

export const getCate = async () => {
  const respone = await axios.get(`${url}/category`);
  return respone.data;
};

export const getCateById = async (id) => {
  id = String(id);
  console.log(typeof id);

  const respone = await axios.get(`${url}/category?id=${id}`);
  return respone.data;
};

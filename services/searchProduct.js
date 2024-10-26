import axios from "axios";
const url = "http://localhost:3000";
export const searchProductByName = async (searchByName) => {
  const response = await axios.get(`${url}/products?search=${searchByName}`);
  return response.data;
};


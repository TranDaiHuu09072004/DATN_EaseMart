import axios from "axios";
const url = "http://localhost:3000";

export const getProByCate = async (category_id, idcate) => {
  const respone = await axios.get(`${url}/products?${category_id}=${idcate}`);
  return respone.data;
};

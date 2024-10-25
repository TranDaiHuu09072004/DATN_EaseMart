import axios from "axios";
const url = "http://localhost:3000";

export const getProByCate = async (category_id, idcate) => {
  const respone = await axios.get(`${url}/products?${category_id}=${idcate}`);
  return respone.data;
};


export const getProBy2Cate = async (category1,category2) => {
  const respone = await axios.get(`${url}/products?${category1.name}=${category1.id}&${category2.name}=${category2.id}`);
  return respone.data;
};
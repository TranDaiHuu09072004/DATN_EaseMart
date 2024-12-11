import axios from "axios";
const url = "http://localhost:3000";

export const getCate = async () => {
  const respone = await axios.get(
    `https://trandainghia.id.vn/api/categories-parents`
  );
  return respone.data;
};

export const getCateChild = async (idCateParent) => {
  console.log(idCateParent);
  const respone = await axios.get(
    `https://trandainghia.id.vn/api/categories-by-parent/${idCateParent}`
  );
  console.log(respone.data);
  return respone.data;
};

export const getCateById = async (id) => {
  id = String(id);

  const respone = await axios.get(`${url}/category?id=${id}`);
  return respone.data;
};

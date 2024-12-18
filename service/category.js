import axios from "axios";

export const getCate = async () => {
  try {
    const response = await axios.get(
      `https://trandainghia.id.vn/api/categories-parents`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error; // Rethrow the error if you want to handle it further up the call stack
  }
};

export const getCateChild = async (idCateParent) => {
  const respone = await axios.get(
    `https://trandainghia.id.vn/api/categories-by-parent/${idCateParent}`
  );

  return respone.data;
};

export const getCateById = async (id) => {
  id = String(id);

  const respone = await axios.get(`${url}/category?id=${id}`);
  return respone.data;
};

import axios from "axios";
const url = "http://localhost:3000";

export const getProByCate = async (category_id, idcate) => {
  const respone = await axios.get(`${url}/products?${category_id}=${idcate}`);
  const filteredData = respone.data.filter(
    (product) => product.type === undefined
  );
  console.log(filteredData);

  return filteredData;
};

export const getProBy2Cate = async (category1, category2) => {
  const respone = await axios.get(
    `${url}/products?${category1.name}=${category1.id}&${category2.name}=${category2.id}`
  );
  const filteredData = respone.data.filter(
    (product) => product.type === undefined
  );
  console.log(filteredData);

  return filteredData;
};

export const fetchProducts = async (type) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/products?type=${type}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

// Hàm này lấy sản phẩm theo ID
export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return null;
  }
};

import axios from "axios";
const url = "http://localhost:3000";

export const getProByCate = async (idcate) => {
  // let id = toString(idcate);
  console.log(idcate);
  if (!idcate) {
    idcate = 1;
  }
  console.log(idcate);
  const respone = await axios.get(
    `https://trandainghia.id.vn/api/products-by-parent/1`
  );
  console.log("respone.data", respone.data);

  return respone.data;
};

export const getProBySubCate = async (category1) => {
  if (!category1) {
    category1 = 1;
  }

  const respone = await axios.get(
    `https://trandainghia.id.vn/api/products-by-categories/${category1}`
  );

  return respone.data;
};

export const getProByBrand = async (id) => {
  console.log(id);

  const respone = await axios.get(
    `https://trandainghia.id.vn/api/products-by-brand/${id}`
  );
  console.log(respone.data);

  return respone.data;
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

// Hàm lấy sp theo khoản giá
export const fetchProductsByMinMax = async (data) => {
  console.log(data);

  try {
    const response = await axios.post(
      `https://trandainghia.id.vn/api/products/category/filter`,
      data
    );
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

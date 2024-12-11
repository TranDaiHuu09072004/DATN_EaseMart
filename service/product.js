import axios from "axios";
const url = "https://trandainghia.id.vn/api/products";

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

export const fetchProducts = async (category) => {
  try {
    const response = await axios.get(`https://trandainghia.id.vn/api/products`);
    const products = response.data;

    // Filter products based on the category
    let filteredProducts;
    switch (category) {
      case "FlashSale":
        filteredProducts = products.filter(
          (product) =>
            product.product_units[0]?.price_sale !== null &&
            product.product_units[0]?.price !== null
        );
        break;
      case "Product_Popular":
        filteredProducts = products.filter(
          (product) =>
            product.product_units[0]?.price !== null &&
            product.product_units[0]?.price_sale == null &&
            product.views == 0
        );
        break;
      default:
        filteredProducts = products;
    }

    return filteredProducts;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// Hàm này lấy sản phẩm theo ID
export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(
      `https://trandainghia.id.vn/api/product/detail/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return null;
  }
};

export const fetchProductByView = async () => {
  try {
    const response = await axios.get(
      "https://trandainghia.id.vn/api/products-top-10-view"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return null;
  }
};

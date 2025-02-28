import axios from "axios";
const url = "https://trandaihuu.id.vn/api/products";

export const getProByCate = async (idcate) => {
  const respone = await axios.get(
    `https://trandaihuu.id.vn/api/products-by-parent/${idcate}`
  );

  return respone.data;
};

export const getProBySubCate = async (category1) => {
  if (!category1) {
    category1 = 1;
  }

  const respone = await axios.get(
    `https://trandaihuu.id.vn/api/products-by-categories/${category1}`
  );

  return respone.data;
};

export const getProByBrand = async (id) => {
  const respone = await axios.get(
    `https://trandaihuu.id.vn/api/products-by-brand/${id}`
  );

  return respone.data;
};

export const fetchProducts = async (api) => {
  try {
    const response = await axios.get(`https://trandaihuu.id.vn/api/products`);
    const products = response.data;

    let filteredProducts;
    switch (api) {
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
            product.product_units[0]?.price_sale === null &&
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
      `https://trandaihuu.id.vn/api/product/detail/${id}`
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
      "https://trandaihuu.id.vn/api/products-top-10-view"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return null;
  }
};
// Hàm lấy sp theo khoản giá
export const fetchProductsByMinMax = async (data) => {
  if (data.brand) {
    try {
      const response = await axios.post(
        `https://trandaihuu.id.vn/api/products/brand/filter`,
        data
      );

      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  if (data.category_parent) {
    try {
      const response = await axios.post(
        `https://trandaihuu.id.vn/api/products/category-parent/filter`,
        data
      );

      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  try {
    const response = await axios.post(
      `https://trandaihuu.id.vn/api/products/category/filter`,
      data
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

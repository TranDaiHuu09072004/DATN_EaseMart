import axios from "axios";
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

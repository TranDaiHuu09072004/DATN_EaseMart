import axios from "axios";

export const searchProducts = async (keyword) => {
  try {
    const response = await axios.post(
      "https://trandainghia.id.vn/api/products/search",
      { keyword }
    );
    return response.data;
  } catch (error) {
    console.error("Error searching products:", error);
    return null;
  }
};

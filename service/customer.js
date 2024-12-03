import axios from "axios";

export const getInfoCustomer = async (email, token) => {
  const response = await axios.post(
    "https://trandainghia.id.vn/api/customers",
    { email },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};

export const updateInfoCustomer = async (formData, token) => {
  // formData.image = null;
  console.log(formData);
  formData.forEach((value, key) => {
    console.log(`${key}:`, value);
  });
  const response = await axios.post(
    "https://trandainghia.id.vn/api/customers/profile",
    formData,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};

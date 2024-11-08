import axios from "axios";
const url = "http://localhost:3000";

export const getUser = async (email) => {
  const response = await axios.get(`${url}/users`, {
    params: { email },
  });
  return response.data;
};

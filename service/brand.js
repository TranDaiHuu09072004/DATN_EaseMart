import axios from "axios";

export const getBrand = async () => {
  const respone = await axios.get(`https://trandaihuu.id.vn/api/brand-list`);

  return respone.data;
};

export const getBrandById = async (id) => {
  const respone = await axios.get(`${url}/brand?id=${id}`);
  return respone.data;
};

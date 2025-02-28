import axios from "axios";
const url = "https://online-gateway.ghn.vn/shiip/public-api/master-data";
const token = "949a5ee3-96a8-11ef-bf64-5e16b39c8527";

export const getProvince = async (token) => {
  const response = await axios.post("https://trandaihuu.id.vn/api/provinces", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Thay token bằng token thực tế của bạn nếu cần
    },
  });

  return response.data;
};

export const getDistrict = async (selectedProvince, token) => {
  const province_id = +selectedProvince;

  const response = await axios.post(
    "https://trandaihuu.id.vn/api/districts",
    { province_id: province_id },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const getWard = async (id, token) => {
  const districtId = +id;

  const response = await axios.post(
    `https://trandaihuu.id.vn/api/wards`,
    { district_id: districtId },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

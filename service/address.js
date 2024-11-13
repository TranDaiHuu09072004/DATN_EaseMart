import axios from "axios";
const url = "https://online-gateway.ghn.vn/shiip/public-api/master-data";
const token = "949a5ee3-96a8-11ef-bf64-5e16b39c8527";

export const getProvince = async () => {
  const response = await axios.get(
    "https://online-gateway.ghn.vn/shiip/public-api/master-data/province",
    {
      headers: {
        "Content-Type": "application/json",
        token: token, // Thay token bằng token thực tế của bạn nếu cần
      },
    }
  );

  return response.data;
};

export const getDistrict = async (selectedProvince) => {
  console.log(selectedProvince);

  const province_id = +selectedProvince;

  const response = await axios.post(
    "https://online-gateway.ghn.vn/shiip/public-api/master-data/district",
    { province_id: province_id },
    {
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    }
  );

  return response.data;
};

export const getWard = async (id) => {
  const districtId = +id;

  const response = await axios.post(
    `https://online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id=${districtId}`,
    { district_id: districtId },
    {
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    }
  );

  return response.data;
};

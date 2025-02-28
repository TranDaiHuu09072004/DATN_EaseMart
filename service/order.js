import axios from "axios";

export const PostOrder = async (data) => {
  const token = data.token;
  delete data.token;

  const respone = await axios.post("https://trandaihuu.id.vn/api/order", data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return respone.data;
};

export const CreateQr = async (data) => {
  const token = data.token;
  delete data.token;

  const respone = await axios.post(
    `https://trandaihuu.id.vn/api/generate-qrs`,
    { order_code: data.order_code },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  return respone.data;
};

export const CheckPayment = async (paymentId) => {
  const respone = await axios.get(
    `https://trandaihuu.id.vn/api/check-payment-status/${paymentId}`
  );
  return respone.data;
};

export const GetOrderById = async (paymentId, token) => {
  const respone = await axios.get(
    `https://trandaihuu.id.vn/api/orders/${paymentId}/details`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  return respone.data;
};

export const CancelOrderById = async (id, token) => {
  const respone = await axios.delete(
    `https://trandaihuu.id.vn/api/orders/${id}/cancel`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  return respone.data;
};

export const RestoreOrderById = async (id, token) => {
  const respone = await axios.post(
    `https://trandaihuu.id.vn/api/orders/${id}/restore`,
    { token: token },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  return respone.data;
};

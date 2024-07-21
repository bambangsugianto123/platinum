import axios from "axios";
const user = JSON.parse(localStorage.getItem("user"));

const API_URL = "https://api-car-rental.binaracademy.org/customer";

const getOrder = (id) => {
  const response = axios.get(`${API_URL}/order/${id}`, {
    headers: {
      "Content-Type": "application/json",
      access_token: user.access_token,
    },
  });
  return response;
};

const addOrder = (start_rent_at, finish_rent_at, car_id) => {
  return axios.post(
    `${API_URL}/order`,
    {
      start_rent_at,
      finish_rent_at,
      car_id,
    },
    {
      headers: {
        "Content-Type": "application/json",
        access_token: user.access_token,
      },
    }
  );
};

const deleteOrder = (id) => {
  const response = axios.delete(`${API_URL}/order/${id}`, {
    headers: {
      "Content-Type": "application/json",
      access_token: user.access_token,
    },
  });
  return response;
};

const uploadSlip = (id) => {
  const response = axios.delete(`${API_URL}/order/${id}/slip`, {
    headers: {
      "Content-Type": "multipart/form-data",
      access_token: user.access_token,
    },
  });
  return response;
};
const listOrder = (page, pageSize) => {
  const response = axios.get(`${API_URL}/v2/order`, {
    params: {
      page,
      pageSize,
    },
    headers: {
      "Content-Type": "application/json",
      access_token: user.access_token,
    },
  });
  return response;
};

const orderAPI = {
  addOrder,
  getOrder,
  deleteOrder,
  uploadSlip,
  listOrder,
};

export default orderAPI;

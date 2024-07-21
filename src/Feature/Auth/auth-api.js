import axios from "axios";

const API_URL = "https://api-car-rental.binaracademy.org/customer/";

const register = async ({ name, email, password }) => {
  console.log({ name, email, password });
  const register = await axios.post(`${API_URL}auth/register`, {
    name,
    email,
    password,
  });

  console.log(register);
  return register;
};

const login = ({ email, password }) => {
  return axios
    .post(`${API_URL}auth/login`, {
      email,
      password,
    })
    .then((res) => {
      if (res.data.access_token) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }
      return res.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authAPI = {
  register,
  login,
  logout,
};

export default authAPI;

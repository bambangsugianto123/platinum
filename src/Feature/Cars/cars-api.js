import axios from "axios";
const user = JSON.parse(localStorage.getItem('user'));

const API_URL = "";

const getListCars = (params) => {

    const response = axios.get(`${API_URL}/v2/car`, {
        params,
    });
    return response;
};

const getCarById = id => {
    const response = axios.get(`${API_URL}/car/${id}`)
    return response;
}

const carsAPI = {
    getListCars,
    getCarById,
};

export default carsAPI;
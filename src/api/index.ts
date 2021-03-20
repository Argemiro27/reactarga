import axios from "axios";

const api = axios.create({
    baseURL: "https://eiarga.herokuapp.com/"
})

export default api;
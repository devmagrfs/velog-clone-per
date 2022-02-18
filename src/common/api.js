import axios from 'axios';

const apis = axios.create({
    baseURL: "http://localhost:3000/"

})

export default apis;
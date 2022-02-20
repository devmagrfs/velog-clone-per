import axios from 'axios';

const apis = axios.create({
    // baseURL: "http://localhost:3000/"
    baseURL: "http://yuseon.shop/"

})

export default apis;
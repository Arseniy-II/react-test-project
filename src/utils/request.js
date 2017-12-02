import axios from 'axios';
import {API} from 'constants.js';

const request = axios.create({
    baseURL: API
});

export default request;

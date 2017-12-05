import axios from 'axios';
import {API} from 'constants.js';

/**
 * Request config
 *
 * @type {AxiosInstance}
 */
const request = axios.create({
    baseURL: API
});

export default request;

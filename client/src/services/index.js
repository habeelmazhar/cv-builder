import axios from 'axios';
import * as API from './api';

let AXIOS;

const getInstance = () => AXIOS;

const createInstance = ({ baseURL, headers = {} }) => {
    AXIOS = axios.create({ baseURL, headers });
};

export {
    API,
    createInstance,
    getInstance,
};

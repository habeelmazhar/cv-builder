import { getInstance } from '../index';

export const loginUser = (email, password) => {
    return getInstance()
        .post('/api/login/', { email, password });
};

export const signupUser = (email, firstname, lastname, password) => {
    return getInstance()
        .post('/api/signup/', { email, firstname, lastname, password });
};

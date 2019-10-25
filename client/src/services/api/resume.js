import { getInstance } from '../index';

export const getAllResume = () => {
    return getInstance()
        .get('/api/resume/');
};

export const createResume = (data) => {
    return getInstance()
        .post('/api/resume/', data);
};

export const updateResume = (id, data) => {
    return getInstance()
        .put('/api/resume/' + id, data);
};

export const deleteResume = (id) => {
    return getInstance()
        .delete('/api/resume/' + id);
};
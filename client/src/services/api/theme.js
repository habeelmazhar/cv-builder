import { getInstance } from '../index';

export const getAllThemes = () => {
    return getInstance()
        .get('/api/theme/');
};

export const getTheme = (name) => {
    return getInstance()
        .get('/api/theme/' + name);
};
import axios from 'axios';

export const getAllTasks = () => {
    return axios.get('/api/tasks/');
};

export const createTask = (task) => {
    return axios.post('/api/tasks/', task);
}

export const deleteTask = (id) => {
    return axios.delete(`/api/tasks/${id}/`);
}

export const updateTask = (id, task) => {
    return axios.put(`/api/tasks/${id}/`, task);
}

export const getTask = (id) => {
    return axios.get(`/api/tasks/${id}/`);
}


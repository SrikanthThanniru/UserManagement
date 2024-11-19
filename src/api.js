import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getUsers = async () => axios.get(`${BASE_URL}/users`);
export const addUser = async (user) => axios.post(`${BASE_URL}/users`, user);
export const updateUser = async (id, user) => axios.put(`${BASE_URL}/users/${id}`, user);
export const deleteUser = async (id) => axios.delete(`${BASE_URL}/users/${id}`);

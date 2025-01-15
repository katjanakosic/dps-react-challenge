import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL;

export async function fetchUsers() {
	const response = await axios.get(`${baseURL}/users`);
	return response.data;
}

import axios from 'axios';

export async function fetchUsers() {
	const response = await axios.get('https://dummyjson.com/users');
	return response.data; 
}

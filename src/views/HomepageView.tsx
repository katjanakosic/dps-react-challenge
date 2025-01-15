import { Box, Container } from '@mui/material';
import FilterBar from '../components/FilterBar';
import UserTable from '../components/UserTable';
import { useState, useEffect } from 'react';
import { fetchUsers } from '../services/api';
import User from '../types/User';

function HomepageView() {
	const [users, setUsers] = useState<User[]>([]);
	const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

	useEffect(() => {
		const getUsers = async () => {
			try {
        // Rename to apiUsers to avoid confusion with state variable 'users'
				const { users: apiUsers } = await fetchUsers();
        
        // Transform dummy users to match User interface
				const transformed: User[] = apiUsers.map((u: any) => ({
					name: `${u.firstName} ${u.lastName}`,
					city: u.address?.city || '',
					birthday: u.birthDate,
				}));
				setUsers(transformed);
				setFilteredUsers(transformed);
			} catch (err) {
				console.error(err);
			}
		};
		getUsers();
	}, []);

	return (
		<Container
			maxWidth="xl"
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
			}}
		>
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="space-between"
				alignItems="center"
				height="90vh"
				width="85%"
				bgcolor="#dce6f3"
				borderRadius="16px"
				padding={3}
				gap={2}
			>
				<FilterBar />
				<UserTable />
			</Box>
		</Container>
	);
}

export default HomepageView;

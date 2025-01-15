import { Box, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import FilterBar from '../components/FilterBar';
import UserTable from '../components/UserTable';
import { fetchUsers } from '../services/api';
import User from '../types/User';
import NotFound from '../assets/NotFound.svg';

function HomepageView() {
	const [users, setUsers] = useState<User[]>([]);
	const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

	// State variables for filtering
	const [searchName, setSearchName] = useState<string>('');
	const [selectedCity, setSelectedCity] = useState<string>('');
	const [highlightOldest, setHighlightOldest] = useState<boolean>(false);

	const [cities, setCities] = useState<string[]>([]);

	// For dynamic filtering as one types
	const [tempSearchName, setTempSearchName] = useState<string>('');

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

				// Unique list of cities
				const uniqueCities = Array.from(
					new Set(transformed.map((u) => u.city))
				)
					.filter(Boolean)
					.sort((a, b) => a.localeCompare(b));
				setCities(uniqueCities);
			} catch (err) {
				console.error(err);
			}
		};

		getUsers();
	}, []);

	// Debounce logic for name input (1 second)
	useEffect(() => {
		const handler = setTimeout(() => {
			setSearchName(tempSearchName);
		}, 1000);

		return () => clearTimeout(handler);
	}, [tempSearchName]);

	// Re-filter whenever users, searchName, or selectedCity changes
	useEffect(() => {
		let updated = [...users];

		if (searchName.trim() !== '') {
			updated = updated.filter((u) =>
				u.name.toLowerCase().includes(searchName.toLowerCase())
			);
		}

		if (selectedCity) {
			updated = updated.filter((u) => u.city === selectedCity);
		}

		setFilteredUsers(updated);
	}, [users, searchName, selectedCity]);

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
				<FilterBar
					tempSearchName={tempSearchName}
					setTempSearchName={setTempSearchName}
					selectedCity={selectedCity}
					setSelectedCity={setSelectedCity}
					cities={cities}
					highlightOldest={highlightOldest}
					setHighlightOldest={setHighlightOldest}
				/>
				{filteredUsers.length === 0 ? (
					// If no users match the filters, show "Not Found" image & message
					<Box
						flex={1}
						display="flex"
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
						gap={2}
					>
						<img
							src={NotFound}
							alt="Not Found"
							style={{ width: '400px', height: 'auto' }}
						/>
						<Typography variant="h5" sx={{color: "#44296d"}}>
							Oops! No user with this name was found.
						</Typography>
					</Box>
				) : (
					<UserTable
						users={filteredUsers}
						highlightOldest={highlightOldest}
					/>
				)}
			</Box>
		</Container>
	);
}

export default HomepageView;

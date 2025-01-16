import React from 'react';
import {
	Box,
	Paper,
	Table,
	TableContainer,
	TableRow,
	TableHead,
	TableCell,
	TableBody,
} from '@mui/material';
import User from '../types/User';

interface UserTableProps {
	users: User[];
	highlightOldest: boolean;
    onRowClick: (user: User) => void;
}

function UserTable({ users, highlightOldest, onRowClick }: UserTableProps) {
	// Identify oldest user per city
	// useMemo Hook returns a memoized value so
	// that it does not need to be recalculated
	const oldestSet = React.useMemo(() => {
		if (!highlightOldest) return new Set<string>();

		// Build a map city -> user who is oldest so far
		// Record: map the properties of a type to another type
		const cityToOldest: Record<string, User> = {};

		for (const u of users) {
			if (!u.city) continue;
			if (!cityToOldest[u.city]) {
				cityToOldest[u.city] = u;
			} else {
				const currentOld = cityToOldest[u.city];
				// Compare birthdays
				const uDate = new Date(u.birthday);
				const oldDate = new Date(currentOld.birthday);
				if (uDate < oldDate) {
					cityToOldest[u.city] = u;
				}
			}
		}

		const setOfOldest = new Set(
			Object.values(cityToOldest).map((o) => `${o.name}-${o.city}`)
		);
		return setOfOldest;
	}, [users, highlightOldest]);

	return (
		<Box
			height="80%"
			width="70%"
			sx={{
				maxHeight: '70vh',
				overflow: 'auto', // Allow scrolling
			}}
		>
			<TableContainer component={Paper}>
				<Table aria-label="user table">
					<TableHead
						sx={{
							backgroundColor: '#eba943',
							'& .MuiTableCell-head': {
								fontWeight: 'bold',
							},
						}}
					>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell align="left">City</TableCell>
							<TableCell align="left">Birthday</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{users.map((user) => {
							const isOldest = oldestSet.has(
								`${user.name}-${user.city}`
							);
							return (
								<TableRow
									key={`${user.name}-${user.city}-${user.birthday}`}
                                    onClick={() => onRowClick(user)}
                                    hover
                                    style={{ cursor: 'pointer' }}
									sx={
										isOldest
											? {
													backgroundColor: '#b1448b',
													fontWeight: 'bold',
											  }
											: {}
									}
								>
									<TableCell component="th" scope="row">
										{user.name}
									</TableCell>
									<TableCell align="left">
										{user.city}
									</TableCell>
									<TableCell align="left">
										{new Date(
											user.birthday
										).toLocaleDateString('en-GB', {
											day: '2-digit',
											month: 'short',
											year: 'numeric',
										})}
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
}

export default UserTable;

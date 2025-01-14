import {
	Box,
	Paper,
	Table,
	TableContainer,
	TableRow,
	TableHead,
	TableCell,
} from '@mui/material';

function UserTable() {
	return (
		<Box height="80%" width="70%">
			<TableContainer component={Paper}>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell align="left">City</TableCell>
							<TableCell align="left">Birthday</TableCell>
						</TableRow>
					</TableHead>
				</Table>
			</TableContainer>
		</Box>
	);
}

export default UserTable;

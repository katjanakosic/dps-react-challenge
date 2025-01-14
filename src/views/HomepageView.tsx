// This view provides a starting point where the user can enter a GitHub
// username and initiate a search for repositories.

import { Box, Container } from '@mui/material';
import FilterBar from '../components/FilterBar';
import UserTable from '../components/UserTable';

function HomepageView() {
	return (
		<Container
			maxWidth="xl"
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh", 
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

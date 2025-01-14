import {
	Box,
	FormControl,
	InputLabel,
	TextField,
	Typography,
	Select,
	MenuItem,
	FormControlLabel,
	Checkbox,
} from '@mui/material';

function FilterBar() {
	return (
		<Box display="flex" justifyContent="space-between" width="70%">
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="flex-start"
                minWidth={300}
			>
				<Typography sx={{ mb: 2 }}>Name</Typography>
				<TextField
					label="Filter by Name"
					variant="outlined"
					sx={{
						'& .MuiOutlinedInput-root': {
							'& .MuiOutlinedInput-notchedOutline': {
								borderWidth: '2px',
							},
							'&.Mui-focused': {
								'& .MuiOutlinedInput-notchedOutline': {
									borderWidth: '2px',
								},
							},
						},
					}}
				/>
			</Box>
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="flex-start"
				sx={{ minWidth: 170 }}
			>
				<Typography sx={{ mb: 2 }}>City</Typography>

				<FormControl
					fullWidth
					sx={{
						'& .MuiOutlinedInput-root': {
							'& .MuiOutlinedInput-notchedOutline': {
								borderWidth: '2px',
							},
							'&.Mui-focused': {
								'& .MuiOutlinedInput-notchedOutline': {
									borderWidth: '2px',
								},
							},
						},
					}}
				>
					<InputLabel>City</InputLabel>
					<Select
						label="City"
						sx={{
							'& .MuiOutlinedInput-notchedOutline': {
								borderWidth: '2px',
							},
							'&:hover .MuiOutlinedInput-notchedOutline': {
								borderColor: '#a6bae2',
							},
							'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
								borderWidth: '2px',
							},
						}}
					>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
				</FormControl>
			</Box>
			<Box>
				<Box marginBottom={6} />
				<FormControlLabel
					control={<Checkbox defaultChecked />}
					label="Highlight oldest per city"
					labelPlacement="start"
				/>
			</Box>
		</Box>
	);
}

export default FilterBar;

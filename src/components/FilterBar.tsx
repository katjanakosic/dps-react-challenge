import {
	Box,
	FormControl,
	InputLabel,
	TextField,
	Typography,
	Select,
	SelectChangeEvent,
	MenuItem,
	FormControlLabel,
	Checkbox,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { ChangeEvent } from 'react';

interface FilterBarProps {
	tempSearchName: string;
	setTempSearchName: (value: string) => void;
	selectedCity: string;
	setSelectedCity: (value: string) => void;
	cities: string[];
	highlightOldest: boolean;
	setHighlightOldest: (value: boolean) => void;
}

function FilterBar({
	tempSearchName,
	setTempSearchName,
	selectedCity,
	setSelectedCity,
	cities,
	highlightOldest,
	setHighlightOldest,
}: FilterBarProps) {
	// Handle input changes
	const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setTempSearchName(e.target.value);
	};

	const handleCityChange = (event: SelectChangeEvent<string>) => {
		setSelectedCity(event.target.value as string);
	};

	const handleHighlightChange = (e: ChangeEvent<HTMLInputElement>) => {
		setHighlightOldest(e.target.checked);
	};

	return (
		<Grid
			container
			justifyContent="space-between"
			spacing={2}
			pb={4}
			width="70%"
		>
			{/* Name Filter */}
			<Grid
				size={{ xs: 12, md: 4 }}
				display="flex"
				flexDirection="column"
				justifyContent="flex-start"
			>
				<Typography sx={{ mb: 2 }}>Name</Typography>
				<TextField
					label="Filter by Name"
					variant="outlined"
					value={tempSearchName}
					onChange={handleNameChange}
					sx={{
						'& .MuiOutlinedInput-root': {
							'& .MuiOutlinedInput-notchedOutline': {
								borderWidth: '2px',
							},
							'&:hover .MuiOutlinedInput-notchedOutline': {
								borderColor: '#44296d',
							},
							'&.Mui-focused': {
								'& .MuiOutlinedInput-notchedOutline': {
									borderWidth: '2px',
								},
							},
						},
					}}
				/>
			</Grid>

			{/* City Filter */}
			<Grid
				size={{ xs: 12, md: 4 }}
				display="flex"
				flexDirection="column"
				justifyContent="flex-start"
			>
				<Typography sx={{ mb: 2 }}>City</Typography>

				<FormControl
					fullWidth
					sx={{
						'& .MuiOutlinedInput-root': {
							'& .MuiOutlinedInput-notchedOutline': {
								borderWidth: '2px',
							},
							'&:hover .MuiOutlinedInput-notchedOutline': {
								borderColor: '#44296d',
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
						value={selectedCity}
						onChange={handleCityChange}
						sx={{
							'& .MuiOutlinedInput-notchedOutline': {
								borderWidth: '2px',
							},
							'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
								borderWidth: '2px',
							},
						}}
					>
						<MenuItem value="">
							{' '}
							<em>All Cities</em>
						</MenuItem>
						{cities.map((city) => (
							<MenuItem key={city} value={city}>
								{city}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Grid>

			{/* Checkbox Filter */}
			<Grid size={{ xs: 'auto', md: 4 }}>
				<Box marginBottom={6} />
				<FormControlLabel
					control={
						<Checkbox
							sx={{
								'&.Mui-checked': {
									color: '#44296d',
								},
							}}
							checked={highlightOldest}
							onChange={handleHighlightChange}
						/>
					}
					label="Highlight oldest per city"
					labelPlacement="start"
				/>
			</Grid>
		</Grid>
	);
}

export default FilterBar;

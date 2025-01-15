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
        <Box display="flex" justifyContent="space-between" width="70%">
            {/* Name Filter */}
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
                    value={tempSearchName}
                    onChange={handleNameChange}
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

            {/* City Filter */}
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
                        <MenuItem value="">All Cities</MenuItem>
                        {cities.map((city) => (
                            <MenuItem key={city} value={city}>
                                {city}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>

            <Box>
                <Box marginBottom={6} />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={highlightOldest}
                            onChange={handleHighlightChange}
                        />
                    }
                    label="Highlight oldest per city"
                    labelPlacement="start"
                />
            </Box>
        </Box>
    );
}

export default FilterBar;


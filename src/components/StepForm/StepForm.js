import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material';
import { Container } from '@mui/system';

const StepForm = (props) => {
	const { step, callback } = props;
	const [country, setCountry] = useState('');
	const [age, setAge] = useState('');
	const [name, setName] = useState('');

	let form;

	const handleChange = (e, type) => {
		switch (type) {
			case 'country':
				setCountry(e.target.value);
				callback(e.target.value, type);
				break;
			case 'age':
				setAge(e.target.value);
				callback(e.target.value, type);
				break;
			case 'name':
				setName(e.target.value);
				callback(e.target.value, type);
				break;
			default:
				break;
		}
	}

	if (step === 1) {
		form = <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
			<InputLabel id="select-country">Country</InputLabel>
			<Select
				labelId="select-country"
				id="country"
				value={country}
				label="Country"
				onChange={(e) => handleChange(e, "country")}
			>
				<MenuItem value="India">India</MenuItem>
				<MenuItem value="US">US</MenuItem>
				<MenuItem value="UK">UK</MenuItem>
			</Select>
		</FormControl>
	} else if (step === 2) {
		form = <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
			<InputLabel id="select-age">Age</InputLabel>
			<Select
				labelId="select-age"
				id="age"
				value={age}
				label="Age"
				onChange={(e) => handleChange(e, "age")}
			>
				<MenuItem value="20-30">20 - 30</MenuItem>
				<MenuItem value="30-40">30-40</MenuItem>
				<MenuItem value="Above 40">Above 40</MenuItem>
			</Select>
		</FormControl>
	} else if (step === 3) {
		form = <TextField id="standard-basic" label="Name" variant="standard" value={name} onChange={e => handleChange(e, "name")} />
	} else {
		form = <div> Nothing to do here, you may skip!!</div>
	}
	return (
		<React.Fragment>
			<Container maxWidth="sm">
				{form}
			</Container>
		</React.Fragment>
	)
}

export default StepForm;
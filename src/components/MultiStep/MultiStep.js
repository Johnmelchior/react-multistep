import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import StepForm from './../StepForm/StepForm';

// const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

const MultiStep = (props) => {
	const [activeStep, setActiveStep] = useState(0);
	const [steps, setSteps] = useState(0);
	const [stepError, setStepError] = useState(false);
	const [country, setCountry] = useState('');
	const [age, setAge] = useState('');
	const [name, setName] = useState('');

	const handleStepCallBack = (data, formType) => {
		if (formType === "country") {
			setCountry(data);
		}
		if (formType === "age") {
			setAge(data);
		}
		if (formType === "name") {
			setName(data);
		}
	}

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	const handleSteps = (e) => {
		setSteps(e.target.value);
		if(e.target.value < 3) {
			setStepError(true);
		}else {
			setStepError(false);
		}
	}

	return (
		<React.Fragment>
			<Box
				component="form"
				sx={{
					'& > :not(style)': { m: 1, width: '25ch' },
				}}
				noValidate
				autoComplete="off"
			>
				<TextField
					id="standard-basic"
					type="number"
					label="No of steps"
					variant="standard"
					value={steps} onChange={handleSteps}
					error={stepError}
					helperText = "Minimum value should be 3"
				/>

			</Box>

			{
				steps >= 3 &&
				<Box sx={{ width: '90%', margin:'auto' }}>
					<Stepper activeStep={activeStep}>
						{[...Array(parseInt(steps))].map((label, index) => {
							const stepProps = {};
							const labelProps = {};
							return (
								<Step key={index} {...stepProps}>
									<StepLabel {...labelProps}>Step </StepLabel>
								</Step>
							);
						})}
					</Stepper>
					{activeStep === parseInt(steps) ? (
						<React.Fragment>
							<Typography sx={{ mt: 2, mb: 1 }}>
								All steps completed - you&apos;re finished
							</Typography>
							<Typography sx={{ mt: 2, mb: 1 }}>
								Country {country}
							</Typography>
							<Typography sx={{ mt: 2, mb: 1 }}>
								Age {age}
							</Typography>
							<Typography sx={{ mt: 2, mb: 1 }}>
								Name {name}
							</Typography>
							<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
								<Box sx={{ flex: '1 1 auto' }} />
								<Button onClick={handleReset}>Reset</Button>
							</Box>
						</React.Fragment>
					) : (
							<React.Fragment>
								<StepForm step={activeStep + 1} callback={handleStepCallBack} />
								<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
									<Button
										color="inherit"
										disabled={activeStep === 0}
										onClick={handleBack}
										sx={{ mr: 1 }}
									>
										Back
					</Button>
									<Box sx={{ flex: '1 1 auto' }} />
									<Button onClick={handleNext}>
										{activeStep === steps - 1 ? 'Finish' : 'Next'}
									</Button>
								</Box>
							</React.Fragment>
						)}
				</Box>
			}
		</React.Fragment>
	);
}

export default MultiStep;
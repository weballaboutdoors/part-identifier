import React, { useState } from 'react';
import { Box, Paper, Stepper, Step, StepLabel, Typography } from '@mui/material';
import CameraCapture from './CameraCapture';
import ResultDisplay from './ResultDisplay';

const steps = ['Take Photo', 'Review Image', 'View Results'];

const PartIdentificationPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [identificationResult, setIdentificationResult] = useState<any>(null);

  const handleImageCapture = (image: string) => {
    setCapturedImage(image);
    setActiveStep(1);
  };

  const handleIdentification = (result: any) => {
    setIdentificationResult(result);
    setActiveStep(2);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {activeStep === 0 && (
          <CameraCapture onCapture={handleImageCapture} />
        )}

        {activeStep === 1 && capturedImage && (
          <ResultDisplay 
            image={capturedImage}
            onConfirm={handleIdentification}
            onRetry={() => setActiveStep(0)}
          />
        )}

        {activeStep === 2 && identificationResult && (
          <Box>
            <Typography variant="h6">Identified Part:</Typography>
            <pre>{JSON.stringify(identificationResult, null, 2)}</pre>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default PartIdentificationPage;
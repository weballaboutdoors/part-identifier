import React, { useState } from 'react';
import { Box, Paper, Stepper, Step, StepLabel, Typography, Divider } from '@mui/material';
import CameraCapture from './CameraCapture';
import ResultDisplay from './ResultDisplay';
import Instructions from '../Instructions';
import { identifyPart } from '../../services/api';

const steps = ['Take Photo', 'Review Image', 'View Results'];

const PartIdentificationPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [identificationResult, setIdentificationResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleImageCapture = (image: string) => {
    setCapturedImage(image);
    setActiveStep(1);
  };

  const handleIdentification = async (image: string) => {
    try {
      const response = await fetch(image);
      const blob = await response.blob();
      const file = new File([blob], "captured-image.jpg", { type: "image/jpeg" });
      
      const result = await identifyPart(file);
      setIdentificationResult(result);
      setActiveStep(2);
      setError(null);
    } catch (error) {
      console.error('Error identifying part:', error);
      setError('Failed to identify part. Please try again.');
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      {/* Main Content Paper */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {error && (
          <Typography color="error" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}

        {activeStep === 0 && (
          <CameraCapture onCapture={handleImageCapture} />
        )}

        {activeStep === 1 && capturedImage && (
          <ResultDisplay 
            image={capturedImage}
            onConfirm={() => handleIdentification(capturedImage)}
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

      {/* Instructions at the bottom */}
      <Box sx={{ mt: 4 }}>
        <Instructions />
      </Box>
    </Box>
  );
};

export default PartIdentificationPage;
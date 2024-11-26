import React from 'react';
import { Container, Typography, Box, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';  

const TermsOfService: React.FC = () => {
    const navigate = useNavigate();
  return (
    <Container maxWidth="lg">
        
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/')}
        sx={{ 
          mb: 2, 
          color: 'black',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)'
          }
        }}
      >
        Back to Home
      </Button>
      <Paper sx={{ p: 4, my: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
          Terms of Service
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            1. Acceptance of Terms
          </Typography>
          <Typography paragraph>
            By accessing and using our part identification service, you agree to be bound by these Terms of Service and all applicable laws and regulations.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            2. Use of Service
          </Typography>
          <Typography paragraph>
            Our part identification service is provided for business purposes only. You agree to use the service only for its intended purpose and in compliance with all applicable laws.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            3. Limitations of Liability
          </Typography>
          <Typography paragraph>
            While we strive for accuracy in our part identification service, we cannot guarantee 100% accuracy. You agree to verify all part identifications independently before making any purchases or business decisions.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            4. Intellectual Property
          </Typography>
          <Typography paragraph>
            All content, features, and functionality of our service are owned by All About Doors & Windows and are protected by international copyright, trademark, and other intellectual property laws.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            5. Contact Information
          </Typography>
          <Typography paragraph>
            For any questions regarding these Terms of Service, please contact:
          </Typography>
          <Typography>
            All About Doors & Windows<br />
            110 E 16th Ave<br />
            N. Kansas City, MO 64116<br />
            Phone: (816) 221-6543
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="body2" color="text.secondary">
            Last updated: {new Date().toLocaleDateString()}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default TermsOfService;
import React from 'react';
import { Container, Typography, Box, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';  

const PrivacyPolicy: React.FC = () => {
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
          Privacy Policy
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            1. Information We Collect
          </Typography>
          <Typography paragraph>
            We collect information that you provide directly to us, including when you use our part identification service, create an account, or contact us for support.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            2. How We Use Your Information
          </Typography>
          <Typography paragraph>
            We use the information we collect to:
          </Typography>
          <ul>
            <Typography component="li" sx={{ ml: 2, mb: 1 }}>
              Provide and improve our part identification service
            </Typography>
            <Typography component="li" sx={{ ml: 2, mb: 1 }}>
              Process and fulfill your requests
            </Typography>
            <Typography component="li" sx={{ ml: 2, mb: 1 }}>
              Send you technical notices and support messages
            </Typography>
            <Typography component="li" sx={{ ml: 2, mb: 1 }}>
              Maintain the security of our service
            </Typography>
          </ul>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            3. Data Storage and Security
          </Typography>
          <Typography paragraph>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            4. Contact Us
          </Typography>
          <Typography paragraph>
            If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
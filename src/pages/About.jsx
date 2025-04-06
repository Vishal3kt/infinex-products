import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const About = () => {
    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Paper elevation={1} sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom>
                    About Us
                </Typography>
                <Typography variant="body1" paragraph>
                    Welcome to Infinex Products, your trusted source for high-quality products. We specialize in providing innovative solutions that meet your needs.
                </Typography>
                <Typography variant="body1" paragraph>
                    Our mission is to deliver exceptional products while maintaining the highest standards of quality and customer service.
                </Typography>
                <Box sx={{ mt: 3 }}>
                    <Typography variant="h6" gutterBottom>
                        Why Choose Us?
                    </Typography>
                    <Typography component="ul" sx={{ pl: 2 }}>
                        <li>Quality Assured Products</li>
                        <li>Excellent Customer Support</li>
                        <li>Competitive Pricing</li>
                        <li>Fast Response Time</li>
                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
};

export default About;

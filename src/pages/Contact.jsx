import React from 'react';
import { Container, Typography, Paper, Box, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Paper elevation={1} sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Contact Us
                </Typography>
                <Grid container spacing={4} sx={{ mt: 2 }}>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <LocationOnIcon sx={{ mr: 2, color: 'primary.main' }} />
                            <Typography variant="body1">
                                Belagavi,<br />
                                Karnataka
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <PhoneIcon sx={{ mr: 2, color: 'primary.main' }} />
                            <Typography variant="body1">
                                +91 80881 74565<br />
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <EmailIcon sx={{ mr: 2, color: 'primary.main' }} />
                            <Typography variant="body1">
                                infinexproducts@gmail.com<br />
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default Contact;

import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Grid, Typography, IconButton, Stack, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: 'background.paper',
                py: 4,
                mt: 'auto',
                borderTop: 1,
                borderColor: 'divider'
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Company Info */}
                    <Grid item xs={12} sm={4}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <img
                                src="/logo-website.png"
                                alt="Infinex Products"
                                style={{ height: '40px', marginRight: '8px' }}
                            />
                        </Box>
                        <Typography variant="body1" sx={{ color: '#4b5563', mb: 2, lineHeight: 1.7 }}>
                            Your trusted source for high-quality products.
                        </Typography>
                    </Grid>

                    {/* Contact Info */}
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" sx={{ color: '#1e293b', fontWeight: 600, mb: 2 }}>
                            Contact Us
                        </Typography>
                        <Stack spacing={2}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <LocationOnIcon sx={{ mr: 1, color: '#2563eb' }} />
                                <Typography variant="body1" sx={{ color: '#4b5563' }}>
                                    Belgavi, Karnataka
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <PhoneIcon sx={{ mr: 1, color: '#2563eb' }} />
                                <Typography 
                                    variant="body1" 
                                    component="a" 
                                    href="tel:+918088174565" 
                                    sx={{ 
                                        color: '#4b5563', 
                                        textDecoration: 'none',
                                        '&:hover': { color: '#2563eb' }
                                    }}
                                >
                                    +91 80881 74565
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <EmailIcon sx={{ mr: 1, color: '#2563eb' }} />
                                <Typography 
                                    variant="body1" 
                                    component="a" 
                                    href="mailto:info@infinexproducts.com" 
                                    sx={{ 
                                        color: '#4b5563', 
                                        textDecoration: 'none',
                                        '&:hover': { color: '#2563eb' }
                                    }}
                                >
                                    info@infinexproducts.com
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid>

                    {/* Quick Links */}
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" sx={{ color: '#1e293b', fontWeight: 600, mb: 2 }}>
                            Quick Links
                        </Typography>
                        <Stack spacing={2}>
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <Typography variant="body1" sx={{ 
                                    color: '#4b5563',
                                    '&:hover': { color: '#2563eb' },
                                    transition: 'color 0.2s'
                                }}>
                                    Home
                                </Typography>
                            </Link>
                            <Link to="/about" style={{ textDecoration: 'none' }}>
                                <Typography variant="body1" sx={{ 
                                    color: '#4b5563',
                                    '&:hover': { color: '#2563eb' },
                                    transition: 'color 0.2s'
                                }}>
                                    About Us
                                </Typography>
                            </Link>
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                <Typography variant="body1" sx={{ 
                                    color: '#4b5563',
                                    '&:hover': { color: '#2563eb' },
                                    transition: 'color 0.2s'
                                }}>
                                    Contact
                                </Typography>
                            </Link>
                        </Stack>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4 }} />

                {/* Bottom Section */}
                <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    flexWrap: 'wrap',
                    gap: 2
                }}>
                    <Typography variant="body1" sx={{ color: '#4b5563' }}>
                        {new Date().getFullYear()} Infinex Products. All rights reserved.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <IconButton sx={{ 
                            color: '#4b5563',
                            '&:hover': { 
                                color: '#2563eb',
                                bgcolor: '#f1f5f9'
                            }
                        }}>
                            <FacebookIcon />
                        </IconButton>
                        <IconButton sx={{ 
                            color: '#4b5563',
                            '&:hover': { 
                                color: '#2563eb',
                                bgcolor: '#f1f5f9'
                            }
                        }}>
                            <TwitterIcon />
                        </IconButton>
                        <IconButton sx={{ 
                            color: '#4b5563',
                            '&:hover': { 
                                color: '#2563eb',
                                bgcolor: '#f1f5f9'
                            }
                        }}>
                            <InstagramIcon />
                        </IconButton>
                        <IconButton sx={{ 
                            color: '#4b5563',
                            '&:hover': { 
                                color: '#2563eb',
                                bgcolor: '#f1f5f9'
                            }
                        }}>
                            <LinkedInIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;

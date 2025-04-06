import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Chip, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const ProductCard = ({ product, onClick }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(price);
    };

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
        >
            <Card 
                onClick={onClick}
                sx={{
                    height: isMobile ? 'auto' : '100%',
                    width: isMobile ? '100%' : 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    borderRadius: '12px',
                    overflow: 'visible',
                    position: 'relative',
                    mx: isMobile ? 'auto' : 0,
                    '&:hover': {
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    },
                }}
            >
                {product.isNew && (
                    <Chip
                        label="New"
                        color="secondary"
                        size="small"
                        sx={{
                            position: 'absolute',
                            top: 12,
                            right: 12,
                            zIndex: 1,
                        }}
                    />
                )}
                <CardMedia
                    component="img"
                    height="240"
                    image={product.image}
                    alt={product.name}
                    sx={{
                        objectFit: 'contain',
                        p: 3,
                        backgroundColor: '#f8f8f8',
                    }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <Typography 
                        variant="h6" 
                        component="h2"
                        sx={{
                            fontWeight: 600,
                            mb: 1,
                            fontSize: '1.1rem',
                            lineHeight: 1.3,
                        }}
                    >
                        {product.name}
                    </Typography>
                    <Typography 
                        variant="body2" 
                        color="text.secondary"
                        sx={{ mb: 2 }}
                    >
                        {product.shortDescription}
                    </Typography>
                    {product.features && product.features.length > 0 && (
                        <Box sx={{ mb: 2, flexGrow: 1 }}>
                            {product.features.slice(0, 3).map((feature, index) => (
                                <Typography 
                                    key={index}
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        mb: 0.5,
                                        '&:before': {
                                            content: '"•"',
                                            mr: 1,
                                            color: 'primary.main'
                                        }
                                    }}
                                >
                                    {feature}
                                </Typography>
                            ))}
                            {product.features.length > 3 && (
                                <Typography 
                                    variant="body2" 
                                    color="primary"
                                    sx={{ mt: 1, fontStyle: 'italic' }}
                                >
                                    +{product.features.length - 3} more features
                                </Typography>
                            )}
                        </Box>
                    )}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography 
                            variant="h6" 
                            color="secondary.main"
                            sx={{ 
                                fontWeight: 600,
                                fontSize: '1.2rem' 
                            }}
                        >
                            {formatPrice(product.price)}
                        </Typography>
                        {product.originalPrice && (
                            <Typography 
                                variant="body2" 
                                color="text.secondary"
                                sx={{ 
                                    textDecoration: 'line-through',
                                    ml: 1 
                                }}
                            >
                                {formatPrice(product.originalPrice)}
                            </Typography>
                        )}
                    </Box>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default ProductCard;

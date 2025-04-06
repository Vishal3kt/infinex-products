import { useState } from 'react';
import { 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Button, 
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  Box
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';

import { ref, onValue } from 'firebase/database';
import { db } from '../firebase/config';

const [products, setProducts] = useState([]);

useEffect(() => {
  const productsRef = ref(db, 'products');
  const unsubscribe = onValue(productsRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const productsArray = Object.entries(data).map(([id, product]) => ({
        id,
        ...product,
      }));
      setProducts(productsArray);
    } else {
      setProducts([]);
    }
  });

  return () => unsubscribe();
}, []);

export default function TradeInOffer() {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [contactInfo, setContactInfo] = useState({
    name: '',
    phone: '',
  });

  const handleCallbackRequest = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleSubmit = () => {
    // Here you would typically send this information to your backend
    console.log('Callback requested for:', selectedProduct?.name);
    console.log('Contact info:', contactInfo);
    setOpen(false);
    // Reset form
    setContactInfo({ name: '', phone: '' });
  };

  const handleWhatsApp = (product) => {
    const message = `Hi, I'm interested in the ${product.name} trade-in offer priced at ${product.price}`;
    const whatsappUrl = `https://wa.me/YOUR_PHONE_NUMBER?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
        Super Value Deals - Trade-In Offers
      </Typography>
      
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: 'contain', p: 2 }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {product.description}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <Typography variant="h6" color="primary">
                    {product.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                    {product.oldPrice}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button 
                    variant="contained" 
                    startIcon={<CallIcon />}
                    onClick={() => handleCallbackRequest(product)}
                    fullWidth
                  >
                    Request Callback
                  </Button>
                  <IconButton 
                    color="success" 
                    onClick={() => handleWhatsApp(product)}
                    sx={{ border: 1, borderColor: 'success.main' }}
                  >
                    <WhatsAppIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Request Callback for {selectedProduct?.name}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Your Name"
            fullWidth
            variant="outlined"
            value={contactInfo.name}
            onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Phone Number"
            fullWidth
            variant="outlined"
            value={contactInfo.phone}
            onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">Submit</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

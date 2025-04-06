import { useState, useEffect } from 'react';
import { ref, push, set, remove, onValue } from 'firebase/database';
import { db } from '../../firebase/config';
import ImageInput from './ImageInput';

import {
  Container,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  Box,
  Typography,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    originalPrice: '',
    description: '',
    image: '',
    keyFeatures: ['', '', '', '', ''],
    isNew: false
  });

  useEffect(() => {
    const productsRef = ref(db, 'products');
    const unsubscribe = onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const productsArray = Object.entries(data).map(([id, product]) => ({
          id,
          ...product,
          keyFeatures: product.keyFeatures || ['', '', '', '', ''],
          isNew: product.isNew || false,
          originalPrice: product.originalPrice || ''
        }));
        setProducts(productsArray);
      } else {
        setProducts([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleOpen = (product = null) => {
    if (product) {
      const productWithDefaults = {
        ...product,
        keyFeatures: product.keyFeatures || ['', '', '', '', ''],
        isNew: product.isNew || false,
        originalPrice: product.originalPrice || ''
      };
      setEditingProduct(productWithDefaults);
      setFormData(productWithDefaults);
    } else {
      setEditingProduct(null);
      setFormData({
        name: '',
        category: '',
        price: '',
        originalPrice: '',
        description: '',
        image: '',
        keyFeatures: ['', '', '', '', ''],
        isNew: false
      });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingProduct(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingProduct) {
        // Update existing product
        await set(ref(db, `products/${editingProduct.id}`), formData);
      } else {
        // Add new product
        await push(ref(db, 'products'), formData);
      }
      handleClose();
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await remove(ref(db, `products/${id}`));
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  const columns = [
    { field: 'name', headerName: 'Product Name', flex: 2 },
    { field: 'category', headerName: 'Category', flex: 1 },
    { field: 'price', headerName: 'Price', flex: 1 },
    { field: 'description', headerName: 'Description', flex: 2 },
    {
      field: 'image',
      headerName: 'Image',
      flex: 1,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <img
            src={params.value}
            alt="Product"
            style={{ width: '80px', height: '80px', objectFit: 'contain' }}
          />
        </Box>
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params) => (
        <Box>
          <IconButton onClick={() => handleOpen(params.row)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => handleDelete(params.row.id)} color="error">
            <DeleteIcon />
          </IconButton>
        </Box>
      ),
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="h4" component="h1">
            Product Management
          </Typography>
          <Button variant="contained" onClick={() => handleOpen()}>
            Add New Product
          </Button>
        </Box>

        <DataGrid
          rows={products}
          columns={columns}
          pageSize={10}
          autoHeight
          disableSelectionOnClick
        />

        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
          <DialogTitle>
            {editingProduct ? 'Edit Product' : 'Add New Product'}
          </DialogTitle>
          <form onSubmit={handleSubmit}>
            <DialogContent>
              <TextField
                label="Name"
                fullWidth
                margin="normal"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
              <TextField
                label="Category"
                fullWidth
                margin="normal"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                required
              />
              <TextField
                label="Price"
                fullWidth
                margin="normal"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
                required
              />
              <TextField
                label="Price"
                fullWidth
                margin="normal"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
                required
                type="number"
                helperText="Enter the discounted price"
              />
              <TextField
                label="Original Price"
                fullWidth
                margin="normal"
                value={formData.originalPrice}
                onChange={(e) =>
                  setFormData({ ...formData, originalPrice: e.target.value })
                }
                required
                type="number"
                helperText="Enter the original price before discount"
              />
              <TextField
                label="Description"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                helperText="Add a detailed description of the product"
              />
              <Typography variant="subtitle1" sx={{ mt: 2, mb: 1 }}>
                Key Features (5 features required)
              </Typography>
              {formData.keyFeatures.map((feature, index) => (
                <TextField
                  key={index}
                  label={`Feature ${index + 1}`}
                  fullWidth
                  margin="normal"
                  value={feature}
                  onChange={(e) => {
                    const newFeatures = [...formData.keyFeatures];
                    newFeatures[index] = e.target.value;
                    setFormData({ ...formData, keyFeatures: newFeatures });
                  }}
                />
              ))}
              <Box sx={{ mt: 2 }}>
                <Typography component="div" sx={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={formData.isNew}
                    onChange={(e) =>
                      setFormData({ ...formData, isNew: e.target.checked })
                    }
                    style={{ marginRight: '8px' }}
                  />
                  Mark as New Product
                </Typography>
              </Box>
              <Box sx={{ mt: 2, mb: 1 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Product Image
                </Typography>
                <ImageInput
                  onImageChange={(base64) => setFormData({ ...formData, image: base64 })}
                  currentImage={formData.image}
                />
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" variant="contained">
                {editingProduct ? 'Update' : 'Add'} Product
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </Paper>
    </Container>
  );
}

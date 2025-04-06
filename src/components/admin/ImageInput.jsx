import { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

export default function ImageInput({ onImageChange, currentImage }) {
  const [preview, setPreview] = useState(currentImage || '');

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        // Check file size (limit to 1MB)
        if (file.size > 1024 * 1024) {
          alert('Image size should be less than 1MB');
          return;
        }

        const base64 = await convertToBase64(file);
        setPreview(base64);
        onImageChange(base64);
      } catch (error) {
        console.error('Error converting image:', error);
        alert('Error processing image');
      }
    }
  };

  const handleRemoveImage = () => {
    setPreview('');
    onImageChange('');
  };

  return (
    <Box sx={{ width: '100%', mb: 2 }}>
      {preview ? (
        <Box sx={{ position: 'relative', display: 'inline-block' }}>
          <img
            src={preview}
            alt="Preview"
            style={{
              maxWidth: '200px',
              maxHeight: '200px',
              objectFit: 'contain',
              marginBottom: '8px'
            }}
          />
          <IconButton
            onClick={handleRemoveImage}
            sx={{
              position: 'absolute',
              top: -8,
              right: -8,
              bgcolor: 'background.paper',
              '&:hover': { bgcolor: 'error.light' }
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      ) : (
        <Button
          component="label"
          variant="outlined"
          startIcon={<AddPhotoAlternateIcon />}
          sx={{ mb: 2 }}
        >
          Upload Image
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={handleImageChange}
          />
        </Button>
      )}
      <Typography variant="caption" color="text.secondary" display="block">
        Max size: 1MB. Recommended: 800x600px
      </Typography>
    </Box>
  );
}

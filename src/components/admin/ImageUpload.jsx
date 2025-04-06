import { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase/config';
import { 
  Button, 
  Box, 
  LinearProgress, 
  Typography,
  IconButton
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ImageUpload({ onImageUpload, currentImage }) {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(currentImage || '');

  const handleFileSelect = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setUploading(true);
    const fileExtension = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExtension}`;
    const storageRef = ref(storage, `products/${fileName}`);
    
    // Set metadata to handle CORS
    const metadata = {
      contentType: file.type,
      customMetadata: {
        'Access-Control-Allow-Origin': '*',
      }
    };
    
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        console.error('Upload error:', error);
        setUploading(false);
      },
      async () => {
        const downloadURL = await getDownloadURL(storageRef);
        setPreviewUrl(downloadURL);
        onImageUpload(downloadURL);
        setUploading(false);
      }
    );
  };

  const handleRemoveImage = () => {
    setPreviewUrl('');
    onImageUpload('');
  };

  return (
    <Box sx={{ width: '100%', mb: 2 }}>
      {previewUrl ? (
        <Box sx={{ position: 'relative', display: 'inline-block' }}>
          <img
            src={previewUrl}
            alt="Product preview"
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
          startIcon={<CloudUploadIcon />}
          sx={{ mb: 2 }}
          disabled={uploading}
        >
          Upload Image
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={handleFileSelect}
          />
        </Button>
      )}

      {uploading && (
        <Box sx={{ width: '100%', mt: 1 }}>
          <LinearProgress variant="determinate" value={uploadProgress} />
          <Typography variant="body2" color="text.secondary" align="center">
            {Math.round(uploadProgress)}%
          </Typography>
        </Box>
      )}
    </Box>
  );
}

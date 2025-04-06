import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import Layout from '../pages/Layout';

const LoadingSpinner = () => (
  <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
    <CircularProgress />
  </Box>
);

const ProductTop = lazy(() => import('../components/ProductTop'));
const Dashboard = lazy(() => import('../components/admin/Dashboard'));
const About = lazy(() => import('../components/About'));
const Contact = lazy(() => import('../components/Contact'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/" element={<Layout><ProductTop /></Layout>} />
      </Routes>
    </Suspense>
  );
}

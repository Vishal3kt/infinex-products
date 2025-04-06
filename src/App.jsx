import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes';
import initializeDatabase from './firebase/initializeDatabase';

const App = () => {
  React.useEffect(() => {
    initializeDatabase();
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow w-full max-w-full overflow-x-hidden py-12">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

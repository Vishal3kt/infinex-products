import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import NewsLetter from './components/NewsLetter';
import ProductTop from './components/ProductTop';
import Layout from './pages/Layout';
import Card from './components/Card';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/card" element={<Card />} />

        <Route
          path="/"
          element={
            <>
              <Main />
              <Layout>
                <ProductTop />
                <Feature />
                <Banner />
                <NewsLetter />
              </Layout>
            </>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

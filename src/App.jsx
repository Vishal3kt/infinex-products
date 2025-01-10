import './App.css'
import Banner from './components/Banner'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import NewsLetter from './components/NewsLetter'
import ProductTop from './components/ProductTop'
import Layout from './pages/Layout'

function App() {

  return (
    <>
      <Header />
      <Main />
      <Layout>
        <Feature />
        <ProductTop />
        <Banner />
        <NewsLetter />
      </Layout>
      <Footer />
    </>
  )
}

export default App

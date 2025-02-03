import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header/Header';
import MainContent from './components/main-component/Main';
import Footer from './components/footer/Footer';
// import App from './components/app/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <MainContent />
    <Footer />
  </StrictMode>,
)

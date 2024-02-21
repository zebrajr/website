import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FootPadding from './components/FootPadding';

// Import Pages
import LandingPage from './pages/LandingPage';
import QuotesPage from './pages/QuotesPage';
import LifeTipsPage from './pages/LifeTipsPage';

function App() {
    return (
        <Router>
        <div className="App">
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/quotes/" element={<QuotesPage />} />
                    <Route path="/lifetips/" element={<LifeTipsPage />} />
                </Routes>
            </main>
            <Footer />
            <FootPadding />
        </div>
        </Router>
    );
}

export default App;

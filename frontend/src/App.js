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

function App() {
    return (
        <div className="App">
        <Router>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/" element={<QuotesPage />} />
                </Routes>
            </main>
            <Footer />
            <FootPadding />
        </Router>
        </div>
    );
}

export default App;

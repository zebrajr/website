import './App.css';

import React from 'react';
import Navbar from './components/Navbar';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Navbar />
            <main>
                <section id="home">
                    <h1>Welcome to My Portfolio</h1>
                    <p>Discover my projects and more.</p>
                </section>
                <ProjectList />
                {/* You can add more sections here */}
            </main>
            <Footer />
        </div>
    );
}

export default App;

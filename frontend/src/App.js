import './App.css';

import React from 'react';
import Navbar from './components/Navbar';
import WelcomeText from './components/Welcome';
import ProjectList from './components/ProjectList';
import ProjectsText from './components/ProjectsText';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Navbar />
            <main>
                <WelcomeText />
                <ProjectsText />
                <ProjectList />
            </main>
            <Footer />
        </div>
    );
}

export default App;

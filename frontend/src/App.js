import './App.css';

import React from 'react';
import Navbar from './components/Navbar';
import WelcomeText from './components/Welcome';
import ProjectList from './components/ProjectList';
import ProjectsText from './components/ProjectsText';
import CompetenciesSkills from './components/Skills';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Navbar />
            <main>
                <WelcomeText />
                <ProjectsText />
                <ProjectList />
                <CompetenciesSkills />
            </main>
            <Footer />
        </div>
    );
}

export default App;

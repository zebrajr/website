import './App.css';

import React from 'react';
import Navbar from './components/Navbar';
import WelcomeText from './components/Welcome';
import AboutMe from './components/AboutMe';
import ProjectList from './components/ProjectList';
import ProjectsText from './components/ProjectsText';
import OnlinePresence from './components/OnlinePresence';
import CompetenciesSkills from './components/Skills';
import Footer from './components/Footer';
import FootPadding from './components/FootPadding';

function App() {
    return (
        <div className="App">
            <Navbar />
            <main>
                <WelcomeText />
                <AboutMe />
                <ProjectsText />
                <ProjectList />
                <CompetenciesSkills />
                <OnlinePresence />
            </main>
            <Footer />
            <FootPadding />
        </div>
    );
}

export default App;

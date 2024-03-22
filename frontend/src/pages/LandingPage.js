import React from 'react';

import WelcomeText from '../components/Welcome';
import AboutMe from '../components/AboutMe';
import ProjectList from '../components/ProjectList';
import ProjectsText from '../components/ProjectsText';
import OnlinePresence from '../components/OnlinePresence';
import CompetenciesSkills from '../components/Skills';



function LandingPage() {
    return(
        <div>
            <WelcomeText />
            <AboutMe />
            <ProjectsText />
            <ProjectList />
            <CompetenciesSkills />
            <OnlinePresence />
        </div>
    );
}

export default LandingPage;
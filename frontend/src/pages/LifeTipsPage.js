import React, { useEffect, useState, useCallback } from 'react';

import TipsTypeSelector from '../components/LifeTipsHeader';
import LifeTipsQuotesComponent from '../components/LifeTipsQuotes';

const defaultComponentLoading = 'LifeTipsQuotes';


const pStyles = [
    {
        fontSize: '16px',
        color: 'navy',
        display: 'inline'
    },
    {
        fontSize: '16px',
        color: 'crimson',
        display: 'inline'
    },
    {
        fontSize: '16px',
        color: 'gold',
        display: 'inline'
    },
    {
        fontSize: '16px',
        color: 'dodgerBlue',
        display: 'inline'
    },
    {
        fontSize: '16px',
        color: 'olive',
        display: 'inline'
    }
]


const selectRandomPStyle = () => {
    return Math.floor(Math.random() * pStyles.length);
}


function LifeTipsPage() {
    const [CurrentComponent, setCurrentComponent] = useState(null);

    const handleComponentLoaded = (Component) => {
        setCurrentComponent(() => Component);
    };

    return (
        <div>
          <TipsTypeSelector onComponentLoaded={handleComponentLoaded} />
          <div>
            {/* Render the dynamically loaded component if it exists */}
            {CurrentComponent ? <CurrentComponent /> : 'Select a component to display.'}
          </div>
        </div>
      );
}

export default LifeTipsPage;
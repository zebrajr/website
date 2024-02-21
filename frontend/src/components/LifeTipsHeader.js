import React, { useState } from 'react';

import LifeTipsQuotesComponent from '../components/LifeTipsQuotes';

function TipsTypeSelector({ onComponentLoaded }) {
    const loadComponent = async (componentName) => {
      try {
        const { default: SelectedComponent } = await import(`../components/${componentName}`);
        onComponentLoaded(SelectedComponent); // Use the callback to pass the loaded component
      } catch (error) {
        console.error('Error loading component: ', error);
        onComponentLoaded(null); // Handle error case
      }
    };
  
    return (
      <div className="lifeTipsTypeSelector">
        <div>
          <button onClick={() => loadComponent('LifeTipsQuotes')}>Quotes</button>
          <button onClick={() => loadComponent('LifeTipsTips')}>Tips</button>
        </div>
      </div>
    );
  }

export default TipsTypeSelector;
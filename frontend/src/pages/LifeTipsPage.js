import React, { useState } from 'react';

import TipsTypeSelector from '../components/LifeTipsHeader';
import LifeTipsComponent from '../components/LifeTips'

//const defaultComponentLoading = 'LifeTipsQuotes';


function LifeTipsPage() {
    const [filePath, setFilePath] = useState(null);

    return (
        <div>
            <TipsTypeSelector onComponentLoaded={setFilePath} />
            {filePath && <LifeTipsComponent filePath={filePath} />}
        </div>
    );
}

export default LifeTipsPage;
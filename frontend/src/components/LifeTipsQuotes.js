import React, { useEffect, useState, useCallback } from 'react';

const lifeTipContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    alignItems: 'center',
    justifyContent: 'center'
}

const lifeTipSpanStyle = {
    flex: '1 0 19%',
    padding: '5px',
    textAlign: 'center',
}

const useFetchData = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(setData);
    }, [url]);

    return data;
};


function LifeTipsQuotesComponent() {
    const lifeTipsData = useFetchData('/lifetips/quotes.json');

    return (
        <div style={lifeTipContainerStyle}>
            {lifeTipsData && lifeTipsData.map((lifeTipElement, index) => (
                <span className='quotes lifetips' style={ lifeTipSpanStyle }>
                    {lifeTipElement.tip}
                    {lifeTipElement.source && ` - ${lifeTipElement.source}`}
                </span>
            ))}
        </div>
    );
}

export default LifeTipsQuotesComponent;
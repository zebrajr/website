import React, { useEffect, useState } from 'react';

const lifeTipContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    alignItems: 'center',
    justifyContent: 'center'
}

const lifeTipSpanStyle = {
    flex: '1 0 19%',
    textAlign: 'center',
    padding: '25px 50px 25px 50px',
    borderRadius: '25px',
    background: '#FFBD33',
    maxWidth: '450px'
}

const backgroundDivColors = [
    "#FFBD33",
    "#3375FF",
    "#33FFBD"
]


const selectRandomBackgroundColor = () => {
    let backgroundColorSelection =  Math.floor(Math.random() * backgroundDivColors.length);
    let selectedBackgroundColor = backgroundDivColors[backgroundColorSelection];
    let combinedSytle = {
        ...lifeTipSpanStyle,
        backgroundColor: selectedBackgroundColor
    };
    return combinedSytle;
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

function LifeTipsComponent({ filePath }) {
    const lifeTipsData = useFetchData(filePath);

    return (
        <div style={lifeTipContainerStyle}>
            {lifeTipsData && lifeTipsData.map((lifeTipElement, index) => (
                // <span className='quotes lifetips' style={ lifeTipSpanStyle }>
                <span className='quotes lifetips' style={ selectRandomBackgroundColor() }>
                    {lifeTipElement.tip}
                    {lifeTipElement.source && ` - ${lifeTipElement.source}`}
                </span>
            ))}
        </div>
    );
}

export default LifeTipsComponent;
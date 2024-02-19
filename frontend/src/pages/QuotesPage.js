import React, { useEffect, useState, useCallback } from 'react';

const quoteDivContainerStyle = {
    display: 'block',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    marginTop: '50px',
    marginBottom: '20px',
    width: '100%',
    paddingLeft: '50px',
    paddingRight: '50px',
    boxSizing: 'border-box',
    wordWrap: 'break-word'
}

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

const useFetchData = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(setData);
    }, [url]);

    return data;
};


const selectRandomPStyle = () => {
    return Math.floor(Math.random() * pStyles.length);
}


function QuotesPage() {
    const quotesData = useFetchData('/quotes/movies.json');

    return (
        <div>
            {quotesData && quotesData.map((quote, index) => (
                <div className='quotes movies' style={quoteDivContainerStyle}>
                    {quote && quote.quotes.map((individualQuote, index) => (
                        <p
                            key={index}
                            style={pStyles[selectRandomPStyle(2)]}>
                            {individualQuote} <b>|</b>&nbsp;
                        </p>
                    ))}
                    <h3>
                        <a href={quote.reference} target='_blank'>
                            {quote.source}
                        </a>
                    </h3>
                </div>
            ))}
        </div>
    );
}

export default QuotesPage;
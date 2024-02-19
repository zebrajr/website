import React, { useEffect, useState, useCallback } from 'react';

const pStyles = [
    {
        fontSize: '16px',
        color: 'navy'
    },
    {
        fontSize: '16px',
        color: 'red'
    },
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


const selectRandomPStyle = (max) => {
    return Math.floor(Math.random() * max);
}


function QuotesPage(){
    const quotesData = useFetchData('/quotes/movies.json');

    return (
        <div>
            { quotesData && quotesData.map((quote, index) => (
                <p
                key={ index }
                style={ pStyles[selectRandomPStyle(2)] }>
                    {quote.quote} -
                    <a href={ quote.reference } target='_blank'>{ quote.source }</a>
                    </p>
            ))}
        </div>
    );
}

export default QuotesPage;
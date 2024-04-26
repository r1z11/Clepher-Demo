import React, { useState, useEffect } from 'react';
import { sampleData } from '../constants/Data';

function Content() {
    const [data, setData] = useState<any>(null);

    const apiKey = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        const query = 'https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=' + apiKey;
        console.log('fetching query', query);

        const fetchData = async () => {
            try {
                const response = await fetch(query);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                console.log('response ok', response);
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        console.log('data', data ? data : data);
    }, [data])

    function convertTimestampToFullDate(timestamp: string) {
        // Create a new Date object with the timestamp
        const date = new Date(parseInt(timestamp));
        console.log('date', date)

        // Get the full date components
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
        const day = date.getDate().toString().padStart(2, '0');

        // Return the full date string
        return `${year}-${month}-${day}`;
    }

    return (
        <div className="justify-center max-w-3xl mx-auto">
            {data?.feed ? (
                <div className="my-10 text-left px-10 pt-10">
                    {data.feed.map((item: any, index: number) => (
                        <div key={index} className="mt-10">
                            <img src={item?.banner_image} className="flex-1 rounded-lg" />
                            <a href={item?.url} target="_blank" className="text-sky-800"><h2 className="font-golos-bold mt-3 text-3xl">{item?.title}</h2></a>
                            <p className="font-golos-regular mt-3 text-l">{item?.summary}</p>
                            <a href={item?.source_domain} target="_blank"><p className="font-golos-bold mt-3 text-xl text-sky-800">{item?.source}</p></a>
                            <p className="font-golos-regular mt-3 text-l">Category: {item?.category_within_source}</p>
                            <p className="font-golos-regular mt-3 text-l">Date: {convertTimestampToFullDate(item?.time_published)}</p>
                            <div className="font-golos-regular mt-3">Topics: {item?.topics.map((item: any, index: number) => (
                                <span key={index} className=" text-l bg-green-700 py-1 px-3 rounded-xl text-white mx-1 my-1">{item?.topic}</span>
                            ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="font-golos-extra-bold mt-10">Loading...</div>
            )}
        </div>
    );
}

export default Content;

import React, { useState, useEffect } from 'react';

import { sampleData } from '../constants/Data';
import { useGetNewsQuery } from '../services/AlphaVantage';
import { useAppSelector } from '../hooks';

function Content() {

    const reduxData = useAppSelector(state => state.data.data)
    const loading = useAppSelector(state => state.data.loading)

    const [stateData, setData] = useState<any>(null);
    const [msg, setMsg] = useState('');

    const { data, error, isLoading } = useGetNewsQuery()

    // Fetch the data from the API
    useEffect(() => {
        console.log('state data:', data);

        // Set sample data feed if API limit is reached
        if (data?.feed) {
            setData(data);
            setMsg('');
        } else {
            setData(sampleData);
            setMsg('API limit reached. Using sample data');
        }
    }, [data]);

    // Update the state data when redux data changes
    useEffect(() => {
        console.log('redux data:', reduxData);

        // Set sample data feed if API limit is reached
        if (reduxData?.feed) {
            setData(reduxData);
            setMsg('');
        } else {
            setData(sampleData);
            setMsg('API limit reached. Using sample data');
        }
    }, [reduxData]);

    // Log data fetch errors when they occur
    useEffect(() => {
        console.log('error:', error);
    }, [error, loading]);

    // Convert the timestamp to human readable format
    function convertTimestampToFullDate(timestamp: string) {
        // Create a new Date object with the timestamp
        const date = new Date(parseInt(timestamp));
        // console.log('date', date)

        // Get the full date components
        const year = date.getFullYear().toString();
        const month = (date.getMonth() + 1).toString(); // Months are zero-based
        const day = date.getDate().toString();

        // Return the full date string
        return `${year}-${month}-${day}`;
    }

    return (
        <div className="justify-center max-w-3xl mx-auto pt-10">
            {msg.length > 0 ? <p className="font-golos-regular mt-20 text-xl mx-auto text-red-600">{msg}</p> : null}

            {error ? <p className="font-golos-regular mt-20 text-xl mx-auto text-red-600">{String(error)}</p> : null}

            {!isLoading || !loading ? (
                <div className="mb-10 text-left px-10 pt-10">
                    {stateData?.feed.map((item: any, index: number) => (
                        <div key={index} className="mt-10">
                            <img src={item?.banner_image} className="flex-1 rounded-lg" />

                            <a href={item?.url} target="_blank" className="hover:text-amber-500"><h2 className="font-golos-bold mt-3 text-3xl">{item?.title}</h2></a>

                            <p className="font-golos-regular mt-3 text-l">{item?.summary}</p>

                            <a href={item?.source_domain} target="_blank"><p className="font-golos-bold mt-3 text-xl hover:text-amber-500">{item?.source}</p></a>

                            <p className="font-golos-regular mt-3 text-l">Category: {item?.category_within_source}</p>

                            <p className="font-golos-regular mt-3 text-l">Date: {convertTimestampToFullDate(item?.time_published)}</p>

                            <div className="font-golos-regular mt-3">Authors: {item?.authors.map((item: any, index: number) => (
                                <span key={index} className="text-l m-2">{item}</span>
                            ))}</div>

                            <div className="font-golos-regular mt-3">Topics: {item?.topics.map((item: any, index: number) => (
                                <span key={index} className="text-l bg-amber-500 py-1 px-3 rounded-xl text-black m-2">{item?.topic}</span>
                            ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="font-golos-extra-bold mt-20 mx-auto text-3xl">Loading...</div>
            )}
        </div>
    );
}

export default Content;

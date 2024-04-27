import React, { useEffect } from 'react';
import { useAppDispatch } from '../hooks'

import { setData, setStatus } from '../store/reducers/Data'
import { alphaVantageApi } from '../services/AlphaVantage';


function NavBar() {

    const dispatch = useAppDispatch()
    const [trigger, { data, isLoading }] = alphaVantageApi.endpoints.getTopics.useLazyQuery()

    useEffect(() => {
        console.log('fetching topic...', isLoading)

        if (data) {
            dispatch(setStatus(true))
            dispatch(setData(data))
        }
    }, [data])

    return (
        <div className="flex absolute top-0 left-0 flex-1 flex-row justify-between align-center w-full px-10 py-5 bg-zinc-900">
            <h2 className="font-golos-extra-bold text-xl text-white">Clepher Demo</h2>

            <div className='flex flex-row'>

                <button onClick={() => trigger('technology')}><h2 className="font-golos-regular text-l text-white mr-3 hover:text-amber-500">Tech</h2></button>

                <button onClick={() => trigger('blockchain,earnings')}><p className="font-golos-regular text-l text-white mr-3 hover:text-amber-500">Blockchain</p></button>

                <button onClick={() => trigger('ipo')}><h2 className="font-golos-regular text-l text-white mr-3 hover:text-amber-500">IPO</h2></button>

                <button onClick={() => trigger('mergers_and_acquisitions')}><h2 className="font-golos-regular text-l text-white mr-3 hover:text-amber-500">Mergers & Acquisitions</h2></button>

                <button onClick={() => trigger('financial_markets,finance')}><h2 className="font-golos-regular text-l text-white mr-3 hover:text-amber-500">Financial Markets</h2></button>

                <button onClick={() => trigger('economy_fiscal,economy_monetary,economy_macro')}><h2 className="font-golos-regular text-l text-white mr-3 hover:text-amber-500">Economy</h2></button>

                <button onClick={() => trigger('energy_transportation,manufacturing,retail_wholesale')}><h2 className="font-golos-regular text-l text-white mr-3 hover:text-amber-500">Energy</h2></button>

                <button onClick={() => trigger('real_estate')}><h2 className="font-golos-regular text-l text-white mr-3 hover:text-amber-500">Real Estate</h2></button>
            </div>
        </div>
    );
}

export default NavBar;
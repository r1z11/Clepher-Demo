import React from 'react';
import { useAppSelector, useAppDispatch } from '../hooks'

import { setData } from '../store/reducers/Data'


function NavBar() {
    // The `state` arg is correctly typed as `RootState` already
    const count = useAppSelector((state) => state.data.data)
    const dispatch = useAppDispatch()

    return (
        <div className="flex absolute top-0 left-0 flex-1 flex-row justify-between align-center w-full px-10 py-5 bg-zinc-900">
            <h2 className="font-golos-extra-bold text-xl text-white">Clepher Demo</h2>

            <div className='flex flex-row'>
                <button onClick={() => { }}><p className="font-golos-regular text-l text-white mr-3 hover:text-amber-500">Blockchain</p></button>
                <a href="#"><h2 className="font-golos-regular text-l text-white mr-3 hover:text-amber-500">IPO</h2></a>
                <a href="#"><h2 className="font-golos-regular text-l text-white mr-3 hover:text-amber-500">Mergers & Acquisitions</h2></a>
                <a href="#"><h2 className="font-golos-regular text-l text-white mr-3 hover:text-amber-500">Financial Markets</h2></a>
                <a href="#"><h2 className="font-golos-regular text-l text-white mr-3 hover:text-amber-500">Economy</h2></a>
                <a href="#"><h2 className="font-golos-regular text-l text-white mr-3 hover:text-amber-500">Energy</h2></a>
                <a href="#"><h2 className="font-golos-regular text-l text-white mr-3 hover:text-amber-500">Real Estate</h2></a>
            </div>
        </div>
    );
}

export default NavBar;
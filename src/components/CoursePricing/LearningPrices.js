import React from 'react';
import { useState } from 'react';
import PricingTable from './PricingTable';


export default function LearningPrices(props) {

    const [Opt, setOpt] = useState(3)
    const LearningPrices = () => {
        switch (Opt) {
            case 1:
                //put prices for 1:1
                return <PricingTable TableData={props.one_one}/>;
                break;
            case 2:
                //put prices for 1:2
                return <PricingTable TableData={props.one_two}/>;
                break;  
            case 3:
                //put prices for 1:4
                return <PricingTable TableData={props.one_four}/>;
                break;
            default:
                break;
        }
    };


    return <div>
        <div className='w-full flex justify-center fadeIN'>
            <a onClick={() => setOpt(1)} id={Opt === 1 ? 'btnP' : ''} class="flex flex-col text-center buttons bg-white py-2.5 px-4 rounded-lg shadow lg:mx-3">
                <h1 className='lg:text-xl font-medium text-md'>Personal Learning</h1>
                <h2 className='text-gray-800 lg:text-sm text-xs'>(1 Teacher & 1 Student)</h2>
            </a>
            <a onClick={() => setOpt(2)} id={Opt === 2 ? 'btnP' : ''} class="flex flex-col text-center buttons bg-white  py-2.5 px-4 rounded-lg shadow lg:mx-3">
                <h1 className='lg:text-xl font-medium text-md'>Duo Learning</h1>
                <h2 className='text-gray-800 lg:text-sm text-xs'>(1 Teacher & 2 Student)</h2>
            </a>
            <a onClick={() => setOpt(3)} id={Opt === 3 ? 'btnP' : ''} class="flex flex-col text-center buttons bg-white  py-2.5 px-4 rounded-lg shadow lg:mx-3">
                <h1 className='lg:text-xl font-medium text-md'>Group Learning</h1>
                <h2 className='text-gray-800 lg:text-sm text-xs'>(1 Teacher & 6 Student)</h2>
            </a>
        </div>
        <LearningPrices />
    </div>;
}

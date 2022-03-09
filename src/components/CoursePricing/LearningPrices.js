import React from 'react';
import { useState } from 'react';
import PricingTable from './PricingTable';


export default function LearningPrices(props) {

    const [Opt, setOpt] = useState(1)
    const LearningPrices = () => {
        switch (Opt) {
            case 1:
                //put prices for 1:1
                return <PricingTable A1price={props.one_one.a1_discounted} A1priceOG={props.one_one.a1_initial} A2price={props.one_one.a2_discounted} A2priceOG={props.one_one.a2_initial} B1price={props.one_one.b1_discounted} B1priceOG={props.one_one.b1_initial} B2price={props.one_one.b2_discounted} B2priceOG={props.one_one.b2_initial} A1Content={props.one_one.a1_content} A2Content={props.one_one.a2_content} B1Content={props.one_one.b1_content} B2Content={props.one_one.b2_content}/>;
                break;
            case 2:
                //put prices for 1:2
                return <PricingTable A1price={props.one_two.a1_discounted} A1priceOG={props.one_two.a1_initial} A2price={props.one_two.a2_discounted} A2priceOG={props.one_two.a2_initial} B1price={props.one_two.b1_discounted} B1priceOG={props.one_two.b1_initial} B2price={props.one_two.b2_discounted} B2priceOG={props.one_two.b2_initial} A1Content={props.one_two.a1_content} A2Content={props.one_two.a2_content} B1Content={props.one_two.b1_content} B2Content={props.one_two.b2_content}/>;
                break;  
            case 3:
                //put prices for 1:4
                return <PricingTable A1price={props.one_four.a1_discounted} A1priceOG={props.one_four.a1_initial} A2price={props.one_four.a2_discounted} A2priceOG={props.one_four.a2_initial} B1price={props.one_four.b1_discounted} B1priceOG={props.one_four.b1_initial} B2price={props.one_four.b2_discounted} B2priceOG={props.one_four.b2_initial} A1Content={props.one_four.a1_content} A2Content={props.one_four.a2_content} B1Content={props.one_four.b1_content} B2Content={props.one_four.b2_content}/>;
                break;
            default:
                break;
        }
    };


    return <div>
        <div className='w-full flex justify-center fadeIN'>
            <a onClick={() => setOpt(1)} id={Opt === 1 ? 'btnP' : ''} class="flex flex-row text-center buttons bg-white py-2.5 px-4 rounded-lg shadow mx-3">
                <h1 className='text-xl font-medium'>Personal Learning</h1>
                <h2 className='text-gray-800 text-sm'>(1 Teacher & 1 Student)</h2>
            </a>
            <a onClick={() => setOpt(2)} id={Opt === 2 ? 'btnP' : ''} class="flex flex-row text-center buttons bg-white  py-2.5 px-4 rounded-lg shadow mx-3">
                <h1 className='text-xl font-medium'>Duo Learning</h1>
                <h2 className='text-gray-800 text-sm'>(1 Teacher & 2 Student)</h2>
            </a>
            <a onClick={() => setOpt(3)} id={Opt === 3 ? 'btnP' : ''} class="flex flex-row text-center buttons bg-white  py-2.5 px-4 rounded-lg shadow mx-3">
                <h1 className='text-xl font-medium'>Group Learning</h1>
                <h2 className='text-gray-800 text-sm'>(1 Teacher & 6 Student)</h2>
            </a>
        </div>
        <LearningPrices />
    </div>;
}

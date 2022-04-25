import React from 'react';
import './Curriculum.css';


export default function Sec1() {
    return (<div>

        <div className="w-full flex flex-col lg:flex-row items-center px-10 py-10 lg:px-40 lg:py-20">
            <div className='w-full lg:w-2/5'>
                <h1 className='py-2 text-[#f2b919] text-lg font-medium uppercase tracking-[0.6rem]'>OUR CURRICULUM</h1>
                <h2 className='font-semib text-4xl text-black'>Become fluent in any language</h2>
                <ul>
                    <li className='flex flex-row py-3'><img src='/images/icons8-tick-box-20.png' alt='img' className='pr-2 h-[21px]' />Live 1:1, Duo and Group Online Classes</li>
                    <li className='flex flex-row py-3'><img src='/images/icons8-tick-box-20.png' alt='img' className='pr-2 h-[21px]' />Flexible timings</li>
                    <li className='flex flex-row py-3'><img src='/images/icons8-tick-box-20.png' alt='img' className='pr-2 h-[21px]' />Take learning beyond the classroom</li>
                </ul>
            </div>
            <div className='flex justify-center w-full lg:w-3/5'>
                <img className='w-3/4' src='\images\Curriculum_banner_1.png' alt='img' />
            </div>
        </div>
        
    </div>
    )
}

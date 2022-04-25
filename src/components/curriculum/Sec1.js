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
        <div className="mb-10 lg:flex flex-row h-auto w-full bg-[#f4f8fb]">
            <div className='flex flex-col space-y-6 px-10 lg:px-20 justify-center lg:w-3/4'>
                <h1 className='text-3xl font-medium lg:text-4xl pt-10 lg:pt-0'>Foreign Language Education for Everyone!</h1>
                <p className='text-lg '>Live online language classes for kids, adolscents and adults at The Language Network, pioneering online language schools, with the assistance of professional teachers.</p>
                <p className='text-lg '>With our professional live online language classes, TLN is the complete solution to perfectly assist kids in their path to fluency.</p>
                <div>
                    <a href="/getstarted">
                        <button class="bg-[#13BFAB] hover:bg-teal-400 text-white font-bold py-3 px-4 rounded w-auto" >
                            JOIN A COURSE
                        </button>
                    </a>
                </div>
            </div>
            <div className='flex align-center px-10 py-10 lg:px-20 lg:py-20'>
                <img src='/images/Adults_online-lecture.png' alt='img' className='certificate-img' />
            </div>
        </div>
    </div>
    )
}

import React from 'react'
import { useState } from 'react';
import KidsTable from './KidsTable';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper';

function Kids() {

    const [kidkey, setKey] = useState(1);
    const Description = () => {
        switch (kidkey) {
            case 1:
                return (
                    <p className='w-full text-gray-500 fadeIN'>
                        TLN methodically focuses on aspects of language that boost performance and increases awareness. Our experts focus on a cultural-linguistic approach to further guide the students about a respective language.
                    </p>
                );
            case 2:
                return (
                    <p className='w-full text-gray-500 fadeIN'>
                        Language learning for Kids is a boon. Kids adapt to the culture they are born into. However, teaching new languages to kids kickstarts their brains. This leads to a better understanding of the world and leads the way to the improvement of critical thinking abilities.
                    </p>
                )
            case 3:
                return (
                    <p className='w-full text-gray-500 fadeIN'>
                        Teaching new things to children at an early age strokes their brains and leads to greatness. Problem Solving skills are next in the line to tag along with language learning.
                    </p>
                )
            case 4:
                return (
                    <p className='w-full text-gray-500 fadeIN'>
                        Language learning for Kids strengthens the brain neurons, that send and store information. This enhanced strength leads to improved memory in kids.
                    </p>
                )

            default:
                break;
        }
    }

    return (
        <div>
            <div className="fadeIN Home-container-2 w-full lg:px-20 mt-4 py-10">
                <h2>Bring The World To Your Child</h2>
                <h1 className='mb-6'>Choose a language</h1>
                <div className='Home-container-2-imgs hidden lg:flex'>
                    <a className='my-2 text-black hover:text-black font-medium' href='/english-course-kids'><img className='Home-container-2-img' alt='img' src='/images/Astronaut-English.png' /><span className='pr-8'>English</span></a>
                    <a className='my-2 text-black hover:text-black font-medium' href='/french-course-kids'><img className='Home-container-2-img' alt='img' src='/images/Astronaut-French-1.png' /><span className='pr-8'>French</span></a>
                    <a className='my-2 text-black hover:text-black font-medium' href='/spanish-course-kids'><img className='Home-container-2-img' alt='img' src='/images/Astronaut-Spanish-1.png' /><span className='pr-8'>Spanish</span></a>
                    <a className='my-2 text-black hover:text-black font-medium' href='/german-course-kids'><img className='Home-container-2-img' alt='img' src='/images/Astronaut-Germany-1.png' /><span className='pr-8'>German</span></a>
                    <a className='my-2 text-black hover:text-black font-medium' href='/mandarin-course-kids'><img className='Home-container-2-img' alt='img' src='/images/Astronaut-Mandarin-1.png' /><span className='pr-8'>Mandarin</span></a>
                    <a className='my-2 text-black hover:text-black font-medium' href='/japanese-course-kids'><img className='Home-container-2-img' alt='img' src='/images/Astronaut-Japanese-1.png' /><span className='pr-8'>Japanese</span></a>
                    <a className='my-2 text-black hover:text-black font-medium' href='/korean-course-kids'><img className='Home-container-2-img' alt='img' src='/images/Astronaut-Korean-1.png' /><span className='pr-8'>Korean</span></a>
                </div>
                <Swiper className='pagi1 block lg:hidden' spaceBetween={5} loop={true} loopFillGroupWithBlank={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1

                        },
                    }}
                    pagination={{
                        "clickable": true
                    }} navigation={true} autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                    }}
                >
                    <SwiperSlide>
                        <a className='m-24 text-black hover:text-black font-medium' href='/french-course-kids'><img className='Home-container-2-img' alt='img' src='/images/Astronaut-French-1.png' /><span className='pr-12'>French</span></a>                    </SwiperSlide>
                    <SwiperSlide>
                        <a className='m-24 text-black hover:text-black font-medium' href='/english-course-kids'><img className='Home-container-2-img' alt='img' src='/images/Astronaut-English.png' /><span className='pr-12'>English</span></a>                    </SwiperSlide>
                    <SwiperSlide>
                        <a className='m-24 text-black hover:text-black font-medium' href='/spanish-course-kids'><img className='Home-container-2-img' alt='img' src='/images/Astronaut-Spanish-1.png' /><span className='pr-12'>Spanish</span></a>                    </SwiperSlide>
                    <SwiperSlide>
                        <a className='m-24 text-black hover:text-black font-medium' href='/german-course-kids'><img className='Home-container-2-img' alt='img' src='/images/Astronaut-Germany-1.png' /><span className='pr-12'>German</span></a>                    </SwiperSlide>
                    <SwiperSlide>
                        <a className='m-24 text-black hover:text-black font-medium' href='/mandarin-course-kids'><img className='Home-container-2-img' alt='img' src='/images/Astronaut-Mandarin-1.png' /><span className='pr-12'>Mandarin</span></a>                    </SwiperSlide>
                    <SwiperSlide>
                        <a className='m-24 text-black hover:text-black font-medium' href='/japanese-course-kids'><img className='Home-container-2-img' alt='img' src='/images/Astronaut-Japanese-1.png' /><span className='pr-12'>Japanese</span></a>                    </SwiperSlide>
                    <SwiperSlide>
                        <a className='m-24 text-black hover:text-black font-medium' href='/korean-course-kids'><img className='Home-container-2-img' alt='img' src='/images/Astronaut-Korean-1.png' /><span className='pr-12'>Korean</span></a>                    </SwiperSlide>
                </Swiper>
            </div>
            {/* <div className='h-[85vh] lg:px-80 text-center flex flex-column items-center justify-center bgimg-2'>
                <h1 className='text-white font-semibold text-4xl mb-12'>Foreign Language Education for Everyone!</h1>
                <p className='text-white font-medium text-lg px-4 mt-2'>Live online language classes for kids, adolscents and adults at The Language Network, pioneering online language schools, with the assistance of professional teachers.</p>
                <p className='text-white font-medium text-lg px-4 mt-2 mb-3'>With our professional live online language classes, TLN is the complete solution to perfectly assist kids in their path to fluency.</p>
                <a href="/getstarted"><button type="button" class="btn btn-outline-light rounded-xl px-8 py-3 font-medium">Get Started</button></a>
                <img src="/images/Ship.png" alt="alt" className='w-[15%] absolute top-[-2.8rem] right-[12rem] lg:block hidden' />
            </div> */}
            {/* <div className='infosec w-full lg:p-20 flex flex-col lg:flex-row items-center mt-24'>
                <div className='p-2 w-full lg:w-[40%]'>
                    <h1 className='font-medium text-3xl'>Learning, unbeknownst to many, starts at a very early age</h1>
                    <p className='text-gray-700 text-md'>Take a look at the various benefits that Early learning in Kids provide</p>
                </div>
                <div className='w-full lg:w-[20%] flex flex-col justify-between'>
                    <a onClick={() => setKey(1)} id={kidkey === 1 ? 'btnP' : ''} class=" bg-white py-3 px-10 mt-3 text-md poppins cursor-pointer text-center rounded-lg shadow ">
                        Increased Awareness
                    </a>
                    <a onClick={() => setKey(2)} id={kidkey === 2 ? 'btnP' : ''} class="bg-white py-3 px-10 mt-3 text-md poppins cursor-pointer text-center rounded-lg shadow ">
                        Boosts Critical Thinking
                    </a>
                    <a onClick={() => setKey(3)} id={kidkey === 3 ? 'btnP' : ''} class=" bg-white py-3 px-10 mt-3 text-md poppins cursor-pointer text-center rounded-lg shadow ">
                        Improves Problem Solving Skills
                    </a>
                    <a onClick={() => setKey(4)} id={kidkey === 4 ? 'btnP' : ''} class=" bg-white py-3 px-10 mt-3 text-md poppins cursor-pointer text-center rounded-lg shadow ">
                        Drastically Improves Memory
                    </a>
                </div>
                <div className='w-full lg:w-[60%] px-4 mt-4 lg:m-0'>
                    <Description />
                </div>
            </div> */}
            <KidsTable />
            <div className="w-full flex justify-center">
                <a href='getstarted'> <button class="bg-teal-500 hover:bg-teal-400 text-white font-bold py-3 px-4 rounded-xl" >
                    Get Started
                </button></a>
            </div>
        </div>
    )
}

export default Kids

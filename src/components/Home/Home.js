import React from 'react';
import { FaCircle } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper';
import './homeRes.css'
import './Home.css';

import Display from "./Display";

import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import Testimonial from './testimonial.js';

import Globe3d from '../Earth/Globe';


// import images for International Exams

import img1 from '../IntExamswiper/exam-dele.jpg';
import img2 from '../IntExamswiper/exam-delf-dalf.jpg';
import img3 from '../IntExamswiper/exam-goethe.jpg';
import img4 from '../IntExamswiper/exam-Hsk.jpg';
import img5 from '../IntExamswiper/exam-ielts.jpg';
import img6 from '../IntExamswiper/exam-JLPT.jpg';
import img7 from '../IntExamswiper/exam-siele.jpg';
import img8 from '../IntExamswiper/exam-TEF.jpg';
import img9 from '../IntExamswiper/exam-TOPIK.jpg';
import Curriculum from '../curriculum/Curriculum';
import GlobeMobile from '../Earth/GlobeMobile';
import Team from '../Footer/Company/AboutUs/Team';



SwiperCore.use([Autoplay, Pagination, Navigation]);





export default function Home() {

    // state = {
    //     didViewCountUp: false
    // };


    // onVisibilityChange = isVisible => {
    //     if (isVisible) {
    //         this.setState({ didViewCountUp: true });
    //     }
    // }

    function changeCol1() {
        document.getElementById('Home-card-text-h1').style.color = '#460090';
        document.getElementById('Home-card-1').style.boxShadow = '0px 0px 38px -10px #460090';
    }

    function changeCol2() {
        document.getElementById('Home-card-text-h2').style.color = '#f2b919';
        document.getElementById('Home-card-2').style.boxShadow = '0px 0px 38px -10px #f2b919';

    }

    function changeCol3() {
        document.getElementById('Home-card-text-h3').style.color = '#13bfab';
        document.getElementById('Home-card-3').style.boxShadow = '0px 0px 38px -10px #13bfab';

    }

    function changeBack() {
        document.getElementById('Home-card-text-h1').style.color = '#000';
        document.getElementById('Home-card-text-h2').style.color = '#000';
        document.getElementById('Home-card-text-h3').style.color = '#000';
        document.getElementById('Home-card-1').style.boxShadow = 'none';
        document.getElementById('Home-card-2').style.boxShadow = 'none';
        document.getElementById('Home-card-3').style.boxShadow = 'none';

    }


    return (
        <div className='Home'>
            <div className='Home-container-1 w-full px-4 lg:px-26 relative h-auto flex flex-col lg:flex-row justify-center items-center content-center flex-wrap' >
                <div className='w-full lg:w-5/12 flex flex-col space-y-6'>
                    <h1 className='flex items-center text-sm lg:text-base font-medium uppercase text-[#13bfab] pt-2'><FaCircle style={{ color: '#f2b919', fontSize: '14px', marginRight: '10px' }} />LIVE ONLINE CLASSES</h1>
                    <h2 className='text-black font-semibold text-5xl'>Learn a Language in less than 3 months</h2>
                    <span>At The Language Network, we help you master a new foreign language of your choice from the comfort of your home.</span>
                    <div><button type="button" class="btn btn-info text-white" style={{ backgroundColor: '#13bfab', borderRadius: '10px', paddingTop: '16px', paddingRight: '30px', paddingBottom: '16px', paddingLeft: '30px', fontSize: '0.82352941176471rem' }}>Book a trial</button></div>
                </div>
                <div className='lg:w-5/12 w-full lg:block hidden'>
                    <Globe3d className='' />
                </div>
                <div className=" w-full absolute flex flex-row justify-center bottom-[-500px] lg:bottom-[-200px]">
                    <div className='overlay-box'>
                        <h1 className='lg:text-2xl text-lg'><CountUp start={0} end={5000} separator=","
                            suffix="+" duration={1}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start}>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp></h1>
                        <h2 className='lg:text-2xl text-base'>Students</h2>
                    </div>
                    <div className='overlay-box'>
                        <div className='stars lg:text-3xl text-base'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></div>
                        <h2 className='lg:text-2xl text-base'>5 Star Rating</h2>
                    </div>
                    <div className='overlay-box'>
                        <h1 className='lg:text-2xl text-lg'><CountUp start={0} end={200} separator=","
                            suffix="+" duration={1}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start}>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp></h1>
                        <h2 className='lg:text-2xl text-base'>Expert Trainers</h2>
                    </div>

                </div>

            </div>

            <div className='w-full lg:hidden block'>
                <GlobeMobile className='' />
            </div>


            <div className="Home-container-2 w-full lg:w-4/5 mt-52 lg:mt-72">
                <h1>START YOUR JOURNEY WITH US!</h1>
                <h2>Select a Foreign Language Course</h2>
                <div className='Home-container-2-imgs'>
                    <a href='/english-course-adults'><img className='Home-container-2-img' alt='img' src='/images/adults-english@300x.png' /></a>
                    <a href='/french-course-adults'><img className='Home-container-2-img' alt='img' src='/images/adults-french@300x.png' /></a>
                    <a href='/spanish-course-adults'><img className='Home-container-2-img' alt='img' src='/images/adults-spanish@300x.png' /></a>
                    <a href='/german-course-adults'><img className='Home-container-2-img' alt='img' src='/images/adults-german@300x.png' /></a>
                    <a href='/mandarin-course-adults'><img className='Home-container-2-img' alt='img' src='/images/adults-mandarin@300x.png' /></a>
                    <a href='/japanese-course-adults'><img className='Home-container-2-img' alt='img' src='/images/adults-japanese@300x.png' /></a>
                    <a href='/korean-course-adults'><img className='Home-container-2-img' alt='img' src='/images/adults-korean@300x.png' /></a>
                </div>
            </div>

            <div className="Home-container-3">
                <h1>
                    Students at The Language Network
                </h1>
                <p>
                    We have created courses, based on students’ age range, keeping in mind each age-groups’ attention and motivation level, so that we can provide the most suitable study curriculum and experience.
                </p>
            </div>

            <div className="w-5/6 lg:flex flex-row space-y-10 lg:space-y-0 mt-12">
                <div className="w-full lg:w-1/3 flex flex-col items-center lg:mx-4 ease-in duration-300" id='Home-card-1' onMouseOver={changeCol1} onMouseLeave={changeBack}>
                    <div className="Home-card-img">
                        <img src='/images/Adolscents@300x.png' alt='img' />
                    </div>
                    <div className='Home-card-text'>
                        <h1 id='Home-card-text-h1'>Kids (6-9 years)</h1>
                        <p>Children in this age range can learn any foreign language with the right professional assistance. Kids have a high sense of creativity and imagination. At, TLN we know how to use this imagination and methodically focuses on aspects of language that boost performance and imagination</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 flex flex-col items-center lg:mx-4 ease-in duration-300" id='Home-card-2' onMouseOver={changeCol2} onMouseLeave={changeBack}>
                    <div className="Home-card-img">
                        <img src='/images/Kids@300x-1.png' alt='img' />
                    </div>
                    <div className='Home-card-text'>
                        <h1 id='Home-card-text-h2'>Adolscents (10-13 years)</h1>
                        <p>Students in this age group are usually energetic, curious, and eager to explore the world! At TLN, we teach more than just the language. We take you through the culture; traditions, clothing, food, festivals, etc. This means that you are learning more than the writing system or pronunciation.</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 flex flex-col items-center lg:mx-4 ease-in duration-300" id='Home-card-3' onMouseOver={changeCol3} onMouseLeave={changeBack}>
                    <div className="Home-card-img">
                        <img src='/images/adults@300x.png' alt='img' />
                    </div>
                    <div className='Home-card-text'>
                        <h1 id='Home-card-text-h3'>Adults (14+ years)</h1>
                        <p>Getting a certificate is an essential part of verifying your language skills. TLN prepares you for all types of language exams with the professional assistance of highly-qualified teachers. We also offer online classes per your convenience.</p>
                    </div>
                </div>
            </div>

            <div className="my-20 lg:flex flex-row h-auto w-full bg-[#f4f8fb]">
                <div className='flex flex-col space-y-6 px-10 lg:px-20 justify-center'>
                    <h1 className='font-bold text-3xl lg:text-4xl'>Our courses are aligned with the CEFR levels</h1>
                    <p className='text-sm text-[#54595f]'>
                        <span className='bold'>
                            CEFR (Common European Framework of Reference for Languages)
                        </span>
                        is an internationally recognized standard that describes your learning progress in more detail. The framework helps you to explain your level from Beginner (A1) to Advanced (C2).
                    </p>
                    <p className='text-sm text-[#54595f]'>
                        All languages we offer are aligned with the CEFR levels, so once you know your level, we can suggest the best classes to get your progress going immediately.
                    </p>
                </div>
                <div className='flex align-center px-10 py-10 lg:px-20 lg:py-20'>
                    <img src='/images/CEFR-LEVELS-1.png' alt='img' />
                </div>
            </div>

            <div className='lg:w-full w-11/12 text-center pt-4 lg:pt-10'>
                <h1 className='text-[#13bfab] text-xl font-medium tracking-widest'>WE PREPARE YOU FOR</h1>
                <h2 className='text-black text-4xl font-medium'>International Exams</h2>
            </div>
            <div className="Home-container-6 lg:px-40">
                <Swiper spaceBetween={5} loop={true} loopFillGroupWithBlank={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1

                        },
                        768: {
                            slidesPerView: 3
                        }
                    }}
                    pagination={{
                        "clickable": true
                    }} navigation={false} autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                    }} >
                    <SwiperSlide className="mb-20">
                        <img src={img1} alt='img' />
                    </SwiperSlide><SwiperSlide className="mb-20">
                        <img src={img2} alt='img' />
                    </SwiperSlide><SwiperSlide className="mb-20">
                        <img src={img3} alt='img' />
                    </SwiperSlide>
                    <SwiperSlide className="mb-20">
                        <img src={img4} alt='img' />
                    </SwiperSlide>
                    <SwiperSlide className="mb-20">
                        <img src={img5} alt='img' />
                    </SwiperSlide>
                    <SwiperSlide className="mb-20">
                        <img src={img6} alt='img' />
                    </SwiperSlide>
                    <SwiperSlide className="mb-20">
                        <img src={img7} alt='img' />
                    </SwiperSlide>
                    <SwiperSlide className="mb-20">
                        <img src={img8} alt='img' />
                    </SwiperSlide>
                    <SwiperSlide className="mb-20">
                        <img src={img9} alt='img' />
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="my-10 py-10 lg:flex flex-row h-auto w-full bg-[#f4f8fb]">
                <div className='flex flex-col space-y-6 px-10 lg:px-40 justify-center lg:w-2/3'>
                    <h1 className='font-bold text-3xl lg:text-4xl'>The Language Network saves you

                        <div class="scroller">
                            <span className='bg-[#13bfab] px-3 text-center'>
                                Time<br />
                                Money
                            </span>
                        </div>
                    </h1>
                    <p className='text-lg '>Our online classes cut out that stressful commute so you can focus your energy on learning. We offer quality courses at affordable prices, with no hidden costs. Up to 30% cheaper than traditional language schools.</p>
                </div>
                <div className='flex align-center px-10 py-10 lg:px-20 lg:py-20'>
                    <div class="progress blue">  <span class="progress-right"> <span class="progress-bar"></span> </span>
                        <div class="progress-value">30% Lower</div>
                    </div>
                </div>
            </div>
            <div className="Home-container-8 mt-14 text-center">
                <h1>FROM LEARNING A NEW LANGUAGE TO LIVING IT!</h1>
                <h2>Why you should learn with The Language Network?</h2>
            </div>
            <div className='w-5/6'>
                <Display />
            </div>
            <div className="my-20 lg:flex flex-row lg:h-[80vh] w-full bg-[#f4f8fb]">
                <div className='flex flex-col space-y-6 px-10 lg:px-20 justify-center lg:w-2/3'>
                    <h1 className='font-bold text-3xl lg:text-4xl'>TRANSFORM YOUR CAREER</h1>
                    <h2 className='text-lg '>Earn Your Certification </h2>
                    <p className='text-lg '>Learn a foreign language as a step to boost your career or improve your CV.</p>
                    <button class="bg-[#13BFAB] w-56 hover:bg-teal-400 text-white font-bold py-3 px-4 rounded" >
                        JOIN A COURSE
                    </button>
                </div>
                <div className='flex align-center justify-center px-10 py-10 lg:px-28 lg:py-28'>
                    <img src='/images/certificate-mockup.png' alt='img' className='certificate-img' />
                </div>
                <img src='/images/dots-circle.png' alt='img' className='dots-circle-1 lg:block hidden' />
                <img src='/images/dots-circle.png' alt='img' className='dots-circle-2 lg:block hidden' />
            </div>


            <div className='w-full'>

                <Curriculum />
            </div>

            <div>
                <div className="items-center justify-center px-3 lg:px-20 flex flex-col justify-center ">
                    <h1 className="flex text-3xl lg:text-4xl font-semibold pt-20 items-center justify-center ">We work as a team</h1>
                    <hr class="h-full flex flex-col justify-center align-center text-center w-ful border-yellow-500 border-2 w-1/4 self-center mt-4 items-center justify-center"></hr>
                    <span className="flex text-lg font-medium pt-10 lg:px-20 text-center">With a fantastic team of over 50+ trainers (and counting!) who make learning entertaining and effortless. Our trainers are qualified with an overall student rating of 5   out of 5.</span>
                </div>
            </div>
                <Team />

            <div className="Home-container-11 mt-20">
                <h1>Happy Testimonials</h1>
                <hr></hr>
                <Testimonial />
            </div>

        </div>

    )
}

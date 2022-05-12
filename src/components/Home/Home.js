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

// import Globe3d from '../Earth/Globe';


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
// import GlobeMobile from '../Earth/GlobeMobile';
import Team from '../Footer/Company/AboutUs/Team';
import Popup from '../curriculum/Pop/Popup'
import Levels from './Levels';


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
        // document.getElementById('Home-card-text-h2').style.color = '#000';
        document.getElementById('Home-card-text-h3').style.color = '#000';
        document.getElementById('Home-card-1').style.boxShadow = 'none';
        // document.getElementById('Home-card-2').style.boxShadow = 'none';
        document.getElementById('Home-card-3').style.boxShadow = 'none';
        document.getElementById('Home-card-text-h2').style.color = '#000';
        document.getElementById('Home-card-2').style.boxShadow = 'none';



    }


    return (
        <div className='Home'>
            <div className='Home-container-1 dark:bg-black bg-cover lg:bg-contain w-full px-4 lg:py-20 lg:px-26 relative h-[auto] flex flex-col lg:flex-row justify-center items-center content-center flex-wrap' >
                <div className='w-full lg:w-5/12 flex flex-col space-y-6 pt-2 lg:pt-0'>
                    <h1 className='flex items-center text-sm lg:text-base font-medium uppercase text-[#13bfab] lg:pt-2'><FaCircle style={{ color: '#f2b919', fontSize: '14px', marginRight: '10px' }} />LIVE ONLINE CLASSES</h1>
                    <h2 className='text-black font-semibold lg:font-medium text-2xl lg:text-5xl'>Learn a Language in less than 3 months</h2>
                    <span className='font-medium '>At The Language Network, we help you master a new foreign language of your choice from the comfort of your home.</span>
                    <a href='/getstarted'><button type="button" class="btn btn-info text-white" style={{ backgroundColor: '#13bfab', borderRadius: '10px', paddingTop: '16px', paddingRight: '30px', paddingBottom: '16px', paddingLeft: '30px', fontSize: '0.82352941176471rem' }}>Get Started</button></a>
                </div>
                <div className='w-full lg:w-6/12 flex items-center justify-center lg:pl-20 mt-7'>
                    {/* <Globe3d className='' /> */}
                    <video width="90%" height="90%" className='rounded-xl'
                        controls
                        muted
                        autoPlay={"autoplay"}
                        preLoad="auto"
                        loop >
                        <source src="/videos/TLN_Hello-in-different-languages.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="w-full absolute flex flex-row justify-center bottom-[-125px] lg:bottom-[-150px]">
                    <div className='overlay-box'>
                        <h1 className='lg:text-3xl text-lg mb-2'><CountUp start={0} end={5000} separator=","
                            suffix="+" duration={1}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start}>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp></h1>
                        <h2 className='lg:text-xl text-base'>Students</h2>
                    </div>
                    <div className='overlay-box'>
                        <div className='stars lg:text-2xl text-base mb-2'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></div>
                        <h2 className='lg:text-xl text-base text-center'>5 Star Rating</h2>
                    </div>
                    <div className='overlay-box'>
                        <h1 className='lg:text-3xl text-lg  mb-2'><CountUp start={0} end={200} separator=","
                            suffix="+" duration={1}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start}>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp></h1>
                        <h2 className='lg:text-xl font-bold text-base'>Trainers</h2>
                    </div>

                </div>

            </div>



            {/* <div className='w-full lg:hidden block'>
                <GlobeMobile className='' />
            </div> */}


            <div className="Home-container-2  lg:pb-[60px] pb-2 w-full lg:w-4/5 mt-52 lg:mt-52">
                <h1>START YOUR JOURNEY WITH US!</h1>
                <h2>Foreign Language Courses We Offer</h2>
                <div className='hidden lg:flex lg:pt-10 w-3/4 lg:w-full sm:space-y-4 lg:space-y-0 py-5'>
                    {/* <a href='/english-course-adults'><img className='Home-container-2-img' alt='img' src='/images/adults-english@300x.png' /></a>
                    <a href='/french-course-adults'><img className='Home-container-2-img' alt='img' src='/images/adults-french@300x.png' /></a>
                    <a href='/spanish-course-adults'><img className='Home-container-2-img' alt='img' src='/images/adults-spanish@300x.png' /></a>
                    <a href='/german-course-adults'><img className='Home-container-2-img' alt='img' src='/images/adults-german@300x.png' /></a>
                    <a href='/mandarin-course-adults'><img className='Home-container-2-img' alt='img' src='/images/adults-mandarin@300x.png' /></a>
                    <a href='/japanese-course-adults'><img className='Home-container-2-img' alt='img' src='/images/adults-japanese@300x.png' /></a>
                    <a href='/korean-course-adults'><img className='Home-container-2-img' alt='img' src='/images/adults-korean@300x.png' /></a> */}
                    <Popup sub="English" a1="/english-course-adults" a2="/english-course-kids" im="/images/English.png" src1="/images/adults-english@300x.png" src2='/images/Astronaut-English.png' />
                    <Popup sub="French" a1="/french-course-adults" a2="/french-course-kids" im="/images/French.png" src1="/images/adults-french@300x.png" src2='/images/Astronaut-French-1.png' />
                    <Popup sub="Spanish" a1="/spanish-course-adults" a2="/spanish-course-kids" im="/images/Spanish.png" src1="/images/adults-spanish@300x.png" src2='/images/Astronaut-Spanish-1.png' />
                    <Popup sub="German" a1="/german-course-adults" a2="/german-course-kids" im="/images/German.png" src1="/images/adults-german@300x.png" src2='/images/Astronaut-Germany-1.png' />
                    <Popup sub="Mandarin" a1="/mandarin-course-adults" a2="/mandarin-course-kids" im="/images/Mandarin.png" src1="/images/adults-mandarin@300x.png" src2='/images/Astronaut-Mandarin-1.png' />
                    <Popup sub="Japanese" a1="/japanese-course-adults" a2="/japanese-course-kids" im="/images/Japanese.png" src1="/images/adults-japanese@300x.png" src2='/images/Astronaut-Japanese-1.png' />
                    <Popup sub="Korean" a1="/korean-course-adults" a2="/korean-course-kids" im="/images/Korean.png" src1="/images/adults-korean@300x.png" src2='/images/Astronaut-Korean-1.png' />
                </div>
                <Swiper className='pagi1 block lg:hidden mb-12 lg:mb-0' spaceBetween={5} loop={true} loopFillGroupWithBlank={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1

                        },
                    }}
                    pagination={false} navigation={true} autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                    }}
                >
                    <SwiperSlide>
                        <Popup sub="English" a1="/english-course-adults" a2="/english-course-kids" im="/images/English.png" src1="/images/adults-english@300x.png" src2='/images/Astronaut-English.png' />                    </SwiperSlide><SwiperSlide>
                        <Popup sub="French" a1="/french-course-adults" a2="/french-course-kids" im="/images/French.png" src1="/images/adults-french@300x.png" src2='/images/Astronaut-French-1.png' />                    </SwiperSlide><SwiperSlide>
                        <Popup sub="Spanish" a1="/spanish-course-adults" a2="/spanish-course-kids" im="/images/Spanish.png" src1="/images/adults-spanish@300x.png" src2='/images/Astronaut-Spanish-1.png' />                    </SwiperSlide><SwiperSlide>
                        <Popup sub="German" a1="/german-course-adults" a2="/german-course-kids" im="/images/German.png" src1="/images/adults-german@300x.png" src2='/images/Astronaut-Germany-1.png' />                    </SwiperSlide><SwiperSlide>
                        <Popup sub="Mandarin" a1="/mandarin-course-adults" a2="/mandarin-course-kids" im="/images/Mandarin.png" src1="/images/adults-mandarin@300x.png" src2='/images/Astronaut-Mandarin-1.png' />                    </SwiperSlide><SwiperSlide>
                        <Popup sub="Japanese" a1="/japanese-course-adults" a2="/japanese-course-kids" im="/images/Japanese.png" src1="/images/adults-japanese@300x.png" src2='/images/Astronaut-Japanese-1.png' />                    </SwiperSlide>
                    <SwiperSlide>
                        <Popup sub="Korean" a1="/korean-course-adults" a2="/korean-course-kids" im="/images/Korean.png" src1="/images/adults-korean@300x.png" src2='/images/Astronaut-Korean-1.png' />                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="Home-container-3 w-full lg:px-72 lg:mt-20">
                <span className="font-semibold text-3xl lg:text-4xl">
                    Students at The Language Network
                </span>
                <p className='font-medium'>
                    We have created courses, based on students’ age range, keeping in mind each age-groups’ attention and motivation level, so that we can provide the most suitable study curriculum and experience.
                </p>
            </div>
            <div className='w-full flex flex-col items-center justify-center'>
                <div className="w-5/6 hidden lg:flex flex-row space-y-10 lg:space-y-0 mt-12">
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
                            <h1 id='Home-card-text-h2'>Teens (10-13 years)</h1>
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
                <Swiper className='pagi1 w-5/6 flex lg:hidden flex-row mt-12' spaceBetween={5} loop={true} loopFillGroupWithBlank={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1

                        },
                    }}
                    pagination={false} navigation={true} autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                    }}
                >
                    <SwiperSlide>
                        <div className="w-full w-5/6 flex flex-col items-center lg:mx-4 ease-in duration-300" id='Home-card-1' onMouseOver={changeCol1} onMouseLeave={changeBack}>
                            <div className="Home-card-img">
                                <img src='/images/Adolscents@300x.png' alt='img' />
                            </div>
                            <div className='Home-card-text'>
                                <h1 id='Home-card-text-h1'>Kids (6-9 years)</h1>
                                <p>Children in this age range can learn any foreign language with the right professional assistance. Kids have a high sense of creativity and imagination. At, TLN we know how to use this imagination and methodically focuses on aspects of language that boost performance and imagination</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full w-5/6 flex flex-col items-center lg:mx-4 ease-in duration-300" id='Home-card-2' onMouseOver={changeCol2} onMouseLeave={changeBack}>
                            <div className="Home-card-img">
                                <img src='/images/Kids@300x-1.png' alt='img' />
                            </div>
                            <div className='Home-card-text'>
                                <h1 id='Home-card-text-h2'>Teens (10-13 years)</h1>
                                <p>Students in this age group are usually energetic, curious, and eager to explore the world! At TLN, we teach more than just the language. We take you through the culture; traditions, clothing, food, festivals, etc. This means that you are learning more than the writing system or pronunciation.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full w-5/6 flex flex-col items-center lg:mx-4 ease-in duration-300" id='Home-card-3' onMouseOver={changeCol3} onMouseLeave={changeBack}>
                            <div className="Home-card-img">
                                <img src='/images/adults@300x.png' alt='img' />
                            </div>
                            <div className='Home-card-text'>
                                <h1 id='Home-card-text-h3'>Adults (14+ years)</h1>
                                <p>Getting a certificate is an essential part of verifying your language skills. TLN prepares you for all types of language exams with the professional assistance of highly-qualified teachers. We also offer online classes per your convenience.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>



            <div className="my-24 lg:flex sm:px-4 lg:px-20 lg:pt-10 flex-row h-auto w-full bg-[#f4f8fb]">
                <div className='flex flex-col w-full lg:w-1/3 space-y-6 px-4 lg:px-20 justify-center lg:justify-start'>
                    <h1 className='font-bold text-3xl lg:text-4xl pt-10 lg:pt-4'>Our courses are aligned with the CEFR levels</h1>
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
                <div className='flex align-center w-full h-auto py-10 lg:py-0 lg:w-2/3 '>
                    <Levels />
                </div>
            </div>

            <div className='lg:w-full w-11/12 text-center pt-4 lg:pt-10'>
                <h1 className='text-[#13bfab] text-xl font-medium tracking-widest'>WE PREPARE YOU FOR</h1>
                <h2 className='text-black text-4xl font-medium mb-10'>International Exams</h2>
            </div>

            <div className=" lg:px-4 hidden md:block lg:block my-10">

                <div className="flex flex-row px-10 justify-center items-center ">
                    <div className="p-2 w-1/2 flex flex-col items-center">  <img src={img1} alt='img' /></div>
                    <div className="p-2 w-1/2 flex flex-col items-center"> <img src={img2} alt='img' /></div>

                    <div className="p-2 w-1/2 flex flex-col items-center"><img src={img3} alt='img' /> </div>

                    <div className="p-2 w-1/2 flex flex-col items-center"> <img src={img4} alt='img' /></div>
                    <div className="p-2 w-1/2 flex flex-col items-center">    <img src={img5} alt='img' /></div>
                    <div className="p-2 w-1/2 flex flex-col items-center">  <img src={img6} alt='img' /></div>
                    <div className="p-2 w-1/2 flex flex-col items-center">  <img src={img7} alt='img' /></div>
                    <div className="p-2 w-1/2 flex flex-col items-center">  <img src={img8} alt='img' /></div>

                    <div className="p-2 w-1/2 flex flex-col items-center">  <img src={img9} alt='img' /> </div>

                </div>
            
                {/* <Swiper className='pagi2' spaceBetween={5} loop={true} loopFillGroupWithBlank={true}
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
                    }} navigation={true} autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                    }} >
                    <SwiperSlide className="mb-10 p-20">
                        <img src={img1} alt='img' />
                    </SwiperSlide><SwiperSlide className="mb-10 p-20">
                        <img src={img2} alt='img' />
                    </SwiperSlide><SwiperSlide className="mb-10 p-20">
                        <img src={img3} alt='img' />
                    </SwiperSlide>
                    <SwiperSlide className="mb-10 p-20">
                        <img src={img4} alt='img' />
                    </SwiperSlide>
                    <SwiperSlide className="mb-10 p-20">
                        <img src={img5} alt='img' />
                    </SwiperSlide>
                    <SwiperSlide className="mb-10 p-20">
                        <img src={img6} alt='img' />
                    </SwiperSlide>
                    <SwiperSlide className="mb-10 p-20">
                        <img src={img7} alt='img' />
                    </SwiperSlide>
                    <SwiperSlide className="mb-10 p-20">
                        <img src={img8} alt='img' />
                    </SwiperSlide>
                    <SwiperSlide className="mb-10 p-20">
                        <img src={img9} alt='img' />
                    </SwiperSlide>
                </Swiper> */}
            </div>
            <div className="lg:hidden md:hidden sm:block">
                <div className="flex flex-col">
                    <div className="flex flex-row justify-center items-center px-5">
                        <div className="p-2 w-1/2 flex flex-col items-center"> <img src={img1} alt='img' /></div>
                        <div className="p-2 w-1/2 flex flex-col items-center"> <img src={img2} alt='img' /></div>
                        <div className="p-2 w-1/2 flex flex-col items-center"> <img src={img3} alt='img' /> </div>
                    </div>
                    <div className="flex flex-row justify-center items-center px-5">
                        <div className="p-2 w-1/2 flex flex-col items-center">   <img src={img4} alt='img' /></div>
                        <div className="p-2 w-1/2 flex flex-col items-center">    <img src={img5} alt='img' /></div>
                        <div className="p-2 w-1/2 flex flex-col items-center"> <img src={img6} alt='img' /></div>
                    </div>
                    <div className="flex flex-row justify-center items-center px-5">
                        <div className="p-2 w-1/2 flex flex-col items-center"> <img src={img7} alt='img' /></div>
                        <div className="p-2 w-1/2 flex flex-col items-center"> <img src={img8} alt='img' /> </div>
                        <div className="p-2 w-1/2 flex flex-col items-center"> <img src={img9} alt='img' /></div>
                    </div>
                </div>
            </div>

            <div className="py-3 lg:py-0 my-5 lg:flex flex-row h-auto w-full bg-[#f4f8fb] px-8">
                <div className='flex flex-col space-y-6 mx-0 lg:mx-4 lg:mx-0 lg:pl-20 lg:pr-52 justify-center lg:w-2/3'>
                    <h1 className='font-medium text-3xl lg:text-4xl'>The Language Network saves you
                        <div class="scroller">
                            <span className='bg-[#13bfab] px-3 text-center text-white font-medium'>
                                Time<br />
                                Money
                            </span>
                        </div>
                    </h1>
                    <p className='text-lg font-medium'>Our online classes cut out that stressful commute so you can focus your energy on learning. We offer quality courses at affordable prices, with no hidden costs. Up to 30% cheaper than traditional language schools.</p>
                </div>
                <div className='flex align-center w-80 lg:w-1/2 lg:p-20 mt-4 lg:mt-0 items-center'>
                    <img src="/images/progress.png" alt="" className='lg:pl-10 px-10 lg:px-20' />
                </div>
            </div>
            <div className="Home-container-8 my-14 text-center">
                <h1>FROM LEARNING A NEW LANGUAGE TO LIVING IT!</h1>
                <span className="text-2xl font-semibold lg:text-4xl">Why you should learn with The Language Network?</span>
            </div>
            <div className='w-full px-10 lg:px-20'>
                <Display />
            </div>
            <div className="my-20 px-10 lg:px-0 lg:pl-32 lg:flex flex-row lg:h-[65vh] w-full bg-[#f4f8fb]">
                <div className='flex flex-col space-y-6 justify-center lg:w-2/3'>
                    <h1 className='font-bold text-3xl lg:text-4xl pt-10 lg:pt-0'>TRANSFORM YOUR CAREER</h1>
                    <h2 className='text-lg '>Earn Your Certification </h2>
                    <p className='text-lg '>Learn a foreign language as a step to boost your career or improve your CV.</p>
                    <a href="/getstarted">
                        <button class="bg-[#13BFAB] w-56 hover:bg-teal-400 text-white font-bold py-3 px-4 rounded" >
                            JOIN A COURSE
                        </button>
                    </a>
                </div>
                <div className='flex align-center justify-center py-10 lg:py-14 '>
                    <img src='/images/certificate-mockup.png' alt='img' className='certificate-img lg:pl-14' />
                </div>
                <img src='/images/dots-circle.png' alt='img' className='dots-circle-1 lg:block hidden' />
                <img src='/images/dots-circle.png' alt='img' className='dots-circle-2 lg:block hidden' />
            </div>


            <div className='w-full'>

                <Curriculum />
            </div>

            <div className='mb-4'>
                <div className="items-center justify-center px-3 lg:px-20 flex flex-col justify-center ">
                    <h1 className="flex text-3xl lg:text-4xl font-semibold pt-20 items-center justify-center ">We work as a team</h1>
                    <hr class="h-full flex flex-col justify-center align-center text-center w-ful border-yellow-500 border-2 w-1/4 self-center mt-4 items-center justify-center"></hr>
                    <span className="flex text-lg font-medium pt-10 lg:px-20 text-center">With a fantastic team of over 50+ trainers (and counting!) who make learning entertaining and effortless. Our trainers are qualified with an overall student rating of 5   out of 5.</span>
                </div>
            </div>
            <Team />

            {/* <div className="Home-container-61 lg:px-40 mt-10 lg:mt-36">
                <h3 className='w-full text-center font-semibold text-3xl lg:text-4xl'>Our Education Partners</h3>

                <Swiper className='pagi1' spaceBetween={5} loop={true} loopFillGroupWithBlank={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1

                        },
                        768: {
                            slidesPerView: 4
                        }
                    }}
                    pagination={{
                        "clickable": true
                    }} navigation={true} autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                    }}
                >
                    <SwiperSlide>
                        <img src="/images/CSI-KJSIEIT-Logo-Final-150x150.png" alt='img' />
                    </SwiperSlide><SwiperSlide>
                        <img src="/images/RCSCW-150x150.png" alt='img' />
                    </SwiperSlide><SwiperSlide>
                        <img src="/images/DCAC-150x150.png" alt='img1' />
                    </SwiperSlide><SwiperSlide>
                        <img src="/images/Mithibai-college-image-F7E1045E5E3B-1-150x150.png" alt='img1' />
                    </SwiperSlide><SwiperSlide>
                        <img src="/images/Black-RAYS-Logo-PNG-150x150.png" alt='img1' />
                    </SwiperSlide><SwiperSlide>
                        <img src="/images/St-Andrews-Logo-150x150.png" alt='img1' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/Asset 8@300x.png" alt='img1' className='w-[60%]' />
                    </SwiperSlide>
                </Swiper>
            </div> */}


            <div className="Home-container-11 mt-20 lg:mb-20">
                <h1>Happy Testimonials</h1>
                <hr></hr>
                <Testimonial />
            </div>
            <div className="my-20">
                <h3 className='w-full text-center font-semibold text-3xl lg:text-4xl'>Our Education Partners</h3>

                <div className="flex flex-row px-10 justify-center items-center ">
                    <div className="p-6 w-1/3 flex flex-col items-center"> <img src="/images/CSI-KJSIEIT-Logo-Final-150x150.png" alt='img' /></div>
                    <div className="p-6 w-1/3 flex flex-col items-center"> <img src="/images/RCSCW-150x150.png" alt='img' /></div>

                    <div className="p-6 w-1/3 flex flex-col items-center"><img src="/images/DCAC-150x150.png" alt='img1' /> </div>

                    <div className="p-4 w-1/2 flex flex-col items-center"> <img src="/images/Mithibai-college-image-F7E1045E5E3B-1-150x150.png" alt='img1' /></div>
                    <div className="p-4 w-1/2 flex flex-col items-center">     <img src="/images/Black-RAYS-Logo-PNG-150x150.png" alt='img1' /></div>
                    <div className="p-4 w-1/2 flex flex-col items-center"> <img src="/images/St-Andrews-Logo-150x150.png" alt='img1' /></div>
                    <div className="p-4 w-1/2 flex flex-col items-center pt-10"> <img src="/images/Asset 8@300x.png" alt='img1' /></div>
                </div>
                <div className="flex flex-row items-center justify-center block md:hidden">
                    <div className="flex flex-col w-1/2 justify-center">
                        <div className="p-12 w-full flex flex-col items-center"> <img src="/images/CSI-KJSIEIT-Logo-Final-150x150.png" alt='img' /></div>
                        <div className="p-12 w-full flex flex-col items-center"> <img src="/images/RCSCW-150x150.png" alt='img' /></div>
                        <div className="p-12 w-full flex flex-col items-center"><img src="/images/DCAC-150x150.png" alt='img1' /> </div>
                    </div>

                    <div className="flex flex-col w-1/2 justify-center">
                        <div className="p-10 w-full flex flex-col items-center"> <img src="/images/Mithibai-college-image-F7E1045E5E3B-1-150x150.png" alt='img1' /></div>
                        <div className="p-10 w-full flex flex-col items-center">     <img src="/images/Black-RAYS-Logo-PNG-150x150.png" alt='img1' /></div>
                        <div className="p-10 w-full flex flex-col items-center"> <img src="/images/St-Andrews-Logo-150x150.png" alt='img1' /></div>
                    </div>

                </div>
                <div className="flex items-center justify-center block md:hidden">
                    <div className="p-10 w-1/2 flex flex-col items-center pt-10"> <img src="/images/Asset 8@300x.png" alt='img1' /></div>

                </div>

            </div>


        </div>

    )
}

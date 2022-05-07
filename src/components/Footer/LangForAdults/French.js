import React from 'react';
import { FaRegWindowMinimize, FaLightbulb } from 'react-icons/fa';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import Levels from '../../Home/Levels';

export default function AdultsFrench() {

    AOS.init()

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
        <div>
            <div className="bg-[url('/public/images/TLN-Adults-French-Banner.jpg')] bg-cover h-[70vh]" >
                <div className="bg-[rgba(0,0,0,0.4)] h-full ">
                    <div className='h-full flex flex-col justify-center align-left w-full px-10 lg:px-32'>
                        <h1 className='text-3xl lg:text-4xl leading-snug text-white font-bold'>French Classes for Adults</h1>
                        <h1 className='text-md my-10 text-white font-medium'>1-to-1 , 1-to-2 and Group Online French classes for adults (14+ years old) with professional teachers.</h1>
                        <a href="/getstarted"><button type="button" class="flex flex-row btn btn-outline-light hover:bg-[#13BFAB] rounded-3xl w-fit text-sm py-3 px-4 ">Get Started</button></a>
                    </div>
                </div>
            </div>
            <div className="pt-10 px-10 lg:px-20 lg:flex flex-row items-center">
                <div className='lg:w-1/2 lg:px-20'>
                    <h2 className='font-semibold text-2xl lg:text-4xl'>Learn French Online With TLN</h2>
                    <p className='text-sm text-[#54595f] my-3'>Learn French with The Language Network’s Online French class in India. TLN provides courses for French beginners as well as advanced learners. Our French language course covers everything from grammar to pronunciation.</p>
                    <p className='text-sm text-[#54595f] my-3'>Now learn French with The Language Network and become fluent in French. Our French language courses are created to meet the learning needs of our students.</p>
                </div>
                <div className='lg:w-1/2 p-10'>
                    <img src="/images/TLN_French-elements.png" alt="img" />
                </div>
            </div>


            <div className='w-full text-center px-4 lg:px-0 text-2xl lg:text-4xl font-medium mt-20'>How is learning French with The Language Network different?</div>
            <div className='w-full  py-18 hidden lg:flex flex-row flex-wrap  justify-evenly lg:space-x-14 lg:px-10'>
                <div className='h-[14rem] my-8 overflow-hidden transition-all duration-500 hover:h-[32rem] w-60 flex flex-col items-center text-center '>
                    <img src="/images/Asset-27@300x.png" alt="alt" className='p-8' />
                    <h3 className='font-bold text-lg my-2'>DELF preparations</h3>
                    <p className='text-sm text-gray-700'>
                        Our language experts teach our students how to ace standardised exams like DEFL. We believe that just learning French is not enough. Our students must also learn how to deal with international exams. How to crack DELF is one of our primary objectives.    </p>
                </div>
                <div className='h-[14rem] lg:mx-10 sm:mx-auto my-8 overflow-hidden transition-all duration-500 hover:h-[32rem] w-60 flex flex-col items-center text-center'>
                    <img src="/images/Asset-26@300x.png" alt="alt" className='p-8' />
                    <h3 className='font-bold text-lg my-2'>

                        Interview preparations ​</h3>
                    <p className='text-sm text-gray-700'>

                        We teach our students how to crack interviews in French. We teach our students to ace French. We understand that cracking interviews is necessary for sustenance. Get the confidence to crack interviews and get the jobs you desire.   </p>
                </div>
                <div className='h-[13rem] lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[31rem] w-60 flex flex-col items-center text-center'>
                    <img src="/images/Asset-23@300x.png" alt="alt" className='p-8' />
                    <h3 className='font-bold text-lg my-2'>

                        CV making</h3>
                    <p className='text-sm text-gray-700'>


                        CV making is an important aspect of getting your desired jobs. We often make mistakes while making our CV. At The Language Network, we teach our students how to make eye-catching CVs. Learn French and also learn how to use your knowledge to the fullest with TLN.     </p>
                </div>
                <div className='h-[13rem] lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[29rem] w-60 lg:flex flex-col items-center text-center'>
                    <img src="/images/Asset-22@300x.png" alt="alt" className='p-8' />
                    <h3 className='font-bold text-lg my-2'>

                        Spoken French</h3>
                    <p className='text-sm text-gray-700'>


                        While learning French we often focus only on understanding part of the language. Spoken French is also equally important. Our French language course puts emphasis on Spoken French. We have activities that improve the spoken part.    </p>
                </div>
                <div className='h-[14rem] lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[27rem] w-60 flex flex-col items-center text-center'>
                    <img src="/images/Asset-29@300x.png" alt="alt" className='p-8' />
                    <h3 className='font-bold text-lg my-2'>

                        Learn with Study plans</h3>
                    <p className='text-sm text-gray-700'>


                        Learn French with our study plans and ace at spoken and written French. We have created study plans with respect to international exams. These hand-tailored study plans will help you excel in French.    </p>
                </div>
                <div className='h-[14rem] lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[32rem] w-60 flex flex-col items-center text-center'>
                    <img src="/images/Asset-21@300x.png" alt="alt" className='p-8' />
                    <h3 className='font-bold text-lg my-2'>

                        Compact batches</h3>
                    <p className='text-sm text-gray-700'>


                        The Language Network believes that each individual needs personal focus. Thus, we maintain small batches for all our language courses. We also provide one-on-one batches. Students always get the attention they deserve.     </p>
                </div>
                <div className='h-[14rem] lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[32rem] w-60 flex flex-col items-center text-center'>
                    <img src="/images/Asset-28@300x.png" alt="alt" className='p-8' />
                    <h3 className='font-bold text-lg my-2'>


                        Learning activities</h3>
                    <p className='text-sm text-gray-700'>



                        Our study plans also include fun activities that boost learning. There are several activities that our language experts conduct in order to better explain the subject. These activities include debates, charades, podcasts, etc.      </p>
                </div>
            </div>
            <Swiper className='pagi1 block lg:hidden w-full px-10 md:px-16 bg-inherit' spaceBetween={5} loop={true} loopFillGroupWithBlank={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1

                    },
                    768: {
                        slidesPerView: 4
                    }
                }}
                pagination={false} navigation={true} autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }}
            >
                <SwiperSlide>
                    <div className='h-[18rem] lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[32rem] w-60 flex flex-col items-center text-center '>
                        <img src="/images/Asset-27@300x.png" alt="alt" className='p-8' />
                        <h3 className='font-bold text-lg my-2'>DELF preparations</h3>
                        <p className='text-sm text-gray-700'>
                            Our language experts teach our students how to ace standardised exams like DEFL. We believe that just learning French is not enough. Our students must also learn how to deal with international exams. How to crack DELF is one of our primary objectives.    </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[18rem] lg:mx-10 sm:mx-auto my-8 overflow-hidden transition-all duration-500 hover:h-[32rem] w-60 flex flex-col items-center text-center'>
                        <img src="/images/Asset-26@300x.png" alt="alt" className='p-8' />
                        <h3 className='font-bold text-lg my-2'>

                            Interview preparations ​</h3>
                        <p className='text-sm text-gray-700'>

                            We teach our students how to crack interviews in French. We teach our students to ace French. We understand that cracking interviews is necessary for sustenance. Get the confidence to crack interviews and get the jobs you desire.   </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[18rem] lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[31rem] w-60 flex flex-col items-center text-center'>
                        <img src="/images/Asset-23@300x.png" alt="alt" className='p-8' />
                        <h3 className='font-bold text-lg my-2'>

                            CV making</h3>
                        <p className='text-sm text-gray-700'>


                            CV making is an important aspect of getting your desired jobs. We often make mistakes while making our CV. At The Language Network, we teach our students how to make eye-catching CVs. Learn French and also learn how to use your knowledge to the fullest with TLN.     </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[18rem] lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[29rem] w-60 lg:flex flex-col items-center text-center'>
                        <img src="/images/Asset-22@300x.png" alt="alt" className='p-8' />
                        <h3 className='font-bold text-lg my-2'>

                            Spoken French</h3>
                        <p className='text-sm text-gray-700'>


                            While learning French we often focus only on understanding part of the language. Spoken French is also equally important. Our French language course puts emphasis on Spoken French. We have activities that improve the spoken part.    </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[18rem] lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[27rem] w-60 flex flex-col items-center text-center'>
                        <img src="/images/Asset-29@300x.png" alt="alt" className='p-8' />
                        <h3 className='font-bold text-lg my-2'>

                            Learn with Study plans</h3>
                        <p className='text-sm text-gray-700'>


                            Learn French with our study plans and ace at spoken and written French. We have created study plans with respect to international exams. These hand-tailored study plans will help you excel in French.    </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[18rem] lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[32rem] w-60 flex flex-col items-center text-center'>
                        <img src="/images/Asset-21@300x.png" alt="alt" className='p-8' />
                        <h3 className='font-bold text-lg my-2'>

                            Compact batches</h3>
                        <p className='text-sm text-gray-700'>


                            The Language Network believes that each individual needs personal focus. Thus, we maintain small batches for all our language courses. We also provide one-on-one batches. Students always get the attention they deserve.     </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[18rem] lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[32rem] w-60 flex flex-col items-center text-center'>
                        <img src="/images/Asset-28@300x.png" alt="alt" className='p-8' />
                        <h3 className='font-bold text-lg my-2'>


                            Learning activities</h3>
                        <p className='text-sm text-gray-700'>



                            Our study plans also include fun activities that boost learning. There are several activities that our language experts conduct in order to better explain the subject. These activities include debates, charades, podcasts, etc.      </p>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className='w-full my-20 text-center text-3xl lg:text-4xl font-medium '>How to learn French effectively?</div>
            <div className='flex flex-col lg:flex-row'>
                <div className='pl-10 w-3/4 lg:w-[60rem] self-center   '>
                    <img className='w-full' src="/images/Learn-effectively@300x.png" alt="img" />
                </div>
                <div className='w-full flex flex-col'>
                    <div className='flex flex-row group h-auto px-10 lg:px-16 py-6'>
                        <div className='h-full pt-2 ease-in duration-300 text-teal-300 group-hover:text-amber-400'>
                            <FaRegWindowMinimize className='rotate-90 text-6xl' />
                        </div>
                        <div>
                            <h1 className='text-2xl font-medium'>Grammar and Vocabulary</h1>
                            <p className='text-[#54595f] pt-2'>Learn French effectively with our expert trainers. We incorporate various tricks and tips in our study plans to better teach grammar and vocabulary. A language is all about grammar and vocabulary. So we make sure that we focus on these two aspects of language learning properly.</p>
                        </div>
                    </div>
                    <div className='flex flex-row group h-auto px-10 lg:px-16 py-6'>
                        <div className='h-full pt-2 ease-in duration-300 text-teal-300 group-hover:text-amber-400'>
                            <FaRegWindowMinimize className='rotate-90 text-6xl' />
                        </div>
                        <div>
                            <h1 className='text-2xl font-medium'>
                                Listening and Speaking</h1>
                            <p className='text-[#54595f] pt-2'>When you learn French, you focus on understanding, listening, and speaking. Listening and speaking are two main aspects of language learning. In our French language course, we make sure that our students can speak fluently. We also keep activities that make our students understand French effectively.</p>
                        </div>
                    </div>
                    <div className='flex flex-row group h-auto px-10 lg:px-16 py-6'>
                        <div className='h-full pt-2 ease-in duration-300 text-teal-300 group-hover:text-amber-400'>
                            <FaRegWindowMinimize className='rotate-90 text-6xl' />
                        </div>
                        <div>
                            <h1 className='text-2xl font-medium'>Connect with the culture</h1>
                            <p className='text-[#54595f] pt-2'>Our French language course is designed in a way that we not only teach French but also teach French culture. Culture is an important factor when it comes to language learning. It affects language learning tremendously. Thus, our trainers focus heavily on it.</p>
                        </div>
                    </div>
                    <div className='flex flex-row group h-auto px-10 lg:px-16 py-6'>
                        <div className='h-full pt-2 ease-in duration-300 text-teal-300 group-hover:text-amber-400'>
                            <FaRegWindowMinimize className='rotate-90 text-6xl' />
                        </div>
                        <div>
                            <h1 className='text-2xl font-medium'>Theoretical approach</h1>
                            <p className='text-[#54595f] pt-2'>We refer to the best books and curriculum prescribed by the apex language institutions. We want our students to learn from the best guides out there. If you learn French from us, you have a pretty good chance at becoming DELF. We place a lot of importance on international exams.</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='pt-20 w-full lg:mt-20 text-center text-3xl lg:text-4xl font-medium px-2 lg:px-20'>We prepare you for international exams</div>
            <p className='text-center w-full px-10 lg:px-60 pt-4 text-sm text-[#54595f]'> Studying abroad is a must for children hoping to build an international future. It can shape your child’s success and is an important investment for their global career.</p>
            <div className='px-3 group w-full flex flex-col items-center my-10'>
                <img src="/images/exam-delf-dalf.jpg" alt="img" className='w-48' />
                <div className='px-10 shadow-xl text-center lg:w-2/3 p-4'>
                    <h3 className='text-lg font-bold pb-3 group-hover:text-amber-400 ease-in duration-300'>Delf Dalf</h3>
                    <p className='text-sm text-[#54595f]'>DELF (Diplôme d’études en langue française) is the certified diploma ofFrench language awarded by the French Ministry of National Education and is recognized worldwide. It allows validating and certifying for French language abilities. The junior version of DELF is perfectly fit to teenagers in middle and high-school. The DELF junior version has the same basic structure as the standard DELF. Only the topics are different: the materials take into account the interests of young people.</p>
                </div>
            </div>


            {/* <div className="my-28 py-9 lg:flex flex-row h-auto w-full bg-[#f4f8fb]">
                <div className='flex flex-col space-y-6 px-10 lg:px-20 justify-center'>
                    <h1 className='font-bold text-3xl lg:text-4xl'>French Language Levels for Adults</h1>
                    <p className='text-sm text-[#54595f]'>
                        All languages we offer are aligned with the CEFR levels, so once you know your level, we can suggest the best classes to get your progress going immediately.
                    </p>
                    <p className='text-sm text-[#54595f]'>
                        Online French for adolescents is divided into following levels:
                    </p>
                    <ul className='list-disc text-[#54595f] font-bold text-md space-y-4 ml-3'>
                        <li>Beginner Level: Level A1 | Level A2</li>
                        <li>Intermediate Level: Level B1.1 | Level B1.2 | Level B2.1 | Level B2.2</li>
                        <li>Intermediate Level: Level B1</li>
                        <li>Upper-Intermediate Level: Level B2</li>
                        <li>Advance Level: Level C1</li>
                    </ul>
                    <p className='text-sm text-[#54595f]'>
                        These levels are corresponding to the Common European Framework of Reference for Languages (CEFR). The diploma’s value is the exact same as the standard DELF. The DELF junior version has 4 independent diplomas: DELF A1 junior version, DELF A2 junior version, DELF B1 junior version, DELF B2 junior version.
                    </p>
                </div>
                <div className='flex align-center px-10 py-10 lg:px-20 lg:py-20'>
                    <img src='/images/French-levels-adolescents@300x-1536x572.png' alt='img' />
                </div>
            </div> */}
            
            <div className="my-24 lg:flex sm:px-4 lg:px-20 lg:pt-10 flex-row h-auto w-full bg-[#f4f8fb]">
                <div className='flex flex-col w-full lg:w-1/3 space-y-6 px-4 lg:px-20 justify-center lg:justify-start'>
                    <h1 className='font-bold text-3xl lg:text-4xl pt-10 lg:pt-4'>French Language Levels for Adults</h1>
                    <p className='text-sm text-[#54595f]'>
                        All languages we offer are aligned with the CEFR levels, so once you know your level, we can suggest the best classes to get your progress going immediately.
                    </p>
                    <p className='text-sm text-[#54595f]'>
                        These levels are corresponding to the Common European Framework of Reference for Languages (CEFR). The diploma’s value is the exact same as the standard DELF. The DELF junior version has 4 independent diplomas: DELF A1 junior version, DELF A2 junior version, DELF B1 junior version, DELF B2 junior version.
                    </p>
                </div>
                <div className='flex align-center w-full h-auto py-10 lg:py-0 lg:w-2/3 '>
                    <Levels />
                </div>
            </div>

            <div className='flex flex-col items-center '>
                <div className="Home-container-3">
                    <h1>
                        Students at The Language Network
                    </h1>
                    <p className='px-10 lg:px-36'>
                        We have created courses, based on students’ age range, keeping in mind each age-groups’ attention and motivation level, so that we can provide the most suitable study curriculum and experience.
                    </p>
                </div>

                <div className='w-full flex flex-col items-center justify-center'>
                    <div className="w-5/6 hidden lg:flex flex-row space-y-10 lg:space-y-0 mt-12">
                        <div className="w-full lg:w-1/3 flex flex-col items-center lg:mx-4 ease-in duration-300 rounded-2xl" id='Home-card-1' onMouseOver={changeCol1} onMouseLeave={changeBack}>
                            <div className="Home-card-img">
                                <img src='/images/Adolscents@300x.png' alt='img' />
                            </div>
                            <div className='Home-card-text'>
                                <h1 id='Home-card-text-h1'>Kids (6-9 years)</h1>
                                <p>Children in this age range can learn any foreign language with the right professional assistance. Kids have a high sense of creativity and imagination. At, TLN we know how to use this imagination and methodically focuses on aspects of language that boost performance and imagination</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 flex flex-col items-center lg:mx-4 ease-in duration-300 rounded-2xl" id='Home-card-2' onMouseOver={changeCol2} onMouseLeave={changeBack}>
                            <div className="Home-card-img">
                                <img src='/images/Kids@300x-1.png' alt='img' />
                            </div>
                            <div className='Home-card-text'>
                                <h1 id='Home-card-text-h2'>Adolscents (10-13 years)</h1>
                                <p>Students in this age group are usually energetic, curious, and eager to explore the world! At TLN, we teach more than just the language. We take you through the culture; traditions, clothing, food, festivals, etc. This means that you are learning more than the writing system or pronunciation.</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 flex flex-col items-center lg:mx-4 ease-in duration-300 rounded-2xl" id='Home-card-3' onMouseOver={changeCol3} onMouseLeave={changeBack}>
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
                                    <h1 id='Home-card-text-h2'>Adolscents (10-13 years)</h1>
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
            </div>

            <p className='w-full lg:px-80 pt-20 text-center font-medium text-2xl px-10 lg:text-4xl'>Join us in a language trip now, by following these simple steps</p>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-20 mx-auto">
                    <div class="hidden lg:flex items-center lg:w-9/12 mx-auto sm:flex-row flex-col">
                        <div data-aos="fade-right" data-aos-mirror='true' data-aos-delay='200' class="h-80 w-80 sm:mr-24 inline-flex items-center justify-center flex-shrink-0">
                            <img src="/images/account.png" alt="img" className='' />
                        </div>
                        <div class="flex-grow sm:text-left mt-6 sm:mt-0">
                            <h1 className='text-xl tracking-widest font-medium text-black'>STEP 1</h1>
                            <h2 class="poppins partial-underline text-[#f2b919] text-2xl font-medium mb-8">Register with us</h2>
                            <p class="leading-relaxed text-black ">Fill out a form with your personal and contact information, choose your language and register with us. Our team of experts will will assist you with the online classes, study materials and lots more.</p>
                        </div>
                    </div>
                    <div class="flex lg:hidden items-center lg:w-9/12 mx-auto sm:flex-row flex-col">
                        <div class="flex-grow sm:text-left mt-6 sm:mt-0">
                            <h1 className='text-xl tracking-widest font-medium text-black'>STEP 1</h1>
                            <h2 class="poppins partial-underline text-[#f2b919] text-2xl font-medium mb-8">Register with us</h2>
                            <p class="leading-relaxed text-black ">Fill out a form with your personal and contact information, choose your language and register with us. Our team of experts will will assist you with the online classes, study materials and lots more.</p>
                        </div>
                        <div data-aos="fade-right" data-aos-mirror='true' data-aos-delay='200' class="h-80 w-80 sm:mr-24 inline-flex items-center justify-center flex-shrink-0">
                            <img src="/images/account.png" alt="img" className='' />
                        </div>
                    </div>
                    <div class="flex items-center lg:w-9/12 mx-auto sm:flex-row flex-col">
                        <div class="flex-grow sm:text-right sm:mr-24 mt-6 sm:mt-0">
                            <h1 className='text-xl tracking-widest font-medium text-black'>STEP 2</h1>
                            <h2 class="poppins text-[#f2b919] text-2xl font-medium mb-8">Access your virtual classroom</h2>
                            <p class="leading-relaxed text-black ">Learn on your own schedule: Based on your type of class you chose (Eg: Group, Duo or 1:1) You will be provided with the zoom link to join your respective language class.</p>
                        </div>
                        <div data-aos="fade-left" data-aos-mirror='true' data-aos-delay='200' class="h-80 w-80 sm:mr-24 inline-flex items-center justify-center flex-shrink-0">
                            <img src="/images/classroom.png" alt="img" />
                        </div>
                    </div>
                    <div class="hidden lg:flex items-center lg:w-9/12 mx-auto sm:flex-row flex-col">
                        <div data-aos="fade-right" data-aos-mirror='true' data-aos-delay='200' class="h-80 w-80 sm:mr-24 inline-flex items-center justify-center flex-shrink-0">
                            <img src="/images/get-started.png" alt="img" />
                        </div>
                        <div class="flex-grow sm:text-left mt-6 sm:mt-0">
                            <h1 className='text-xl tracking-widest font-medium text-black'>STEP 3</h1>
                            <h2 class="poppins partial-underline text-[#f2b919] text-2xl font-medium mb-8">Get started</h2>
                            <p class="leading-relaxed text-black ">Practice what you learn with other students. We provide small batches, so you’ll get personalized attention with the expert language teachers.</p>
                        </div>
                    </div>
                    <div class="flex lg:hidden items-center lg:w-9/12 mx-auto sm:flex-row flex-col">
                        <div class="flex-grow sm:text-left mt-6 sm:mt-0">
                            <h1 className='text-xl tracking-widest font-medium text-black'>STEP 3</h1>
                            <h2 class="poppins partial-underline text-[#f2b919] text-2xl font-medium mb-8">Get started</h2>
                            <p class="leading-relaxed text-black ">Practice what you learn with other students. We provide small batches, so you’ll get personalized attention with the expert language teachers.</p>
                        </div>
                        <div data-aos="fade-right" data-aos-mirror='true' data-aos-delay='200' class="h-80 w-80 sm:mr-24 inline-flex items-center justify-center flex-shrink-0">
                            <img src="/images/get-started.png" alt="img" />
                        </div>
                    </div>

                    <div className='w-full flex  justify-center'>
                        <a href="/getstarted">
                            <button class="bg-[#13BFAB] hover:bg-teal-400 text-white font-bold py-3 px-4 rounded" >
                                Get Started
                            </button>
                        </a>
                    </div>
                </div>
            </section>


            <p className='w-full  text-center font-semibold text-3xl pb-3'>Frequently asked questions</p>

            <div className="flex flex-col items-center justify-center pb-20">
                <hr class="flex flex-col justify-center align-center text-center border-[#FFC000] border-2 w-1/5 self-center items-center"></hr>
            </div>



            <div className='w-full px-10 lg:px-28'>
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="flush-headingOne">
                            <button class="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left font-bold bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                aria-expanded="false" aria-controls="flush-collapseOne">
                                How much time will it take to learn French?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse border-0 collapse show"
                            aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4 px-5">According to our estimates, an average French speaker would take around 700 hours to become proficient in French. There are 6 levels of French. These levels include A1, A2, B1, B2, C1, and C2. A1 and A2 are the basic levels of French. On the other hand, C1 and C2 are the advanced levels of French.</div>
                        </div>
                    </div>
                    <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="flush-headingTwo">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                aria-expanded="false" aria-controls="flush-collapseTwo">
                                What is the duration of our French language course?
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4 px-5">The duration of our French language course ranges from two months to two years. It all depends on which level you are taking. The duration of each level of French is different. We provide all six levels of French.</div>
                        </div>
                    </div>
                    <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="flush-headingThree">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                aria-expanded="false" aria-controls="flush-collapseThree">
                                Do I get additional resources with the French language course?
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingThree"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4 px-5">Yes, we provide additional resources with our French language course. These resources include podcasts, French movies, charades, etc.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="flush-headingFour">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                                aria-expanded="false" aria-controls="flush-collapseFour">
                                What are the career opportunities after I learn French?
                            </button>
                        </h2>
                        <div id="flush-collapseFour" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingFour"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4 px-5">After learning French, you can work as a translator and earn a good salary. You can also work as an anchor, writer, teacher, editor, etc.</div>
                        </div>
                    </div>
                    <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="flush-headingFive">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive"
                                aria-expanded="false" aria-controls="flush-collapseFive">
                                How can I improve my French?
                            </button>
                        </h2>
                        <div id="flush-collapseFive" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingFive"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4 px-5">Join our French language course and speak with our expert trainers and other students. Go through our study material and keep practising French. This is how you will really improve your French.</div>
                        </div>
                    </div>
                    <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="flush-headingSix">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix"
                                aria-expanded="false" aria-controls="flush-collapseSix">
                                How many students are accommodated in one batch?
                            </button>
                        </h2>
                        <div id="flush-collapseSix" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingSix"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4 px-5">We provide one-on-one batches as well as group batches. We also provide two-on-one batches. We take pride in the fact that we arrange small batches. This makes the learning process smooth.</div>
                        </div>
                    </div>
                    <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="flush-headingSeven">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven"
                                aria-expanded="false" aria-controls="flush-collapseSeven">
                                Do you provide a free demo class?
                            </button>
                        </h2>
                        <div id="flush-collapseSeven" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingSeven"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4 px-5">Yes, we do provide a free demo class. Click here to register for a free trial class in the language of your choice today!</div>
                        </div>
                    </div>
                    <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="flush-headingEight">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight"
                                aria-expanded="false" aria-controls="flush-collapseEight">
                                What is included in the curriculum?
                            </button>
                        </h2>
                        <div id="flush-collapseEight" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingEight"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4 px-5">Our French language course’s curriculum includes Basic greetings, Phonetics, Grammar, Vocabulary, Communication, Cultural knowledge, Social know-how, etc. </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

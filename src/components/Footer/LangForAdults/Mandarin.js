import React from 'react';
import { FaRegWindowMinimize, FaLightbulb } from 'react-icons/fa';
import AOS from 'aos'
import 'aos/dist/aos.css';

export default function AdultsMandarin() {

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
            <div className="bg-[url('/public/images/TLN-Adults-Mandarin-Banner.jpg')] bg-no-repeat bg-cover bg-center h-[70vh]" >
                <div className="bg-[rgba(0,0,0,0.4)] h-full ">
                    <div className='h-full flex flex-col justify-center align-left w-full px-10 lg:px-32'>
                        <h1 className='text-3xl lg:text-4xl leading-snug text-white font-bold'>Mandarin Classes for Adults</h1>
                        <h1 className='text-md my-10 text-white font-medium'>1-to-1 , 1-to-2 and Group Online Madarin classes for adults (14+ years old) with professional teachers.</h1>
                        <a href="/getstarted"><button type="button" class="flex flex-row btn btn-outline-light hover:bg-[#13BFAB] rounded-3xl w-fit text-sm py-3 px-4 ">BOOK A TRIAL CLASS</button></a>
                    </div>
                </div>
            </div>
            <div className="pt-10 px-10 lg:px28 lg:flex flex-row items-center">
                <div className='lg:w-1/2 lg:px-20'>
                    <h2 className='font-semibold text-2xl lg:text-4xl'>Learn Mandarin Online with The Language Network</h2>
                    <p className='text-sm text-[#54595f] my-3'>Learn Mandarin Online with The Language Network’s Mandarin language course. TLN offers language courses for all age groups. We have Mandarin language courses for beginners, as well as advance level language learners. </p>
                    <p className='text-sm text-[#54595f] my-3'>Learn Mandarin with The Language Network and master the Mandarin language. Our Mandarin language courses are hand-tailored to meet every student’s learning needs. Now learn Mandarin from within the comforts of your own home.</p>
                </div>
                <div className='lg:w-1/2'>
                    <img src="/images/TLN_Mandarin-elements.png" alt="img" />
                </div>
            </div>
            <div className='w-full text-center text-3xl lg:text-4xl font-medium mt-20'>How learning Mandarin with TLN unique?</div>
            <div className='w-full lg:px-32 py-18 flex flex-row flex-wrap  justify-evenly'>
                <div className='h-72 lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[27rem] w-60 flex flex-col items-center text-center'>
                    <img src="/images/Asset-26@300x.png" alt="alt" className='p-8' />
                    <h3 className='font-bold text-lg my-2'>Interview Preparation</h3>
                    <p className='text-sm text-gray-700'>
                        When you learn Mandarin with TLN, we also train you for interviews and other career aspects. We prepare you for the world. </p>
                </div>
                <div className='h-72 lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[27rem] w-60 flex flex-col items-center text-center'>
                    <img src="/images/Asset-23@300x.png" alt="alt" className='p-8' />
                    <h3 className='font-bold text-lg my-2'>CV Making</h3>
                    <p className='text-sm text-gray-700'>Along with our Mandarin language course, we also teach you how to make proper C.V. We believe that all career aspects are important. </p>
                </div>
                <div className='h-[18rem] lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[31rem] w-60 flex flex-col items-center text-center'>
                    <img src="/images/deleadults.png" alt="alt" className='p-8' />
                    <h3 className='font-bold text-lg my-2'>HSK Preparations</h3>
                    <p className='text-sm text-gray-700'>
                        When you learn Mandarin with us, we also prepare you for international exams like HSK . We believe that our students should crack these exam so that we can teach you how to ace </p>
                </div>
                <div className='h-72 lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[27rem] w-60 flex flex-col items-center text-center'>
                    <img src="/images/Asset-22@300x.png" alt="alt" className='p-8' />
                    <h3 className='font-bold text-lg my-2'>Spoken Mandarin</h3>
                    <p className='text-sm text-gray-700'>
                        Our Mandarin language course focuses on spoken Mandarin a lot. We want our students to speak fluent Mandarin.</p>
                </div>
                <div className='h-72 lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[27rem] w-60 flex flex-col items-center text-center'>
                    <img src="/images/Asset-25@300x.png" alt="alt" className='p-8' />
                    <h3 className='font-bold text-lg my-2'>Progress with Study Plans</h3>
                    <p className='text-sm text-gray-700'>
                        We have crafted proper study plans to meet your learning needs. Our study plans include all the tricks and tips that you will need to learn Mandarin.</p>
                </div>
                <div className='h-72 lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[27rem] w-60 flex flex-col items-center text-center'>
                    <img src="/images/Asset-21@300x.png" alt="alt" className='p-8' />
                    <h3 className='font-bold text-lg my-2'>Small batches</h3>
                    <p className='text-sm text-gray-700'>

                        At TLN, we believe in small batches. Compact batches make it possible for our language experts to give proper attention to the students.</p>
                </div>
            </div>

            <div className='w-full lg:mt-28 text-center text-3xl lg:text-4xl font-medium '>How to learn Mandarin effectively ?</div>
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
                            <p className='text-[#54595f] pt-2'>Language is all about vocabulary and how you place it. If you wish to master Mandarin, you will need to improve your grammar and vocabulary</p>
                        </div>
                    </div>
                    <div className='flex flex-row group h-auto px-10 lg:px-16 py-6'>
                        <div className='h-full pt-2 ease-in duration-300 text-teal-300 group-hover:text-amber-400'>
                            <FaRegWindowMinimize className='rotate-90 text-6xl' />
                        </div>
                        <div>
                            <h1 className='text-2xl font-medium'>
                                Listening and Speaking</h1>
                            <p className='text-[#54595f] pt-2'>When you learn Mandarin, all you want to do is be able to speak in Mandarin and understand it. Work on them and you will learn Mandarin effectively.</p>
                        </div>
                    </div>
                    <div className='flex flex-row group h-auto px-10 lg:px-16 py-6'>
                        <div className='h-full pt-2 ease-in duration-300 text-teal-300 group-hover:text-amber-400'>
                            <FaRegWindowMinimize className='rotate-90 text-6xl' />
                        </div>
                        <div>
                            <h1 className='text-2xl font-medium'>Cultural Know-how</h1>
                            <p className='text-[#54595f] pt-2'>If you wish to learn Mandarin language properly, you will have to learn the culture associated with the language. Culture matters a lot while learning a language.</p>
                        </div>
                    </div>
                    <div className='flex flex-row group h-auto px-10 lg:px-16 py-6'>
                        <div className='h-full pt-2 ease-in duration-300 text-teal-300 group-hover:text-amber-400'>
                            <FaRegWindowMinimize className='rotate-90 text-6xl' />
                        </div>
                        <div>
                            <h1 className='text-2xl font-medium'>Practice with experts</h1>
                            <p className='text-[#54595f] pt-2'>If you want to master Mandarin language, you will have to sharp it by talking to our language experts. Consistency is the key.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='pt-20 w-full lg:mt-20 text-center text-3xl lg:text-4xl font-medium px-2 lg:px-20'>TLN and International Exams</div>
            <p className='text-center w-full px-10 lg:px-60 pt-4 text-sm text-[#54595f]'> After our students learn Mandarin from us, we expect them to appear for international exams. HSK is one such exam related to Mandarin. We teach our students all the tricks and tips they need to crack HSK. All aspects of HSK are covered in our Mandarin language course. This includes comprehension, reading, grammar, vocabulary, etc.</p>
            <div className='px-3 group w-full flex flex-col items-center my-10'>
                <img src="/images/international-exam-5.jpg" alt="img" className='w-28' />
                <div className='px-10 shadow-xl text-center lg:w-2/3 p-4'>
                    <h3 className='text-lg font-bold pb-3 group-hover:text-amber-400 ease-in duration-300'>HSK</h3>
                    <p className='text-sm text-[#54595f]'>HSK (Hanyu Shuiping Kaoshi) is the international proficiency exam for the Chinese language, standardized for foreign students of the language. This exam is conducted by Hanban, a non-governmental organization to test the proficiency of non-native speakers. There are six HSK levels: HSK1, HSK2, HSK3, HSK4, HSK5, HSK6. HSK was developed by the Beijing Language and Cultural University. Certificates are issued by the State Committee for the proficiency test. This certificate is recognized and accepted by many countries worldwide. Taking into consideration the recent trends in the Chinese language, the examination pattern was revised in 2012.</p>
                </div>
            </div>

            <div className="my-20 lg:flex flex-row">
                <div className='space-y-2 px-10 lg:px-20'>
                    <h1 className="font-bold text-3xl lg:text-4xl">Mandarin Language Levels for Adults</h1>
                    <p className='text-sm text-[#54595f]'>All languages we offer are aligned with the CEFR levels, so once you know your level, we can suggest the best classes to get your progress going immediately.</p>
                    <p className='text-sm text-[#54595f]'>Online Mandarin for adults is divided into following levels:</p>
                    <ul className='list-disc font-bold text-gray-600 pl-3 leading-10'>
                        <li>Beginner Level: Level A1 | A1.1 | A1.2</li>
                        <li>Elementory Level: Level A2 | A2.1 | A2.2 </li>
                        <li>Intermediate Level: Level B1 |  Level B1.1 | Level B1.2 | Level B1.3 | Level B1.4</li>
                        <li>Upper-Intermediate Level: Level B2 |  Level B2.1 | Level B2.2 | Level B2.3 | Level B2.4</li>
                        <li>Advance Level: Level C1 | C1.1 | Level C1.2 | Level C1.3 | Level C2</li>
                    </ul>
                </div>
                <div className='flex align-center px-20 py-20 lg:px-10 lg:py-10'>
                    <img src='/images/French-levelsadults@300x-1536x931.png' alt='img' />
                </div>
            </div>
            
            <div className='flex flex-col items-center '>
                <div className="Home-container-3 ">
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
            </div>

            <p className='w-full lg:px-80 pt-20 text-center font-medium text-4xl'>Join us in a language trip now, by following these simple steps</p>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-20 mx-auto">
                    <div class="flex items-center lg:w-9/12 mx-auto sm:flex-row flex-col">
                        <div data-aos="fade-right" data-aos-mirror='true' data-aos-delay='200' class="h-80 w-80 sm:mr-24 inline-flex items-center justify-center flex-shrink-0">
                            <img src="/images/account.png" alt="img" className='' />
                        </div>
                        <div class="flex-grow sm:text-left mt-6 sm:mt-0">
                            <h1 className='text-xl tracking-widest font-medium text-black'>STEP 1</h1>
                            <h2 class="poppins partial-underline text-[#f2b919] text-2xl font-medium mb-8">Register with us</h2>
                            <p class="leading-relaxed text-black ">Fill out a form with your personal and contact information, choose your language and register with us. Our team of experts will will assist you with the online classes, study materials and lots more.</p>
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
                    <div class="flex items-center lg:w-9/12 mx-auto sm:flex-row flex-col">
                        <div data-aos="fade-right" data-aos-mirror='true' data-aos-delay='200' class="h-80 w-80 sm:mr-24 inline-flex items-center justify-center flex-shrink-0">
                            <img src="/images/get-started.png" alt="img" />
                        </div>
                        <div class="flex-grow sm:text-left mt-6 sm:mt-0">
                            <h1 className='text-xl tracking-widest font-medium text-black'>STEP 3</h1>
                            <h2 class="poppins partial-underline text-[#f2b919] text-2xl font-medium mb-8">Get started</h2>
                            <p class="leading-relaxed text-black ">Practice what you learn with other students. We provide small batches, so you’ll get personalized attention with the expert language teachers.</p>
                        </div>
                    </div>


                </div>
            </section>

            <p className='w-full  text-center font-bold text-4xl pb-3'>Frequently asked questions</p>

            <div className="flex flex-col items-center justify-center pb-20">
            <hr class="flex flex-col justify-center align-center text-center border-[#FFC000] border-2 w-1/5 self-center items-center"></hr>
            </div>



            <div className='w-full px-10 lg:px-28'>
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="flush-headingOne">
                            <button class="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left font-bold bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                aria-expanded="false" aria-controls="flush-collapseOne">
                               How much time will it take to learn Mandarin?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse border-0 collapse show"
                            aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4 px-5">If you wish to learn the Mandarin language, you will need around 2200 hours of constant learning. You will need 2 to 3 years to master Mandarin. The more time you put in learning, the better you will learn.</div>
                        </div>
                    </div>
                    <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="flush-headingTwo">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                aria-expanded="false" aria-controls="flush-collapseTwo">
                                What is the duration of our Mandarin language online course? 
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4 px-5">The duration of our Mandarin language course ranges from 2 months to 2 years. This can change depending on the level you are taking. Mandarin language course is divided into 6 levels just like HSK. When you complete 6 levels, you will speak fluent Mandarin. </div>
                        </div>
                    </div>
                    <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="flush-headingThree">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                aria-expanded="false" aria-controls="flush-collapseThree">
                                Do I get additional resources with the Mandarin language course? 
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingThree"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4 px-5">Yes, we provide additional resources with the Mandarin language course. These resources include podcasts, games, movie screenings, online grammar activities, etc.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="flush-headingFour">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                                aria-expanded="false" aria-controls="flush-collapseFour">
                                What are the career opportunities after I learn the Mandarin language? 
                            </button>
                        </h2>
                        <div id="flush-collapseFour" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingFour"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4 px-5">There are various career opportunities after you learn Mandarin with us. You can work as a translator, writer, comic creator, editor, etc.</div>
                        </div>
                    </div>
                    <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="flush-headingFive">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive"
                                aria-expanded="false" aria-controls="flush-collapseFive">
                             How can I improve my Mandarin? 
                            </button>
                        </h2>
                        <div id="flush-collapseFive" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingFive"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4 px-5">If you wish to learn Mandarin and improve it significantly you will need to focus on 6 facets of language learning. This includes grammar, vocabulary, reading, listening, writing, and speaking. If you master these 6 factors, you will be a master of Mandarin. Mandarin vocabulary is hard to learn in general. </div>
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
                            <div class="accordion-body py-4 px-5">We believe in small batches. Our general batch size is 4-6 students. We also have 1:1 batches and 1:2 batches. Due to our small batches, we can focus on every student effectively.</div>
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
                            <div class="accordion-body py-4 px-5">Yes, we provide a free demo class. If you wish to sit for the demo class,  </div>
                        </div>
                    </div>
                    <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="flush-headingEight">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight"
                                aria-expanded="false" aria-controls="flush-collapseEight">
                                How can I book a course with The Language Network? 
                            </button>
                        </h2>
                        <div id="flush-collapseEight" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingEight"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4 px-5">If you wish to join our Korean language course,  you can register with us here. All the details that are necessary for you are provided on this link. You can directly contact our executives and get all the information that you need.   </div>
                        </div>
                    </div>

                    <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="flush-headingNine">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine"
                                aria-expanded="false" aria-controls="flush-collapseNine">
                             What is included in the Mandarin language course curriculum? 
                            </button>
                        </h2>
                        <div id="flush-collapseNine" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingNine"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4 px-5">Our basic level curriculum includes Grammar, Vocabulary, Phonetics, greetings, and introduction. Higher levels of our Mandarin language offer Communication, Advance grammar, Complex vocabulary, etc. We also cover Cultural knowledge, social know-how, and Complex grammar. </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

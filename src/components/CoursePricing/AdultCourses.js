import React from 'react';
import './Courses.css';
import { useState } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';
import LearningPrices from './LearningPrices';
import { English_1_1, English_1_2, English_1_4 } from './CourseTableData/English.js'
import { French_1_1, French_1_2, French_1_4 } from './CourseTableData/French'
import { Spanish_1_1, Spanish_1_2, Spanish_1_4 } from './CourseTableData/Spanish'
import { German_1_1, German_1_2, German_1_4 } from './CourseTableData/German'
import { Mandarin_1_1, Mandarin_1_2, Mandarin_1_4 } from './CourseTableData/Mandarin'
import { Japanese_1_1, Japanese_1_2, Japanese_1_4 } from './CourseTableData/Japanese'
import { Korean_1_1, Korean_1_2, Korean_1_4 } from './CourseTableData/Korean'


export default function AdultsCourses() {

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

    const [language, setLanguage] = useState('English')
    const LanguageSec = () => {
        switch (language) {
            case 'English':
                return (<div>
                    <LearningPrices one_one={English_1_1} one_two={English_1_2} one_four={English_1_4} />
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
                                        How much time will it take to learn English?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse border-0 collapse show"
                                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">To learn English, you will need to spend around 1200 hours to achieve an advanced level. There are totally six levels of learning English. The basic levels include A1 and A2. Advanced levels include B1, B2, C1, and C2. C2 is the topmost level of English. After completing C2, you will speak godly English.</div>
                                </div>
                            </div>
                            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <h2 class="accordion-header mb-0" id="flush-headingTwo">
                                    <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                        aria-expanded="false" aria-controls="flush-collapseTwo">
                                        What is the duration of our English language course?
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">The duration of our courses range from two months to two years. It depends on the level you are taking. Duration for each level is different. We provide all six levels of English.</div>
                                </div>
                            </div>
                            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <h2 class="accordion-header mb-0" id="flush-headingThree">
                                    <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                        aria-expanded="false" aria-controls="flush-collapseThree">
                                        Do I get additional resources with the English language course?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingThree"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">Yes, there are additional resources when it comes to our English language course. They include movie screening, podcasts, online grammar activities, translation activities, etc.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <h2 class="accordion-header mb-0" id="flush-headingFour">
                                    <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                                        aria-expanded="false" aria-controls="flush-collapseFour">
                                        What are the career opportunities after I learn English?
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingFour"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">After you learn English from us, you can work as a translator, writer, editor, anchor, etc. There are multiple career opportunities available after you learn the English language.</div>
                                </div>
                            </div>
                            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <h2 class="accordion-header mb-0" id="flush-headingFive">
                                    <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive"
                                        aria-expanded="false" aria-controls="flush-collapseFive">
                                        How can I improve my English?
                                    </button>
                                </h2>
                                <div id="flush-collapseFive" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingFive"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">Work on the four aspects of learning English. They include reading, writing, speaking, and listening. If you work on these four aspects, your English will automatically improve. In addition to this, also focus on grammar and vocabulary. Make a list of words that you have learned. Also, make a list of English words that you want to learn.</div>
                                </div>
                            </div>
                            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <h2 class="accordion-header mb-0" id="flush-headingSix">
                                    <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix"
                                        aria-expanded="false" aria-controls="flush-collapseSix">
                                        Which is better among American English and British English?
                                    </button>
                                </h2>
                                <div id="flush-collapseSix" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingSix"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">Both are good. They are almost identical, with slight differences in spellings. Some countries prefer American English. In India, we use British English. Depending on your geographical location, you can pick one of the two variations.</div>
                                </div>
                            </div>
                            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <h2 class="accordion-header mb-0" id="flush-headingSeven">
                                    <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven"
                                        aria-expanded="false" aria-controls="flush-collapseSeven">
                                        How many students are accommodated in one batch?
                                    </button>
                                </h2>
                                <div id="flush-collapseSeven" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingSeven"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">The Language Network offers you the choice to join classes 1:1, duo or in a group. 1:1 or duo offers personal attention, greater understanding, and detailed study of the language. Group classes, on the other hand, offer more interaction, speaking practice, and people to practice the language with. </div>
                                </div>
                            </div>
                            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <h2 class="accordion-header mb-0" id="flush-headingEight">
                                    <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight"
                                        aria-expanded="false" aria-controls="flush-collapseEight">
                                        Do you provide study material for enrolled students?
                                    </button>
                                </h2>
                                <div id="flush-collapseEight" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingEight"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">Yes, we do provide study material to our students. We also have several activities in our English language course for kids. </div>
                                </div>
                            </div>
                            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <h2 class="accordion-header mb-0" id="flush-headingNine">
                                    <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine"
                                        aria-expanded="false" aria-controls="flush-collapseNine">
                                        How can I book a course with TLN?
                                    </button>
                                </h2>
                                <div id="flush-collapseNine" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingNine"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">If you wish to book an English language course with The Language Network, register with us here. We have also mentioned the prices of our English language course. </div>
                                </div>
                            </div>
                            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <h2 class="accordion-header mb-0" id="flush-headingTen">
                                    <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen"
                                        aria-expanded="false" aria-controls="flush-collapseTen">
                                        Can I get class timings according to our convenience?
                                    </button>
                                </h2>
                                <div id="flush-collapseTen" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTen"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">Yes, you absolutely can get timings to match your convenience. We offer weekday and weekend batches, so you can choose whichever suits your schedule the best. </div>
                                </div>
                            </div>
                            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <h2 class="accordion-header mb-0" id="flush-headingEleven">
                                    <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEleven"
                                        aria-expanded="false" aria-controls="flush-collapseEleven">
                                        What is included in the curriculum?
                                    </button>
                                </h2>
                                <div id="flush-collapseEleven" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingEleven"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">Our English language course’s curriculum includes Basic greetings, Phonetics, Grammar, Vocabulary, Communication, Cultural knowledge, Social know-how, etc.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
                break;
            case 'French':
                return (<div>
                    <LearningPrices one_one={French_1_1} one_two={French_1_2} one_four={French_1_4} />
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

                    <p className='w-full lg:px-80 pt-20 text-center font-medium text-2xl px-10 lg:text-4xl'>Join us in a language trip now, by following these simple steps</p>
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
                                    <div class="accordion-body py-4 px-5">According to our estimates, an average English speaker would take around 700 hours to become proficient in French. There are 6 levels of French. These levels include A1, A2, B1, B2, C1, and C2. A1 and A2 are the basic levels of French. On the other hand, C1 and C2 are the advanced levels of French.</div>
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
                </div>)
                break;
            case 'Spanish':
                return (<div>
                    <LearningPrices one_one={Spanish_1_1} one_two={Spanish_1_2} one_four={Spanish_1_4} />
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
                                    <h1 id='Home-card-text-h1'>Adults (6-9 years)</h1>
                                    <p>Children in this age range can learn any foreign language with the right professional assistance. Adults have a high sense of creativity and imagination. At, TLN we know how to use this imagination and methodically focuses on aspects of language that boost performance and imagination</p>
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

                    <p className='w-full pb-20 text-center font-bold text-4xl underline underline-offset-8'>Frequently asked questions</p>


                    <div className='w-full px-10 lg:px-28'>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <h2 class="accordion-header mb-0" id="flush-headingOne">
                                    <button class="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left font-bold bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                        aria-expanded="false" aria-controls="flush-collapseOne">
                                        How much time will it take to learn Spanish?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse border-0 collapse show"
                                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">To learn Spanish, you will need to spend around 2200 hours in learning. You will need around 2 years It depends on which level of the Spanish language you are pursuing.</div>
                                </div>
                            </div>
                            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <h2 class="accordion-header mb-0" id="flush-headingTwo">
                                    <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                        aria-expanded="false" aria-controls="flush-collapseTwo">
                                        What is the duration of our Spanish language course online?
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">The duration of our Spanish language course ranges from two months to two years. There are 6 levels of Spanish language. They include A1, A2, B1, B2, C1, and C2. If you wish to become fluent in Spanish, you will need around two years of learning.</div>
                                </div>
                            </div>
                            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <h2 class="accordion-header mb-0" id="flush-headingThree">
                                    <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                        aria-expanded="false" aria-controls="flush-collapseThree">
                                        Do I get additional resources with the Spanish language course?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingThree"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">Yes, there are several additional resources with our Spanish Language course. They include podcasts, games, movies for screening, online grammar activities, etc.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <h2 class="accordion-header mb-0" id="flush-headingFour">
                                    <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                                        aria-expanded="false" aria-controls="flush-collapseFour">
                                        What are the career opportunities after I learn the Spanish language?
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingFour"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">After you learn Spanish from us, you can start working as a translator, interpreter, teacher, writer, corporate trainer, freelancer, etc. Spanish is one of the most used languages in the world.</div>
                                </div>
                            </div>
                            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <h2 class="accordion-header mb-0" id="flush-headingFive">
                                    <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive"
                                        aria-expanded="false" aria-controls="flush-collapseFive">
                                        How can I improve my Spanish?
                                    </button>
                                </h2>
                                <div id="flush-collapseFive" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingFive"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">If you wish to improve your Spanish, you will need to focus on the four aspects of language learning. They include reading, writing, listening, and speaking. If you work on these factors, your Spanish will automatically improve.</div>
                                </div>
                            </div>
                            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <h2 class="accordion-header mb-0" id="flush-headingSix">
                                    <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix"
                                        aria-expanded="false" aria-controls="flush-collapseSix">
                                        How many students do we accommodate in one batch?
                                    </button>
                                </h2>
                                <div id="flush-collapseSix" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingSix"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">We believe in compact batches. We have 1:1 batches, 1:2 batches, and group batches. We accommodate around 4 to 6 students in one group batch.</div>
                                </div>
                            </div>
                            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <h2 class="accordion-header mb-0" id="flush-headingSeven">
                                    <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven"
                                        aria-expanded="false" aria-controls="flush-collapseSeven">
                                        What if I have doubts?
                                    </button>
                                </h2>
                                <div id="flush-collapseSeven" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingSeven"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">If you have any doubts, feel free to contact our language experts. They will surely help you with your doubts and issues. </div>
                                </div>
                            </div>
                            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <h2 class="accordion-header mb-0" id="flush-headingEight">
                                    <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight"
                                        aria-expanded="false" aria-controls="flush-collapseEight">
                                        Do you provide study material for enrolled students?
                                    </button>
                                </h2>
                                <div id="flush-collapseEight" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingEight"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">Yes, we do provide study material to our students. We also have several activities in our Spanish language course for Adults. </div>
                                </div>
                            </div>
                            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <h2 class="accordion-header mb-0" id="flush-headingEight">
                                    <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine"
                                        aria-expanded="false" aria-controls="flush-collapseEight">
                                        What is included in the Spanish Language course curriculum?
                                    </button>
                                </h2>
                                <div id="flush-collapseNine" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingNine"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">Our basic level curriculum includes grammar, phonetics, vocabulary, greetings, etc. Our higher level curriculum includes advance communication, complex grammar, complex vocabulary, cultural knowledge, social know-how, etc. </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
                break;
            case 'German':
                return (<div>
                    <LearningPrices one_one={German_1_1} one_two={German_1_2} one_four={German_1_4} />
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

                    <p className='w-full pb-20 text-center font-bold text-4xl underline underline-offset-8'>Frequently asked questions</p>


                    <div className='w-full px-10 lg:px-28'>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <h2 class="accordion-header mb-0" id="flush-headingOne">
                                    <button class="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left font-bold bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                        aria-expanded="false" aria-controls="flush-collapseOne">
                                        How much time will it take to learn German?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse border-0 collapse show"
                                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">It takes approximately 850 hours to learn good German. There are 6 levels of German language. The basic levels include A1 and A2. Advance levels include B1 and B2. Experts levels include C1 and C2. The highest level of learning German is the C2 level. After learning C2, you will master at speaking German.</div>
                                </div>
                            </div>
                            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <h2 class="accordion-header mb-0" id="flush-headingTwo">
                                    <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                        aria-expanded="false" aria-controls="flush-collapseTwo">
                                        What is the duration of our German language course?
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">The duration of our German language course ranges from two months to two years. If you wish to complete all 6 levels and master German, you will need around 2 years.</div>
                                </div>
                            </div>
                            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <h2 class="accordion-header mb-0" id="flush-headingThree">
                                    <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                        aria-expanded="false" aria-controls="flush-collapseThree">
                                        Do I get additional resources with the German language course?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingThree"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">Yes, there are additional resources with our German language course. This includes movie screenings, podcasts, online grammar activities, translation, etc.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <h2 class="accordion-header mb-0" id="flush-headingFour">
                                    <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                                        aria-expanded="false" aria-controls="flush-collapseFour">
                                        What are the career opportunities after I learn German?
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingFour"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">There are multiple career opportunities available after you learn German with us. After you learn German you can work as a translator, writer, editor, anchor, etc.</div>
                                </div>
                            </div>
                            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <h2 class="accordion-header mb-0" id="flush-headingFive">
                                    <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive"
                                        aria-expanded="false" aria-controls="flush-collapseFive">
                                        How can I improve my German?
                                    </button>
                                </h2>
                                <div id="flush-collapseFive" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingFive"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">Yes, the online classes can be downloaded. We also provide the downloaded classes to our students for a wholesome learning.</div>
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
                                    <div class="accordion-body py-4 px-5">You will need to focus on four aspects of learning to improve your German. This includes reading, writing, speaking, and listening. Work on these four aspects and master German in no time. Along with this, it is crucial that you focus on your vocabulary and grammar. Keep a list of learned words.</div>
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
                                    <div class="accordion-body py-4 px-5">Yes, we do provide a free demo class. in the language of your choice today! </div>
                                </div>
                            </div>

                            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <h2 class="accordion-header mb-0" id="flush-headingEight">
                                    <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight"
                                        aria-expanded="false" aria-controls="flush-collapseEight">
                                        How can I book a course with TLN?
                                    </button>
                                </h2>
                                <div id="flush-collapseEight" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingEight"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">If you want to book a German language course with TLN, . We have provided all the details that you will require here.  </div>
                                </div>
                            </div>


                            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <h2 class="accordion-header mb-0" id="flush-headingNine">
                                    <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine"
                                        aria-expanded="false" aria-controls="flush-collapseNine">
                                        Can I get class timings according to my convenience?
                                    </button>
                                </h2>
                                <div id="flush-collapseNine" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingNine"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">Yes, you can get batches according to your convenience. We have batches on Weekdays as well as Weekends.  </div>
                                </div>
                            </div>
                            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <h2 class="accordion-header mb-0" id="flush-headingTen">
                                    <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen"
                                        aria-expanded="false" aria-controls="flush-collapseTen">
                                        What is included in the curriculum?
                                    </button>
                                </h2>
                                <div id="flush-collapseTen" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTen"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">Our basic level curriculum includes Greetings, Introductions, Phonetics, grammar and vocabulary. Our B1 and B2 curriculum includes Culture and social know-how, complex grammar, professional vocabulary, degree of fluency, express opinions, complex grammar structures, etc. </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
                break;
            case 'Mandarin':
                return (<div>
                    <LearningPrices one_one={Mandarin_1_1} one_two={Mandarin_1_2} one_four={Mandarin_1_4} />
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

                    <p className='w-full pb-20 text-center font-bold text-4xl underline underline-offset-8'>Frequently asked questions</p>


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
                break;
            case 'Japanese':
                return (<div>
                    <LearningPrices one_one={Japanese_1_1} one_two={Japanese_1_2} one_four={Japanese_1_4} />
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

                    <p className='w-full pb-20 text-center font-bold text-4xl underline underline-offset-8'>Frequently asked questions</p>


                    <div className='w-full px-10 lg:px-28'>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <h2 class="accordion-header mb-0" id="flush-headingOne">
                                    <button class="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left font-bold bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                        aria-expanded="false" aria-controls="flush-collapseOne">
                                        How much time will it take to learn Japanese?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse border-0 collapse show"
                                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">According to reports, it takes around 88 weeks of learning. This is approximately 2200 hours. There are five levels of learning Japanese. They are N1, N2, N3, N4, and N5. The easiest level of the Japanese language course is N5. N1 is the hardest.</div>
                                </div>
                            </div>
                            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <h2 class="accordion-header mb-0" id="flush-headingTwo">
                                    <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                        aria-expanded="false" aria-controls="flush-collapseTwo">
                                        What is the duration of our Japanese course online?
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">The duration of our Japanese course online ranges from 2 months to 2 years. It depends on what level of learning you are pursuing. If you wish you complete all 5 levels of Japanese, you will need 2 years of learning. At level N1, you will be a master of the Japanese language.</div>
                                </div>
                            </div>
                            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <h2 class="accordion-header mb-0" id="flush-headingThree">
                                    <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                        aria-expanded="false" aria-controls="flush-collapseThree">
                                        Do I get additional resources with the Japanese course online?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingThree"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">Yes, there are several additional resources with our Japanese course. These resources include movies for screening, podcasts, online grammar activities, translation activities, etc.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <h2 class="accordion-header mb-0" id="flush-headingFour">
                                    <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                                        aria-expanded="false" aria-controls="flush-collapseFour">
                                        What are the career opportunities after I learn the Japanese language?
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingFour"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">There are several opportunities after you learn Japanese. You can travel to Japan and work in the IT sector. You can also work as a translator, writer, comic creator, editor, etc.</div>
                                </div>
                            </div>
                            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <h2 class="accordion-header mb-0" id="flush-headingFive">
                                    <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive"
                                        aria-expanded="false" aria-controls="flush-collapseFive">
                                        How can I improve my Japanese?
                                    </button>
                                </h2>
                                <div id="flush-collapseFive" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingFive"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">To improve your Japanese, you will need to focus on four aspects of learning a language. This includes reading, writing, speaking, and listening. Along with these, you need to work on your grammar and vocabulary. It becomes easy when you study with a guide who is an expert in the language.</div>
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
                                    <div class="accordion-body py-4 px-5">It depends. You can also take a 1:1 batch. You can take a 1:2 batch. You can also take group batches. Group batches accommodate 4-6 students.</div>
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
                                    <div class="accordion-body py-4 px-5">Yes, we provide a free demo class. If you wish to sit for the demo class, Click here to register for a free trial class.</div>
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
                                    <div class="accordion-body py-4 px-5">If you wish to join our Japanese language course online, you can register with us here. All the details about our Japanese language course are provided at this link. You can even directly contact our executives and career counsellors. </div>
                                </div>
                            </div>
                            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <h2 class="accordion-header mb-0" id="flush-headingNine">
                                    <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine"
                                        aria-expanded="false" aria-controls="flush-collapseNine">
                                        What is included in our Japanese language online course curriculum?
                                    </button>
                                </h2>
                                <div id="flush-collapseNine" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingNine"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">Our basic level curriculum includes Grammar. Phonetics, Vocabulary, greetings, and introduction. N4 includes Communication, advanced grammar and complex vocabulary. N3 includes Cultural knowledge, social know-how, and complex grammar.</div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                )
                break;
            case 'Korean':
                return (<div>
                    <LearningPrices one_one={Korean_1_1} one_two={Korean_1_2} one_four={Korean_1_4} />
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

                    <p className='w-full pb-20 text-center font-bold text-4xl underline underline-offset-8'>Frequently asked questions</p>


                    <div className='w-full px-10 lg:px-28'>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <h2 class="accordion-header mb-0" id="flush-headingOne">
                                    <button class="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left font-bold bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                        aria-expanded="false" aria-controls="flush-collapseOne">
                                        How much time will it take to learn Korean?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse border-0 collapse show"
                                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">If you wish to become fluent in the Korean language, you will need around 2000 hours of learning. In a year or two, you will become a master of the Korean language. The more you practice the better and faster you learn.</div>
                                </div>
                            </div>
                            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <h2 class="accordion-header mb-0" id="flush-headingTwo">
                                    <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                        aria-expanded="false" aria-controls="flush-collapseTwo">
                                        What is the duration of our Korean language online course?
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">The duration of our courses range from two months to two years. It depends on the level you are taking. Duration for each level is different. We provide all six levels of English.

                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <h2 class="accordion-header mb-0" id="flush-headingThree">
                                    <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                        aria-expanded="false" aria-controls="flush-collapseThree">
                                        Do I get additional resources with the Korean language course?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingThree"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">Yes, we offer additional resources with our Korean language course. These resources include podcasts, movies for screening, online grammar activities, translation activities, etc.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <h2 class="accordion-header mb-0" id="flush-headingFour">
                                    <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                                        aria-expanded="false" aria-controls="flush-collapseFour">
                                        What are the career opportunities after I learn Korean language?
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingFour"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">There are several career opportunities after you learn Korean language from us. You can work as a translator, writer, Manhwa creator, editor, etc.</div>
                                </div>
                            </div>
                            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <h2 class="accordion-header mb-0" id="flush-headingFive">
                                    <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive"
                                        aria-expanded="false" aria-controls="flush-collapseFive">
                                        How can I improve my Korean?
                                    </button>
                                </h2>
                                <div id="flush-collapseFive" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingFive"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">If you wish to learn Korean and master it, you will need to focus on the four aspects of language learning. This includes speaking, listening, writing, and reading. Along with this, you will also need to work on perfecting your grammar and increasing your vocabulary. If you focus on these 6 aspects, you will speak godly Korean.</div>
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
                                    <div class="accordion-body py-4 px-5">It depends. We have group batches that accommodate 4-6 students. We also have 1:2 batches and 1:1 batches. We believe in small batches. </div>
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
                                    <div class="accordion-body py-4 px-5">Yes, we provide a free demo class. If you wish to sit for the demo class, Click here to register for a free trial class. </div>
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
                                    <div class="accordion-body py-4 px-5">If you wish to join our Korean language course,  you can register with us here. All the details that are necessary for you are provided on this link. You can directly contact our executives and get all the information that you need. </div>
                                </div>
                            </div>
                            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <h2 class="accordion-header mb-0" id="flush-headingNine">
                                    <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine"
                                        aria-expanded="false" aria-controls="flush-collapseNine">
                                        What is included in our Korean language course curriculum?
                                    </button>
                                </h2>
                                <div id="flush-collapseNine" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingNine"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-4 px-5">Our Level 1 curriculum includes Grammar, Phonetics, Vocabulary, introduction, and greetings. Higher levels include Communication, Advance Grammar, Complex vocabulary, etc. We also work on Cultural knowledge, social know-hows, and Complex grammar. </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
                break;

            default:
                break;
        }
    }

    return <div>
        <div className="Home-container-2 px-5 fadeIN" style={{ width: '100%', marginTop: '2rem', paddingTop: 0 }}>
            <h2>A Fun, Proven method for Learning</h2>
            <h1 className='mb-12'>Choose a language</h1>
            <div className='Home-container-2-imgs'>
                <a onClick={() => setLanguage('English')} className='lg:mt-12'><img id={language === 'English' ? 'selected' : ''} className='Home-container-2-img  h-[95%] lg:w-auto' alt='img' src='/images/adults-english@300x.png' /></a>
                <a onClick={() => setLanguage('French')} className='lg:mt-12'><img id={language === 'French' ? 'selected' : ''} className='Home-container-2-img  h-[95%] lg:w-auto' alt='img' src='/images/adults-french@300x.png' /></a>
                <a onClick={() => setLanguage('Spanish')} className='lg:mt-12'><img id={language === 'Spanish' ? 'selected' : ''} className='Home-container-2-img  h-[95%] lg:w-auto' alt='img' src='/images/adults-spanish@300x.png' /></a>
                <a onClick={() => setLanguage('German')} className='lg:mt-12'><img id={language === 'German' ? 'selected' : ''} className='Home-container-2-img  h-[95%] lg:w-auto' alt='img' src='/images/adults-german@300x.png' /></a>
                <a onClick={() => setLanguage('Mandarin')} className='lg:mt-12'><img id={language === 'Mandarin' ? 'selected' : ''} className='Home-container-2-img h-[95%]  lg:w-auto' alt='img' src='/images/adults-mandarin@300x.png' /></a>
                <a onClick={() => setLanguage('Japanese')} className='lg:mt-12'><img id={language === 'Japanese' ? 'selected' : ''} className='Home-container-2-img h-[95%]  lg:w-auto' alt='img' src='/images/adults-japanese@300x.png' /></a>
                <a onClick={() => setLanguage('Korean')} className='lg:mt-12'><img id={language === 'Korean' ? 'selected' : ''} className='Home-container-2-img  h-[95%] lg:w-auto' alt='img' src='/images/adults-korean@300x.png' /></a>
            </div>
        </div>

        <LanguageSec />

    </div>;
}

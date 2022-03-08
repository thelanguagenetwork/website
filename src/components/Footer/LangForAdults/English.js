import React from 'react'

export default function AdultsEnglish() {
    return (
        <div>
            <div className="AdultEnglish h-[70vh]" >
                <div className="bg-[rgba(0,0,0,0.4)] h-full ">
                    <div className='h-full flex flex-col justify-center align-left w-[40rem] mx-32'>
                        <h1 className='text-4xl leading-snug text-white font-bold'>English Classes for Adults</h1>
                        <h1 className='text-md my-10 text-white font-medium'>1-to-1 , 1-to-2 and Group Online English classes for adults (14+ years old) with professional teachers.</h1>
                        <button type="button" class="flex flex-row btn btn-outline-light hover:bg-[#16e9d0] rounded-3xl w-fit text-sm py-3 px-4 ">BOOK A TRIAL CLASS</button>
                    </div>
                </div>
            </div>
            <div className="h-[100vh] px-28 flex flex-row items-center">
                <div className='lg:w-1/2'>
                    <h2 className='font-medium text-4xl'>Learn English online with TLN</h2>
                    <p className='text-sm text-[#54595f] my-3'>Learn English with our English language course online. We provide courses for beginners as well as advanced level learners. Our English language courses cover everything from English grammar to pronunciation.</p>
                    <p className='text-sm text-[#54595f] my-3'  >Learn English with The Language Network and become fluent in English. Our English language courses are adjusted to meet every learner’s personal learning needs. </p>
                </div>
                <div className='lg:w-1/2'>
                    <img src="/images/TLN_English-elements.png" alt="img" />
                </div>
            </div>
            <div className='w-full text-center text-4xl font-medium '>How is learning English with TLN unique?</div>
            <div className='w-full lg:px-32 py-18 flex flex-row flex-wrap  justify-evenly'>
                <div className='h-72 lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[27rem] w-60 flex flex-col items-center text-center'>
                    <img src="/images/Asset-26@300x.png" alt="alt" className='p-8' />
                    <h3 className='font-bold text-lg my-2'>Interview preparations</h3>
                    <p className='text-sm text-gray-700'>We prepare our students for interviews. So don’t just learn English with us, also focus on other aspects that are necessary for sustenance. Get the confidence you will need to ace interviews. </p>
                </div>
                <div className='h-72 lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[27rem] w-60 flex flex-col items-center text-center'>
                    <img src="/images/Asset-23@300x.png" alt="alt" className='p-8' />
                    <h3 className='font-bold text-lg my-2'>CV making</h3>
                    <p className='text-sm text-gray-700'>We teach our students the art of making CVs. We have to compete in a cutthroat competition. So it is necessary to work on skills like CV making.</p>
                </div>
                <div className='h-[19rem] lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[31rem] w-60 flex flex-col items-center text-center'>
                    <img src="/images/Asset-24@300x.png" alt="alt" className='p-8' />
                    <h3 className='font-bold text-lg my-2'>IELTS and TOEFL preparations</h3>
                    <p className='text-sm text-gray-700'>Trainers at TLN also teach how to crack exams like IELTS and TOEFL. These standardised exams are important for students who are looking forward to travelling abroad. We make sure that our students get the proper training they need to crack these exams and learn English.  </p>
                </div>
                <div className='h-72 lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[27rem] w-60 flex flex-col items-center text-center'>
                    <img src="/images/Asset-22@300x.png" alt="alt" className='p-8' />
                    <h3 className='font-bold text-lg my-2'>Focus on Spoken English</h3>
                    <p className='text-sm text-gray-700'>When you learn English, we expect that you get better at speaking English. We need to specifically focus on spoken English in order to make it better. At TLN, we give special attention to the spoken part of the language.  </p>
                </div>
                <div className='h-72 lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[27rem] w-60 flex flex-col items-center text-center'>
                    <img src="/images/Asset-25@300x.png" alt="alt" className='p-8' />
                    <h3 className='font-bold text-lg my-2'>Progress with Study plans</h3>
                    <p className='text-sm text-gray-700'>We have hand-tailored study plans to meet your learning needs. Now learn English with our master plans and ace at spoken English. Our English language courses are carefully made by considering your needs.  </p>
                </div>
                <div className='h-72 lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[27rem] w-60 flex flex-col items-center text-center'>
                    <img src="/images/Asset-21@300x.png" alt="alt" className='p-8' />
                    <h3 className='font-bold text-lg my-2'>Small Batches</h3>
                    <p className='text-sm text-gray-700'>Learn English courses online with us because we understand how learning works. We organise small batches so that you can practice grammar and vocabulary efficiently with our expert trainers.   </p>
                </div>
            </div>

            <div className='w-full lg:mt-20 text-center text-4xl font-medium '>How to learn English effectively?</div>
            {/* <div className='p-28 flex lg:flex-row'>
                <div className='w-[28rem]'>
                    <img className='w-full' src="/images/Learn-effectively@300x.png" alt="img" />    
                </div>     
                <div className='w-1/2'>
                    <div >
                        <div className='left-border'></div>
                        <h1 className='text-xl font-medium'>Grammar and Vocabulary</h1>
                        <p>Learn English effectively and efficiently by adhering to our guidelines. There are various tricks and tips you need to follow to learn English. We make sure that our English language courses focus on grammar and vocabulary.</p>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div> */}
            <div className='w-full lg:mt-20 text-center text-4xl font-medium '>TLN and International Exams</div>
            <p className='text-center w-full px-60 pt-4 text-sm text-[#54595f]'> We want our students to excel in international exams like TOEFL and IELTS. We teach our students how to learn English in a way that will help them ace these standardised tests. All aspects of the test, including pronunciation, vocabulary, listening part, is being taken care of at TLN. We ensure that once you learn something you won’t forget it.</p>


            
        </div>
    )
}

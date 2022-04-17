import React from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { AiFillStar } from 'react-icons/ai';
import { FaAward } from 'react-icons/fa';
import { GiReceiveMoney, GiWallet } from 'react-icons/gi';
import { GrCertificate } from 'react-icons/gr';

import { FiShare2, FiUserPlus } from 'react-icons/fi';

export default function AffProg() {
  return (
    <div>
      <div className='w-full px-4 lg:px-26 h-auto flex flex-row lg:flex-col justify-center items-center content-center flex-wrap' >
        <div className="lg:flex flex-row">
          <div className='lg:p-16 lg:w-1/2 text-left items-center justify-center space-y-10'>
            {/* text */}
            <h2 className='mt-10 text-black font-semibold text-5xl lg:pt-20'>Refer, Inspire and Earn</h2>
            <div><span className="text-xl font-light">Earn commission of 20% of the total course fees for every learner you bring to TLN!</span></div>
            <div><button type="button" class="btn btn-info text-white" style={{ backgroundColor: '#13bfab', borderRadius: '30px', paddingTop: '16px', paddingRight: '30px', paddingBottom: '16px', paddingLeft: '30px', fontSize: '0.82352941176471rem' }}>Become an Affiliate</button></div>
          </div>
          <div className="lg:w-1/2 p-10">
            {/* image */}
            <img src="/images/affiliate-marketing.png" alt='img' />
          </div>
        </div>
        <div className=" w-full flex flex-row justify-center bottom-[-500px] lg:bottom-[-200px]">
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

      <div>
        <div className="">
          <h1 className='text-center font-semibold text-4xl pt-24 lg:pt-32 pb-2'>How it works</h1>
          <h1 className='text-center font-medium text-2xl'>Start earning in 3 simple steps</h1>
          <div>

            <section class="text-gray-600 body-font">
              <div class="container px-5 py-24 mx-auto flex flex-wrap">
                <div class="flex flex-wrap -m-4">

                  <div class="p-4 lg:w-1/3 md:w-full">
                    <div class="flex sm:flex-row flex-col hover:text-[#13BFAB] group text-black transition-color duration-500">
                      <div class="w-20 h-20 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-[#fffff] text-[#13BFAB] group-hover:bg-[#13BFAB] transition-color duration-500 group-hover:text-white flex-shrink-0 shadow-2xl">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                          <svg class="h-30 w-14" viewBox="0 0 16 18">
                            <FiUserPlus />
                          </svg>
                        </svg>
                      </div>
                      <div class="flex-grow">
                        <h2 class="text-lg font-semibold mb-2">Join The Language Network</h2>
                        <p class="leading-relaxed text-base text-gray-600">Register TLN’s affiliate program for free in less than 10 seconds. Joining is fast and easy</p>
                      </div>
                    </div>
                  </div>

                  <div class="p-4 lg:w-1/3 md:w-full">
                    <div class="flex sm:flex-row flex-col hover:text-purple-700 group text-black transition-color duration-500">
                      <div class="w-20 h-20 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-purple-700 bg-[#fffff] group-hover:bg-purple-700 transition-color duration-500 group-hover:text-white flex-shrink-0 shadow-2xl">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                          <svg class="h-30 w-14" viewBox="0 0 18 17">
                            <FiShare2 />
                          </svg>
                        </svg>
                      </div>
                      <div class="flex-grow">
                        <h2 class="text-lg title-font font-semibold mb-2">Refer and Inspire</h2>
                        <p class="leading-relaxed text-base text-gray-600">Share your TLN Affiliate link with friends via Whatsapp, Instagram, Facebook or any other social Media platform.</p>
                      </div>
                    </div>
                  </div>

                  <div class="p-4 lg:w-1/3 md:w-full">
                    <div class="flex sm:flex-row flex-col hover:text-green-500 group text-black transition-color duration-500">
                      <div class="w-20 h-20 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-green-500 bg-[#fffff] group-hover:bg-green-500 transition-color duration-500 group-hover:text-white flex-shrink-0 shadow-2xl">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                          <svg class="h-30 w-14" viewBox="0 0 16 18">
                            <GiWallet />
                          </svg>
                        </svg>
                      </div>
                      <div class="flex-grow">
                        <h2 class="text-lg title-font font-semibold mb-2">Earn</h2>
                        <p class="leading-relaxed text-base text-gray-600 ">TLN will pay you a 20% commission (of the total course fees) for every new user that joins TLN.</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

          </div>

        </div>
      </div>

      <div className="bg-slate-100">
        <div className="md:flex lg:flex flex-row pt-10 pb-10">
          <div className="sm:pb-0 lg:pb-24 md:flex items-center text-left px-10 lg:pt-20 lg:pl-32 lg:w-1/3 space-y-5 h-auto">
            <div className="">
              <h1 className="text-3xl font-semibold">Why You Should Join?</h1>
              <h1 className="text-sm font-small pb-10">When you promote TLN, you’re not just promoting languages. You’re inspiring your audience to learn a foreign language.</h1>
            </div>
          </div>

          <section class="text-gray-600 body-font lg:w-2/3 ">
            <div class="">

              <div class="flex flex-wrap sm:-m-4 -mb-10 -mt-4 md:space-y-0 space-y-6">

                <div class="group p-4 lg:w-5/12 flex flex-col text-center items-center rounded-lg bg-white lg:w-5/12 mx-10 lg:mx-10 hover:text-[#13BFAB] text-black transition-color duration-500">
                  <div class="w-20 h-20 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-[#fffff] text-[#13BFAB] group-hover:bg-[#13BFAB] transition-color duration-500 group-hover:text-white flex-shrink-0 shadow-2xl">
                    <svg class="h-30 w-14" viewBox="0 0 16 18">
                      <GiReceiveMoney />
                    </svg>
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-lg title-font font-medium mb-3">Generous Commission Payout</h2>
                    <p class="leading-relaxed text-base text-gray-600">For every new user who completes a purchase from your affiliate link, you’ll earn a 20% commission (of the total course fees).</p>
                  </div>
                </div>

                <div class="group p-4 lg:w-5/12 flex flex-col text-center items-center rounded-lg  bg-white lg:w-5/12 mx-10 lg:mx-10 hover:text-purple-700 text-black transition-color duration-500">
                  <div class="w-20 h-20 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-[#fffff] text-purple-700 group-hover:bg-purple-700 transition-color duration-500 group-hover:text-white flex-shrink-0 shadow-2xl">
                    <svg class="w-10" viewBox="0 0 16 16">
                      <FaAward />
                    </svg>
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-lg title-font font-medium mb-3">Excellence Certificate</h2>
                    <p class="leading-relaxed text-base text-gray-600">TLN rewards the registered affiliates by providing excellence certificate after 50 referrals.</p>
                  </div>
                </div>

              </div>

              <div className="w-full flex items-center justify-center mt-10 lg:mt-0"><button type="button" class="btn btn-info text-white mt-10 items-center justify-center" style={{ backgroundColor: '#13BFAB', borderRadius: '30px', paddingTop: '16px', paddingRight: '30px', paddingBottom: '16px', paddingLeft: '30px', fontSize: '0.82352941176471rem' }}>Become an Affiliate</button></div>

            </div>
          </section>

        </div>
        <h1 className="text-center text-[11px] pb-10 px-30">*Note: One must have a valid PayPal account in order to receive the earned commission. The amount earned will be credited to your PayPal account after the purchase has been successfully made from your affiliate link.</h1>
      </div>
      <div className="Home-container-2 w-full lg:px-20 mt-16">
        <h2>Which language would you like to learn?</h2>
        <div className='Home-container-2-imgs lg:flex flex-row mt-10 '>
          <a href='/english-course-adults' className='my-2 text-black hover:text-black font-medium lg:flex flex-col'><img className='Home-container-21-img' alt='img' src='/images/English.png' /><span className=''>English</span></a>
          <a href='/french-course-adults' className='my-2 text-black hover:text-black font-medium lg:flex flex-col'><img className='Home-container-21-img' alt='img' src='/images/French.png' /><span className=''>French</span></a>
          <a href='/spanish-course-adults' className='my-2 text-black hover:text-black font-medium lg:flex flex-col'><img className='Home-container-21-img' alt='img' src='/images/Spanish.png' /><span className=''>Spanish</span></a>
          <a href='/german-course-adults' className='my-2 text-black hover:text-black font-medium lg:flex flex-col'><img className='Home-container-21-img' alt='img' src='/images/German.png' /><span className=''>German</span></a>
          <a href='/mandarin-course-adults' className='my-2 text-black hover:text-black font-medium lg:flex flex-col'><img className='Home-container-21-img' alt='img' src='/images/Mandarin.png' /><span className=''>Mandarin</span></a>
          <a href='/japanese-course-adults' className='my-2 text-black hover:text-black font-medium lg:flex flex-col'><img className='Home-container-21-img' alt='img' src='/images/Japanese.png' /><span className=''>Japanese</span></a>
          <a href='/korean-course-adults' className='my-2 text-black hover:text-black font-medium lg:flex flex-col'><img className='Home-container-21-img' alt='img' src='/images/Korean.png' /><span className=''>Korean</span></a>
        </div>
      </div>
      <div>
        <p className='w-full pb-20 text-center font-medium text-4xl mt-20'>FAQ</p>


        <div className='w-full px-10 lg:px-28'>
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
              <h2 class="accordion-header mb-0" id="flush-headingOne">
                <button class="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left font-bold bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                  aria-expanded="false" aria-controls="flush-collapseOne">
                  Why should I enrol my kid in TLN?
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse border-0 collapse show"
                aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body py-4 px-5">TLN offers one-on-one batches. We give special attention to all our students. We have hired expert teachers for all our batches. We teach all aspects of language learning while focusing on the spoken part. Our English language course for kids covers grammar and vocabulary, speaking, reading, writing, and listening.</div>
              </div>
            </div>
            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
              <h2 class="accordion-header mb-0" id="flush-headingTwo">
                <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                  aria-expanded="false" aria-controls="flush-collapseTwo">
                  What makes TLN different from other language learning institutes?
                </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body py-4 px-5">We only have one-on-one batches. We prepare our students for international exams. We have hand-tailored study plans to meet each student’s learning needs. Our English language course for kids also covers the English culture which tremendously helps language learning.</div>
              </div>
            </div>
            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
              <h2 class="accordion-header mb-0" id="flush-headingThree">
                <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                  aria-expanded="false" aria-controls="flush-collapseThree">
                  What is the duration of each class?
                </button>
              </h2>
              <div id="flush-collapseThree" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body py-4 px-5">The duration of each English language course for kids is 1 hour. It is perfect for their attention spans.
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
                  Can the classes be downloaded?
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
                  How many students do we accommodate in one batch?
                </button>
              </h2>
              <div id="flush-collapseSix" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingSix"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body py-4 px-5">We do not have group batches for kids and adolescents. We only have one-on-one batches for kids. We believe that kids need more specialised attention so our English language course for kids only accommodates one student at a time.</div>
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
                <div class="accordion-body py-4 px-5">Yes, we do provide study material to our students. We also have several activities in our English language course for kids. </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center text-2xl font-medium mt-20 mb-4">Still got questions?</h1>
        <h1 className="text-center">
          If you have any questions about our affiliate program, you can reach us at
        </h1>
        <h1 className="text-center mt-2"> <a className="text-black underline" href="mailto:marketing@thelanguagenetwork.co">marketing@thelanguagenetwork.co</a></h1>

      </div>
    </div>
  )
}

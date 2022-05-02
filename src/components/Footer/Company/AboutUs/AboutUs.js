import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

import AboutDisplay from "./AboutDisplay"
import { TextareaAutosize } from '@mui/material';
import Team from './Team';
import { Link } from 'react-scroll';

export default function AboutUs() {

  // const mybutton = document.getElementById("btn-back-to-top");
  // // When the user scrolls down 20px from the top of the document, show the button
  // window.onscroll = function () {
  //   scrollFunction();
  // };

  // function scrollFunction() {
  //   if (
  //     document.body.scrollTop > 20 ||
  //     document.documentElement.scrollTop > 20
  //   ) {
  //     // mybutton.style.display = "block";
  //   } else {
  //     mybutton.style.display = "none";

  //   }
  // }
  // // When the user clicks on the button, scroll to the top of the document
  // mybutton.addEventListener("click", backToTop);

  // function backToTop() {
  //   document.body.scrollTop = 1000;
  //   document.documentElement.scrollTop = 1000;
  // }

  return (
    <div>
      <div className="lg:pt-10 lg:px-10 lg:px-24 lg:flex flex-row items-center justify-center">
        <div className="lg:w-1/2 flex flex-wrap pt-20 ">
          <div>
            <h1 className="font-bold text-3xl lg:text-4xl px-3 lg:px-10 text-[#13bfab]">Helping you learn from the comfort of your home</h1>
          </div>
          <div className="flex flex-wrap text-lg px-3">
            <p className="font-bold pt-6">Immerse yourself in the world of languages and</p>
            <p className="md:pl-2 lg:pl-0 md:pt-6 lg:pt-0">be a part of a global society.&nbsp;</p>
            <p href="" className="font-bold">Join<span className="font-light"> our online classes led by professional trainers.</span></p>
          </div>
          
          {/* <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" class="inline-block p-3 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out bottom-5 right-5" id="btn-back-to-top">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-4 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path></svg>
          </button> */}
          <Link to="mve" spy={true} smooth={true}>
            <div className="">
            <svg xmlns="http://www.w3.org/2000/svg" className="shadow-xl shadow-yellow-200 hover:animate-pulse hover:shadow-xl hover:shadow-yellow-300 flex h-12 w-12 ml-10 my-10 border-[#f2b919] border-[12px] p-0 rounded-3xl" fill="none" viewBox="0 0 24 24" stroke="#f2b919" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 9 9 0 18z" />
          </svg>
          </div>
          </Link>
          <span className="flex items-center text-lg font-semibold ml-10 pt-0">Dive in deeper</span>

        </div>
        <div className="px-8 lg:px-0 lg:w-1/2 rounded-lg">
          <video controls autoPlay muted className="w-11/12 rounded-md mt-10 mr-10">
            <source src="/videos/TLN_Online-Class_Self-Care-Education.mp4" className="rounded-lg"></source>
          </video>
        </div>
      </div>

      <div className="pt-20 lg:pl-20 lg:flex flex-row items-center justify-center" id="mve">
        <div className="lg:w-1/2 px-3 lg:px-0 lg:pl-10 ">
          <div className="text-4xl font-semibold text-[#13bfab]">To tell you a little bit about Us</div>
          <div className="items-baseline flex flex-wrap inline-block">
            <div className="pt-8 tracking-wider font-semibold inline-block">Whether it’s about mastering a timeless skill, cultivate new perspectives, or connect with fascinating people from around the world, </div>
            <div><strong className=""><em>The Language Network helps in curating a pleasant learning experience.</em></strong></div>
          </div>
        </div>
        <div className="px-10 lg:px-0 lg:w-1/2 lg:pr-40">
          <img src="/images/social_image.png" />
        </div>
      </div>

      <div className="pt-40">
        <div className="flex flex-col items-center justify-center lg:px-40 space-y-10">
          <h1 className='lg:flex wrap font-bold text-2xl md:text-3xl lg:text-4xl ml-28'>Core Values that shape our
            <div class="scroller mt-0">
              <span className='lg:pl-4 text-[#13bfab] lg:px-3 items-center'>
                Behaviours<br />
                Culture
              </span>
            </div>
          </h1>
          <hr class="h-full flex flex-col justify-center align-center text-center w-ful border-[#FFC000] border-2 w-1/3 self-center mt-4 items-center justify-center"></hr>
          <AboutDisplay />
        </div>
        <div className="items-center justify-center px-3 lg:px-20 flex flex-col justify-center ">
          <h1 className="flex text-3xl lg:text-4xl font-semibold pt-20 items-center justify-center ">We work as a team</h1>
          <hr class="h-full flex flex-col justify-center align-center text-center w-ful border-[#FFC000] border-2 w-1/4 self-center mt-4 items-center justify-center"></hr>
          <span className="flex text-lg font-medium pt-10 lg:px-20 text-center">With a fantastic team of over 50+ trainers (and counting!) who make learning entertaining and effortless. Our trainers are qualified with an overall student rating of 5   out of 5.</span>
        </div>
      </div>
      
      {/* slides */}
      <Team />
      <span className="flex text-3xl lg:text-4xl font-semibold pt-20 items-center justify-center pb-10 px-10">Our Collaborating Partners</span>

      <div className="Home-container-61 lg:px-24">

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
            "clickable": false
          }} navigation={false} autoplay={{
            "delay": 2500,
            "disableOnInteraction": false
          }}
          className="mySwiper">
          <SwiperSlide>
            <img className="w-2/5" src="/images/Loyola_College_Chennai_-_Coat_of_arms.png" alt='img' />
          </SwiperSlide><SwiperSlide>
            <img className="w-2/5" src="/images/Rcmg-Ghatkopar-300x300.png" alt='img' />
          </SwiperSlide><SwiperSlide>
            <img className="w-2/5" src="/images/rotary.jpg" alt='img1' />
          </SwiperSlide>
        </Swiper>
      </div>
      <p className='w-full text-center font-bold text-4xl lg:pt-20 pt-10'>Frequently asked questions</p>
      <div className="flex flex-col justify-center items-center pb-20 ">
        <hr class="h-full flex flex-col justify-center align-center text-center w-ful border-[#FFC000] border-2 w-1/5 self-center mt-4 items-center justify-center"></hr>
      </div>


      <div className='w-full px-10 lg:px-52'>
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
            <h2 class="accordion-header mb-0" id="flush-headingOne">
              <button class="accordion-button relative flex items-center w-full py-4 px-3 lg:px-5 text-base text-gray-800 text-left font-bold bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                aria-expanded="false" aria-controls="flush-collapseOne">
                What is The Language Network?
              </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse border-0 collapse show"
              aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body py-4 px-3 lg:px-5">The Language Network is a place to learn and immerse yourself in the world of languages. We are a dynamic institution promoting languages and celebrating cultures.</div>
            </div>
          </div>
          
          <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
            <h2 class="accordion-header mb-0" id="flush-headingThree">
              <button class="accordion-button collapsed relative flex items-center w-full py-4 px-3 lg:px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                aria-expanded="false" aria-controls="flush-collapseThree">
                What language courses does The Language Network provide?
              </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body py-4 px-3 lg:px-5">The Language Network provides language courses in French, Spanish, German, English, Mandarin, Japanese, and Korean. We plan to start more courses soon- keep checking our website for more details!
              </div>
            </div>
          </div>

          <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
            <h2 class="accordion-header mb-0" id="flush-headingFour">
              <button class="accordion-button collapsed relative flex items-center w-full py-4 px-3 lg:px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                aria-expanded="false" aria-controls="flush-collapseFour">
               Why should I enroll in TLN's language courses?
              </button>
            </h2>
            <div id="flush-collapseFour" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingFour"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body py-4 px-3 lg:px-5">Learning foreign languages is an asset at any age. They help you grow in your career and education. The Language Network has the best trainers, curated syllabus, and timing suited to your needs.</div>
            </div>
          </div>

          <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
            <h2 class="accordion-header mb-0" id="flush-headingFive">
              <button class="accordion-button collapsed relative flex items-center w-full py-4 px-3 lg:px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive"
                aria-expanded="false" aria-controls="flush-collapseFive">
                What makes TLN different from other language training schools?
              </button>
            </h2>
            <div id="flush-collapseFive" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingFive"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body py-4 px-3 lg:px-5">The Language Network does more than just teach languages to pass exams. We aim to explore the culture of the language, the history of the language, and teach you how the spoken language differs from the written. Apart from this, we also teach you from the comfort of your home.</div>
            </div>
          </div>

          <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
            <h2 class="accordion-header mb-0" id="flush-headingSix">
              <button class="accordion-button collapsed relative flex items-center w-full py-4 px-3 lg:px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix"
                aria-expanded="false" aria-controls="flush-collapseSix">
                What is the duration of each class?
              </button>
            </h2>
            <div id="flush-collapseSix" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingSix"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body py-4 px-3 lg:px-5">A typical class lasts for 2 hours, either on weekdays or on weekends depending on your choice of batch. The classes are designed to suit each age group of kids, adolescents, or adults.</div>
            </div>
          </div>

          <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
            <h2 class="accordion-header mb-0" id="flush-headingSeven">
              <button class="accordion-button collapsed relative flex items-center w-full py-4 px-3 lg:px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven"
                aria-expanded="false" aria-controls="flush-collapseSeven">
               Can the classes be downloaded?
              </button>
            </h2>
            <div id="flush-collapseSeven" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingSeven"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body py-4 px-3 lg:px-5">For the time being, all classes are conducted on Zoom. Post the classes, the recorded lectures are sent to the students so that they can go through them for revision, doubts, etc.</div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

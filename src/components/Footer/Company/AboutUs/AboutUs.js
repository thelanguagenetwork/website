import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

import About_display from "./About_display"

export default function AboutUs() {
  return (
    <div>
      <div className="lg:pt-10 lg:px-10 lg:px-24 lg:flex flex-row items-center justify-center">
        <div className="lg:w-1/2 flex flex-wrap pt-20">
          <div>
            <h1 className="font-bold text-4xl px-3 lg:px-10 text-[#13bfab]">Helping you learn from the comfort of your home</h1>
          </div>
          <div className="flex flex-wrap text-lg px-10 ">
            <p className="font-bold pt-6">Immerse yourself in the world of languages and</p>
            <p>be a part of a global society.&nbsp;</p>
            <p href="" className="font-bold">Join<span className="font-light"> our online classes led by professional trainers.</span></p>
          </div>
          <svg onClick={console.log("hello")} xmlns="http://www.w3.org/2000/svg" className="flex  h-12 w-12 ml-20 my-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
          </svg>
          <span className="flex items-center text-xl font-medium ml-10 pt-0">Dive in deeper</span>

        </div>
        <div className="px-8 lg:px-0 lg:w-1/2 rounded-lg">
          <video controls className="w-11/12 rounded-md mt-10 mr-10">
            <source src="./file_video.mp4" autoplay controls className="rounded-lg"></source>
          </video>
        </div>
      </div>

      <div className="pt-20 lg:pl-10 lg:pl-24 lg:flex flex-row items-center justify-center">
        <div className="lg:w-1/2 px-5 lg:px-0 lg:pl-10">
          <div className="text-4xl font-semibold text-[#13bfab]">To tell you a little bit about Us</div>
          <div className="flex flex-wrap items-baseline">
            <div className="pt-8 tracking-wider">Whether it’s about mastering a timeless skill, cultivate new perspectives, or connect with fascinating people from around the world, </div>
            <strong><em>The Language Network helps in curating a pleasant learning experience.</em></strong>
          </div>
        </div>
        <div className="px-10 lg:px-0 lg:w-1/2 lg:pr-40">
          <img src="/images/social_image.png" />
        </div>
      </div>

      <div className="py-20 ">
        <div className="flex flex-col items-center justify-center lg:px-40 space-y-10">
          <h1 className='lg:flex wrap font-bold text-2xl md:text-3xl lg:text-4xl'>Core Values that shape our
            <div class="scroller bg-[]">
              <span className='lg:pl-10 text-[#13bfab] lg:px-3'>
                Behaviours<br />
                Culture
              </span>
            </div>

          </h1>
          <hr class="h-full flex flex-col justify-center align-center text-center w-ful border-yellow-500 border-2 w-1/4 self-center mt-4 items-center justify-center"></hr>
          <About_display />
        </div>
        <div className="items-center justify-center px-3 lg:px-20 flex flex-col justify-center ">
          <h1 className="flex text-3xl lg:text-4xl font-semibold pt-20 items-center justify-center ">We work as a team</h1>
          <hr class="h-full flex flex-col justify-center align-center text-center w-ful border-yellow-500 border-2 w-1/4 self-center mt-4 items-center justify-center"></hr>
          <span className="flex text-lg font-medium pt-10 lg:px-20 text-center">With a fantastic team of over 50+ trainers (and counting!) who make learning entertaining and effortless. Our trainers are qualified with an overall student rating of 5   out of 5.</span>
        </div>
      </div>
      {/* slides */}
      <div className="text-center">asddad</div>

      <div className="Home-container-6  lg:px-40">
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
                        <img src="/images/Loyola_College_Chennai_-_Coat_of_arms.png" alt='img' />
                    </SwiperSlide><SwiperSlide>
                        <img src="/images/Rcmg-Ghatkopar-300x300.png" alt='img' />
                    </SwiperSlide><SwiperSlide>
                        <img src="/images/rotary.png" alt='img' />
                    </SwiperSlide>
                </Swiper>
            </div>

    </div>
  )
}

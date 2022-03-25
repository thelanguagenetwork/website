import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

import About_display from "./About_display"

export default function AboutUs() {
  return (
    <div>
      <div className="pt-10 px-10 lg:px-24 lg:flex flex-row items-center justify-center">
        <div className="lg:w-1/2 flex flex-wrap pt-20">
          <div>
            <h1 className="font-bold text-4xl px-10 text-[#13bfab]">Helping you learn from the comfort of your home</h1>
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
        <div className="lg:w-1/2 rounded-lg">
          <video controls className="w-11/12 rounded-md mt-10 mr-10">
            <source src="file_video.mp4" autoplay controls className="rounded-lg"></source>
          </video>
        </div>
      </div>

      <div className="pt-20 pl-10 lg:pl-24 lg:flex flex-row items-center justify-center">
        <div className="lg:w-1/2 pl-10">
          <div className="text-4xl font-semibold text-[#13bfab]">To tell you a little bit about Us</div>
          <div className="flex flex-wrap items-baseline">
          <div className="pt-8 tracking-wider">Whether it’s about mastering a timeless skill, cultivate new perspectives, or connect with fascinating people from around the world, </div>
          <strong><em>The Language Network helps in curating a pleasant learning experience.</em></strong>
          </div>
        </div>
        <div className="w-1/2 pr-40">
          <img  src="/images/social_image.png"/>
        </div>
      </div>

      <div>
      <div className="lg:px-40">
                {/* <Swiper spaceBetween={0} loop={true} loopFillGroupWithBlank={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1

                        },
                        768: {
                            slidesPerView: 1
                        }
                    }}
                    // pagination={{
                    //     "clickable": true
                    // }} 
                    navigation={true} autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                    }} className="mySwiper">
                    <SwiperSlide>
                      <div className="flex flex-col">
                        <img className="w-full h-16 w-16" src="/images/Website-core-value-icons-1.png" alt='img' />
                        <p></p>
                        <span>
                            We work collaboratively towards a common purpose and goals of providing the best value of investment for the TLNier, Focused learning and priority support from our team. </span>
                        <span className="h-10">
                            </span>
                      </div>
                    </SwiperSlide><SwiperSlide>
                        <img src="/images/Website-core-value-icons-2.png" alt='img' />
                    </SwiperSlide><SwiperSlide>
                        <img src="/images/Website-core-value-icons-3.png" alt='img' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/Website-core-value-icons-4.png" alt='img' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/Website-core-value-icons-5.png" alt='img' />
                    </SwiperSlide>
                    
                </Swiper> */}
                <About_display/>
            </div>
      </div>

    </div>
  )
}

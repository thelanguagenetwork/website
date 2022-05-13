import React from 'react';
import './AdultCourses';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

export default function PricingTable(props) {

    //Add Icons from :- https://fontawesome.com/v4/icons/
    const icons = ['fa-adjust', 'fa-briefcase', "fa-cubes ", 'fa-graduation-cap', "fa-desktop", "fa-file-text-o", "fa-pencil-square-o", "fa-graduation-cap"];

    return (
        <div class="demo py-20 sm:px-2 lg:px-28 fadeIN">
            <div class="container">
                <div class="row hidden lg:flex flex-row flex-wrap justify-center">
                    {
                        props.TableData.map((data, i) => {
                            return (
                                <div class="col-md-3 col-sm-6 my-3">
                                    <div class="pricingTable lg:mr-1 mr-0">
                                        <div class="pricingTable-header">
                                            {/* <i class={`fa ${icons[i]}`}></i> */}
                                            <div class="price-value flex flex-col"> ₹{data.DiscPrice} <span className='text-[1.4rem] line-through'>{data.OgPrice}</span>  </div>
                                        </div>
                                        <h3 class="heading">Level {data.lvlName}</h3>
                                        <div class="pricing-content">
                                            <ul>
                                                {
                                                    data.content.map((cont, i) => {
                                                        return (


                                                            <li><b>{i + 1}.</b> {cont}</li>
                                                        )

                                                    })
                                                }

                                            </ul>
                                        </div>
                                        <div class="pricingTable-signup">
                                            <a href={data.Link}>Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </div>
                <Swiper className='pagi1 flex lg:hidden justify-center' spaceBetween={5} loop={true} loopFillGroupWithBlank={true}
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
                    {
                        props.TableData.map((data, i) => {
                            return (
                                <SwiperSlide>
                                    <div class="col-md-3 col-sm-6 my-3">
                                        <div class="pricingTable lg:mr-1 mr-0">
                                            <div class="pricingTable-header">
                                                <i class={`fa ${icons[i]}`}></i>
                                                <div class="price-value flex flex-col"> ₹{data.DiscPrice} <span className='text-[1.4rem] line-through'>{data.OgPrice}</span>  </div>
                                            </div>
                                            <h3 class="heading">Level {data.lvlName}</h3>
                                            <div class="pricing-content">
                                                <ul>
                                                    {
                                                        data.content.map((cont, i) => {
                                                            return (


                                                                <li><b>{i + 1}.</b> {cont}</li>
                                                            )

                                                        })
                                                    }

                                                </ul>
                                            </div>
                                            <div class="pricingTable-signup">
                                                <a href={data.Link}>Buy Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}

                </Swiper>
            </div>
        </div>
    )
}

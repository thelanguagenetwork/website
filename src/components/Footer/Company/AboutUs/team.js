import React from 'react'
import "./team.css"
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar";
import { EffectFade, Parallax } from "swiper/core";

import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";

SwiperCore.use([Autoplay, Navigation, Pagination]);

function CardData() {
    const rtn = [
        {
            pic: "/images/siddhi.jpeg.png",
            desc: "I’ve been fascinated by the language and the culture since the day I discovered it. I love passing on my knowledge to my students who wish to learn French as a hobby or even for their career. I’m always so happy to see how this language grows on them overtime and it’s the best feeling ever.",
            name: "Siddhi",
            post: "French Head Trainer",
        },
        {
            pic: "/images/Manika.png",
            desc: "Teaching Japanese at TLN is the best combination of time spent in enhancing teaching skills and quality of teaching. I really enjoy teaching at TLN. TLN is a platform where I love to teach and communicate with new students and seeing them having great interest in learning Japanese ",
            name: "Manika",
            post: "Japanese Head Trainer ",
        },
        {
            pic: "/images/anchal.jpg.png",
            desc: "I have been teaching German since 2 years now and it is my passion to teach German. It’s an amazing feeling interacting with so many new students and helping them reach heights and fulfilling the dream of speaking German fluently.",
            name: "Anchal",
            post: "German Head Trainer ",
        },
        {
            pic: "/images/Gautami.png",
            desc: "Language is at core a way to communicate, and I realized pretty early in my life that I had an interest in communicating with people from different backgrounds. I really love teaching and watching my students learn and love Mandarin not just as a language but as a culture.",
            name: "Gautami",
            post: "Mandarin Head Trainer ",
        },
        {
            pic: "/images/samihan.jpg.png",
            desc: "I feel really blessed to have been able to share my knowledge with students from different strata & having made memories worth cherishing for a lifetime.",
            name: "Samihan",
            post: "Spanish Head Trainer ",
        },
        {
            pic: "/images/Simran-Korean.jpg",
            desc: "A certified korean language specialist from korean culture center, Delhi, which is affiliated with the korean embassy. Professionally, working as a korean language trainer at TLN as well as a part-time translator, interpreter and marketing associate.",
            name: "Simran",
            post: "Korean Head Trainer",
        },
    ];
    return rtn;
}

export default () => {
    const cardData = CardData();
    return (
        <Swiper
            navigation={true}
            infinite
            autoplay={{
                disableOnInteraction: false,
            }}
            module={[EffectFade, Parallax]}
            effect="fade"
            loop={true}
            // pagination={{ clickable: false }}
            spaceBetween={2}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
            }}

            className="px-3"
        >
            <section>

                {cardData.map((card, i) => {
                    return (
                        <SwiperSlide className="testi-slides w-full">
                            <div className="relative h-96">
                                <div class="flex card">
                                    <div class="image">
                                        <img src={card.pic} />
                                    </div>
                                    <div class="details">
                                        <div class="center">
                                            <h1>{card.name}</h1>
                                            <span className="px-3">{card.post}</span>
                                            <p className="text-sm">{card.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </section>
        </Swiper>
    );
};




// export default function Team() {
//     return (
//         <div className="relative h-96">
//             <div class="card">
//                 <div class="image">
//                     <img src="http://1.bp.blogspot.com/-EhPr4LXcywE/Udr594sPHTI/AAAAAAAAAJ4/Tv4y4CBLTPM/s400/Cristina-Otero-2.jpg" />
//                 </div>
//                 <div class="details">
//                     <div class="center">
//                         <h1>Someone famous
//                             <span>team leader</span></h1>
//                         <p>Lorem ipsum is simple dummy text on the printing and typesetting industry.</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

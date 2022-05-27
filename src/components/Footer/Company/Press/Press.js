import React from 'react'

export default function Press() {

    const PressData = [
        {
            pic: "/images/Bytetrails-Logo.png ",
            title: "Right Mix of Learning a Language and Culture with The Language Network.",
            desc: "The Language Network has been actively mixing learning a Language with Culture to create a perfect cocktail of fun learning for students who are looking forward to learning new languages online.",
            link: "https://bytetrails.com/learning-language-and-culture-with-the-language-network/",
        },
        {
            pic: "/images/SabaLadhaScribbles_logo.png ",
            title: "How TLN is different from other Language learning institutions",
            desc: "TLN is one of the several Language teaching organizations that are active in 2021. The Language Network came into existence with a singular goal: To create a Language learning platform like none other! ",
            link: "https://saba-relishingrascal-scribbles.com/2021/08/23/how-tln-is-different-from-other-language-learning-institutions/",
        },
        {
            pic: "/images/Techvorm-logo.png ",
            title: "The Language Network Offers Introductory Courses For French, Korean, Spanish & German at INR149 per Class",
            desc: "The Language Network is the new start-up on the block. Although fairly recent, it is making waves with its new-age language learning pedagogy. Recently, they announced a new addition of introductory courses.",
            link: "https://techvorm.com/rise-of-edtech",
        },
        {
            pic: "/images/Techvorm-logo.png ",
            title: "Rise of Edtech",
            desc: "In the crowd of Edtech participants, a new and interesting player has emerged. Founded in March 2020, The Language Network strives to teach more than just languages. Their motto is “promoting languages and celebrating cultures”.",
            link: "https://techvorm.com/rise-of-edtech",
        },
        {
            pic: "/images/techlove.png ",
            title: "“The Language Network” Edtech startup will help you to learn more languages?",
            desc: "Mumbai-based Ed-tech company The Language Network Pvt. Ltd is trying to carve a nice in the world of language learning and education. ",
            link: "https://www.thetechlove.com/the-language-network-ed-tech-startu/",
        },
        {
            pic: "/images/AcEsque.png ",
            title: "HOW THE MUMBAI-BASED START UP ‘THE LANGUAGE NETWORK’ IS MAKING E-LEARNING FUN AND PERSONALIZED",
            desc: "“We want the whole world to be learning languages – that is our vision.” says Co-founder Pinnac Yeddy. ",
            link: "https://www.acesque.com/the-language-network/",
        },
        {
            pic: "/images/PrittlePrattle-News-Logo.png ",
            title: "How Mumbai-Based Edtech Start-Up The Language Network",
            desc: "Mumbai-based Edtech start-up The Language Network is building an effective online language learning platform with live teachers and virtual classrooms.",
            link: "https://www.prittleprattlenews.com/education/how-mumbai-based-edtech-start-up-the-language-network/",
        },
        {
            pic: "/images/Brainfeed-Logo-Low.png ",
            title: 'Mumbai-Based Ed-Tech Startup "The Language Network" aims to deliver a comprehensive learning experience',
            desc: "The Language Network is an EdTech platform that offers Live 1:2 and Group online classes from beginner to advanced level courses in seven foreign languages including French, German, Spanish, Mandarin, Korean, and Japanese. ",
            link: "https://brainfeedmagazine.com/mumbai-based-edtech-startup-the-language-network-is-making-language-learning-fun-and-accessible/",
        },
        {
            pic: "/images/K12-Digest_Trade-marked.png ",
            title: 'Mumbai-Based Ed-Tech Startup "The Language Network" is making Language Learning Fun and Accessible',
            desc: "The Language Network aims to offer an affordable and engaging learning experience to students. “With an online-first approach, we’re encouraging students to learn a foreign language and create awareness about the benefits of being multilingual.",
            link: "https://www.k12digest.com/mumbai-based-ed-tech-startup-the-language-network-is-making-language-learning-fun-and-accessible/",
        },
        {
            pic: "/images/pallikuttam.png ",
            title: "“The Language Network” to revolutionise language learning",
            desc: "Co-founders Siddhi Chokhani, Shubham Pille and Pinnac Yeddy started The Language Network in November 2020 with the foundational idea of revolutionising language learning in India.",
            link: "https://www.pallikkutam.com/edu-news/the-language-network-to-revolutionise-language-learning",
        },
    ];

    return (
        <div>
            <div className="bg-[url('/public/images/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg')] bg-no-repeat bg-cover bg-center lg:h-[60vh] h-[40vh]" >
                <div className="bg-[rgba(0,0,0,0.7)] h-full ">
                    <div className='h-full flex flex-col justify-center align-center text-center w-full px-10 lg:px-32'>
                        <h1 className='text-3xl lg:text-6xl leading-snug text-white font-thin'>Press Centre</h1>
                        <hr className='border-zinc-50 border-2 w-24 self-center mt-8' />
                        <h1 className='lg:text-xl text-md my-10 text-white font-medium text-center lg:px-72'>Here you will find the latest news and press releases from the #1 trusted online language school.</h1>
                    </div>
                </div>
            </div>
            <div className='w-full lg:px-48 py-10 text-lg font-medium text-center'>Our mission is to help every person to unlock their potential – anytime, anywhere. We are revolutionising how languages are learnt by thousands of people worldwide, providing a superior learning experience.</div>

            <div class="flex flex-wrap w-full py-12 flex-col items-center text-center">
                <h1 class="text-xl lg:text-4xl font-bold title-font mb-2 text-gray-900">LATEST ARTICLES</h1>
                <hr className='border-yellow-400 border-2 lg:w-72 w-40 self-center mt-2' />
            </div>

            <section class="text-gray-600 body-font">
                <div class="container px-5  mx-auto flex flex-wrap">
                    <div class="flex flex-wrap -m-4 sm:mb-3 lg:mb-10">
                        {PressData.map((press, i) => {
                            return (
                                <a href={press.link}>
                                    <div class="p-4 lg:w-full md:w-full">

                                        <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col  hover:bg-slate-100">
                                            <div class="flex items-center w-32 h-32 sm:mr-8 sm:mb-0  inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                                                <img src={press.pic} alt="" />
                                            </div>
                                            <div class="flex flex-grow items-center">
                                                <div className="">
                                                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">{press.title}</h2>
                                                <p class="leading-relaxed text-base">{press.desc}</p>
                                                {/* <a href={press.link}>
                                                    <button class="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 mt-3 rounded" >
                                                        READ MORE
                                                    </button>
                                                </a> */}
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </a>

                            )
                        })}

                    </div>
                 
                </div>
            </section>


        </div>
    )
}

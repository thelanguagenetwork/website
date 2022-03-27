import React from 'react'

export default function Press() {
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
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 lg:w-full md:w-full">
                            <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                                <div class="w-32 h-32 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                                    <img src="/images/Bytetrails-Logo.png" alt="" />
                                </div>
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Right Mix of Learning a Language and Culture with The Language Network.</h2>
                                    <p class="leading-relaxed text-base">The Language Network has been actively mixing learning a Language with Culture to create a perfect cocktail of fun learning for students who are looking forward to learning new languages online.</p>
                                    <button class="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 mt-3 rounded" >
                                        READ MORE
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-full md:w-full">
                            <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                                <div class="w-32 h-32 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                                    <img src="/images/Bytetrails-Logo.png" alt="" />
                                </div>
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Right Mix of Learning a Language and Culture with The Language Network.</h2>
                                    <p class="leading-relaxed text-base">The Language Network has been actively mixing learning a Language with Culture to create a perfect cocktail of fun learning for students who are looking forward to learning new languages online.</p>
                                    <button class="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 mt-3 rounded" >
                                        READ MORE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

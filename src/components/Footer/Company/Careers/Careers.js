import React from 'react'
import { FaBullhorn, FaEdit, FaPen, FaUserCog, FaUserGraduate, FaUserTie } from 'react-icons/fa'

export default function Careers() {
  return (
    <div>
      <div className="bg-[url('/public/images/25388715424_65480dbf18_k.jpg')] bg-no-repeat bg-cover bg-center h-[60vh]" >
        <div className="bg-[rgba(0,0,0,0.7)] h-full ">
          <div className='h-full flex flex-col justify-center align-center text-center w-full px-10 lg:px-32'>
            <h1 className='text-3xl lg:text-7xl leading-snug text-white font-thin'>Careers</h1>
            <hr className='border-zinc-50 border-2 w-24 self-center mt-8' />
            <h1 className='text-xl my-10 text-white font-semibold'>Join us in revolutionising language learning</h1>
          </div>
        </div>
      </div>
      
      <section class="text-gray-600 body-font">
        <div class="container  py-24 mx-auto flex flex-wrap">
          <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-2/3 sm:w-2/3 content-start sm:pr-10">
            <div class="w-full sm:p-4 px-4 mb-6">
              <h1 class="title-font font-bold text-4xl lg:text-6xl mb-2 text-black">Let's say <div class="scroller2">
                <span className='bg-[#13bfab] px-3 text-white text-center'>
                  Salut<br />
                  Hello<br />
                  Hola<br />
                  Ciao
                </span>
              </div>to new opportunities!</h1>
              <div class="leading-relaxed font-bold text-md lg:text-lg">We believe there’s always more to do, to try, and to achieve. Come be a part of “The Language Network”.</div>
            </div>
          </div>
          <div class="lg:w-4/12 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img class="object-cover object-center w-full h-full" src="https://dummyimage.com/600x300" alt="stats" />
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <h1 class="text-xl lg:text-4xl font-bold title-font mb-2 text-gray-900">WE ARE CURRENTLY ON THE HUNT FOR....</h1>
              <hr className='border-yellow-400 border-2 lg:w-72 w-40 self-center mt-2' />

            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <FaUserGraduate className='w-2/3 h-2/3 text-[#13bfab]' />
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Foreign Language Trainers</h2>
                <p class="leading-relaxed text-base">Location: Mumbai, Pune</p>
                <a href='/' class="text-indigo-500 inline-flex items-center my-4">Learn More
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <FaUserTie className='w-2/3 h-2/3 text-[#13bfab]' />

                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Business Development Interns</h2>
                <p class="leading-relaxed text-base">Location: Mumbai, Pune</p>
                <a href='/' class="text-indigo-500 inline-flex items-center my-4">Learn More
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <FaEdit className='w-2/3 h-2/3 text-[#13bfab]' />

                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Graphic Design Interns</h2>
                <p class="leading-relaxed text-base">Location: Mumbai, Pune</p>
                <a href='/' class="text-indigo-500 inline-flex items-center my-4">Learn More
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <FaPen className='w-2/3 h-2/3 text-[#13bfab]' />

                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Content writing Interns</h2>
                <p class="leading-relaxed text-base">Location: Mumbai, Pune</p>
                <a href='/' class="text-indigo-500 inline-flex items-center my-4">Learn More
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <FaBullhorn className='w-2/3 h-2/3 text-[#13bfab]' />

                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Marketing Interns</h2>
                <p class="leading-relaxed text-base">Location: Mumbai, Pune</p>
                <a href='/' class="text-indigo-500 inline-flex items-center my-4">Learn More
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <FaUserCog className='w-2/3 h-2/3 text-[#13bfab]' />

                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Operations Interns</h2>
                <p class="leading-relaxed text-base">Location: Mumbai, Pune</p>
                <a href='/' class="text-indigo-500 inline-flex items-center my-4">Learn More
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font w-full lg:px-20">
        <div class="container px-5  mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-xl lg:text-4xl font-bold title-font mb-2 text-gray-900">PERKS AND BENEFITS</h1>
            <hr className='border-yellow-400 border-2 lg:w-72 w-40 self-center mt-2' />
          </div>
          <div class="flex flex-wrap -m-4 items-center justify-center">
            <div class="p-4 lg:w-2/5">
              <div class="h-full flex sm:flex-row flex-col items-left sm:justify-start justify-center text-left">
                <img alt="team" class="flex-shrink-0 rounded-lg w-40 h-40 object-cover object-center sm:mb-0 mb-4" src="/images/1470399656_Branding.png" />
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-bold text-3xl text-[#13bfab]">Holden Caulfield</h2>
                  <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-2/5">
              <div class="h-full flex sm:flex-row flex-col items-left sm:justify-start justify-center text-left">
                <img alt="team" class="flex-shrink-0 rounded-lg w-40 h-40 object-cover object-center sm:mb-0 mb-4" src="/images/1470399715_E-Commerce.png" />
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-bold text-3xl text-[#13bfab]">Holden Caulfield</h2>
                  <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-2/5">
              <div class="h-full flex sm:flex-row flex-col items-left sm:justify-start justify-center text-left">
                <img alt="team" class="flex-shrink-0 rounded-lg w-40 h-40 object-cover object-center sm:mb-0 mb-4" src="/images/1470399614_Social_Media.png" />
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-bold text-3xl text-[#13bfab]">Holden Caulfield</h2>
                  <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-2/5">
              <div class="h-full flex sm:flex-row flex-col items-left sm:justify-start justify-center text-left">
                <img alt="team" class="flex-shrink-0 rounded-lg w-40 h-40 object-cover object-center sm:mb-0 mb-4" src="/images/1470399662_Marketing.png" />
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-bold text-3xl text-[#13bfab]">Holden Caulfield</h2>
                  <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-2/5">
              <div class="h-full flex sm:flex-row flex-col items-left sm:justify-start justify-center text-left">
                <img alt="team" class="flex-shrink-0 rounded-lg w-40 h-40 object-cover object-center sm:mb-0 mb-4" src="/images/1470399671_SEO.png" />
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-bold text-3xl text-[#13bfab]">Holden Caulfield</h2>
                  <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-40 bg-[url('/public/images/startup-start-up-people-593341.jpg')] bg-no-repeat bg-fixed bg-cover bg-center h-[40vh]" >
        <div className="bg-[rgba(0,0,0,0.7)] h-full ">
          <div className='h-full flex flex-col justify-center align-center text-center w-full px-10 lg:px-32'>
            <h1 className='text-3xl lg:text-6xl leading-snug text-white font-thin'>JOIN OUR TEAM</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

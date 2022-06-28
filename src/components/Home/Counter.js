import React, { useState } from 'react'
import CountUp from 'react-countup';
export default function Counter() {
    return (
        <div>
            <div class="bg-white py-6 sm:py-8 lg:py-12">
                <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
                    <div class="grid sm:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-8">
                        <div class="h-6/7 flex flex-col border rounded-lg p-4 md:p-6 justify-center items-center space-y-3">
                            <h1 className="text-3xl font-bold text-[#13bfab]"><CountUp end={5000} duration={3} />+</h1>
                            <span className="text-xl font-semibold">Trained</span>
                            {/* <h3 class="text-lg md:text-xl font-semibold mb-2">Growth</h3>
                            <p class="text-gray-500 mb-4">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                            <a href="#" class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100 mt-auto">More</a> */}
                        </div>
                        <div class="h-6/7 flex flex-col border rounded-lg p-4 md:p-6 justify-center items-center space-y-3">
                            <h1 className="text-3xl font-bold text-[#13bfab]"><CountUp end={200} duration={3} />+</h1>
                            <span className="text-xl font-semibold">Google Reviews</span>
                        </div>
                        <div class="h-6/7 flex flex-col border rounded-lg p-4 md:p-6 justify-center items-center space-y-3">
                            <h1 className="text-3xl font-bold text-[#13bfab]"><CountUp end={100} duration={3} />+</h1>
                            <div className="flex justify-center items-center content-center">
                            <span className="text-xl font-semibold">Live Classes</span>
                            </div>
                        </div>
                        <div class="h-6/7 flex flex-col border rounded-lg p-4 md:p-6 justify-center items-center space-y-3">
                            <h1 className="text-3xl font-bold text-[#13bfab]"><CountUp end={200} duration={3} />+</h1>
                            <span className="text-xl font-semibold">Corporate Partners</span>
                        </div>
                        <div class="h-6/7 flex flex-col border rounded-lg p-4 md:p-6 justify-center items-center space-y-3">
                            <h1 className="text-3xl font-bold text-[#13bfab]"><CountUp end={200} duration={3} />+</h1>
                            <span className="text-xl font-semibold">Google Reviews</span>
                        </div>
                        <div class="h-6/7 flex flex-col border rounded-lg p-4 md:p-6 justify-center items-center space-y-3">
                            <h1 className="text-3xl font-bold text-[#13bfab]"><CountUp end={200} duration={3} />+</h1>
                            <span className="text-xl font-semibold">Google Reviews</span>
                        </div>
                    
                    </div>

                </div>
            </div>
        </div>

    )
}

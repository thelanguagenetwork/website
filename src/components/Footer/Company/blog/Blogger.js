import React from 'react'
import { Grid } from "@material-ui/core";
import PostCard from "./PostCard";
import axios from "axios";
import { useEffect, useState } from 'react';

export default function Blogger() {
    const bloggerURL = "https://www.googleapis.com/blogger/v3/blogs/8321809148473833824/posts?key=AIzaSyBREYd6G2EhyIUxBN-RjtY2Utz6zHjVOLo";
    const [data, setdata] = useState();
    var lst = []
    useEffect(() => {
        if (data == null) {
            axios.get(bloggerURL)
                .then(res => {

                    var i = res.data.items
                    console.log(i)
                    // const regex = /(<([^>]+)>)/ig;
                    // const result = i.content.replace(regex, '');
                    setdata(i)
                    // lst = 
                    // data.reverse()
                })
        }
    }, [])
    const extractContent = (s) => {
        const span = document.createElement('span');
        span.innerHTML = s;
        var value = (span.textContent || span.innerText).split('.')[0]
        return value
    };

    if (data) {
        return (
            <div className="py-16">
                <ol>
                    <div>
                        <div className="flex flex-wrap">
                            {data.map((items, index) => {
                                return (
                                    <div class="p-4 md:w-1/3">
                                        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                            <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                                            <div class="p-6">
                                                <h1 class="title-font text-lg font-semibold text-gray-900 mb-3">{items.title}</h1>
                                                <p class="leading-relaxed mb-3 text-sm">{extractContent(items.content)}</p>
                                                <div class="flex items-center flex-wrap ">
                                                    <a href={items.url} class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 text-[#13BFAB]" target="_blank">Learn more
                                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                            <path d="M5 12h14"></path>
                                                            <path d="M12 5l7 7-7 7"></path>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </ol>

            </div>
        )
    }
    return (
        <h1>loading</h1>
    )
};





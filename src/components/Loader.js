import React from 'react'
import './Loader.css'
export default function Loader() {
    return (
        <div className="flex justify-center w-full h-[100vh] items-center bg-black">
            {/* <video src="/videos/TLN_logo icon.mp4" autoplay="True"/> */}
            <img className="h-[15rem] lg:h-1/2 " src="/videos/TLN_logo_icon_AdobeExpress.gif" />
            {/* <video className="w-full h-full autoplay muted" src="/videos/TLN_logo icon.mp4"  controls autoplay /> */}
        </div>
    )
}

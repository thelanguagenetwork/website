import React from 'react';
import AOS from 'aos'


function FoFo(props) {
    return (
        <div>
            <div className="px-10 bg-#dfdfdf space-y-1 flex flex-col items-center pb-8">
                <img className='mt-3' src="/videos/808s.gif" />
            </div>
            <div   className="px-10 bg-#dfdfdf space-y-1 flex flex-col items-center pb-8">
                <span className='mt-5 flex flex-col text-2xl lg:text-5xl font-medium'>We're here to help</span>
                <br></br>
                <span className='text-md lg:text-lg mb-10'>Get in touch with our student support team for any queries or specific needs.</span>
                <br></br>
                <a href="mailto:support@thelanguagenetwork.co">
                    <button type="button" class="btn btn-info text-white mb-10 mb-3 flex" style={{ backgroundColor: '#13bfab', borderRadius: '10px', paddingTop: '10px', paddingRight: '30px', paddingBottom: '10px', paddingLeft: '30px', fontSize: '0.82352941176471rem' }}>Contact Us</button>
                </a>
            </div>

        </div>
    );
}

export default FoFo;
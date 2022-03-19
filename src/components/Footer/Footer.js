import React from 'react'
import './Footer.css';
import { FaMedium } from 'react-icons/fa';



export default function Footer() {
    return (
        <div className="bg-gray-100" style={{ bottom: '0px', left: '0px' }}>
            <div className="py-5 px-10 bg-#dfdfdf space-y-3 flex flex-col items-center">
                <span className='heading-1 mt-5 mb-3 flex flex-col'>We're here to help</span>
                <br></br>
                <span className='heading-2 mb-10'>Get in touch with our student support team for any queries or specific needs.</span>
                <br></br>
                <button type="button" class="btn btn-info text-white mb-10 mb-3 flex" style={{ backgroundColor: '#13bfab', borderRadius: '10px', paddingTop: '10px', paddingRight: '30px', paddingBottom: '10px', paddingLeft: '30px', fontSize: '0.82352941176471rem' }}>Contact Us</button>
            </div>
            <div className='flex-wrap px-3 bg-teal-400 w-full flex flex-row justify-evenly px-10 h-16'>
                <img src='/images/payments/amazon-pay-icon.svg' class='w-20 lg:w-24 ' alt="a"/>
                <img src='/images/payments/bhim-pay-icon.svg' class='w-20 lg:w-24 'alt="a"/>
                <img src='/images/payments/finserv-icon.svg' class='w-20 lg:w-24 'alt="a"/>
                <img src='/images/payments/google-pay.svg' class='w-20 lg:w-24 'alt="a"/>
                <img src='/images/payments/paytm-icon.svg' class='w-20 lg:w-24 'alt="a"/>
                <img src='/images/payments/Razorpay.svg' class='w-20 lg:w-24 'alt="a"/>
                <img src='/images/payments/rupay-icon.svg' class='w-20 lg:w-24'alt="a"/>
                <img src='/images/payments/upi-pay-icon.svg' class='w-20 lg:w-24'alt="a"/>
            </div>
            <footer className="footer-section">
                <div className="container w-full">

                    <div className="footer-content pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        <a href="index.html"><img src="/images/Logo-website.png" className="img-fluid" alt="logo" /></a>
                                    </div>
                                    <div className="footer-text">
                                        <p>The Language Network is a place to learn and immerse yourself in the world of languages. We are a dynamic institution promoting languages and celebrating cultures.</p>
                                    </div>
                                    <div className="footer-social-icon">
                                        <img src="/images/ISO9001-stamp.png" alt="img" />
                                        <img src="/images/Logo2.jpg" alt="img" style={{ paddingLeft: "10px" }} />
                                        <img src='/images/startupindia.png' alt='img' style={{ width: '37%', paddingTop: '16px', paddingLeft: '10px' }} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-1 col-lg-2 col-md-6 mb-30 mx-12">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Company</h3>
                                    </div>
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="#">About us</a></li>
                                        <li><a href="#">Careers</a></li>
                                        <li><a href="/Blog">Blog</a></li>
                                        <li><a href="#">Press</a></li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-6 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Languages for Adults</h3>
                                    </div>
                                    <ul>
                                        <li><a href="/IntoCourses">Introductory Courses</a></li>
                                        <li><a href="/english-course-adults">English Courses</a></li>
                                        <li><a href="/french-course-adults">French Courses</a></li>
                                        <li><a href="/spanish-course-adults">Spanish Courses</a></li>
                                        <li><a href="/german-course-adults">German Courses</a></li>
                                        <li><a href="/mandarin-course-adults">Mandarin Courses</a></li>
                                        <li><a href="/japanese-course-adults">Japanese Courses</a></li>
                                        <li><a href="/korean-course-adults">Korean Courses</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-6 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Languages fo Kids</h3>
                                    </div>
                                    <ul>
                                        <li><a href="/english-course-kids">Kids English Courses</a></li>
                                        <li><a href="/french-course-kids">Kids French Courses</a></li>
                                        <li><a href="/spanish-course-kids">Kids Spanish Courses</a></li>
                                        <li><a href="/german-course-kids">Kids German Courses</a></li>
                                        <li><a href="/mandarin-course-kids">Kids Mandarin Courses</a></li>
                                        <li><a href="/japanese-course-kids">Kids Japanese Courses</a></li>
                                        <li><a href="/korean-course-kids">Kids Korean Courses</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-6 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Subscribe</h3>
                                    </div>
                                    <ul>
                                        <li><a href="FAQs">FAQs</a></li>
                                        <li><a href="Contact">Contact</a></li>
                                        <li><a href="Affiliate Program">Affiliate Program</a></li>
                                    </ul>
                                    <div className="footer-widget-heading">
                                        <h3>More</h3>
                                    </div>
                                    <ul>
                                        <li><a href="Phrasebook">Phrasebook</a></li>
                                        <li><a href="Events">Events</a></li>
                                        <li><a href="/Dictionary">Dictionary</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 text-center text-lg-left">
                                <div className="copyright-text">
                                    <p>Copyright &copy; 2021 The Language Network - All Right Reserved </p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 d-none d-lg-block ">
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="#">Terms and Conditions</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Sitemap</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 d-none d-lg-block ">
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="#"><img src='/images/facebook.svg' /></a></li>
                                        <li><a href="#"><img src='/images/instagram.svg' /></a></li>
                                        <li><a href="#"><img src='/images/linkedin.svg' /></a></li>
                                        <li><a href="#"><img src='/images/envelope-fill.svg' /></a></li>
                                        <li><a href="#"><img src='/images/pinterest.svg' /></a></li>
                                        <li><a href="#"><img src='/images/youtube.svg' /></a></li>
                                        <li><a href="#"><FaMedium style={{ color: '#000', fontSize: '17px' }} /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

import React from 'react'
import { useState } from 'react';
import French from './LangLvl/French';
import Spanish from './LangLvl/Spanish';
import German from './LangLvl/German';
import Mandarin from './LangLvl/Mandarin';
import Japanese from './LangLvl/Japanese';
import Korean from './LangLvl/Korean';
import AdultsTable from './AdultsTable'
import English from './LangLvl/English';


function Adults() {

    const [lang, setLang] = useState('french')
    const Languages = () => {
        switch (lang) {
            case 'English':
                return (<English />)
                break;
            case 'french':
                return (<French />)
                break;
            case 'spanish':
                return (<Spanish />)
                break;
            case 'german':
                return (<German />)
                break;
            case 'mandarin':
                return (<Mandarin />)
                break;
            case 'japanese':
                return (<Japanese />)
                break;
            case 'korean':
                return (<Korean />)
                break;
                
            default:
        }
    };

    return (
        <div>
            <div className="fadeIN Home-container-2 w-full lg:px-20 mt-4">
                <h2>Curating a pleasant learning experience</h2>
                <h1 className='mb-6'>Choose a language</h1>
                <div className='Home-container-2-imgs'>
                    <a href='/english-course-adults'><img className='Home-container-2-img' alt='img' src='/images/adults-english@300x.png' /></a>
                    <a href='/french-course-adults'><img className='Home-container-2-img' alt='img' src='/images/adults-french@300x.png' /></a>
                    <a href='/spanish-course-adults'><img className='Home-container-2-img' alt='img' src='/images/adults-spanish@300x.png' /></a>
                    <a href='/german-course-adults'><img className='Home-container-2-img' alt='img' src='/images/adults-german@300x.png' /></a>
                    <a href='/mandarin-course-adults'><img className='Home-container-2-img' alt='img' src='/images/adults-mandarin@300x.png' /></a>
                    <a href='/japanese-course-adults'><img className='Home-container-2-img' alt='img' src='/images/adults-japanese@300x.png' /></a>
                    <a href='/korean-course-adults'><img className='Home-container-2-img' alt='img' src='/images/adults-korean@300x.png' /></a>
                </div>
            </div>

            <div className="mb-10 lg:flex flex-row h-auto w-full bg-[#f4f8fb]">
                <div className='flex flex-col space-y-6 px-10 lg:px-20 justify-center lg:w-3/4'>
                    <h1 className='text-3xl font-medium lg:text-4xl'>Foreign Language Education for Everyone!</h1>
                    <p className='text-lg '>Live online language classes for kids, adolscents and adults at The Language Network, pioneering online language schools, with the assistance of professional teachers.</p>
                    <p className='text-lg '>With our professional live online language classes, TLN is the complete solution to perfectly assist kids in their path to fluency.</p>
                    <div>
                        <a href="/getstarted">
                        <button class="bg-[#13BFAB] hover:bg-teal-400 text-white font-bold py-3 px-4 rounded w-auto" >
                        JOIN A COURSE
                    </button>
                        </a>
                        </div>
                </div>
                <div className='flex align-center px-10 py-10 lg:px-20 lg:py-20'>
                    <img src='/images/Adults_online-lecture.png' alt='img' className='certificate-img' />
                </div>
            </div>

            <div className='w-full flex flex-row flex-wrap items-center justify-center  mb-3'>
            <a onClick={() => setLang('English')} id={lang === 'English' ? 'btnP' : ''} class="buttons bg-white py-2.5 px-4 rounded-lg shadow mx-3 mb-3">
                    English
                </a>
                <a onClick={() => setLang('french')} id={lang === 'french' ? 'btnP' : ''} class="buttons bg-white py-2.5 px-4 rounded-lg shadow mx-3 mb-3">
                    French
                </a>
                <a onClick={() => setLang('spanish')} id={lang === 'spanish' ? 'btnP' : ''} class="buttons bg-white  py-2.5 px-4 rounded-lg shadow mx-3 mb-3">
                    Spanish
                </a>
                <a onClick={() => setLang('german')} id={lang === 'german' ? 'btnP' : ''} class="buttons bg-white py-2.5 px-4 rounded-lg shadow mx-3 mb-3">
                    German
                </a>
                <a onClick={() => setLang('mandarin')} id={lang === 'mandarin' ? 'btnP' : ''} class="buttons bg-white py-2.5 px-4 rounded-lg shadow mx-3 mb-3">
                    Mandarin
                </a>
                <a onClick={() => setLang('japanese')} id={lang === 'japanese' ? 'btnP' : ''} class="buttons bg-white py-2.5 px-4 rounded-lg shadow mx-3 mb-3">
                    Japanese
                </a>
                <a onClick={() => setLang('korean')} id={lang === 'korean' ? 'btnP' : ''} class="buttons bg-white py-2.5 px-4 rounded-lg shadow mx-3 mb-3">
                    Korean
                </a>
            </div>
            <div className='flex justify-center mb-20'>
                <Languages />
            </div>

            <AdultsTable />

        </div>
    )
}

export default Adults;
import React from 'react';
import './Courses.css';
import { useState } from 'react';
import LearningPrices from './LearningPrices';
import {English_1_1, English_1_2, English_1_4} from './CourseTableData/English.js'
import {French_1_1, French_1_2, French_1_4} from './CourseTableData/French'
import {Spanish_1_1, Spanish_1_2, Spanish_1_4} from './CourseTableData/Spanish'
import {German_1_1, German_1_2, German_1_4} from './CourseTableData/German'
import {Mandarin_1_1, Mandarin_1_2, Mandarin_1_4} from './CourseTableData/Mandarin'
import {Japanese_1_1, Japanese_1_2, Japanese_1_4} from './CourseTableData/Japanese'
import {Korean_1_1, Korean_1_2, Korean_1_4} from './CourseTableData/Korean'


export default function AdultsCourses() {        

    const [language, setLanguage] = useState('English')
    const LanguageSec = () => {
        switch (language) {
            case 'English':
                return (<LearningPrices one_one={English_1_1} one_two={English_1_2} one_four={English_1_4}/>)
                break;
            case 'French':
                return (<LearningPrices one_one={French_1_1} one_two={French_1_2} one_four={French_1_4}/>)
                break;
            case 'Spanish':
                return (<LearningPrices one_one={Spanish_1_1} one_two={Spanish_1_2} one_four={Spanish_1_4}/>)
                break;
            case 'German':
                return (<LearningPrices one_one={German_1_1} one_two={German_1_2} one_four={German_1_4}/>)
                break;
            case 'Mandarin':
                return (<LearningPrices one_one={Mandarin_1_1} one_two={Mandarin_1_2} one_four={Mandarin_1_4}/>)
                break;
            case 'Japanese':
                return (<LearningPrices one_one={Japanese_1_1} one_two={Japanese_1_2} one_four={Japanese_1_4}/>)
                break;
            case 'Korean':
                return (<LearningPrices one_one={Korean_1_1} one_two={Korean_1_2} one_four={Korean_1_4}/>)
                break;

            default:
                break;
        }
    }

    return <div>
        <div className="Home-container-2 px-5 fadeIN" style={{ width: '100%', marginTop: '2rem', paddingTop: 0}}>
            <h2>A Fun, Proven method for Learning</h2>
            <h1 className='mb-12'>Choose a language</h1>
            <div className='Home-container-2-imgs'>
                <a onClick={() => setLanguage('English')} className='mt-12'><img id={language === 'English' ? 'selected' : ''} className='Home-container-2-img  h-[95%] lg:w-auto' alt='img' src='/images/adults-english@300x.png' /><span className='Home-container-2-img-span'>English</span></a>
                <a onClick={() => setLanguage('French')} className='mt-12'><img id={language === 'French' ? 'selected' : ''} className='Home-container-2-img  h-[95%] lg:w-auto' alt='img' src='/images/adults-french@300x.png' /><span className='Home-container-2-img-span'>French</span></a>
                <a onClick={() => setLanguage('Spanish')} className='mt-12'><img id={language === 'Spanish' ? 'selected' : ''} className='Home-container-2-img  h-[95%] lg:w-auto' alt='img' src='/images/adults-spanish@300x.png' /><span className='Home-container-2-img-span'>Spanish</span></a>
                <a onClick={() => setLanguage('German')} className='mt-12'><img id={language === 'German' ? 'selected' : ''} className='Home-container-2-img  h-[95%] lg:w-auto' alt='img' src='/images/adults-german@300x.png' /><span className='Home-container-2-img-span'>German</span></a>
                <a onClick={() => setLanguage('Mandarin')} className='mt-12'><img id={language === 'Mandarin' ? 'selected' : ''} className='Home-container-2-img h-[95%]  lg:w-auto' alt='img' src='/images/adults-mandarin@300x.png' /><span className='Home-container-2-img-span'>Mandarin</span></a>
                <a onClick={() => setLanguage('Japanese')} className='mt-12'><img id={language === 'Japanese' ? 'selected' : ''} className='Home-container-2-img h-[95%]  lg:w-auto' alt='img' src='/images/adults-japanese@300x.png' /><span className='Home-container-2-img-span'>Japanese</span></a>         
                <a onClick={() => setLanguage('Korean')} className='mt-12'><img id={language === 'Korean' ? 'selected' : ''} className='Home-container-2-img  h-[95%] lg:w-auto' alt='img' src='/images/adults-Korean@300x.png' /><span className='Home-container-2-img-span'>Korean</span> </a>
            </div>
        </div>
        
        <LanguageSec />

    </div>;
}

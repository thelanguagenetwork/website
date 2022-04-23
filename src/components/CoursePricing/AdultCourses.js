import React from 'react';
import './Courses.css';
import { useState } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';
import LearningPrices from './LearningPrices';
import { English_1_1, English_1_2, English_1_4 } from './CourseTableData/English.js'
import { French_1_1, French_1_2, French_1_4 } from './CourseTableData/French'
import { Spanish_1_1, Spanish_1_2, Spanish_1_4 } from './CourseTableData/Spanish'
import { German_1_1, German_1_2, German_1_4 } from './CourseTableData/German'
import { Mandarin_1_1, Mandarin_1_2, Mandarin_1_4 } from './CourseTableData/Mandarin'
import { Japanese_1_1, Japanese_1_2, Japanese_1_4 } from './CourseTableData/Japanese'
import { Korean_1_1, Korean_1_2, Korean_1_4 } from './CourseTableData/Korean'
import AdultsEnglish from '../Footer/LangForAdults/English';
import AdultsFrench from '../Footer/LangForAdults/French';
import AdultsSpanish from '../Footer/LangForAdults/Spanish';
import AdultsGerman from '../Footer/LangForAdults/German';
import AdultsMandarin from '../Footer/LangForAdults/Mandarin';
import AdultsJapanese from '../Footer/LangForAdults/Japanese';
import AdultsKorean from '../Footer/LangForAdults/Korean';


export default function AdultsCourses() {

    AOS.init()

    function changeCol1() {
        document.getElementById('Home-card-text-h1').style.color = '#460090';
        document.getElementById('Home-card-1').style.boxShadow = '0px 0px 38px -10px #460090';
    }

    function changeCol2() {
        document.getElementById('Home-card-text-h2').style.color = '#f2b919';
        document.getElementById('Home-card-2').style.boxShadow = '0px 0px 38px -10px #f2b919';

    }

    function changeCol3() {
        document.getElementById('Home-card-text-h3').style.color = '#13bfab';
        document.getElementById('Home-card-3').style.boxShadow = '0px 0px 38px -10px #13bfab';

    }

    function changeBack() {
        document.getElementById('Home-card-text-h1').style.color = '#000';
        document.getElementById('Home-card-text-h2').style.color = '#000';
        document.getElementById('Home-card-text-h3').style.color = '#000';
        document.getElementById('Home-card-1').style.boxShadow = 'none';
        document.getElementById('Home-card-2').style.boxShadow = 'none';
        document.getElementById('Home-card-3').style.boxShadow = 'none';

    }

    const [language, setLanguage] = useState('English')
    const LanguageSec = () => {
        switch (language) {
            case 'English':
                return (<div>
                    <LearningPrices one_one={English_1_1} one_two={English_1_2} one_four={English_1_4} />
                    <AdultsEnglish />
                </div>
                )
                break;
            case 'French':
                return (<div>
                    <LearningPrices one_one={French_1_1} one_two={French_1_2} one_four={French_1_4} />
                    <AdultsFrench />       
                </div>)
                break;
            case 'Spanish':
                return (<div>
                    <LearningPrices one_one={Spanish_1_1} one_two={Spanish_1_2} one_four={Spanish_1_4} />
                    <AdultsSpanish />
                </div>
                )
                break;
            case 'German':
                return (<div>
                    <LearningPrices one_one={German_1_1} one_two={German_1_2} one_four={German_1_4} />
                    <AdultsGerman />
                </div>
                )
                break;
            case 'Mandarin':
                return (<div>
                    <LearningPrices one_one={Mandarin_1_1} one_two={Mandarin_1_2} one_four={Mandarin_1_4} />
                    <AdultsMandarin />
                </div>
                )
                break;
            case 'Japanese':
                return (<div>
                    <LearningPrices one_one={Japanese_1_1} one_two={Japanese_1_2} one_four={Japanese_1_4} />
                    <AdultsJapanese />
                </div>
                )
                break;
            case 'Korean':
                return (<div>
                    <LearningPrices one_one={Korean_1_1} one_two={Korean_1_2} one_four={Korean_1_4} />
                    <AdultsKorean />
                </div>
                )
                break;

            default:
                break;
        }
    }

    return <div>
        <div className="Home-container-2 px-5 fadeIN" style={{ width: '100%', marginTop: '2rem', paddingTop: 0 }}>
            <h2>A Fun, Proven method for Learning</h2>
            <h1 className='mb-12'>Choose a language</h1>
            <div className='Home-container-2-imgs'>
                <a onClick={() => setLanguage('English')} className='lg:mt-12'><img id={language === 'English' ? 'selected' : ''} className='Home-container-2-img  h-[95%] lg:w-auto' alt='img' src='/images/adults-english@300x.png' /></a>
                <a onClick={() => setLanguage('French')} className='lg:mt-12'><img id={language === 'French' ? 'selected' : ''} className='Home-container-2-img  h-[95%] lg:w-auto' alt='img' src='/images/adults-french@300x.png' /></a>
                <a onClick={() => setLanguage('Spanish')} className='lg:mt-12'><img id={language === 'Spanish' ? 'selected' : ''} className='Home-container-2-img  h-[95%] lg:w-auto' alt='img' src='/images/adults-spanish@300x.png' /></a>
                <a onClick={() => setLanguage('German')} className='lg:mt-12'><img id={language === 'German' ? 'selected' : ''} className='Home-container-2-img  h-[95%] lg:w-auto' alt='img' src='/images/adults-german@300x.png' /></a>
                <a onClick={() => setLanguage('Mandarin')} className='lg:mt-12'><img id={language === 'Mandarin' ? 'selected' : ''} className='Home-container-2-img h-[95%]  lg:w-auto' alt='img' src='/images/adults-mandarin@300x.png' /></a>
                <a onClick={() => setLanguage('Japanese')} className='lg:mt-12'><img id={language === 'Japanese' ? 'selected' : ''} className='Home-container-2-img h-[95%]  lg:w-auto' alt='img' src='/images/adults-japanese@300x.png' /></a>
                <a onClick={() => setLanguage('Korean')} className='lg:mt-12'><img id={language === 'Korean' ? 'selected' : ''} className='Home-container-2-img  h-[95%] lg:w-auto' alt='img' src='/images/adults-korean@300x.png' /></a>
            </div>
        </div>

        <LanguageSec />

    </div>;
}

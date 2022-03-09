import React from 'react';
import './Courses.css';
import { useState } from 'react';
import LearningPrices from './LearningPrices';

export default function AdultsCourses() {
    const English_1_1 = {
        a1_content: ['Content 1','Content 2','Content 3','Content 4','Content 5'],
        a2_content: ['Content 1','Content 2','Content 3','Content 4','Content 5'],
        b1_content: ['Content 1','Content 2','Content 3','Content 4','Content 5'],
        b2_content: ['Content 1','Content 2','Content 3','Content 4','Content 5'],

        a1_discounted : 444,
        a1_initial : 333,

        a2_discounted : 333,
        a2_initial : 333,

        b1_discounted : 944,
        b1_initial : 933,

        b2_discounted : 444,
        b2_initial : 333,
    }
    const English_1_2 = {
        a1_content: ['Content 1','Content 2','Content 3','Content 4','Content 5'],
        a2_content: ['Content 1','Content 2','Content 3','Content 4','Content 5'],
        b1_content: ['Content 1','Content 2','Content 3','Content 4','Content 5'],
        b2_content: ['Content 1','Content 2','Content 3','Content 4','Content 5'],

        a1_discounted : 444,
        a1_initial : 333,

        a2_discounted : 333,
        a2_initial : 333,

        b1_discounted : 944,
        b1_initial : 933,

        b2_discounted : 444,
        b2_initial : 333,
    }
    const English_1_4 = {
        a1_content: ['Content 1','Content 2','Content 3','Content 4','Content 5'],
        a2_content: ['Content 1','Content 2','Content 3','Content 4','Content 5'],
        b1_content: ['Content 1','Content 2','Content 3','Content 4','Content 5'],
        b2_content: ['Content 1','Content 2','Content 3','Content 4','Content 5'],
        
        a1_discounted : 444,
        a1_initial : 333,

        a2_discounted : 333,
        a2_initial : 333,
        
        b1_discounted : 944,
        b1_initial : 933,

        b2_discounted : 944,
        b2_initial : 999,
    }

    const French_1_1 = {
        a1_content: ['75 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        a2_content: ['90 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        b1_content: ['160 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        b2_content: ['160 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        
        a1_discounted : 444,
        a1_initial : 333,

        a2_discounted : 333,
        a2_initial : 333,

        b1_discounted : 944,
        b1_initial : 933,

        b2_discounted : 444,
        b2_initial : 333,
    }
    const French_1_2 = {
        a1_content: ['75 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        a2_content: ['90 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        b1_content: ['160 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        b2_content: ['160 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],

        a1_discounted : 444,
        a1_initial : 333,

        a2_discounted : 333,
        a2_initial : 333,

        b1_discounted : 944,
        b1_initial : 933,

        b2_discounted : 444,
        b2_initial : 333,
    }
    const French_1_4 = {
        a1_content: ['75 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        a2_content: ['90 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        b1_content: ['160 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        b2_content: ['160 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        
        a1_discounted : 444,
        a1_initial : 333,

        a2_discounted : 333,
        a2_initial : 333,
        
        b1_discounted : 944,
        b1_initial : 933,

        b2_discounted : 944,
        b2_initial : 999,
    }

    const Spanish_1_1 = {
        a1_content: ['75 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        a2_content: ['120 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        b1_content: ['160 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        b2_content: ['160 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],

        a1_discounted : 444,
        a1_initial : 333,

        a2_discounted : 333,
        a2_initial : 333,

        b1_discounted : 944,
        b1_initial : 933,

        b2_discounted : 444,
        b2_initial : 333,
    }
    const Spanish_1_2 = {
        a1_content: ['75 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        a2_content: ['120 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        b1_content: ['160 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        b2_content: ['160 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        
        a1_discounted : 444,
        a1_initial : 333,

        a2_discounted : 333,
        a2_initial : 333,

        b1_discounted : 944,
        b1_initial : 933,

        b2_discounted : 444,
        b2_initial : 333,
    }
    const Spanish_1_4 = {
        a1_content: ['75 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        a2_content: ['120 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        b1_content: ['160 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        b2_content: ['160 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        
        a1_discounted : 444,
        a1_initial : 333,

        a2_discounted : 333,
        a2_initial : 333,
        
        b1_discounted : 944,
        b1_initial : 933,

        b2_discounted : 944,
        b2_initial : 999,
    }

    const German_1_1 = {
        a1_content: ['60 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        a2_content: ['60 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        b1_content: ['80 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        b2_content: ['80 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        
        a1_discounted : 444,
        a1_initial : 333,

        a2_discounted : 333,
        a2_initial : 333,

        b1_discounted : 944,
        b1_initial : 933,

        b2_discounted : 444,
        b2_initial : 333,
    }
    const German_1_2 = {
        a1_content: ['60 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        a2_content: ['60 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        b1_content: ['80 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        b2_content: ['80 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        
        a1_discounted : 444,
        a1_initial : 333,

        a2_discounted : 333,
        a2_initial : 333,

        b1_discounted : 944,
        b1_initial : 933,

        b2_discounted : 444,
        b2_initial : 333,
    }
    const German_1_4 = {
        a1_content: ['60 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        a2_content: ['60 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        b1_content: ['80 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        b2_content: ['80 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        
        a1_discounted : 444,
        a1_initial : 333,

        a2_discounted : 333,
        a2_initial : 333,
        
        b1_discounted : 944,
        b1_initial : 933,

        b2_discounted : 944,
        b2_initial : 999,
    }

    const Mandarin_1_1 = {
        a1_content: ['30 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        a2_content: ['30 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        b1_content: ['45 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        b2_content: ['45 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        
        a1_discounted : 444,
        a1_initial : 333,

        a2_discounted : 333,
        a2_initial : 333,

        b1_discounted : 944,
        b1_initial : 933,

        b2_discounted : 444,
        b2_initial : 333,
    }
    const Mandarin_1_2 = {
        a1_content: ['30 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        a2_content: ['30 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        b1_content: ['45 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        b2_content: ['45 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        
        a1_discounted : 444,
        a1_initial : 333,

        a2_discounted : 333,
        a2_initial : 333,

        b1_discounted : 944,
        b1_initial : 933,

        b2_discounted : 444,
        b2_initial : 333,
    }
    const Mandarin_1_4 = {
        a1_content: ['30 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        a2_content: ['30 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        b1_content: ['45 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        b2_content: ['45 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        
        a1_discounted : 444,
        a1_initial : 333,

        a2_discounted : 333,
        a2_initial : 333,
        
        b1_discounted : 944,
        b1_initial : 933,

        b2_discounted : 944,
        b2_initial : 999,
    }

    const Japanese_1_1 = {
        a1_content: ['120 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        a2_content: ['120 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        b1_content: ['120 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        b2_content: ['140 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
       
        a1_discounted : 444,
        a1_initial : 333,

        a2_discounted : 333,
        a2_initial : 333,

        b1_discounted : 944,
        b1_initial : 933,

        b2_discounted : 444,
        b2_initial : 333,
    }
    const Japanese_1_2 = {
        a1_content: ['120 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        a2_content: ['120 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        b1_content: ['120 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        b2_content: ['140 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
       
        a1_discounted : 444,
        a1_initial : 333,

        a2_discounted : 333,
        a2_initial : 333,

        b1_discounted : 944,
        b1_initial : 933,

        b2_discounted : 444,
        b2_initial : 333,
    }
    const Japanese_1_4 = {
        a1_content: ['120 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        a2_content: ['120 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        b1_content: ['120 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        b2_content: ['140 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
       
        a1_discounted : 444,
        a1_initial : 333,

        a2_discounted : 333,
        a2_initial : 333,
        
        b1_discounted : 944,
        b1_initial : 933,

        b2_discounted : 944,
        b2_initial : 999,
    }

    const Korean_1_1 = {
        a1_content: ['60 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        a2_content: ['60 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        b1_content: ['75 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        b2_content: ['75 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
       
        a1_discounted : 444,
        a1_initial : 333,

        a2_discounted : 333,
        a2_initial : 333,

        b1_discounted : 944,
        b1_initial : 933,

        b2_discounted : 444,
        b2_initial : 333,
    }
    const Korean_1_2 = {
        a1_content: ['60 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        a2_content: ['60 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        b1_content: ['75 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        b2_content: ['75 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        
        a1_discounted : 444,
        a1_initial : 333,

        a2_discounted : 333,
        a2_initial : 333,

        b1_discounted : 944,
        b1_initial : 933,

        b2_discounted : 444,
        b2_initial : 333,
    }
    const Korean_1_4 = {
        a1_content: ['60 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        a2_content: ['60 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        b1_content: ['75 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
        b2_content: ['75 Hours of learning','Study Material',' Exam Preparation','Assessment & Quizez','Certificate'],
       
        a1_discounted : 444,
        a1_initial : 333,

        a2_discounted : 333,
        a2_initial : 333,
        
        b1_discounted : 944,
        b1_initial : 933,

        b2_discounted : 944,
        b2_initial : 999,
    }
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
        <div className="Home-container-2 px-5 fadeIN" style={{ width: '100%', marginTop: 0, paddingTop: 0}}>
            <h2>A Fun, Proven method for Learning</h2>
            <h1 className='mb-12'>Choose a language</h1>
            <div className='Home-container-2-imgs'>
                <a onClick={() => setLanguage('English')} ><img id={language === 'English' ? 'selected' : ''} className='Home-container-2-img' alt='img' src='/images/Adolcents-English@300x.png' /><span className='Home-container-2-img-span'>English</span></a>
                <a onClick={() => setLanguage('French')} ><img id={language === 'French' ? 'selected' : ''} className='Home-container-2-img' alt='img' src='/images/Adolcents-French@300x.png' /><span className='Home-container-2-img-span'>French</span></a>
                <a onClick={() => setLanguage('Spanish')} ><img id={language === 'Spanish' ? 'selected' : ''} className='Home-container-2-img' alt='img' src='/images/Adolcents-Spanish@300x.png' /><span className='Home-container-2-img-span'>Spanish</span></a>
                <a onClick={() => setLanguage('German')} ><img id={language === 'German' ? 'selected' : ''} className='Home-container-2-img' alt='img' src='/images/Adolcents-German@300x.png' /><span className='Home-container-2-img-span'>German</span></a>
                <a onClick={() => setLanguage('Mandarin')} ><img id={language === 'Mandarin' ? 'selected' : ''} className='Home-container-2-img' alt='img' src='/images/Adolcents-mandarin_1@300x.png' /><span className='Home-container-2-img-span'>Mandarin</span></a>
                <a onClick={() => setLanguage('Japanese')} ><img id={language === 'Japanese' ? 'selected' : ''} className='Home-container-2-img' alt='img' src='/images/Adolcents-mandarin@300x.png' /><span className='Home-container-2-img-span'>Japanese</span></a>
                <a onClick={() => setLanguage('Korean')} ><img id={language === 'Korean' ? 'selected' : ''} className='Home-container-2-img' alt='img' src='/images/Adolcents-Korean@300x.png' /><span className='Home-container-2-img-span'>Korean</span> </a>
            </div>
        </div>
        
        <LanguageSec />

    </div>;
}

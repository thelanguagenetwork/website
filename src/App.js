import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, { Suspense } from 'react'
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AdultsCourses from './components/CoursePricing/AdultCourses';
import IntroCourse from './components/Footer/LangForAdults/IntroCourse';
import Dict from './components/Footer/dict/dict';
import Blog from './components/Footer/Company/blog/Blog';
import AdultsEnglish from './components/Footer/LangForAdults/English';
import AdultsFrench from './components/Footer/LangForAdults/French';
import AdultsSpanish from './components/Footer/LangForAdults/Spanish';
import AdultsGerman from './components/Footer/LangForAdults/German';
import AdultsMandarin from './components/Footer/LangForAdults/Mandarin';
import AdultsJapanese from './components/Footer/LangForAdults/Japanese';
import AdultsKorean from './components/Footer/LangForAdults/Korean';

import KidsEnglish from './components/Footer/LangForKids/English';
import KidsFrench from './components/Footer/LangForKids/French';
import KidsSpanish from './components/Footer/LangForKids/Spanish';
import KidsGerman from './components/Footer/LangForKids/German';
import KidsMandarin from './components/Footer/LangForKids/Mandarin';
import KidsJapanese from './components/Footer/LangForKids/Japanese';
import KidsKorean from './components/Footer/LangForKids/Korean';
import AboutUs from './components/Footer/Company/AboutUs/AboutUs.js';
import Careers from './components/Footer/Company/Careers/Careers';
import Loader from './components/Loader';


const Routing = React.lazy(() => import('./Routing'))

function App() {
  return (
    <>
    <Suspense fallback={<Loader />}>
      <Routing />
    </Suspense>
    </>
  );
}

export default App;
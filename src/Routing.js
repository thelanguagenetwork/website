import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react'
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


function Routing() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/AdultsCourses' element={<AdultsCourses />} />

          {/* Language For Adults */}
          <Route exact path='/IntoCourses' element={<IntroCourse />} />
          <Route exact path='/english-course-adults' element={<AdultsEnglish />} />
          <Route exact path='/french-course-adults' element={<AdultsFrench />} />
          <Route exact path='/spanish-course-adults' element={<AdultsSpanish />} />
          <Route exact path='/german-course-adults' element={<AdultsGerman />} />
          <Route exact path='/mandarin-course-adults' element={<AdultsMandarin />} />
          <Route exact path='/japanese-course-adults' element={<AdultsJapanese />} />
          <Route exact path='/korean-course-adults' element={<AdultsKorean />} />

          {/* Language For Kids */}
          <Route exact path='/english-course-kids' element={<KidsEnglish />} />
          <Route exact path='/french-course-kids' element={<KidsFrench />} />
          <Route exact path='/spanish-course-kids' element={<KidsSpanish />} />
          <Route exact path='/german-course-kids' element={<KidsGerman />} />
          <Route exact path='/mandarin-course-kids' element={<KidsMandarin />} />
          <Route exact path='/japanese-course-kids' element={<KidsJapanese />} />
          <Route exact path='/korean-course-kids' element={<KidsKorean />} />
          <Route exact path='/Dictionary' element={<Dict />} />
          <Route exact path='/Blog' element={<Blog/>} />
          <Route exact path='/AboutUs' element={<AboutUs />} />
          <Route exact path='/Careers' element={<Careers />} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default Routing;
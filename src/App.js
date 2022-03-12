import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react'
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Curriculum from './components/curriculum/Curriculum';
import AdultsCourses from './components/CoursePricing/AdultCourses';
import IntroCourse from './components/Footer/LangForAdults/IntroCourse';
import Earth from './components/Earth/Earth';
import AdultsEnglish from './components/Footer/LangForAdults/English';
import Dict from './components/Footer/dict/dict';
import Blog from './components/Footer/blog/Blog';
import AdultsFrench from './components/Footer/LangForAdults/French';
import AdultsSpanish from './components/Footer/LangForAdults/Spanish';
import AdultsGerman from './components/Footer/LangForAdults/German';
import AdultsMandarin from './components/Footer/LangForAdults/Mandarin';
import AdultsJapanese from './components/Footer/LangForAdults/Japanese';
import AdultsKorean from './components/Footer/LangForAdults/Korean';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/AdultsCourses' element={<AdultsCourses />} />
          <Route exact path='/IntoCourses' element={<IntroCourse />} />
          <Route exact path='/english-course-adults' element={<AdultsEnglish />} />
          <Route exact path='/french-course-adults' element={<AdultsFrench />} />
          <Route exact path='/spanish-course-adults' element={<AdultsSpanish />} />
          <Route exact path='/german-course-adults' element={<AdultsGerman />} />
          <Route exact path='/mandarin-course-adults' element={<AdultsMandarin />} />
          <Route exact path='/japanese-course-adults' element={<AdultsJapanese />} />
          <Route exact path='/korean-course-adults' element={<AdultsKorean />} />
          <Route exact path='/Dictionary' element={<Dict />} />
          <Route exact path='/Blog' element={<Blog/>} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
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

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          {/* <Route exact path='/curriculum' element={<Curriculum />} /> */}
          {/* <Route exact path='/KidsCourses' element={<KidsCourses />} /> */}
          <Route exact path='/AdultsCourses' element={<AdultsCourses />} />
          <Route exact path='/IntoCourses' element={<IntroCourse />} />
          <Route exact path='/english-course-adults' element={<AdultsEnglish />} />
          <Route exact path='/Earth' element={<Earth />} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
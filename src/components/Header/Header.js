import styled from 'styled-components';
import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import react from 'react';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { Link } from 'react-scroll';
import './Header.css';
import { FiMail } from 'react-icons/fi'
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaPinterestP, FaYoutube } from 'react-icons/fa'


class Header extends react.Component {

  render() {

    function expand() {
      document.getElementById('curriList').style.visibility = 'visible';
      document.getElementById('curriList').style.top = '11vh';
      // document.getElementById('curriList').style.height='auto';
      document.getElementById('curriList').style.opacity = '1';
    }
    function retract() {
      document.getElementById('curriList').style.visibility = 'hidden';
      document.getElementById('curriList').style.top = '9vh';
      // document.getElementById('curriList').style.height='0%';
      document.getElementById('curriList').style.opacity = '0';
    }
    function menuBackExpand() {
      document.getElementById('overlay').style.width = '100vw';
      document.getElementById('sidemenu').style.width = '60vw';
    }

    function menuBackRetract() {
      document.getElementById('sidemenu').style.width = '0vw';
      setTimeout(function wait() {
        document.getElementById('overlay').style.width = '0vw';
      }, 500);
    }

    function curriListMExpand() {
      var text2 = "100%"
      var dom = document.getElementById('curriListM')
      var height = dom.style.height;
      var compare = height.localeCompare(text2);
      if (compare === -1) {
        dom.style.height = '100%';
      }
      else if (compare === 0) {
        dom.style.height = '0';
      }
    }
    

    const change = (url) => {
      const nextURL = url;
      const nextTitle = 'adol';
      const nextState = { additionalInformation: 'Updated the URL with JS' };

      // This will create a new entry in the browser's history, without reloading
      window.history.pushState(nextState, nextTitle, nextURL);

      // This will replace the current entry in the browser's history, without reloading
      window.history.replaceState(nextState, nextTitle, nextURL)

  }

  console.log(window.location)

    return (
      <>
        <Nav>
          <Overlay id='overlay' onMouseDown={menuBackRetract}>
          </Overlay>
          <Sidemenu id='sidemenu'>
            <CloseBtn>
              <AiOutlineCloseSquare style={{ color: '#000', float: 'right', fontSize: '37px' }} onMouseDown={menuBackRetract} />
            </CloseBtn>
            <Lists>
              <li><Link to="Curriculum" spy={true} smooth={false}>
                  Curriculum
                </Link></li>
              <li onMouseDown={curriListMExpand}>Courses
                <IoIosArrowDown />
              </li>
              <div id='curriListM' >
                <ul>
                  <a href={'/AdultsCourses'}>ADULTS COURSES</a>
                </ul>
                {/* <ul>
                  <a href='/KidsCourses'>KIDS COURSES</a>
                </ul> */}
              </div>
              <a href='/getstarted'>
              <li>Get Started</li></a>
            </Lists>
          </Sidemenu>
          <Logo href='/'>
            <img src="/images/Logo-website.png" alt="Logo" />
          </Logo>
          <NavMenu>
            <a {...window.location.pathname !== '/' ? {href :'/'}  : {}}  >
              <span >
                <Link to="Curriculum"  spy={true} smooth={false}  onClick={() => {change("Curriculum")}} > 
                  Curriculum
                </Link>
              </span>
            </a>

            <a>
              <span id='curriculum' className='hover:text-teal-600' style={{ padding: '31px 31px 19px 0px' }} onMouseOver={expand} onMouseLeave={retract}>
                Courses
                <IoIosArrowDown />

                <div id='curriList' >
                  {/* <a href='/KidsCourses'>
                    <img src="/images/Adolscents@300x.png" alt="img" />
                    <span>KIDS & ADOLESCENTS COURSES</span>
                  </a> */}

                  <a href='/AdultsCourses'>
                    <img src="/images/adults@300x.png" alt="img" />
                    <span>ADULTS COURSES</span>
                  </a>
                </div>
              </span>
            </a>

          </NavMenu>
          <Trial href='/getstarted'>
            <span>
              Get Started
            </span>

          </Trial>
          <Menu onMouseDown={menuBackExpand}>
            <GiHamburgerMenu style={{ color: 'rgb(0 0 0)', width: "75%", height: '100%' }} />
          </Menu>
        </Nav>


        {/* <div class="menu-button">
          <div class="social-menu">
            <ul>
              <li><a href="https://www.facebook.com/teamlanguagenetwork" target="blank"><i class="fab flex items-center h-full"> <FaFacebookF className='w-full' /></i></a></li>
              <li><a href="https://www.instagram.com/thelanguagenetwork/" target="blank"><i class="fab flex items-center h-full"> <FaInstagram className='w-full' /></i></a></li>
              <li><a href="https://www.linkedin.com/company/the-languagenetwork/" target="blank"><i class="fab flex items-center justify-center h-full"> <FaLinkedinIn className='w-8/12' /></i></a></li>
              <li><a href="mailto:info@thelanguagenetwork.co"><i class="fab flex items-center h-full"> <FiMail className='w-full' /></i></a></li>
              <li><a href="https://in.pinterest.com/teamlanguagenetwork/"><i class="fab flex items-center h-full"> <FaPinterestP className='w-full' /></i></a></li>
              <li><a href="https://www.youtube.com/channel/UC2pMpIkwz5AzM-SRMX9rjLQ"><i class="fab flex items-center h-full"> <FaYoutube className='w-full' /></i></a></li>
            </ul>
          </div>
        </div> */}

      </>
    )
  }
}

const Nav = styled.nav`
              position: relative;
              top: 0;
              left: 0;
              right: 0;
              height: 10vh;
              background-color: #ffffff;
              box-shadow: 0px 0px 8px 0px rgb(216 216 216 / 50%);
              display: flex;
              justify-content: space-between;
              align-items: center;
              /* padding: 0 36px; */
              padding: 5px 80px 5px 80px;
              letter-spacing: 16px;
              z-index: 3;

              @media (max-width: 768px) {
                padding: 0 36px;
  }
              `;

const Logo = styled.a`
              padding: 0;
              width: 120px;
              margin-top: 4px;
              max-height: 80px;
              font-size: 0;
              display: inline-block;
              img {
                display: block;
              width: 100%;
  }
              `;


const NavMenu = styled.div`
              align-items: center;
              display: flex;
              flex-flow: row nowrap;
              height: auto;
              justify-content: flex-end;
              margin: 0px;
              padding-bottom: 8px;
              position: relative;
              margin-right: auto;
              margin-left: 25px;
              a {
                text - decoration: none;
              display: flex;
              align-items: center;
              padding: 12px 12px 0px 12px;
              cursor: pointer;
              height: 100%;
              img {
                height: 20px;
              /* min-width: 20px; */
              width: 20px;
              z-index: auto;
    }
              span {
                display: flex;
              align-items: center;
              color: #000;
              font-size: 17px;
              font-weight: 500;
              letter-spacing: 1.42px;
              line-height: 1.08;
              /* padding: 3px 0px; */
              white-space: nowrap;
              position: relative;
              text-decoration: none;
              &:hover {
                color: #707070;
        }

              div {
                display: flex;
              flex-direction: column;
              justify-content: space-around;
              background-color: #ffffff;
              box-shadow: 0px 0px 8px 0px rgb(216 216 216 / 50%);
              position: absolute;
              margin: 0;
              left: -41px;
              transition: all 0.2s ease 0s;
              top: 9vh;
              overflow: visible;
              visibility: hidden;
              opacity: 0;
              width: 22rem;

              a{
                display: flex;
              flex-direction: row;
              justify-content: flex-start;
              align-items: center;
              height: 4rem;
              margin: 0;
              padding: 0rem 1.5rem;
              transition: all 0.2s ease 0s;


              &:hover{
                background-color: #a3ede3;
              span{
                color: #707070;        
              }
          }


              span{
                padding-left: 1rem;
              font-size: 14px;
              font-weight: 500;
              font-family: 'roboto',Sans-serif;
          }
              img{
                width: 2rem;
                height: 2rem;
          }
          }
        }


    }
    }

        
  }
              @media (max-width: 768px) {
                display: none;
  }
              `;

const Trial = styled.a`
              background-color: #00cfb7;
              font-size: 16px;
              font-weight: 400;
              line-height: 0.8em;
              border-radius: 10px;
              padding: 20px 30px 20px 30px;
              letter-spacing: 1.5px;
              span{
                display: flex;
              text-align: center;
              border: 0;
              font-size: 100%;
              font-style: inherit;
              font-weight: inherit;
              margin: 0;
              outline: 0;
              padding: 0;
              vertical-align: center;
              color: #ffffff;
  }
              &:hover{
                background - color: #13bfab;
  }
              @media (max-width: 768px) {
                display: none;
  }
              `;

const Menu = styled.div`

              width: 50px;
              @media (min-width: 768px){
                display: none;
  }

              `;

const Overlay = styled.div`
              left: 0;
              top: 0;
              height: 100vh;
              width: 0vw;
              margin: 0;
              padding: 0;
              background-color: rgba(0,0,0,0.5);
              position: absolute;
              z-index: 5;
              overflow: visible;
              transition: all 0.2s ease 0s;
              @media (min-width: 768px){
                display: none;
  }

              `;
const Sidemenu = styled.div`
              left: 0;
              top: 0;
              height: 100vh;
              width: 0vw;
              margin: 0;
              padding: 0;
              background-color: #f7f7f7;
              position: absolute;
              z-index: 6;
              transition: all 0.5s ease 0.2s;
              overflow: scroll;
              @media (min-width: 768px){
                display: none;
  }

              `;

const CloseBtn = styled.div`
              /* width: 100%; */
              min-height: 40px;
              `;

const Lists = styled.ul`
              padding: 0;
              li{
                position: relative;
              display: flex;
              align-items: center;
              color: #000;
              letter-spacing: 1px;
              padding: 10px 15px;
              font-family: poppins,Sans-serif;
              font-size: 20px;
              font-weight: 500;
              &:hover{
                color: #707070;
    }
  }
              div {
                display: flex;
              flex-direction: column;
              flex-wrap: wrap;
              justify-content: space-around;
              color: white;
              background-color: #ffffff;
              box-shadow: 0px 0px 8px 0px rgb(216 216 216 / 50%);
              position: relative;
              padding: 0;
              margin: 0;
              /* left: -356px; */
              transition: all 0.2s ease 0s;
              /* top: 25px; */
              /* min-width: 100vw; */
              /* min-height: 30vh; */
              /* overflow: visible;  */
              /* visibility: hidden; */
              opacity: 1;
              letter-spacing: 1px;
              height: 0px;
              overflow: hidden;


              ul{
                padding: 12px 0 9px 26px;
              display: flex;
              flex-direction: column;
              justify-content: space-evenly;

              span{
                line - height: 2em;

              color: #000;
              font-size: 17px;
              font-weight: 500;
              font-family: 'roboto',Sans-serif;
          }
              a {
                line - height: 18px;

              font-family: 'Poppins',sans-serif;
              font-size: 14px;
              color: #777;
              padding: 0;
              &:hover{
                color: #40cbbb;
            }
          }
        }


    }
              `;

export default Header;

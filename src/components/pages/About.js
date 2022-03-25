
import React from 'react'
import './About.css'
import Goog from '../../../images/goog.png'
import {BsJournalBookmark} from 'react-icons/bs'
import {FaMapMarkedAlt} from 'react-icons/fa'
import {BsFillPeopleFill} from 'react-icons/bs'


export const About = () => {
  return (
    <section id='about'>
      <div className='about_header'>
        
        <h1>About Us</h1>
      </div>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
              <img src={Goog} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <BsJournalBookmark className="about_icon"></BsJournalBookmark>
              <h5>Plan Your Trip</h5>
              
            </article>

            <article className="about_card">
              <FaMapMarkedAlt className="about_icon"></FaMapMarkedAlt>
              <h5>Use Meet Me Half-Way</h5>
              
            </article>
            
            <article className="about_card">
              <BsFillPeopleFill className="about_icon"></BsFillPeopleFill>
              <h5>Enjoy Your Company</h5>
              
            </article>
          </div>

          <p>Overiew: There are manyway for people to plan routes for 
          an extended journey or for a close trip. Unfortuantly there are very few ways an 
          individual can meet perfectly in the middle without having clear knowledge of their
          city. This is why Meet Me Half-way Exists.</p>


        </div>
      </div>
    </section>
  )
}


export default About;

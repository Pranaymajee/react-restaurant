import React from 'react';

import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
      <div className="app__aboutus-overlay flex__center">
          <img src={images.G} alt="g letter"/>
      </div>

      <div className="app__aboutus-content flex__center">
          <div className="app__aboutus-content_about">
            <h1 className='headtext__cormorant' data-aos="fade-right">About Us</h1>
            <img src={images.spoon} alt="spoon img" />
            <p className='p__opensans'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <button className='custom__button'>Know More</button>
          </div>


          <div className="app__aboutus-content_knife flex__center">
            <img src={images.knife} alt="knife img" />
          </div>

          <div className="app__aboutus-content_history">
            <h1 className='headtext__cormorant' data-aos="fade-left">Our History</h1>
            <img src={images.spoon} alt="spoon img" />
            <p className='p__opensans'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.</p>
            <button className='custom__button'>Know More</button>
          </div>
      </div>
  </div>
);

export default AboutUs;

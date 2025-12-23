import React, { useState } from 'react';
import voluntarios from '../../images/experience/voluntarios.jpeg';
import donaciones from '../../images/experience/donaciones.jpeg';
import conecxion12 from '../../images/experience/conexion-12.jpeg';
import g12Eventos from '../../images/experience/g12-eventos.jpeg';
import vanMarA1 from '../../images/experience/vanmar-access-1.png';
import vanMarA2 from '../../images/experience/vanmar-access-2.png';
import vanMarL1 from '../../images/experience/vanmar-landing-1.png';
import vanMarL2 from '../../images/experience/vanmar-landing-2.png';
import linktic1 from '../../images/experience/linktic-andina-1.png';
import linktic2 from '../../images/experience/linktic-positiva-1.png';
import linktic3 from '../../images/experience/linktic-acueducto-1.png';
import linktic4 from '../../images/experience/linktic-positiva-2.png';

import './Experience.scss';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const glabImages = [
  conecxion12, donaciones, g12Eventos, voluntarios
];
const linkticImages = [
    linktic1, linktic2, linktic3, linktic4
];
const vanMarImages = [
  vanMarL1, vanMarL2, vanMarA1, vanMarA2
];
const Experience: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === glabImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? glabImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className='experience' id="experience">
      <div className="title">
        <h1>Experiences</h1>
      </div>
      <Tabs selectedIndex={selectedTabIndex} onSelect={(index) => setSelectedTabIndex(index)}>
        <TabList>
          <Tab style={{ position: 'relative' }}>Van Mar
          <div style={{ position: 'absolute', top: -15, right: 2, fontSize: '10px', backgroundColor: '#4EE1A0', color: '#292929', padding: '0.2rem 0.5rem', zIndex: 100 }}>
            <span>LAST</span>
          </div>
          </Tab>
          <Tab>LinkTIC</Tab>
          <Tab>G Lab</Tab>
        </TabList>
        <TabPanel style={{ position: 'relative' }}>
          <div className="new-experience" style={{ position: 'absolute', top: 0, right: 0 }}>
            <span>LAST</span>
          </div>
          <h3>
            <span>Van Mar International</span>
          </h3>
          <p>
            For this cargo logistics company, I was responsible for the development from scratch of the website and internal CRM, including an API that uses GraphQL to get the data from the company.
          </p>
          <div className="slider-container movement">
            <div className="slider">
              <div
                className="slides"
                style={{
                  transform: `translateX(-${currentImageIndex * 100}%)`,
                }}
              >
                {vanMarImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Van Mar ${index}`}
                    className="slide"
                  />
                ))}
              </div>
            </div>
            <button className="slider-btn prev" onClick={prevSlide}>
            </button>
            <button className=" slider-btn next" onClick={nextSlide}>
            </button>
          </div>

          <ul className="techs">
            <li>React</li>
            <li>Tailwind</li>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>AntDesign</li>
            <li>Nest.js</li>
            <li>PostgreSQL</li>
            <li>Heroku</li>
            <li>GraphQL</li>
            <li>AWS</li>
            <li>Cognito</li>
            <li>S3</li>
            <li>RDS</li>
            <li>Amplify</li>
            <li>Themed</li>
          </ul>
          <div className="contact-me">
            <button onClick={() => window.open('https://www.vanmarinternational.com', '_blank')}>
              View Landing Page
            </button>
          </div>
          
        </TabPanel>
        <TabPanel>
          <h3>
            <span>LinkTIC</span>
          </h3>
          <p>
            In this company, I was responsible for many solutions in different projects related to insurance and financial services.
          </p>
          <div className="slider-container movement">
            <div className="slider">
              <div
                className="slides"
                style={{
                  transform: `translateX(-${currentImageIndex * 100}%)`,
                }}
              >
                {linkticImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`LinkTIC ${index}`}
                    className="slide"
                  />
                ))}
              </div>
            </div>
            <button className="slider-btn prev" onClick={prevSlide}>
            </button>
            <button className=" slider-btn next" onClick={nextSlide}>
            </button>
          </div>

          <ul className="techs">
            <li>Vue</li>
            <li>Quasar</li>
            <li>Java</li>
            <li>TypeScript</li>
            <li>Spring Boot</li>
            <li>PostgreSQL</li>
          </ul>
        </TabPanel>
        <TabPanel>
          <h3>
            <span>G Lab</span>
          </h3>
          <p>
            New characteristics and modules in every website were created
            as are administration, events payment, donations and
            subscription of volunteers.
          </p>
          <div className="slider-container movement">
            <div className="slider">
              <div
                className="slides"
                style={{
                  transform: `translateX(-${currentImageIndex * 100}%)`,
                }}
              >
                {glabImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Slide ${index}`}
                    className="slide"
                  />
                ))}
              </div>
            </div>
            <button className="slider-btn prev" onClick={prevSlide}>
            </button>
            <button className=" slider-btn next" onClick={nextSlide}>
            </button>
          </div>

          <ul className="techs">
            <li>Angular</li>
            <li>Material</li>
            <li>Nest</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>Bootstrap</li>
          </ul>
        </TabPanel>
      </Tabs>
      
    </section>
  );
}

export default Experience;


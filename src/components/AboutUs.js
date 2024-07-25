import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.section`
  padding: 4rem 2rem;
  background-color: #f7f7f7;
  color: #333;
  text-align: center;
`;

const AboutContent = styled.div`
  max-width: 800px;
  margin: auto;
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.25rem;
  }
`;

const AboutUs = () => {
  return (
    <AboutWrapper id="about">
      <AboutContent>
        <h2>Who We Are</h2>
        <p>The Welt Research Pvt Ltd is a registered private limited company established for research and experimental development on natural sciences and research. We are focused on exploration and innovations for making society better.</p>
        <p>We are keen on working for a green & sustainable future and solving socio-scientific problems, ensuring no one is left behind. Our goal is to create a society with “Prosperity and Happiness Together” by developing technologies for various fields.</p>
      </AboutContent>
    </AboutWrapper>
  );
};

export default AboutUs;

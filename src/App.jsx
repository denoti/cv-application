// import Card from './components/Card';
import { useState } from 'react';
import './App.css';
import PersonalDetails from './components/PersonalDetails';
import Education from './components/Education';
import Experience from './components/Experience';
import CvDisplay from './components/CvDisplay';

function App() {
  const [personalData, setPersonalData] = useState({
    details: [
      'Dennis Otieno',
      'otidennis98@gmail.com',
      '+254729230016',
      'Babadogo, Ruaraka',
    ],
  });
  const [educationData, setEducationData] = useState({
    education: [
      'Moi University',
      'Agricultural Economics and Resource Management',
      2015,
      2019,
      'Eldoret, Kenya',
    ],
  });
  const [experienceData, setExperienceData] = useState({
    experience: [
      2020,
      2024,
      'Google Inc.',
      'Lead Software Engineer',
      'Silicon Valley, USA',
      'Guided and drove the technical aspects of projects from conception to deployment. Engaged my tech team nurturing their expertise in software engineering principles and leadership skills for successful delivery of high quality and scalable software solutions.',
    ],
  });
  return (
    <>
      <form>
        <PersonalDetails
          setPersonalData={setPersonalData}
          data={personalData}
        />
        <Education setEducationData={setEducationData} data={educationData} />
        <Experience
          setExperienceData={setExperienceData}
          data={experienceData}
        />

      </form>

      <CvDisplay data={[personalData, educationData, experienceData]} />
    </>
  );
}

export default App;

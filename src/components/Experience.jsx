import '../styles/experience.css';
export default function Experience(props) {
  let experienceInfor = props.data.experience;
  let setExperienceData = props.setExperienceData;

  function handleChange(event, index) {
    const { value } = event.target;
    experienceInfor[index] = value;
    setExperienceData({ experience: experienceInfor });
  }
  return (
    <>
      <h2>Experience</h2>
      <div className='experience-details'>
        <label htmlFor='start'>START DATE</label>
        <input
          type='text'
          id='start'
          name='start'
          onChange={(e, index) => handleChange(e, (index = 0))}
        />
      </div>
      <div className='experience-details'>
        <label htmlFor='end'>END DATE</label>
        <input
          type='text'
          id='end'
          name='end'
          onChange={(e, index) => handleChange(e, (index = 1))}
        />
      </div>
      <div className='experience-details'>
        <label htmlFor='company-name'>COMPANY NAME</label>
        <input
          type='text'
          id='company-name'
          onChange={(e, index) => handleChange(e, (index = 2))}
        />
      </div>
      <div className='experience-details'>
        <label htmlFor='position'>POSITION</label>
        <input
          type='text'
          id='position'
          onChange={(e, index) => handleChange(e, (index = 3))}
        />
      </div>
      <div className='experience-details'>
        <label htmlFor='location'>LOCATION</label>
        <input
          type='text'
          id='location'
          onChange={(e, index) => handleChange(e, (index = 4))}
        />
      </div>
      <div className='experience-details'>
        <label htmlFor='role'>ROLE DESCRIPTION</label>
        <input
          type='text'
          id='role'
          onChange={(e, index) => handleChange(e, (index = 5))}
        />
      </div>
    </>
  );
}

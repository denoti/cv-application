import '../styles/Education.css';

const Education = (props) => {
  let educationInfor = props.data.education;
  let setEducationData = props.setEducationData;
  function handleChange(event, index) {
    const { value } = event.target;
    educationInfor[index] = value;
    setEducationData({ education: educationInfor });
  }
  return (
    <>
      <h2>Education</h2>
      <div className='edu-details'>
        <label htmlFor='school'>SCHOOL</label>
        <input
          type='text'
          id='school'
          name='school'
          onChange={(e, index) => handleChange(e, (index = 0))}
        />
      </div>
      <div className='edu-details'>
        <label htmlFor='degree'>DEGREE</label>
        <input
          type='text'
          id='degree'
          name='degree'
          onChange={(e, index) => handleChange(e, (index = 1))}
        />
      </div>
      <div className='edu-details'>
        <label htmlFor='start'>START DATE</label>
        <input
          type='text'
          id='start'
          name='start'
          onChange={(e, index) => handleChange(e, (index = 2))}
        />
      </div>
      <div className='edu-details'>
        <label htmlFor='end'>END DATE</label>
        <input
          type='text'
          id='end'
          name='end'
          onChange={(e, index) => handleChange(e, (index = 3))}
        />
      </div>
      <div className='edu-details'>
        <label htmlFor='location'>LOCATION</label>
        <input
          type='text'
          id='location'
          name='location'
          onChange={(e, index) => handleChange(e, (index = 4))}
        />
      </div>
    </>
  );
};

export default Education;

import '../styles/personalDetails.css';
export default function PersonalDetails(props) {
  let personalInfor = props.data.details;
  let setPersonalData = props.setPersonalData;
  function handleChange(event, index) {
    const { value } = event.target;
    personalInfor[index] = value;
    setPersonalData({ details: personalInfor });
  }
  return (
    <>
      <h2>Personal Details</h2>
      <div className='personal-details'>
        <label htmlFor='fullName'>FULL NAME</label>
        <input
          type='text'
          id='fullName'
          onChange={(e, index) => handleChange(e, (index = 0))}
        />
      </div>
      <div className='personal-details'>
        <label htmlFor='email'>EMAIL</label>
        <input
          type='email'
          id='email'
          onChange={(e, index) => handleChange(e, (index = 1))}
        />
      </div>

      <div className='personal-details'>
        <label htmlFor='phoneNumber'>PHONE NUMBER</label>
        <input
          type='tel'
          id='phoneNumber'
          onChange={(e, index) => handleChange(e, (index = 2))}
        />
      </div>

      <div className='personal-details'>
        <label htmlFor='address'>ADDRESS</label>
        <input
          type='text'
          id='address'
          onChange={(e, index) => handleChange(e, (index = 3))}
        />
      </div>
    </>
  );
}

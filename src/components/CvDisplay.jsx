import '../styles/cvDisplay.css';
export default function CvDisplay(props) {
  let personalDetails = props.data[0];
  let educationDetails = props.data[1];
  let experienceDetails = props.data[2];
  // console.log(experienceDetails);
  return (
    <div>
      <div className='personalDetails'>
        <h1>{personalDetails.details[0]}</h1>
        <ul>
          <li>{personalDetails.details[1]}</li>
          <li>{personalDetails.details[2]}</li>
          <li>{personalDetails.details[3]}</li>
        </ul>
      </div>
      <div className='educationDetails'>
        <h2>Education</h2>
        <div className='boxHolder'>
          <p>
            {educationDetails.education[2]}-{educationDetails.education[3]}
          </p>
          <p>{educationDetails.education[0]}</p>
        </div>
        <div className='boxHolder'>
          <p>{educationDetails.education[4]}</p>
          <p>{educationDetails.education[1]}</p>
        </div>
      </div>
      <div className='experienceDetails'>
        <h2>Experience</h2>
        <div className='boxHolder'>
          <p>
            {experienceDetails.experience[0]}-{experienceDetails.experience[1]}
          </p>
          <p>{experienceDetails.experience[2]}</p>
        </div>
        <div className='boxHolder'>
          <p>{experienceDetails.experience[4]}</p>
          <p>{experienceDetails.experience[3]}</p>
          <p>{experienceDetails.experience[5]}</p>
        </div>
      </div>
    </div>
  );
}

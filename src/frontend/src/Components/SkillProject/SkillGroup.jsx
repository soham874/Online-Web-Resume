import React from 'react';
import './SkillsNProfiles.css'

const delay = 10000;

export default function SkillGroup(props) {

  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  const loadIndividualSkillGroup = (tech) => {
    return (
    <div className="imageProperties"
      style={{
        background:`linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), ${tech.background}`,
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center'
      }}
    >
      <div className = 'headerAndInfo'>
        <div className = 'Header'>
          {tech.tech_name}
        </div>          
        <div className = 'Info'>
          {tech.description}
        </div>
      </div>
      <div className='skill_icon_group'>
        {tech.techs.map((tech_icon)=>(
          <img 
            alt={tech_icon.Name}
            className="skill_icons" 
            src={tech_icon.URL}     
            referrerpolicy="no-referrer" 
            onClick={()=>(window.open(tech_icon.DocuLink,'mywindow'))}
          /> 
        ))}
      </div>
    </div>)
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === props.skillIconDataSet.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {props.skillIconDataSet.map((tech,index) => (
          <div
            className="slide"
            key={index}
          >
            {loadIndividualSkillGroup(tech)}
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {props.skillIconDataSet.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
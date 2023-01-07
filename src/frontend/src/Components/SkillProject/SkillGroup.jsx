import React from 'react';
import './SkillsNProfiles.css'

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 5000;

export default function SkillGroup(props) {

  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
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
            {JSON.stringify(tech)}
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
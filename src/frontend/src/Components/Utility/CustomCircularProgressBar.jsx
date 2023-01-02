import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React, { useEffect, useState } from 'react';

const colourMapping = [{
    mainColour : '#17d214',
    backgroundColour : '#ceffcd'
},{
    mainColour : '#ff9500',
    backgroundColour : '#f2d2a4'
},{
    mainColour : '#ff4040',
    backgroundColour : '#f1b2b2'
},{
    mainColour : '#413a96',
    backgroundColour : '#a6a3cc'
}]

export default function CustomCircularProgressBar(props) {
    
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        setTimeout(() => {
          if (percentage < props.targetPercent*100) {
            setPercentage(percentage + 1);
          }
        }, 0.1);
      }, [percentage]);

    return (
        <div style={{ width: 200, height: 200 }}>
            <CircularProgressbar 
                value={percentage} 
                maxValue="10000"
                text={`${percentage/100}%`} 
                strokeWidth = "4"
                styles={buildStyles({
                    pathColor: colourMapping[props.difficulty].mainColour,
                    trailColor: colourMapping[props.difficulty].backgroundColour,
                    textColor: colourMapping[props.difficulty].mainColour,
                    textSize:'15px'
                })}
            />
        </div>);
  }
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React from 'react';

// 0 - all, 1-easy, 2-medium, 3-hard
const colourMapping = [{
    mainColour : '#413a96',
    backgroundColour : '#a6a3cc'
},{
    mainColour : '#17d214',
    backgroundColour : '#ceffcd'
},{
    mainColour : '#ff9500',
    backgroundColour : '#f2d2a4'
},{
    mainColour : '#ff4040',
    backgroundColour : '#f1b2b2'
}]

export default function CustomCircularProgressBar(props) {
    
    return (
        <div style={{ width: 200, height: 200 }}>
            <CircularProgressbar 
                value={props.targetPercent*100} 
                maxValue="10000"
                text={`${props.leadingText} ${props.targetPercent}%`} 
                strokeWidth = "4"
                styles={buildStyles({
                    pathColor: colourMapping[props.difficulty].mainColour,
                    trailColor: colourMapping[props.difficulty].backgroundColour,
                    textColor: colourMapping[props.difficulty].mainColour,
                    textSize:'8px'
                })}
            />
        </div>);
  }
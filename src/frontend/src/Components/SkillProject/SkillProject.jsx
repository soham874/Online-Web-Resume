import React from 'react';
import CustomCircularProgressBar from '../Utility/CustomCircularProgressBar';
import './SkillsNProfiles.css'

export default function SkillProject() {
    return (
        <div className='body-common'>
            <div id="coding_container">
                <div style={{padding: "50px",textAlign: "justify"}}>
                    Here's a quick look into my coding portfolio from <a href="https://leetcode.com/Soham874/" target="_blank" rel="noreferrer">Leetcode</a>. Hover or tap on each question category type to know my stats in that particular level. Tap anywhere outside to see my overall stats.
                </div>
                <div>
                    <div className="category_buttons">
                        <div className="category_class" id="c1" style={{color:"#17d214"}}>Easy</div>
                        <div className="category_class" id="c2" style={{color:"#ff9500"}}>Medium</div>
                        <div className="category_class" id="c3" style={{color:"#ff4040"}}>Hard</div>
                    </div>
                    <div className="coding_block">
                        <div className="progress" style={{left: "33.34%"}}>
                            <CustomCircularProgressBar targetPercent="10" difficulty="0"/>
                        </div>
                        <div className="progress" style={{left: "66.68%"}}>
                            <CustomCircularProgressBar targetPercent="50.76" difficulty="3"/>
                        </div>
                    </div>
                    <div id="progress_bar_container">
                    </div>
                </div>

            </div>
            <div className="error_api" id="leetcode_error">
                <div style={{position:"relative", top:"50%"}}>
                    LeetCode servers are not responding currently, I apologize for the inconvinience. Please feel free to visit my Leetcode profile <a href="https://leetcode.com/Soham874/" target="_blank" rel="noreferrer">here</a>.
                </div>
            </div>
            <div id="github_container">
                <div style={{padding: "50px",textAlign: "justify"}}>Here's some projects from my <a href="https://github.com/soham874" target="_blank" rel="noreferrer">Github</a> profile.
                </div>
                <div id="github_projects">
                </div>
            </div>
            <div className="error_api" id="github_error">
                <div style={{position:"relative", top:"50%"}}>
                    Github servers are not responding currently, I apologize for the inconvinience. Please feel free to visit my Github profile <a href="https://github.com/soham874" target="_blank" rel="noreferrer">here</a>.
                </div>
            </div>
        </div>
    );
  }
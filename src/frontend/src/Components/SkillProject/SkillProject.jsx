import React from 'react';
import CustomCircularProgressBar from '../Utility/CustomCircularProgressBar';
import './SkillsNProfiles.css'

var leetcodeData = {
    "data": {
        "allQuestionsCount": [{
                "difficulty": "All",
                "count": 2314
            },
            {
                "difficulty": "Easy",
                "count": 579
            },
            {
                "difficulty": "Medium",
                "count": 1230
            },
            {
                "difficulty": "Hard",
                "count": 505
            }
        ],
        "matchedUser": {
            "submitStats": {
                "acSubmissionNum": [{
                        "difficulty": "All",
                        "count": 537,
                        "submissions": 704
                    },
                    {
                        "difficulty": "Easy",
                        "count": 211,
                        "submissions": 287
                    },
                    {
                        "difficulty": "Medium",
                        "count": 289,
                        "submissions": 375
                    },
                    {
                        "difficulty": "Hard",
                        "count": 37,
                        "submissions": 42
                    }
                ],
                "totalSubmissionNum": [{
                        "difficulty": "All",
                        "count": 553,
                        "submissions": 1041
                    },
                    {
                        "difficulty": "Easy",
                        "count": 211,
                        "submissions": 358
                    },
                    {
                        "difficulty": "Medium",
                        "count": 299,
                        "submissions": 612
                    },
                    {
                        "difficulty": "Hard",
                        "count": 43,
                        "submissions": 71
                    }
                ]
            }
        }
    }
}

var githubData = {
    "data": {
        "user": {
            "pinnedItems": {
                "nodes": [
                    {
                        "name": "Sohams-Web-Portal",
                        "description": "My up-to-date online Web Portal, created as a full stack project",
                        "url": "https://github.com/soham874/Sohams-Web-Portal"
                    },
                    {
                        "name": "TItanic-Predictions",
                        "description": "An algorithm used to determine if a titanic passanger survived or died based on information about ticket, gender, etc",
                        "url": "https://github.com/soham874/TItanic-Predictions"
                    },
                    {
                        "name": "Fundoo",
                        "description": "A frontend project developed using node.js and react which implements user login, registration, and password reset logic",
                        "url": "https://github.com/soham874/Fundoo"
                    },
                    {
                        "name": "Converter",
                        "description": "A UI implementing a simple converter for converting temperature, length and volume units",
                        "url": "https://github.com/soham874/Converter"
                    },
                    {
                        "name": "Digit-Classification-MNIST",
                        "description": "An algorithm trained on the MNIST Dataset used to detect handwritten digits",
                        "url": "https://github.com/soham874/Digit-Classification-MNIST"
                    }
                ]
            }
        }
    }
}

var loadedData = []

export default function SkillProject() {

    const [difficultyLevel, setDifficultyLevel] = React.useState(0)

    const loadLeetCodeData = () => {

        var leetcodedata;

        var previouslyStoredLeetCodeData = sessionStorage.getItem("leetcodeData"); 
        if( previouslyStoredLeetCodeData ){
            console.log("Previously cached Leetcode data loaded")
            leetcodedata = JSON.parse(previouslyStoredLeetCodeData)
        }else{
            console.log("Previously cached data not found, fetching new data and caching")
            leetcodedata = leetcodeData // to be fetched from backend
            sessionStorage.setItem("leetcodeData",JSON.stringify(leetcodedata))
        }

        // 0 - All, 1 - Easy, 2 - Medium, 3 - Hard
        for (var i = 0; i < 4; i++)
        loadedData[i] = {
            // Total questions in ith category
            Questions: leetcodedata.data.allQuestionsCount[i].count,
            // Total accepted solutions in ith category
            Accepted: leetcodedata.data.matchedUser.submitStats.acSubmissionNum[i].submissions,
            // Total unique questions solved in ith category
            Solved: leetcodedata.data.matchedUser.submitStats.acSubmissionNum[i].count,
            // Total accuracy in ith category
            Accuracy_percent: Math.round(leetcodedata.data.matchedUser.submitStats.acSubmissionNum[i].submissions / leetcodedata.data.matchedUser.submitStats.totalSubmissionNum[i].submissions * 100 * 100) / 100,
            // Percent of questions solved in ith category
            Completed_percent: Math.round(leetcodedata.data.matchedUser.submitStats.acSubmissionNum[i].count / leetcodedata.data.allQuestionsCount[i].count * 100 * 100) / 100,
        }
    }

    loadLeetCodeData(leetcodeData)

    let difficultyLevelData = (level) => {
        
        return (

        <div>    
            <div className="coding_block">
                <div className="progress" style={{left: "33.34%"}}>
                    <CustomCircularProgressBar 
                        targetPercent={loadedData[level].Completed_percent} 
                        leadingText="Completed"
                        difficulty={level}
                    />
                </div>
                <div className="progress" style={{left: "66.68%"}}>
                    <CustomCircularProgressBar 
                        targetPercent={loadedData[level].Accuracy_percent} 
                        leadingText="Accuracy"
                        difficulty={level}
                    />
                </div>
            </div>
            <div id="progress_bar_container">
                <div style={{padding:"0 10px 0 10px"}}> Total questions: {loadedData[level].Questions} </div> 
                <div style={{padding:"0 10px 0 10px"}}> Solved questions: {loadedData[level].Solved} </div> 
                <div style={{padding:"0 10px 0 10px"}}> Accepted Solutions: {loadedData[level].Accepted} </div>
            </div>
        </div>
        
        );
    }

    const changeStats = (level) => {
        setDifficultyLevel(level)
    }

    const loadGithubData = () => {

        var githubdata;

        var previouslyStoredGithubData = sessionStorage.getItem("githubData"); 
        if( previouslyStoredGithubData ){
            console.log("Previously cached Github data loaded")
            githubdata = JSON.parse(previouslyStoredGithubData)
        }else{
            console.log("Previously cached data not found, fetching new data and caching")
            githubdata = githubData // to be fetched from backend
            sessionStorage.setItem("githubData",JSON.stringify(githubdata))
        }

        let tabledata = `<table id="customers">
                <tr>
                  <th>Project Name</th>
                  <th>Short Description</th>
                </tr>`

        githubdata.data.user.pinnedItems.nodes.forEach(project => {
            tabledata += `<tr>
                            <td><a href="${project.url}" target="_blank">${project.name}</a></td>
                            <td>${project.description}</td>
                            </tr>`
        })
        tabledata += `</table>`

        return <div dangerouslySetInnerHTML={{ __html: tabledata }} />

    }

    return (
        <div className='body-common'>
            <div id="coding_container">
                <div style={{padding: "50px",textAlign: "justify"}}>
                    Here's a quick look into my coding portfolio from <a href="https://leetcode.com/Soham874/" target="_blank" rel="noreferrer">Leetcode</a>. Hover or tap on each question category type to know my stats in that particular level. Tap anywhere outside to see my overall stats.
                </div>
                <div>
                    <div className="category_buttons" onMouseLeave={()=>{changeStats(0)}}>
                        <div className="category_class" id="c1" onClick={()=>{changeStats(1)}} onMouseEnter={()=>{changeStats(1)}}  onMouseLeave={()=>{changeStats(0)}} style={{color:"#17d214"}}>Easy</div>
                        <div className="category_class" id="c2" onClick={()=>{changeStats(2)}} onMouseEnter={()=>{changeStats(2)}}  onMouseLeave={()=>{changeStats(0)}} style={{color:"#ff9500"}}>Medium</div>
                        <div className="category_class" id="c3" onClick={()=>{changeStats(3)}} onMouseEnter={()=>{changeStats(3)}}  onMouseLeave={()=>{changeStats(0)}} style={{color:"#ff4040"}}>Hard</div>
                    </div>
                    {difficultyLevelData(difficultyLevel)}
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
                    {loadGithubData()}
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
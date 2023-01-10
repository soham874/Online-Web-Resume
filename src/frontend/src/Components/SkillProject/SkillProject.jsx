import React from 'react';
import CustomCircularProgressBar from '../Utility/CustomCircularProgressBar';
import './SkillsNProfiles.css'
import SkillGroup from './SkillGroup';

import Tilt from 'react-parallax-tilt';

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
                        "url": "https://github.com/soham874/Sohams-Web-Portal",
                        "openGraphImageUrl": "https://opengraph.githubassets.com/962c7322781cbb847735fc86a7282cb60a780cdabd2c2b024e46301ae37878ea/soham874/Sohams-Web-Portal"
                    },
                    {
                        "name": "TItanic-Predictions",
                        "description": "An algorithm used to determine if a titanic passanger survived or died based on information about ticket, gender, etc",
                        "url": "https://github.com/soham874/TItanic-Predictions",
                        "openGraphImageUrl": "https://opengraph.githubassets.com/ad343c32e4da4ac916059dc03e87df4840264ccb767dde79a2a856fbdfac00f4/soham874/TItanic-Predictions"
                    },
                    {
                        "name": "Fundoo",
                        "description": "A frontend project developed using node.js and react which implements user login, registration, and password reset logic",
                        "url": "https://github.com/soham874/Fundoo",
                        "openGraphImageUrl": "https://opengraph.githubassets.com/cf5221a3394d6b877d4769be8cd90f20a63c5e5b2412bb7c822f4fe70d72465e/soham874/Fundoo"
                    },
                    {
                        "name": "Converter",
                        "description": "A UI implementing a simple converter for converting temperature, length and volume units",
                        "url": "https://github.com/soham874/Converter",
                        "openGraphImageUrl": "https://opengraph.githubassets.com/13901efe3252af183a8887f353cd0612f0a9176defcb4615321df3e7a4b33f9d/soham874/Converter"
                    },
                    {
                        "name": "Digit-Classification-MNIST",
                        "description": "An algorithm trained on the MNIST Dataset used to detect handwritten digits",
                        "url": "https://github.com/soham874/Digit-Classification-MNIST",
                        "openGraphImageUrl": "https://opengraph.githubassets.com/46d737438ce4ac4c98da42d4da3a51bc55889fef28103728d1706dffffe8607f/soham874/Digit-Classification-MNIST"
                    }
                ]
            }
        }
    }
}


var generalLargeData = {
    "_id": "62b0389996da68f660e35282",
    "skill_icons": [
        {
            "tech_name": "CI-CD and monitoring",
            "description": "Deploying microservices in k8s containers and monitoring performance through meaningful logging, dashboard setups, and setting up alerting mechanisms to respond to fast developing situations",
            "background": `url(https://ik.imagekit.io/1jc4wmgh9b/Skill_items/CI-CD_and_monitoring.png)`,
            "techs": [
                {
                    "Name": "Docker",
                    "URL": "https://ik.imagekit.io/1jc4wmgh9b/Skill_items/CI-CD_and_monitoring..Docker..www.docker.com_",
                    "DocuLink": "https://www.docker.com/"
                },
                {
                    "Name": "Jenkins",
                    "URL": "https://ik.imagekit.io/1jc4wmgh9b/Skill_items/CI-CD_and_monitoring..Jenkins..www.jenkins.io_",
                    "DocuLink": "https://www.jenkins.io/"
                },
                {
                    "Name": "Kubernetes",
                    "URL": "https://ik.imagekit.io/1jc4wmgh9b/Skill_items/CI-CD_and_monitoring..Kubernetes..kubernetes.io_",
                    "DocuLink": "https://kubernetes.io/"
                },
                {
                    "Name": "Splunk",
                    "URL": "https://ik.imagekit.io/1jc4wmgh9b/Skill_items/CI-CD_and_monitoring..Splunk..www.splunk.com_",
                    "DocuLink": "https://www.splunk.com/"
                },
                {
                    "Name": "xMatters",
                    "URL": "https://ik.imagekit.io/1jc4wmgh9b/Skill_items/CI-CD_and_monitoring..xMatters..www.xmatters.com_",
                    "DocuLink": "https://www.xmatters.com/"
                }
            ]
        },
        {
            "tech_name": "Databases",
            "description": "Using both SQL and NoSQL databases to store and retrive data efficiently",
            "background": `url(https://ik.imagekit.io/1jc4wmgh9b/Skill_items/Databases.png)`,
            "techs": [
                {
                    "Name": "Firebase",
                    "URL": "https://ik.imagekit.io/1jc4wmgh9b/Skill_items/Databases..Firebase..firebase.google.com_",
                    "DocuLink": "https://firebase.google.com/"
                },
                {
                    "Name": "MongoDB",
                    "URL": "https://ik.imagekit.io/1jc4wmgh9b/Skill_items/Databases..MongoDB..www.mongodb.com_",
                    "DocuLink": "https://www.mongodb.com/"
                },
                {
                    "Name": "MySQL",
                    "URL": "https://ik.imagekit.io/1jc4wmgh9b/Skill_items/Databases..MySQL..www.mysql.com_",
                    "DocuLink": "https://www.mysql.com/"
                }
            ]
        },
        {
            "tech_name": "Full Stack Technologies",
            "description": "Developing optimised and scalable backend microservices with responsive multi-browser supported frontend for an immersive and memorable user experience",
            "background": `url(https://ik.imagekit.io/1jc4wmgh9b/Skill_items/Full_Stack_Technologies.png)`,
            "techs": [
                {
                    "Name": "CSS",
                    "URL": "https://ik.imagekit.io/1jc4wmgh9b/Skill_items/Full_Stack_Technologies..CSS..developer.mozilla.org_en-US_docs_Web_CSS",
                    "DocuLink": "https://developer.mozilla.org/en-US/docs/Web/CSS"
                },
                {
                    "Name": "HTML",
                    "URL": "https://ik.imagekit.io/1jc4wmgh9b/Skill_items/Full_Stack_Technologies..HTML..developer.mozilla.org_en-US_docs_Web_HTML",
                    "DocuLink": "https://developer.mozilla.org/en-US/docs/Web/HTML"
                },
                {
                    "Name": "JavaScript",
                    "URL": "https://ik.imagekit.io/1jc4wmgh9b/Skill_items/Full_Stack_Technologies..JavaScript..developer.mozilla.org_en-US_docs_Web_JavaScript",
                    "DocuLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                },
                {
                    "Name": "NodeJS",
                    "URL": "https://ik.imagekit.io/1jc4wmgh9b/Skill_items/Full_Stack_Technologies..NodeJS..nodejs.org_",
                    "DocuLink": "https://nodejs.org/"
                },
                {
                    "Name": "ReactJS",
                    "URL": "https://ik.imagekit.io/1jc4wmgh9b/Skill_items/Full_Stack_Technologies..ReactJS..reactjs.org_",
                    "DocuLink": "https://reactjs.org/"
                },
                {
                    "Name": "Spring",
                    "URL": "https://ik.imagekit.io/1jc4wmgh9b/Skill_items/Full_Stack_Technologies..Spring..spring.io_",
                    "DocuLink": "https://spring.io/"
                }
            ]
        },
        {
            "tech_name": "IDEs",
            "description": "Using the most popular Development Environments in the industry to swiftly develop meaningful products from scratch, while following industry coding ettiquetes and standards",
            "background": `url(https://ik.imagekit.io/1jc4wmgh9b/Skill_items/IDEs.png)`,
            "techs": [
                {
                    "Name": "Eclipse",
                    "URL": "https://ik.imagekit.io/1jc4wmgh9b/Skill_items/IDEs..Eclipse..www.eclipse.org_ide_",
                    "DocuLink": "https://www.eclipse.org/ide/"
                },
                {
                    "Name": "IntelliJ",
                    "URL": "https://ik.imagekit.io/1jc4wmgh9b/Skill_items/IDEs..IntelliJ..www.jetbrains.com_idea_",
                    "DocuLink": "https://www.jetbrains.com/idea/"
                },
                {
                    "Name": "Postman",
                    "URL": "https://ik.imagekit.io/1jc4wmgh9b/Skill_items/IDEs..Postman..www.postman.com_",
                    "DocuLink": "https://www.postman.com/"
                },
                {
                    "Name": "VSCode",
                    "URL": "https://ik.imagekit.io/1jc4wmgh9b/Skill_items/IDEs..VSCode..code.visualstudio.com_",
                    "DocuLink": "https://code.visualstudio.com/"
                }
            ]
        },
        {
            "tech_name": "Programming Languages",
            "description": "Mastering the key element of computer science, to become the ultimate code-bender in the industry",
            "background": `url(https://ik.imagekit.io/1jc4wmgh9b/Skill_items/Programming_Languages.png)`,
            "techs": [
                {
                    "Name": "Cpp",
                    "URL": "https://ik.imagekit.io/1jc4wmgh9b/Skill_items/Programming_Languages..Cpp..cplusplus.com_doc_tutorial_",
                    "DocuLink": "https://cplusplus.com/doc/tutorial/"
                },
                {
                    "Name": "Java",
                    "URL": "https://ik.imagekit.io/1jc4wmgh9b/Skill_items/Programming_Languages..Java..www.java.com_",
                    "DocuLink": "https://www.java.com/"
                },
                {
                    "Name": "Python",
                    "URL": "https://ik.imagekit.io/1jc4wmgh9b/Skill_items/Programming_Languages..Python..www.python.org_",
                    "DocuLink": "https://www.python.org/"
                }
            ]
        },
        {
            "tech_name": "Scripting Languages",
            "description": "Writing useful scripts to make developing meaningful products just 'that' much easier",
            "background": `url(https://ik.imagekit.io/1jc4wmgh9b/Skill_items/Scripting_Languages.png)`,
            "techs": [
                {
                    "Name": "BASH",
                    "URL": "https://ik.imagekit.io/1jc4wmgh9b/Skill_items/Scripting_Languages..BASH..www.gnu.org_software_bash_",
                    "DocuLink": "https://www.gnu.org/software/bash/"
                },
                {
                    "Name": "Powershell",
                    "URL": "https://ik.imagekit.io/1jc4wmgh9b/Skill_items/Scripting_Languages..Powershell..docs.microsoft.com_en-us_powershell_scripting_overview",
                    "DocuLink": "https://docs.microsoft.com/en-us/powershell/scripting/overview"
                },
                {
                    "Name": "VBA",
                    "URL": "https://ik.imagekit.io/1jc4wmgh9b/Skill_items/Scripting_Languages..VBA..docs.microsoft.com_en-us_office_vba_library-reference_concepts_getting-started-with-vba-in-office",
                    "DocuLink": "https://docs.microsoft.com/en-us/office/vba/library-reference/concepts/getting-started-with-vba-in-office"
                }
            ]
        }
    ],
    "Name": "General",
    "Summary": "I am a tech enthusiast with an inquisitive mind, always on the lookout to learn new technologies and have at least a fundamental level of understanding about how things work. This webpage has been designed to give a quick insight into my academic and professional journey so far.",
    "Google_user_response_api": "https://sheetdb.io/api/v1/nqw0raiawsq28",
    "Google_visitor_information_api": "https://sheetdb.io/api/v1/sa6miu6hdqxos",
    "Profile_pic_link": "https://ik.imagekit.io/1jc4wmgh9b/profile.jpg"
}

var loadedData = []
var diffName = ["easy","medium","hard"]

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
                <div style={{padding:"0 10px 0 10px"}}> Total {diffName[level-1]} questions: {loadedData[level].Questions} </div> 
                <div style={{padding:"0 10px 0 10px"}}> Solved questions: {loadedData[level].Solved} </div> 
                <div style={{padding:"0 10px 0 10px"}}> Accepted solutions: {loadedData[level].Accepted} </div>
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
        
        githubdata = githubData

        return (
        <div className="githubCardParent">
            {githubdata.data.user.pinnedItems.nodes.map( (project) => (
                <Tilt>
                    <div className='githubCard'
                        style={{
                            background:`url(${project.openGraphImageUrl})`,
                            backgroundSize:'contain',
                            backgroundPosition:'center'
                        }}
                        onClick={() => {window.open(project.url,'mywindow');}}
                    />
                </Tilt>
            )
            )} 
        </div>  
        )
    }

    const loadSkillIcons = () => {

        var skillIcondata;

        var previouslyStoredSkillIconData = sessionStorage.getItem("skillIconData"); 
        if( previouslyStoredSkillIconData ){
            console.log("Previously cached Skill Icon data loaded")
            skillIcondata = JSON.parse(previouslyStoredSkillIconData)
        }else{
            console.log("Previously cached data not found, fetching new data and caching")
            skillIcondata = generalLargeData.skill_icons // to be fetched from backend
            sessionStorage.setItem("skillIconData",JSON.stringify(skillIcondata))
        }

        skillIcondata = generalLargeData.skill_icons
        return <SkillGroup skillIconDataSet={skillIcondata}/>;
    }

    return (
        <div className='body-common' style={{textAlign: "justify"}}>
            <div>
                {loadSkillIcons()}
            </div>
            <div id="coding_container">
                <div style={{padding: "50px",textAlign: "justify",fontSize:'50px',fontWeight:'bold'}}>
                    Problem solving skills using Data Structures and Algorithms (metrics sourced from <a href="https://leetcode.com/Soham874/" target="_blank" rel="noreferrer">Leetcode</a>)
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
                <div style={{padding: "50px",textAlign: "justify",fontSize:'50px',fontWeight:'bold'}}>Previous projects (sourced from <a href="https://github.com/soham874" target="_blank" rel="noreferrer">Github</a>)
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
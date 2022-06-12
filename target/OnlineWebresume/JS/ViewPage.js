let isclicked = false
let thoughtboxdisplayed = true
let skill_headings = ["Programming languages", "Scripting languages", "Full Stack Technologies", "Databases", "IDEs"]
let tech_counts = [4, 3, 6, 3, 3]
let stat_type = ["Completed ", "Accuracy "]
let cat_type = ["all", "easy", "medium", "hard"]
var data = {}
let counter = 0
let SubmissionInformation = []

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ To be fetched from Database ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// temporary data, to be deleted [updated on 10th June]
var LeetcodeJSON = {
    "data": {
        "allQuestionsCount": [{
                "difficulty": "All",
                "count": 2297
            },
            {
                "difficulty": "Easy",
                "count": 576
            },
            {
                "difficulty": "Medium",
                "count": 1221
            },
            {
                "difficulty": "Hard",
                "count": 500
            }
        ],
        "matchedUser": {
            "submitStats": {
                "acSubmissionNum": [{
                        "difficulty": "All",
                        "count": 523,
                        "submissions": 687
                    },
                    {
                        "difficulty": "Easy",
                        "count": 208,
                        "submissions": 284
                    },
                    {
                        "difficulty": "Medium",
                        "count": 281,
                        "submissions": 364
                    },
                    {
                        "difficulty": "Hard",
                        "count": 34,
                        "submissions": 39
                    }
                ],
                "totalSubmissionNum": [{
                        "difficulty": "All",
                        "count": 539,
                        "submissions": 1020
                    },
                    {
                        "difficulty": "Easy",
                        "count": 208,
                        "submissions": 354
                    },
                    {
                        "difficulty": "Medium",
                        "count": 291,
                        "submissions": 598
                    },
                    {
                        "difficulty": "Hard",
                        "count": 40,
                        "submissions": 68
                    }
                ]
            }
        }
    }
}

// temporary github data to be deleted [updated on 11th June]
var GithubJSON = {
    "data": {
        "user": {
            "pinnedItems": {
                "nodes": [{
                        "name": "Fundoo",
                        "description": "A project on fullstack development and database.",
                        "url": "https://github.com/soham874/Fundoo"
                    },
                    {
                        "name": "TItanic-Predictions",
                        "description": "An algorithm used to determine if a titanic passanger survived or died based on information about ticket, gender, etc",
                        "url": "https://github.com/soham874/TItanic-Predictions"
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

// experience data
var experience_data = [{
    "Role": "Software Engineer",
    "Name": "hcl",
    "Organization": "HCL Technologies Limited",
    "Location": "Nagpur, India",
    "Department": "Project Lifecycle Management, Engineering R&D Services",
    "Project": "Digital Work Place",
    "Client": "A leading European civilian and military Aircraft manufacturer",
    "Description": "Project aim is establishing a modernised digital workplace to enhance the user experience and service quality for the majority of client employees in the EU region. Project activities include deployment and maintenance of crucial CAD applications on client user machines, non-user worker machines and blade servers, and handling all related incidents and service requests.",
    "Responsibilities": [
        "Developing tools via scripting in Powershell, Bash, CMD and C# to facilitate and automate project activities",
        "Coordinating with business to plan timelines and deploy new versions of CATIA on VMs, Laptops, Desktops and Servers via SCCM",
        "Carrying out pre-deployment activities, testing and sanity checks to ensure health of delivered package.",
        "Regularly monitoring target machines parameters for anomalies to ensure maximum success of deployment.",
        "Participating in post deployment monitoring activities to provide resolutions to possible incidents",
        "Using SQL and WQL to ensure overall health of all EU PLM park machines, and taking action wherever necessary.",
        "Coordinating with teams and end users to resolve incidents and complete service requests as and when raised by client users"
    ],
    "IDE/Compilers/Tools": [
        "Microsoft Configuration Management Console to manage and monitor deployments in several formats",
        "ServiceNow to handle incident and requests from client",
        "SQL and WQL for performing activities on SCCM Database with an information pool of more than 100,000 machines"
    ],
    "Duration": "8th Feb 2021 - Present"
}]

// academic profile
var academic_data = [{
    "Institute": "Kalyani Government Engineering College",
    "Duration": "August 2016 - June 2020",
    "Board": "Maulana Abul Kalam Azad University of Technology",
    "Education": "Bachelor of Technology, Mechanical Engineering",
    "Score": "8.75 GPA (80 %)"
}, {
    "Institute": "CMS High School, Bardhaman",
    "Duration": "August 2014 - May 2016",
    "Board": "West Bengal Council of Higher Secondary Education",
    "Education": "Class 12",
    "Score": "87 %"
}, {
    "Institute": "St. Xaviers School, Barddhaman",
    "Duration": "February 2003 - March 2014",
    "Board": "Council of Indian School Certificate Examination",
    "Education": "Class 10",
    "Score": "90 %"
}]

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ To be fetched from Database ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// functions to be performed when webpage loads
$(document).ready(function() {
    thoughtboxdisplayed = false
    counter = 0;
    console.log("Javascript file connected successfully");
    console.log(experience_data)

    //set the theme from local storage if present
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
    } else {
        setTheme('theme-light');
    }

    // controls closing of the post box depending
    $(document).on('click', function(e) {
        if ($("#post_button").is(e.target) || (!$("#thought-link").is(e.target) && $(e.target).closest("#thought-box").length === 0)) {
            $("#thought-box").hide();
            thoughtboxdisplayed = false
        }
    });


    // function to receieve LeetCode object datatype from controller
    /*
    $.ajax({
        type: 'POST',
        url: "/OnlineWebresume/receiveLeetCodeData",
        contentType: "application/json",
        data: JSON.stringify(data),
        dataType: 'json',
        success: (data) => {
            console.log(data)
            document.getElementById("leetcode_error").style.display = 'none'
            document.getElementById("github_container").style.display = 'block'
            loadLeetCodeView(data)
        },
        error: (err) => {
            console.log(err)
            document.getElementById("coding_container").style.display = 'none'
            document.getElementById("leetcode_error").style.display = 'flex'
        }
    })
*/

    // temporary function to load Leetcode data from the stored JSON. Original call will be through Ajax
    loadLeetCodeView()

    // Logic for handling leetcode question category stats
    $("#c1").on(
        'mouseenter click',
        function() {
            loadParticularCategoryData(1)
        }
    )
    $("#c2").on(
        'mouseenter click',
        function() {
            loadParticularCategoryData(2)
        }
    )
    $("#c3").on(
        'mouseenter click',
        function() {
            loadParticularCategoryData(3)
        }
    )
    $(".category_class").on(
        'mouseleave',
        function() {
            loadParticularCategoryData(0)
        }
    )

    // function to load the skills section with CSS and JS
    loadSkills()

    /*
    // function to receieve Github object datatype from controller
    $.ajax({
        type: 'POST',
        url: "/OnlineWebresume/receiveGithubData",
        contentType: "application/json",
        data: JSON.stringify(data),
        dataType: 'json',
        success: (data) => {
            console.log(data)
            document.getElementById("github_error").style.display = 'none'
            document.getElementById("github_container").style.display = 'block'
            loadGithubView(data)
        },
        error: (err) => {
            console.log(err)
            document.getElementById("github_container").style.display = 'none'
            document.getElementById("github_error").style.display = 'flex'
        }
    })
    */

    // temporary function to load Github data from the stored JSON. Original call will be through Ajax
    loadGithubView()

    loadExperience()


    loadAcedemicInfo()

    /*
    var folder = "../assets/Skill_items/s3"
    $.ajax({
        url: folder,
        success: function(data) {
            $(data).find("a").attr("href", function(i, val) {
                if (val.match(/\.(jpe?g|png|gif)$/)) {
                    console.log(val)
                }
            });
        }
    })
*/
});

// function to show drop down menu for mobile devices
showmenu = () => {

    if (!isclicked) {
        var elems = document.getElementsByClassName("header-links")
        for (var i = 0; i < elems.length; i += 1)
            elems[i].style.display = 'block';
        var elems = document.getElementsByClassName("generic_div")
        for (var i = 0; i < elems.length; i += 1)
            elems[i].style.display = 'none';

        document.getElementsByClassName("header-section")[0].style.position = "relative";
    } else {
        hidedivs()
    }
    isclicked = !isclicked;
}

//function to scroll to a page section without modifying heyperlink
smoothScrolltoSection = (id) => {
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
    });
}

//function to display thought box
showThoughtBox = () => {
    if (!thoughtboxdisplayed)
        document.getElementsByClassName("thought-box")[0].style.display = "flex"
    else
        $("#thought-box").hide();
    thoughtboxdisplayed = true
}

// hide the options in navbar when a certain option has been chosen/the navabar is closed in mobile view
hidedivs = () => {
    if (!isclicked)
        return
    var elems = document.getElementsByClassName("header-links")
    for (var i = 0; i < elems.length; i += 1)
        elems[i].style.display = 'none';
    var elems = document.getElementsByClassName("generic_div")
    for (var i = 0; i < elems.length; i += 1)
        elems[i].style.display = 'block';
    document.getElementsByClassName("header-section")[0].style.position = "fixed";
}

// function which returns the current theme (light/dark) along with full asset path
gettheme = () => {

    var path = document.getElementById("imgClickAndChange").src
    let respath = ""

    let pointer = path.length - 1
    while (path[pointer] !== '/') {
        respath = path[pointer] + respath
        path.slice(0, -1)
        pointer--;
    }

    path = path.substring(0, pointer)

    var theme = {
        source_path: path,
        image: respath
    }
    return theme
}

// wrapper to toggle the theme of page
changeImage = () => {

    var current_state = gettheme()
    if (current_state.image === "sunny.png")
        setTheme('theme-dark');
    else
        setTheme('theme-light');

}

// wrapper to toggle the theme and image of page
setTheme = (themeName) => {
    console.log("Setting theme to " + themeName)
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
    var current_state = gettheme()
    if (themeName === "theme-light")
        document.getElementById("imgClickAndChange").src = current_state.source_path + '/' + "sunny.png"
    else
        document.getElementById("imgClickAndChange").src = current_state.source_path + '/' + "full-moon.png"
}

// show the tech icons
displayeffects = (skill_item_number) => {
    document.getElementsByClassName("skill_item")[skill_item_number].style.transform = "scale(1.5)";
    document.getElementsByClassName("skill_icon_group")[skill_item_number].style.display = "flex";
}

// hide the tech icons
hideeffects = () => {
    for (let i = 0; i < 5; i++) {
        document.getElementsByClassName("skill_item")[i].style.transform = "scale(1)";
        document.getElementsByClassName("skill_icon_group")[i].style.display = "none";
    }
}

//automatically add the HTML for skills
loadSkills = () => {
    var screen_width = window.innerWidth
    let output = "";
    for (let i = 0; i < skill_headings.length; i++) {

        // 130 = 90 (skill_icons width) + 2 * 20 (skill_icons padding)
        var div_with = 130 * tech_counts[i];
        var div_start_pos = (screen_width / 2) - (div_with / 2);

        output += `
                    <div class="skill_item_group" onmouseleave="hideeffects(${i})">
                        <div class="skill_item" onmouseover="displayeffects(${i})" > >>
                            ${skill_headings[i]} <<
                    </div>
                    
                    <div class="skill_icon_group" onmouseleave="hideeffects(${i})" style="left:${div_start_pos}px">`

        for (let j = 0; j < tech_counts[i]; j++)
            output += `<img class="skill_icons" src="./assets/Skill_items/s${i+1}/si${i+1}${j+1}.png" />`
        output += `</div></div>`
    }
    document.getElementById("snp_section").innerHTML += output
}

// Load the Leetcode statistics section
loadLeetCodeView = (leetcodedata = LeetcodeJSON) => {

    // 0 - All, 1 - Easy, 2 - Medium, 3 - Hard
    for (var i = 0; i < 4; i++)
        SubmissionInformation[i] = {
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

    loadParticularCategoryData(0)
}

// modify the stats for a particular category
loadParticularCategoryData = (category) => {

    progressBar(SubmissionInformation[category].Completed_percent, 0);
    progressBar(SubmissionInformation[category].Accuracy_percent, 1);

    document.getElementById('progress_bar_container').innerHTML =
        `<div style="padding:0 10px 0 10px;">Total questions : ${SubmissionInformation[category].Questions}</div>
                    <div style="padding:0 10px 0 10px;">Solved questions : ${SubmissionInformation[category].Solved}</div>
                    <div style="padding:0 10px 0 10px;">Accepted Solutions : ${SubmissionInformation[category].Accepted}</div>`

    document.getElementsByClassName("progress-circle-prog")[0].style.stroke = `var(--color-${cat_type[category]})`;
    document.getElementsByClassName("progress-circle-prog")[1].style.stroke = `var(--color-${cat_type[category]})`;
}

// function to dynamically modify the displayed percent
progressBar = (progressVal, class_number) => {
    var strokeVal = (4.64 * 100) / 100;
    var x = document.getElementsByClassName('progress-circle-prog')[class_number];
    x.style.strokeDasharray = progressVal * (strokeVal) + ' 999';
    document.getElementsByClassName('progress-text')[class_number].innerHTML = stat_type[class_number] + progressVal + '%';
    $('.progress-text').data('progress', progressVal);


}

// Load the Github statistics section
loadGithubView = (Githubdata = GithubJSON) => {

    console.log(Githubdata)
    let tabledata = `<table id="customers">
                <tr>
                  <th>Project Name</th>
                  <th>Short Description</th>
                </tr>`

    Githubdata.data.user.pinnedItems.nodes.forEach(project => {
        tabledata += `<tr>
                        <td><a href="${project.url}" target="_blank">${project.name}</a></td>
                        <td>${project.description}</td>
                        </tr>`
    })
    tabledata += `</table>`

    document.getElementById('github_projects').innerHTML = tabledata
}

// load experience section
loadExperience = (exp_data = experience_data) => {

    let exp = ''
    var isLeft = "left"

    exp_data.forEach(element => {
        exp = `
            <div class="containerTimeline ${isLeft}">
                <div class="content">
                    <h1>${element.Duration}</h1>
                    <img alt="" src=" ./assets/Experience/${element.Name}.png " class="work_exp_logo " />
                    <div class="work_exp_info ">
                        <div><u><b>Organization</b></u>: ${element.Organization}</div>
                        <div><u><b>Location</b></u>: ${element.Location}</div>
                        <div><u><b>Role</b></u>: ${element.Role}</div>
                        <div><u><b>Department</b></u>: ${element.Department}</div>
                        <div><u><b>Project</b></u>: ${element.Project}</div>
                        <div><u><b>Client</b></u>: ${element.Client}</div>
                        <div><u><b>Description</b></u>: ${element.Description}</div>
                        <div><u><b>Responsibilities</b></u>:
                            <ul>`

        element.Responsibilities.forEach(resp => {
            exp += `<li>${resp}</li>`
        })

        exp += `</ul></div><div><u><b>IDE/Compilers/Tools</b></u>:<ul>`

        element["IDE/Compilers/Tools"].forEach(resp => {
            exp += `<li>${resp}</li>`
        })

        exp += `</ul></div></div></div></div>`
        isLeft = "right"
    })

    document.getElementById('work-exp').innerHTML = exp
}

// load experience section
loadAcedemicInfo = (experience = academic_data) => {

    let exp = ''

    experience.forEach(element => {
        exp += `
        <div class="academic_info">
            <h1>${element.Duration}</h1>
            <div><u><b>Institute</b></u>: ${element.Institute}</div>
            <div><u><b>Board</b></u>: ${element.Board}</div>
            <div><u><b>Education</b></u>: ${element.Education}</div>
            <div><u><b>Score</b></u>: ${element.Score}</div>
        </div>
        `
    })

    document.getElementById('ac_info').innerHTML = exp
}
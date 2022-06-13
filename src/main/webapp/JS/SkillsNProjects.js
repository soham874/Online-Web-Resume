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

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ To be fetched from Database ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// functions to be performed when webpage loads
$(document).ready(function() {

    thoughtboxdisplayed = false

    console.log("Skills and Projects JS file connected successfully");

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
});

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
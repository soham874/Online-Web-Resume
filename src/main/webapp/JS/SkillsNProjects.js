let skill_headings = ["Programming languages", "Scripting languages", "Full Stack Technologies", "Databases", "IDEs"]
let stat_type = ["Completed ", "Accuracy "]
let cat_type = ["all", "easy", "medium", "hard"]
var data = {}

let SubmissionInformation = []

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ To be fetched from Database ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

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

// temporary skills icon to be deleted [updated on 11th June]
var skill_icons = {
    "s3": [
        "https://drive.google.com/file/d/1qvL8IYOTc7YYwRAcDBo6GcOfrbk75xyV/view?usp=drivesdk",
        "https://drive.google.com/file/d/1kL0joyAUdjGGdAP_sv3mmO6ZA146zi3z/view?usp=drivesdk",
        "https://drive.google.com/file/d/1_06bZej2WlXwQ8zJ7Nr7EMr5_5NRYdDj/view?usp=drivesdk",
        "https://drive.google.com/file/d/1H4cTNIO-jA2fwclZMSCnfkNDQBAYDyry/view?usp=drivesdk",
        "https://drive.google.com/file/d/145AxfZ8_6HvkRPSupNQWZu_uDx4aQ-9x/view?usp=drivesdk",
        "https://drive.google.com/file/d/1242fkMvgRc_S3KuZyWd7Jr-hM9D1ME9K/view?usp=drivesdk"
    ],
    "s1": [
        "https://drive.google.com/file/d/1e7KixMZjjHiQiYzKGXGjpDKd9-H99zDo/view?usp=drivesdk",
        "https://drive.google.com/file/d/1sXx7Z2-cr_XDla-Ajd248AFOi8Az6F9K/view?usp=drivesdk",
        "https://drive.google.com/file/d/10s6jx_6gm-siXAHViGHkj7c0GSG7CBFI/view?usp=drivesdk",
        "https://drive.google.com/file/d/1rP8MdIDRsEk1T_iZ5vNdo2Lss3fHWCCT/view?usp=drivesdk"
    ],
    "s4": [
        "https://drive.google.com/file/d/1qTqw_aI0V1YaOPtN25FRA_9FmmrkEuCM/view?usp=drivesdk",
        "https://drive.google.com/file/d/1yMQCtY5XXb9wQ9sDtQw4KbmYardJBH7T/view?usp=drivesdk",
        "https://drive.google.com/file/d/1_-NFWIrvhBW4MParkPf7rZtOLs34nvj1/view?usp=drivesdk"
    ],
    "s5": [
        "https://drive.google.com/file/d/1uRSH0jYN5nPtFbY4PDwPaJyolBZjaxiA/view?usp=drivesdk",
        "https://drive.google.com/file/d/1NXpSCLYuniKDu8APwoLYyAMlluentq0x/view?usp=drivesdk",
        "https://drive.google.com/file/d/1vPKZC2BtWZTdutmQrkQH7Gr97LI_Zmd2/view?usp=drivesdk"
    ],
    "s2": [
        "https://drive.google.com/file/d/1OSOqI1cwg4RAwuVTRPi_N5-iBebqGEZF/view?usp=drivesdk",
        "https://drive.google.com/file/d/1ASs1rv2jmbp0K3yi3KnfXiqWj1GUA1cA/view?usp=drivesdk",
        "https://drive.google.com/file/d/1zAES0iBKX6VQ-_HgHxQfXus9hYabHbvM/view?usp=drivesdk"
    ]
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ To be fetched from Database ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// functions to be performed when webpage loads
$(document).ready(function() {

    thoughtboxdisplayed = false

    console.log("Skills and Projects JS file connected successfully");
    console.log(skill_icons)

    // function to receieve LeetCode object datatype from controller

    $.ajax({
        type: 'GET',
        url: formAjaxUrl("receiveLeetCodeData"),
        contentType: "application/json",
        dataType: 'json',
        success: (data) => {
            console.log("Success Response - " + data)
            document.getElementById("leetcode_error").style.display = 'none'
            document.getElementById("github_container").style.display = 'block'
            loadLeetCodeView(data.body)
        },
        error: (err) => {
            console.log("Error Response - " + err)
            document.getElementById("coding_container").style.display = 'none'
            document.getElementById("leetcode_error").style.display = 'flex'
        }
    })

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

    window.addEventListener('resize', () => { loadSkills() })
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
            var div_with = 130 * skill_icons[`s${i+1}`].length;
            var div_start_pos = (screen_width / 2) - (div_with / 2);

            output += `
                    <div class="skill_item_group" onmouseleave="hideeffects(${i})">
                        <div class="skill_item" onmouseover="displayeffects(${i})" > >>
                            ${skill_headings[i]} <<
                    </div>
                    
                    <div class="skill_icon_group" onmouseleave="hideeffects(${i})" style="left:${div_start_pos}px">`

            for (let j = 0; j < skill_icons[`s${i+1}`].length; j++)
                output += `<img class="skill_icons" src="${googleEmbedImage(skill_icons[`s${i+1}`][j])}" referrerpolicy="no-referrer"></img>`
        output += `</div></div>`
    }
    document.getElementById("snp_section").innerHTML = output
}

// Load the Leetcode statistics section
loadLeetCodeView = (leetcodedata) => {

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
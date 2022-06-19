let skill_headings = ["Programming languages", "Scripting languages", "Full Stack Technologies", "Databases", "IDEs"]
let stat_type = ["Completed ", "Accuracy "]
let cat_type = ["all", "easy", "medium", "hard"]
var data_leetcode = {}
var data_github = {}

let SubmissionInformation = []

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ To be fetched from Database ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// temporary skills icon to be deleted [updated on 11th June]
var skill_icons = [{ "tech_name": "Scripting Languages", "techs": [{ "Name": "Powershell", "URL": "https://drive.google.com/file/d/1zAES0iBKX6VQ-_HgHxQfXus9hYabHbvM/view?usp=drivesdk", "DocuLink": "https://docs.microsoft.com/en-us/powershell/scripting/overview" }, { "Name": "VBA", "URL": "https://drive.google.com/file/d/1OSOqI1cwg4RAwuVTRPi_N5-iBebqGEZF/view?usp=drivesdk", "DocuLink": "https://docs.microsoft.com/en-us/office/vba/library-reference/concepts/getting-started-with-vba-in-office" }, { "Name": "BASH", "URL": "https://drive.google.com/file/d/1ASs1rv2jmbp0K3yi3KnfXiqWj1GUA1cA/view?usp=drivesdk", "DocuLink": "https://www.gnu.org/software/bash/" }] }, { "tech_name": "Programming Languages", "techs": [{ "Name": "Java", "URL": "https://drive.google.com/file/d/1sXx7Z2-cr_XDla-Ajd248AFOi8Az6F9K/view?usp=drivesdk", "DocuLink": "https://www.java.com/" }, { "Name": "Python", "URL": "https://drive.google.com/file/d/10s6jx_6gm-siXAHViGHkj7c0GSG7CBFI/view?usp=drivesdk", "DocuLink": "https://www.python.org/" }, { "Name": "Cpp", "URL": "https://drive.google.com/file/d/1rP8MdIDRsEk1T_iZ5vNdo2Lss3fHWCCT/view?usp=drivesdk", "DocuLink": "https://cplusplus.com/doc/tutorial/" }, { "Name": "C", "URL": "https://drive.google.com/file/d/1e7KixMZjjHiQiYzKGXGjpDKd9-H99zDo/view?usp=drivesdk", "DocuLink": "https://www.cprogramming.com/" }] }, { "tech_name": "Full Stack Technologies", "techs": [{ "Name": "HTML", "URL": "https://drive.google.com/file/d/1242fkMvgRc_S3KuZyWd7Jr-hM9D1ME9K/view?usp=drivesdk", "DocuLink": "https://developer.mozilla.org/en-US/docs/Web/HTML" }, { "Name": "JavaScript", "URL": "https://drive.google.com/file/d/145AxfZ8_6HvkRPSupNQWZu_uDx4aQ-9x/view?usp=drivesdk", "DocuLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }, { "Name": "CSS", "URL": "https://drive.google.com/file/d/1H4cTNIO-jA2fwclZMSCnfkNDQBAYDyry/view?usp=drivesdk", "DocuLink": "https://developer.mozilla.org/en-US/docs/Web/CSS" }, { "Name": "ReactJS", "URL": "https://drive.google.com/file/d/1_06bZej2WlXwQ8zJ7Nr7EMr5_5NRYdDj/view?usp=drivesdk", "DocuLink": "https://reactjs.org/" }, { "Name": "NodeJS", "URL": "https://drive.google.com/file/d/1qvL8IYOTc7YYwRAcDBo6GcOfrbk75xyV/view?usp=drivesdk", "DocuLink": "https://nodejs.org/" }, { "Name": "Spring", "URL": "https://drive.google.com/file/d/1kL0joyAUdjGGdAP_sv3mmO6ZA146zi3z/view?usp=drivesdk", "DocuLink": "https://spring.io/" }] }, { "tech_name": "IDEs", "techs": [{ "Name": "Eclipse", "URL": "https://drive.google.com/file/d/1vPKZC2BtWZTdutmQrkQH7Gr97LI_Zmd2/view?usp=drivesdk", "DocuLink": "https://www.eclipse.org/ide/" }, { "Name": "VSCode", "URL": "https://drive.google.com/file/d/1NXpSCLYuniKDu8APwoLYyAMlluentq0x/view?usp=drivesdk", "DocuLink": "https://code.visualstudio.com/" }, { "Name": "Postman", "URL": "https://drive.google.com/file/d/1uRSH0jYN5nPtFbY4PDwPaJyolBZjaxiA/view?usp=drivesdk", "DocuLink": "https://www.postman.com/" }] }, { "tech_name": "Databases", "techs": [{ "Name": "Firebase", "URL": "https://drive.google.com/file/d/1yMQCtY5XXb9wQ9sDtQw4KbmYardJBH7T/view?usp=drivesdk", "DocuLink": "https://firebase.google.com/" }, { "Name": "MySQL", "URL": "https://drive.google.com/file/d/1_-NFWIrvhBW4MParkPf7rZtOLs34nvj1/view?usp=drivesdk", "DocuLink": "https://www.mysql.com/" }, { "Name": "MongoDB", "URL": "https://drive.google.com/file/d/1qTqw_aI0V1YaOPtN25FRA_9FmmrkEuCM/view?usp=drivesdk", "DocuLink": "https://www.mongodb.com/" }] }]


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
        success: (data_leetcode) => {
            if (data_leetcode.status >= 200 && data_leetcode.status < 400) {
                console.log("Success Leetcode")
                document.getElementById("leetcode_error").style.display = 'none'
                document.getElementById("github_container").style.display = 'block'
                loadLeetCodeView(data_leetcode.body)
            } else {
                console.log("Error Leetcode")
                document.getElementById("coding_container").style.display = 'none'
                document.getElementById("leetcode_error").style.display = 'flex'
            }
        },
        error: (err) => {
            console.log("Error Leetcode")
            document.getElementById("coding_container").style.display = 'none'
            document.getElementById("leetcode_error").style.display = 'flex'
        }
    })

    //loadLeetCodeView(leetcodeData)
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

    // function to receieve Github object datatype from controller
    $.ajax({
        type: 'GET',
        url: formAjaxUrl("receiveGithubData"),
        contentType: "application/json",
        dataType: 'json',
        success: (data_github) => {
            if (data_github.status >= 200 && data_github.status < 400) {
                console.log("Github Success")
                document.getElementById("github_error").style.display = 'none'
                document.getElementById("github_container").style.display = 'block'
                loadGithubView(data_github.body)
            } else {
                console.log("Github Error")
                document.getElementById("github_container").style.display = 'none'
                document.getElementById("github_error").style.display = 'flex'
            }
        },
        error: (err) => {
            console.log("Github Error")
            document.getElementById("github_container").style.display = 'none'
            document.getElementById("github_error").style.display = 'flex'
        }
    })

    window.addEventListener('resize', () => { loadSkills() })
});

// show the tech icons
displayeffects = (skill_item_number) => {
    document.getElementsByClassName("skill_item")[skill_item_number].style.transform = "scale(1.5)";
    document.getElementsByClassName("skill_icon_group")[skill_item_number].style.display = "flex";

    var target_id = "s" + skill_item_number
    setTimeout(() => {
        document.getElementById(target_id).classList.remove("disabled");
    }, 200)
}

// hide the tech icons
hideeffects = () => {
    for (let i = 0; i < 5; i++) {
        document.getElementsByClassName("skill_item")[i].style.transform = "scale(1)";
        document.getElementsByClassName("skill_icon_group")[i].style.display = "none";
        var target_id = "s" + i
        document.getElementById(target_id).classList.add("disabled");
    }
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
        ` < div style = "padding:0 10px 0 10px;" > Total questions: $ { SubmissionInformation[category].Questions } < /div> <
                    div style = "padding:0 10px 0 10px;" > Solved questions: $ { SubmissionInformation[category].Solved } < /div> <
                    div style = "padding:0 10px 0 10px;" > Accepted Solutions: $ { SubmissionInformation[category].Accepted } < /div>`

    document.getElementsByClassName("progress-circle-prog")[0].style.stroke = `var(--color-${cat_type[category]})`;
    document.getElementsByClassName("progress-circle-prog")[1].style.stroke = `var(--color-${cat_type[category]})`;
    document.getElementsByClassName("progress-circle-back")[0].style.stroke = `var(--color-${cat_type[category]}-back)`;
    document.getElementsByClassName("progress-circle-back")[1].style.stroke = `var(--color-${cat_type[category]}-back)`;
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

//automatically add the HTML for skills
loadSkills = (data = skill_icons) => {

    var screen_width = window.innerWidth
    let output = "";
    let i = 0;

    data.forEach(tech => {

        var techName = tech.tech_name
        var total_tech_count = tech.techs.length
        var div_with = 130 * (total_tech_count);
        var div_start_pos = (screen_width / 2) - (div_with / 2);

        output += `
        <div class="skill_item_group" onmouseleave="hideeffects()">
            <div class="skill_item" onmouseover="displayeffects(${i})" > 
                >> ${techName} <<
            </div>
        
        <div class="skill_icon_group disabled" id="s${i}" onmouseleave="hideeffects()" style="left:${div_start_pos}px">`

        tech.techs.forEach(tech_icon => {
            output += `<img alt="${tech_icon.Name}" class="skill_icons" src="${googleEmbedImage(tech_icon.URL)}" referrerpolicy="no-referrer" onclick="window.open('${tech_icon.DocuLink}','mywindow')"></img>`
        });
        output += `</div></div>`
        i++;
    })

    document.getElementById("snp_section").innerHTML = output
}
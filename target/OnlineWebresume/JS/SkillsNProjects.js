let stat_type = ["Completed ", "Accuracy "]
let cat_type = ["all", "easy", "medium", "hard"]
var data_leetcode = {}
var data_github = {}

let SubmissionInformation = []

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ To be fetched from Database ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ To be fetched from Database ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// functions to be performed when webpage loads
$(document).ready(function() {

    thoughtboxdisplayed = false

    // function to receieve LeetCode object datatype from controller

    $.ajax({
        type: 'GET',
        url: formAjaxUrl("receiveLeetCodeData"),
        contentType: "application/json",
        dataType: 'json',
        success: (data_leetcode) => {
            if (data_leetcode.status >= 200 && data_leetcode.status < 400) {
                console.log("AJAX RESPONSE >> Success Leetcode")
                document.getElementById("leetcode_error").style.display = 'none'
                document.getElementById("github_container").style.display = 'block'
                loadLeetCodeView(data_leetcode.body)
            } else {
                console.log("AJAX RESPONSE >> Error Leetcode")
                document.getElementById("coding_container").style.display = 'none'
                document.getElementById("leetcode_error").style.display = 'flex'
            }
        },
        error: (err) => {
            console.log("AJAX RESPONSE >> Error Leetcode")
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

    // function to receieve Github object datatype from controller
    $.ajax({
        type: 'GET',
        url: formAjaxUrl("receiveGithubData"),
        contentType: "application/json",
        dataType: 'json',
        success: (data_github) => {
            if (data_github.status >= 200 && data_github.status < 400) {
                console.log("AJAX RESPONSE >> Github Success")
                document.getElementById("github_error").style.display = 'none'
                document.getElementById("github_container").style.display = 'block'
                loadGithubView(data_github.body)
            } else {
                console.log("AJAX RESPONSE >> Github Error")
                document.getElementById("github_container").style.display = 'none'
                document.getElementById("github_error").style.display = 'flex'
            }
        },
        error: (err) => {
            console.log("AJAX RESPONSE >> Github Error")
            document.getElementById("github_container").style.display = 'none'
            document.getElementById("github_error").style.display = 'flex'
        }
    })

    console.log("Skills and Projects JS file connected successfully");
    window.addEventListener('resize', () => { loadSkills() })
});

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
        ` 
        <div style="padding:0 10px 0 10px;"> Total questions: ${SubmissionInformation[category].Questions} </div> 
        <div style = "padding:0 10px 0 10px;"> Solved questions: ${SubmissionInformation[category].Solved} </div> 
        <div style = "padding:0 10px 0 10px;"> Accepted Solutions: ${SubmissionInformation[category].Accepted} </div>`

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
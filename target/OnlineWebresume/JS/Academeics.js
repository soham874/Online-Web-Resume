/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ To be fetched from Database ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

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
    console.log("Academic JS connected successfully");

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
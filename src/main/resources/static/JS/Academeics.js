/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ To be fetched from Database ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var academic_fallback = [{
        "_id": "62ac9ba0d1b7323456f206ff",
        "Name": "KGEC",
        "Serial_Number": 3,
        "Institute": "Kalyani Government Engineering College",
        "Duration": "August 2016 - May 2020",
        "Board": "Maulana Abul Kalam Azad University of Technology",
        "Education": "Bachelor of Technology, Mechanical Engineering",
        "Score": "8.75 GPA (80 %)"
    },
    {
        "_id": "62ac9bd4ed6cbc52812c41f1",
        "Name": "CMS",
        "Serial_Number": 2,
        "Institute": "CMS High School, Bardhaman",
        "Duration": "August 2014 - May 2016",
        "Board": "West Bengal Council of Higher Secondary Education",
        "Education": "Class 12, Science Branch",
        "Score": "87 %"
    },
    {
        "_id": "62ac9bf38ac054e3a6015a18",
        "Name": "SXS",
        "Serial_Number": 1,
        "Institute": "St. Xaviers School, Barddhaman",
        "Duration": "February 2003 - March 2014",
        "Board": "Council of Indian School Certificate Examination",
        "Education": "Class 10",
        "Score": "90 %"
    }
]

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ To be fetched from Database ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// functions to be performed when webpage loads
$(document).ready(function() {

    //loadAcedemicInfo(academicData.documents)
    $.ajax({
        type: 'GET',
        url: formAjaxUrl("receiveAcademicData"),
        contentType: "application/json",
        dataType: 'json',
        success: (data_academic_mongo) => {
            if (data_academic_mongo.status >= 200 && data_academic_mongo.status < 400) {
                console.log("AJAX RESPONSE >> Success Academic, loading live data")
                document.getElementById("academic_error").style.display = 'none'
                document.getElementById("ac_info").style.display = 'block'
                    //console.log(data_academic_mongo.body)
                loadAcedemicInfo(data_academic_mongo.body.documents)
            } else {
                console.log("AJAX RESPONSE >> Error Academic, loading fallback data")
                    //document.getElementById("ac_info").style.display = 'none'
                    //document.getElementById("academic_error").style.display = 'flex'
                loadAcedemicInfo(academic_fallback)
            }
        },
        error: (err) => {
            console.log("AJAX RESPONSE >> Error Academic, loading fallback data")
                //document.getElementById("ac_info").style.display = 'none'
                //document.getElementById("academic_error").style.display = 'flex'
            loadAcedemicInfo(academic_fallback)
        }
    })

    console.log("Academic JS connected successfully");

});

// load experience section
loadAcedemicInfo = (experience) => {

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
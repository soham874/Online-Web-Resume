/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ To be fetched from Database ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ To be fetched from Database ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// functions to be performed when webpage loads
$(document).ready(function() {

    console.log("Academic JS connected successfully");

    //loadAcedemicInfo(academicData.documents)
    $.ajax({
        type: 'GET',
        url: formAjaxUrl("receiveAcademicData"),
        contentType: "application/json",
        dataType: 'json',
        success: (data_academic_mongo) => {
            if (data_academic_mongo.status >= 200 && data_academic_mongo.status < 400) {
                console.log("Success Academic")
                document.getElementById("academic_error").style.display = 'none'
                document.getElementById("ac_info").style.display = 'block'
                console.log(data_academic_mongo.body)
                loadAcedemicInfo(data_academic_mongo.body.documents)
            } else {
                console.log("Error Academic")
                document.getElementById("ac_info").style.display = 'none'
                document.getElementById("academic_error").style.display = 'flex'
            }
        },
        error: (err) => {
            console.log("Error Academic")
            document.getElementById("ac_info").style.display = 'none'
            document.getElementById("academic_error").style.display = 'flex'
        }
    })

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
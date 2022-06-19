/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ To be fetched from Database ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ To be fetched from Database ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// functions to be performed when webpage loads
$(document).ready(function() {

    console.log("Experience JS file connected successfully");

    $.ajax({
        type: 'GET',
        url: formAjaxUrl("receiveExpereienceData"),
        contentType: "application/json",
        dataType: 'json',
        success: (data_expereince_mongo) => {
            if (data_expereince_mongo.status >= 200 && data_expereince_mongo.status < 400) {
                console.log("Success Expereicne")
                document.getElementById("work_error").style.display = 'none'
                document.getElementById("work-exp").style.display = 'block'
                console.log(data_expereince_mongo.body)
                loadExperience(data_expereince_mongo.body.documents)
            } else {
                console.log("Error Expereicne")
                document.getElementById("work-exp").style.display = 'none'
                document.getElementById("work_error").style.display = 'flex'
            }
        },
        error: (err) => {
            console.log("Error Expereicne")
            document.getElementById("work-exp").style.display = 'none'
            document.getElementById("work_error").style.display = 'flex'
        }
    })
});

// load experience section
loadExperience = (exp_data = experience_data) => {

    let exp = ''
    var isLeft = "left"

    exp_data.forEach(element => {
        exp = `
            <div class="containerTimeline ${isLeft}">
                <div class="content">
                    <h1>${element.Duration}</h1>
                    <img alt="" src="${googleEmbedImage(element.Logo_Url)}" class="work_exp_logo " />
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
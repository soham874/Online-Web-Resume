/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ To be fetched from Database ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var isExpanded = false

var experience_fallback = [{
    "_id": "62ac965af4d9e59abac0f331",
    "Role": "Software Engineer",
    "Name": "hcl",
    "Logo_Url": "https://drive.google.com/file/d/1kyKrk10j-Yd4Cxyk4aNBtMVt7jJj-n9I/view?usp=sharing",
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
    "Duration": "8th Feb 2021 - Present",
    "Serial_Number": 1
}]

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ To be fetched from Database ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// functions to be performed when webpage loads
$(document).ready(function() {

    $.ajax({
        type: 'GET',
        url: formAjaxUrl("receiveExpereienceData"),
        contentType: "application/json",
        dataType: 'json',
        success: (data_expereince_mongo) => {
            if (data_expereince_mongo.status >= 200 && data_expereince_mongo.status < 400) {
                console.log("AJAX RESPONSE >> Success Expereicne, loading live data")
                document.getElementById("work_error").style.display = 'none'
                document.getElementById("work-exp").style.display = 'block'
                    //console.log(data_expereince_mongo.body)
                loadExperience(data_expereince_mongo.body.documents)
            } else {
                console.log("AJAX RESPONSE >> Error Expereicne, loading fallback data")
                    //document.getElementById("work-exp").style.display = 'none'
                    //document.getElementById("work_error").style.display = 'flex'
                loadExperience(experience_fallback)
            }
        },
        error: (err) => {
            console.log("AJAX RESPONSE >> Error Expereicne, loading fallback data")
                //document.getElementById("work-exp").style.display = 'none'
                //document.getElementById("work_error").style.display = 'flex'
            loadExperience(experience_fallback)
        }
    })

    console.log("Experience JS file connected successfully");
});

// load experience section
loadExperience = (exp_data) => {

    let exp = ''
    var isLeft = "left"

    exp_data.forEach(element => {
        exp += `
            <div class="containerTimeline ${isLeft}">
                <div class="content">
                    <h1 style="font-size:2.5em">${element.Duration}</h1>
                    <img alt="" src="${googleEmbedImage(element.Logo_Url)}" class="work_exp_logo" />
                    <div class="readmore" onclick="showhideexp(event)" >
                        <div><u><b>Organization</b></u>: ${element.Organization}</div>
                        <div><u><b>Role</b></u>: ${element.Role}</div>
                        <div><u><b>Location</b></u>: ${element.Location}</div>
                        <div><u><b>Department</b></u>: ${element.Department}</div>
                        <div><u><b>Project</b></u>: ${element.Project}</div>
                        <div><u><b>Client</b></u>: ${element.Client}</div>
                        <div><u><b>Description</b></u>: ${element.Description}</div>
                        <div><u><b>Responsibilities</b></u>:
                            <ul>`

        element.Responsibilities.forEach(resp => {
            exp += `            <li>${resp}</li>`
        })

        exp += `            </ul>
                        </div>
                        <div><u><b>IDE/Compilers/Tools</b></u>:
                            <ul>`

        element["IDE/Compilers/Tools"].forEach(resp => {
            exp += `            <li>${resp}</li>`
        })

        exp += `            </ul>
                        </div>
                        <div class="readmore-link" style="color: var(--link-color)"></div>
                    </div>
                </div>
            </div>`

        isLeft = "right"
    })

    document.getElementById('work-exp').innerHTML = exp
}

showhideexp = (e) => {
    // record if our text is expanded
    //console.log(isExpanded)

    //close all open paragraphs
    $(".readmore.expand").removeClass("expand");
    $(".readmore-link.expand").removeClass("expand");

    // if target wasn't expand, then expand it
    if (!isExpanded) {
        $(e.target).parent(".readmore").addClass("expand");
        $(e.target).addClass("expand");
    }

    isExpanded = !isExpanded
}
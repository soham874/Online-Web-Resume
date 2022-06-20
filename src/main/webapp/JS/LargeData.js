/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ To be fetched from Database ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var general_information_fallback = {
    "summary": "I am a tech enthusiast with an inquisitive mind, always on the lookout to learn new technologies and have at least a fundamental level of understanding about how things work. This webpage has been designed to give a quick insight into my academic and professional journey so far.",
    "skill_icons": [{
        "tech_name": "Scripting Languages",
        "techs": [{
            "Name": "Powershell",
            "URL": "./assets/Skill_item/Scripting_Languages/Powershell.png",
            "DocuLink": "https://docs.microsoft.com/en-us/powershell/scripting/overview"
        }, {
            "Name": "VBA",
            "URL": "./assets/Skill_item/Scripting_Languages/VBA.png",
            "DocuLink": "https://docs.microsoft.com/en-us/office/vba/library-reference/concepts/getting-started-with-vba-in-office"
        }, {
            "Name": "BASH",
            "URL": "./assets/Skill_item/Scripting_Languages/BASH.png",
            "DocuLink": "https://www.gnu.org/software/bash/"
        }]
    }, {
        "tech_name": "Programming Languages",
        "techs": [{
            "Name": "Java",
            "URL": "./assets/Skill_item/Programming_Languages/Java.png",
            "DocuLink": "https://www.java.com/"
        }, {
            "Name": "Python",
            "URL": "./assets/Skill_item/Programming_Languages/Python.png",
            "DocuLink": "https://www.python.org/"
        }, {
            "Name": "Cpp",
            "URL": "./assets/Skill_item/Programming_Languages/Cpp.png",
            "DocuLink": "https://cplusplus.com/doc/tutorial/"
        }, {
            "Name": "C",
            "URL": "./assets/Skill_item/Programming_Languages/C.png",
            "DocuLink": "https://www.cprogramming.com/"
        }]
    }, {
        "tech_name": "Full Stack Technologies",
        "techs": [{
            "Name": "HTML",
            "URL": "./assets/Skill_item/Full_Stack_Technologies/HTML.png",
            "DocuLink": "https://developer.mozilla.org/en-US/docs/Web/HTML"
        }, {
            "Name": "JavaScript",
            "URL": "./assets/Skill_item/Full_Stack_Technologies/JavaScript.png",
            "DocuLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        }, {
            "Name": "CSS",
            "URL": "./assets/Skill_item/Full_Stack_Technologies/CSS.png",
            "DocuLink": "https://developer.mozilla.org/en-US/docs/Web/CSS"
        }, {
            "Name": "ReactJS",
            "URL": "./assets/Skill_item/Full_Stack_Technologies/ReactJS.png",
            "DocuLink": "https://reactjs.org/"
        }, {
            "Name": "NodeJS",
            "URL": "./assets/Skill_item/Full_Stack_Technologies/NodeJS.png",
            "DocuLink": "https://nodejs.org/"
        }, {
            "Name": "Spring",
            "URL": "./assets/Skill_item/Full_Stack_Technologies/Spring.png",
            "DocuLink": "https://spring.io/"
        }]
    }, {
        "tech_name": "IDEs",
        "techs": [{
            "Name": "Eclipse",
            "URL": "./assets/Skill_item/IDEs/Eclipse.png",
            "DocuLink": "https://www.eclipse.org/ide/"
        }, {
            "Name": "VSCode",
            "URL": "./assets/Skill_item/IDEs/VSCode.png",
            "DocuLink": "https://code.visualstudio.com/"
        }, {
            "Name": "Postman",
            "URL": "./assets/Skill_item/IDEs/Postman.png",
            "DocuLink": "https://www.postman.com/"
        }]
    }, {
        "tech_name": "Databases",
        "techs": [{
            "Name": "Firebase",
            "URL": "./assets/Skill_item/Databases/Firebase.png",
            "DocuLink": "https://firebase.google.com/"
        }, {
            "Name": "MySQL",
            "URL": "./assets/Skill_item/Databases/MySQL.png",
            "DocuLink": "https://www.mysql.com/"
        }, {
            "Name": "MongoDB",
            "URL": "./assets/Skill_item/Databases/MongoDB.png",
            "DocuLink": "https://www.mongodb.com/"
        }]
    }]
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ To be fetched from Database ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// functions to be performed when webpage loads
$(document).ready(function() {

    console.log("Experience JS file connected successfully");
    //console.log(general_information_fallback)

    $.ajax({
        type: 'GET',
        url: formAjaxUrl("receiveGeneralData"),
        contentType: "application/json",
        dataType: 'json',
        success: (general_data) => {
            if (general_data.status >= 200 && general_data.status < 400) {
                console.log("Success General Information, loading live data")
                    //document.getElementById("work_error").style.display = 'none'
                    //document.getElementById("work-exp").style.display = 'block'
                console.log(general_data.body)
                loadSkills(general_data.body.documents[0].skill_icons)
                loadSummary(general_data.body.documents[0].Summary)
            } else {
                console.log("Error General Information, loading fallback data")
                    //document.getElementById("work-exp").style.display = 'none'
                    //document.getElementById("work_error").style.display = 'flex'
                loadSkills()
                loadSummary()
            }
        },
        error: (err) => {
            console.log("Error General Information, loading fallback data")
                //document.getElementById("work-exp").style.display = 'none'
                //document.getElementById("work_error").style.display = 'flex'
            loadSkills()
            loadSummary()
        }
    })
});

// load summary section
loadSummary = (data = general_information_fallback.summary) => {
    document.getElementById("summary_section").innerHTML = data
}

//automatically add the HTML for skills
loadSkills = (data = general_information_fallback.skill_icons) => {
    //console.log(data)
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
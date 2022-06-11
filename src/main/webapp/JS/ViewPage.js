let isclicked = false
let thoughtboxdisplayed = true
let skill_headings = ["Programming languages", "Scripting languages", "Full Stack Technologies", "Databases", "IDEs"]
let tech_counts = [4, 3, 6, 3, 3]
let stat_type = ["Completed ", "Accuracy "]
let cat_type = ["all", "easy", "medium", "hard"]
var data = {}
let counter = 0
let SubmissionInformation = []

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
            "submissionCalendar": "{\"1640995200\": 6, \"1641081600\": 1, \"1641168000\": 3, \"1641254400\": 4, \"1641340800\": 1, \"1641427200\": 4, \"1641513600\": 6, \"1641600000\": 1, \"1641686400\": 1, \"1641772800\": 7, \"1641859200\": 7, \"1641945600\": 5, \"1642032000\": 5, \"1642118400\": 1, \"1642204800\": 1, \"1642291200\": 4, \"1642377600\": 3, \"1642464000\": 10, \"1642550400\": 7, \"1642636800\": 8, \"1642723200\": 1, \"1642809600\": 7, \"1642896000\": 1, \"1642982400\": 8, \"1643068800\": 10, \"1643155200\": 6, \"1643241600\": 8, \"1643328000\": 2, \"1643414400\": 1, \"1643500800\": 6, \"1643587200\": 4, \"1643673600\": 4, \"1643760000\": 5, \"1643846400\": 4, \"1643932800\": 3, \"1644019200\": 5, \"1644105600\": 8, \"1644192000\": 4, \"1644278400\": 1, \"1644364800\": 5, \"1644451200\": 2, \"1644537600\": 2, \"1644624000\": 5, \"1644710400\": 8, \"1644796800\": 3, \"1644883200\": 1, \"1644969600\": 2, \"1645056000\": 6, \"1645142400\": 3, \"1645228800\": 8, \"1645315200\": 6, \"1645401600\": 1, \"1645488000\": 1, \"1645574400\": 1, \"1645660800\": 1, \"1645747200\": 2, \"1645833600\": 3, \"1645920000\": 7, \"1646006400\": 5, \"1646092800\": 8, \"1646179200\": 7, \"1646265600\": 4, \"1646352000\": 3, \"1646438400\": 11, \"1646524800\": 6, \"1646611200\": 9, \"1646697600\": 5, \"1646784000\": 5, \"1646870400\": 2, \"1646956800\": 4, \"1647043200\": 1, \"1647129600\": 4, \"1647216000\": 3, \"1647302400\": 3, \"1647388800\": 5, \"1647475200\": 2, \"1647561600\": 2, \"1647648000\": 1, \"1647734400\": 1, \"1647820800\": 4, \"1647907200\": 3, \"1647993600\": 1, \"1648080000\": 1, \"1648166400\": 2, \"1648252800\": 5, \"1648339200\": 6, \"1648425600\": 8, \"1648512000\": 6, \"1648598400\": 3, \"1648684800\": 4, \"1648771200\": 3, \"1648857600\": 7, \"1648944000\": 8, \"1649030400\": 4, \"1649116800\": 1, \"1649203200\": 1, \"1649289600\": 6, \"1649376000\": 1, \"1649462400\": 9, \"1649548800\": 7, \"1649635200\": 7, \"1649721600\": 2, \"1649808000\": 5, \"1649894400\": 1, \"1649980800\": 9, \"1650067200\": 11, \"1650153600\": 4, \"1650240000\": 8, \"1650326400\": 2, \"1650412800\": 2, \"1650499200\": 3, \"1650585600\": 2, \"1650672000\": 1, \"1650758400\": 3, \"1650844800\": 1, \"1650931200\": 1, \"1651017600\": 1, \"1651104000\": 3, \"1651190400\": 1, \"1651276800\": 3, \"1651363200\": 3, \"1651449600\": 2, \"1651536000\": 1, \"1651622400\": 4, \"1651708800\": 1, \"1651795200\": 1, \"1651881600\": 3, \"1651968000\": 1, \"1652054400\": 3, \"1652140800\": 1, \"1652227200\": 1, \"1652313600\": 2, \"1652400000\": 5, \"1652486400\": 1, \"1652572800\": 1, \"1652659200\": 3, \"1652745600\": 3, \"1652832000\": 2, \"1652918400\": 2, \"1653004800\": 2, \"1653091200\": 1, \"1653177600\": 1, \"1653264000\": 1, \"1653350400\": 1, \"1653436800\": 1, \"1653523200\": 1, \"1653609600\": 2, \"1653696000\": 7, \"1653782400\": 8, \"1653868800\": 1, \"1653955200\": 1, \"1654041600\": 1, \"1654128000\": 1, \"1654214400\": 1, \"1654300800\": 1, \"1654387200\": 5, \"1654473600\": 1, \"1654560000\": 1, \"1654646400\": 1, \"1654732800\": 1, \"1654819200\": 1, \"1624665600\": 7, \"1624752000\": 4, \"1625270400\": 2, \"1627344000\": 2, \"1627516800\": 11, \"1627948800\": 5, \"1628035200\": 1, \"1628121600\": 8, \"1628208000\": 2, \"1628380800\": 3, \"1628899200\": 4, \"1629244800\": 2, \"1629331200\": 1, \"1629504000\": 6, \"1629849600\": 3, \"1631404800\": 1, \"1632614400\": 2, \"1632700800\": 19, \"1632787200\": 3, \"1633910400\": 3, \"1633996800\": 2, \"1634169600\": 2, \"1634256000\": 8, \"1634342400\": 2, \"1635638400\": 5, \"1635897600\": 4, \"1635984000\": 11, \"1636070400\": 12, \"1636156800\": 27, \"1636243200\": 8, \"1636329600\": 8, \"1636416000\": 3, \"1636502400\": 5, \"1636588800\": 18, \"1636675200\": 12, \"1636761600\": 17, \"1636848000\": 8, \"1636934400\": 12, \"1637020800\": 4, \"1637107200\": 11, \"1637193600\": 9, \"1637280000\": 10, \"1637366400\": 7, \"1637452800\": 5, \"1637539200\": 5, \"1637625600\": 7, \"1637712000\": 4, \"1637798400\": 1, \"1637884800\": 1, \"1637971200\": 7, \"1638057600\": 10, \"1638144000\": 1, \"1638230400\": 1, \"1638316800\": 6, \"1638403200\": 5, \"1638489600\": 1, \"1638576000\": 2, \"1638662400\": 3, \"1638748800\": 1, \"1638835200\": 1, \"1638921600\": 1, \"1639008000\": 2, \"1639094400\": 1, \"1639180800\": 1, \"1639267200\": 4, \"1639353600\": 4, \"1639440000\": 1, \"1639526400\": 1, \"1639612800\": 1, \"1639699200\": 1, \"1639785600\": 4, \"1639872000\": 2, \"1639958400\": 1, \"1640044800\": 2, \"1640131200\": 1, \"1640217600\": 1, \"1640304000\": 2, \"1640390400\": 2, \"1640476800\": 3, \"1640563200\": 2, \"1640649600\": 4, \"1640736000\": 4, \"1640822400\": 2, \"1640908800\": 2}",
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

// functions to be performed when webpage loads
$(document).ready(function() {
    thoughtboxdisplayed = false
    counter = 0;
    console.log("Javascript file connected successfully");

    //set the theme from local storage if present
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
    } else {
        setTheme('theme-light');
    }

    // controls closing of the post box depending
    $(document).on('click', function(e) {
        if ($("#post_button").is(e.target) || (!$("#thought-link").is(e.target) && $(e.target).closest("#thought-box").length === 0)) {
            $("#thought-box").hide();
            thoughtboxdisplayed = false
        }
    });


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
            document.getElementById("coding_container").style.display = 'block'
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

// function to show drop down menu for mobile devices
showmenu = () => {

    if (!isclicked) {
        var elems = document.getElementsByClassName("header-links")
        for (var i = 0; i < elems.length; i += 1)
            elems[i].style.display = 'block';
        var elems = document.getElementsByClassName("generic_div")
        for (var i = 0; i < elems.length; i += 1)
            elems[i].style.display = 'none';

        document.getElementsByClassName("header-section")[0].style.position = "relative";
    } else {
        hidedivs()
    }
    isclicked = !isclicked;
}

//function to scroll to a page section without modifying heyperlink
smoothScrolltoSection = (id) => {
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
    });
}

//function to display thought box
showThoughtBox = () => {
    if (!thoughtboxdisplayed)
        document.getElementsByClassName("thought-box")[0].style.display = "flex"
    else
        $("#thought-box").hide();
    thoughtboxdisplayed = true
}

// hide the options in navbar when a certain option has been chosen/the navabar is closed in mobile view
hidedivs = () => {
    if (!isclicked)
        return
    var elems = document.getElementsByClassName("header-links")
    for (var i = 0; i < elems.length; i += 1)
        elems[i].style.display = 'none';
    var elems = document.getElementsByClassName("generic_div")
    for (var i = 0; i < elems.length; i += 1)
        elems[i].style.display = 'block';
    document.getElementsByClassName("header-section")[0].style.position = "fixed";
}

// function which returns the current theme (light/dark) along with full asset path
gettheme = () => {

    var path = document.getElementById("imgClickAndChange").src
    let respath = ""

    let pointer = path.length - 1
    while (path[pointer] !== '/') {
        respath = path[pointer] + respath
        path.slice(0, -1)
        pointer--;
    }

    path = path.substring(0, pointer)

    var theme = {
        source_path: path,
        image: respath
    }
    return theme
}

// wrapper to toggle the theme of page
changeImage = () => {

    var current_state = gettheme()
    if (current_state.image === "sunny.png")
        setTheme('theme-dark');
    else
        setTheme('theme-light');

}

// wrapper to toggle the theme and image of page
setTheme = (themeName) => {
    console.log("Setting theme to " + themeName)
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
    var current_state = gettheme()
    if (themeName === "theme-light")
        document.getElementById("imgClickAndChange").src = current_state.source_path + '/' + "sunny.png"
    else
        document.getElementById("imgClickAndChange").src = current_state.source_path + '/' + "full-moon.png"
}

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
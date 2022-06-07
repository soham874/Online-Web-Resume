let isclicked = false
let thoughtboxdisplayed = true
var $limitNum = 250;
let temp_click = 0;
let skill_headings = ["Programming languages", "Scripting languages", "Full Stack Technologies", "Database", "IDEs"]
let tech_counts = [4, 3, 8, 3, 3]

$(document).ready(function() {
    thoughtboxdisplayed = false
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

    loadSkills()
});

// function to show drop down menu for mobile devices
showmenu = () => {

    if (!isclicked) {
        var elems = document.getElementsByClassName("header-links")
        for (var i = 0; i < elems.length; i += 1)
            elems[i].style.display = 'block';
        var elems = document.getElementsByClassName("header-common-left")
        for (var i = 0; i < elems.length; i += 1)
            elems[i].style.display = 'none';
        var elems = document.getElementsByClassName("header-common-right")
        for (var i = 0; i < elems.length; i += 1)
            elems[i].style.display = 'none';
        var elems = document.getElementsByClassName("body-common")
        for (var i = 0; i < elems.length; i += 1)
            elems[i].style.display = 'none';

        document.getElementsByClassName("summary")[0].style.display = "none";
        document.getElementsByClassName("snp")[0].style.display = "none";
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
    var elems = document.getElementsByClassName("header-common-left")
    for (var i = 0; i < elems.length; i += 1)
        elems[i].style.display = 'block';
    var elems = document.getElementsByClassName("header-common-right")
    for (var i = 0; i < elems.length; i += 1)
        elems[i].style.display = 'block';
    var elems = document.getElementsByClassName("body-common")
    for (var i = 0; i < elems.length; i += 1)
        elems[i].style.display = 'block';

    document.getElementsByClassName("summary")[0].style.display = "flex";
    document.getElementsByClassName("snp")[0].style.display = "flex";
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

// show the texh icons
displayeffects = (skill_item_number) => {
    document.getElementsByClassName("skill_item")[skill_item_number].style.transform = "scale(1.5)";
    document.getElementsByClassName("skill_icon_group")[skill_item_number].style.display = "flex";
}

// hide the texh icons
hideeffects = (skill_item_number) => {
    document.getElementsByClassName("skill_item")[skill_item_number].style.transform = "scale(1)";
    document.getElementsByClassName("skill_icon_group")[skill_item_number].style.display = "none";
}

//automatically add the HTML for skills
loadSkills = () => {
    let output = "";
    for (let i = 0; i < 5; i++) {
        var number = i;

        output += `
        <div class="skill_item_group">
            <div class="skill_item" onmouseover="displayeffects(${number})">
                ${skill_headings[number]}
        </div>
        
        <div class="skill_icon_group" onmouseleave="hideeffects(${number})">`

        for (let j = 0; j < tech_counts[number]; j++)
            output += `<img class="skill_icons" src="./assets/Skill_items/s${number+1}/si${number+1}${j+1}.png" />`
        output += `</div></div>`
    }
    document.getElementById("snp_section").innerHTML = output
}
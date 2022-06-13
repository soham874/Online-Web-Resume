let isclicked = false
let thoughtboxdisplayed = true

var data = {}

// functions to be performed when webpage loads
$(document).ready(function() {
    thoughtboxdisplayed = false

    console.log("Main file connected successfully");

    //set the theme from local storage if present
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
    } else {
        setTheme('theme-light');
    }

    //show the help section for first time visitors
    if (localStorage.getItem('isfirsttime') !== 'no' || localStorage.getItem('isfirsttime') === null) {
        var elems = document.getElementsByClassName("generic_div")
        for (var i = 0; i < elems.length; i += 1)
            elems[i].style.display = 'none';
        document.getElementsByClassName("help_div")[0].style.display = 'block'

        setTimeout(() => {
            document.getElementsByClassName("help_div")[0].style.opacity = 0
            var elems = document.getElementsByClassName("generic_div")
            for (var i = 0; i < elems.length; i += 1)
                elems[i].style.display = 'block';
            setTimeout(() => {
                document.getElementsByClassName("help_div")[0].style.display = 'none'
            }, 2500)
        }, 4000)

        localStorage.setItem('isfirsttime', 'no');
    }

    // controls closing of the post box depending
    $(document).on('click', function(e) {
        if ($("#post_button").is(e.target) || (!$("#thought-link").is(e.target) && $(e.target).closest("#thought-box").length === 0)) {
            $("#thought-box").hide();
            thoughtboxdisplayed = false
        }
    });

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

// function to change drive shared link to embeddable google photos
googleEmbedImage = (url) => {
    var res = "https://drive.google.com/uc?export=view&id="
    res += url.split('/')[5]
    return res
}

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
    if (themeName === "theme-light") {
        document.getElementById("imgClickAndChange").src = current_state.source_path + '/' + "sunny.png"
        document.getElementById("arr_up").src = current_state.source_path + '/' + "Uparray_light.png"
        document.getElementById("arr_down").src = current_state.source_path + '/' + "Downarray_light.png"
    } else {
        document.getElementById("imgClickAndChange").src = current_state.source_path + '/' + "full-moon.png"
        document.getElementById("arr_up").src = current_state.source_path + '/' + "Uparray_dark.png"
        document.getElementById("arr_down").src = current_state.source_path + '/' + "Downarray_dark.png"
    }
}
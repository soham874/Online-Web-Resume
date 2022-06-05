let isclicked = false
let thoughtboxdisplayed = true

$(document).ready(function() {
    thoughtboxdisplayed = false
    console.log("Javascript file connected successfully");

    //set the theme from local storage if present
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
    } else {
        setTheme('theme-light');
    }

    $(document).on('click', function(e) {
        if (!thoughtboxdisplayed || $("#thought-link").is(e.target))
            return

        if (thoughtboxdisplayed || $("#thought-box").is(e.target)) {
            $("#thought-box").hide();
        }
        thoughtboxdisplayed = !thoughtboxdisplayed
    });
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
        document.getElementsByClassName("thought-box")[0].style.display = "block"
    else
        $("#thought-box").hide();
    thoughtboxdisplayed = !thoughtboxdisplayed
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
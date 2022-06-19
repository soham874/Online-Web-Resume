let isclicked = false

var data = {}

// functions to be performed when webpage loads
$(document).ready(function() {
    thoughtboxdisplayed = false

    console.log("Main file connected successfully");

    document.onreadystatechange = function() {
        if (document.readyState !== "complete") {
            document.querySelector("#mainbody").style.visibility = "hidden";
            document.querySelector("#loader").style.visibility = "visible";
        } else {
            document.querySelector("#loader").style.opacity = 0;
            document.querySelector("#mainbody").style.visibility = "visible";

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

            setTimeout(() => {
                document.querySelector("#loader").style.display = "none";
            }, 1000)
        }

        $("#suggestion_box").submit(function(e) {
            e.preventDefault();
        });
    };


    //set the theme from local storage if present
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
    } else {
        setTheme('theme-light');
    }



    window.addEventListener('resize', () => {
        if (window.innerWidth > 1250) {
            var elems = document.getElementsByClassName("header-links")
            for (var i = 0; i < elems.length; i += 1)
                elems[i].style.display = 'block';
        }

    })

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

// function to automatically form the url when requesting via localhost/heroku
formAjaxUrl = (url) => {
    console.log(window.location.host)

    if (window.location.host === "localhost:8080")
        return "/OnlineWebresume/" + url

    return "/" + url
}

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
    console.log(document.getElementById("layout").src)
    var current_state = gettheme()
    if (themeName === "theme-light") {
        document.getElementById("imgClickAndChange").src = current_state.source_path + '/' + "sunny.png"
        document.getElementById("arr_up").src = current_state.source_path + '/' + "Uparray_light.png"
        document.getElementById("arr_down").src = current_state.source_path + '/' + "Downarray_light.png"
        document.getElementById("layout").src = current_state.source_path + '/' + "Project_Layout_Light.png"
    } else {
        document.getElementById("imgClickAndChange").src = current_state.source_path + '/' + "full-moon.png"
        document.getElementById("arr_up").src = current_state.source_path + '/' + "Uparray_dark.png"
        document.getElementById("arr_down").src = current_state.source_path + '/' + "Downarray_dark.png"
        document.getElementById("layout").src = current_state.source_path + '/' + "Project_Layout_Dark.png"
    }
}

/*
// function to send review
sendReview = () => {

    var user_response = {
        "name": document.getElementById("user_name").value,
        "message": document.getElementById("user_message").value,
        "timestamp": Date().toLocaleString()
    }

    console.log(user_response)


    $.ajax({
        type: 'POST',
        url: formAjaxUrl("sendUserResponse"),
        data: JSON.stringify(user_response),
        contentType: "application/json",
        dataType: 'json',
        success: (success) => {
            console.log(success)
        },
        error: (err) => {
            console.log(err)
        }
    })


    fetch('https://data.mongodb-api.com/app/data-okjli/endpoint/data/v1/action/insertOne', {
            method: "POST",
            body: JSON.stringify(user_response),
            headers: {
                "mode": "no-cors",
                "Access-Control-Request-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json",
                "api-key": "cH8gQ4EdyCxHfdaZaA2vVEVDBUuSB5QhdHzTJa8F4f564KfBYJ1R8ZxthZobnAau",
                "Accept": "application/json"
            }
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err));
}

*/
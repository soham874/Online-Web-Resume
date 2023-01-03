let isclicked = false
var sideMenu = false;
var cur_percent;
var style;
var down_pos;
var up_pos;

var data = {}

var patternEmail = new RegExp('^[a-z0-9]+([._+-][a-z0-9]+)*(@)[0-9a-zA-Z]+[.]{1}[a-z]{2,3}([.][a-z]{2})?$')

// store browser information
deviceInfo = () => {

    console.log("Screen height, screen width and Browser Client is being collected for analysis")

    let browser_data = {
        browser: "Not Available",
        height: window.screen.height,
        width: window.screen.width
    }

    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        browser_data.browser = 'Opera'
    } else if (navigator.userAgent.indexOf("Edg") != -1) {
        browser_data.browser = 'Microsoft Edge'
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        browser_data.browser = 'Google Chrome'
    } else if (navigator.userAgent.indexOf("Safari") != -1) {
        browser_data.browser = 'Safari'
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
        browser_data.browser = 'Mozilla Firefox'
    } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
        browser_data.browser = 'Internet Explorer'
    }

    //console.log(JSON.stringify(browser_data))
    $.ajax({
        type: 'POST',
        url: formAjaxUrl("updateBrowserData"),
        data: JSON.stringify(browser_data),
        contentType: "application/json",
        headers: {
            'session-uid':makeid()
        },
        dataType: 'json',
        success: (success) => {
            console.log("AJAX RESPONSE >> Browser data stored successfully")
        },
        error: (err) => {
            console.log("AJAX RESPONSE >> Failed to store browser data")
        }
    })
}

// generate random UID
makeid = () => {

    const oldSessionId = localStorage.getItem('sessionId');
    if( oldSessionId ){
        console.log("Previous UID retrieved")
        return oldSessionId;
    }

    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 16; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    localStorage.setItem('sessionId', result);
    console.log("Session UID set")
    return result;
}

// functions to be performed when webpage loads
$(document).ready(function() {

    makeid()
    
    thoughtboxdisplayed = false

    cur_percent = document.querySelector('.theme_chain')
    style = getComputedStyle(cur_percent);

    down_pos = (parseInt(style.top.replace(/px/, "")) + 10) + "px"
    up_pos = (parseInt(style.top.replace(/px/, "")) - 10) + "px"

    document.querySelector("#mainbody").style.visibility = "hidden";
    document.querySelector("#loader").style.visibility = "visible";

    $.when(ajaxAcademic(),ajaxLargeData(),ajaxExperience(),ajaxLeetcode(),ajaxGithub()).done(() => {
        
        console.log("All backend calls completed, proceeding with loading resource...")
        
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
    })

    document.onreadystatechange = function() {
        
        setTimeout(() => {
            deviceInfo();
        }, 30000)

        $(".submit-btn").submit(function(e) {
            e.preventDefault();
        });
    };

    //set the theme from local storage if present
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
    } else {
        setTheme('theme-light');
    }

    console.log("Main file connected successfully");

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1250) {
            var elems = document.getElementsByClassName("header-links")
            for (var i = 0; i < elems.length; i += 1)
                elems[i].style.display = 'block';
        } else {
            var elems = document.getElementsByClassName("header-links")
            for (var i = 0; i < elems.length; i += 1)
                elems[i].style.display = 'none';
        }

    })

});

// function to automatically form the url when requesting via localhost/heroku
formAjaxUrl = (url) => {
    return "/" + url
}

// function to change drive shared link to embeddable google photos
googleEmbedImage = (url) => {
    var expression = "https?";
    var regex = new RegExp(expression);
    if (!url.match(regex))
        return url

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

    var path = document.getElementById("bulb").src
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
    if (current_state.image === "bulb_lit.png")
        setTheme('theme-dark');
    else
        setTheme('theme-light');

}

// wrapper to toggle the theme and image of page
setTheme = (themeName) => {
    //console.log("Setting theme to " + themeName)
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
    //console.log(document.getElementById("layout").src)
    var current_state = gettheme()
    if (themeName === "theme-light") {
        document.getElementById("arr_up").src = current_state.source_path + '/' + "Uparray_light.png"
        document.getElementById("arr_down").src = current_state.source_path + '/' + "Downarray_light.png"
        document.getElementById("bulb").src = current_state.source_path + '/' + "bulb_lit.png"
        document.getElementById("chain").style.top = down_pos
    } else {
        document.getElementById("arr_up").src = current_state.source_path + '/' + "Uparray_dark.png"
        document.getElementById("arr_down").src = current_state.source_path + '/' + "Downarray_dark.png"
        document.getElementById("bulb").src = current_state.source_path + '/' + "bulb_unlit.png"
        document.getElementById("chain").style.top = up_pos
    }
}

// reset errors when text is input
resetErrors = () => {
    document.getElementById("name_error").innerHTML = " "
    document.getElementById("user_name").style.border = "solid var(--font-color) 2px"
    document.getElementById("mail_error").innerHTML = " "
    document.getElementById("email_id").style.border = "solid var(--font-color) 2px"
    document.getElementById("message_error").innerHTML = " "
    document.getElementById("user_message").style.border = "solid var(--font-color) 2px"
}

// verify the details in the form
checkinput = () => {

    var verifyInput = true

    if (document.getElementById("user_name").value === "") {
        document.getElementById("name_error").innerHTML = "Please provide your name"
        document.getElementById("user_name").style.border = "solid red 2px"
        verifyInput = false;
    }
    if (document.getElementById("email_id").value === "") {
        document.getElementById("mail_error").innerHTML = "Please provide your email-id"
        document.getElementById("email_id").style.border = "solid red 2px"
        verifyInput = false;
    }
    if (document.getElementById("user_message").value === "") {
        document.getElementById("message_error").innerHTML = "Please add a message to share"
        document.getElementById("user_message").style.border = "solid red 2px"
        verifyInput = false;
    }

    if (!verifyInput)
        return false;

    if (!document.getElementById("email_id").value.match(patternEmail)) {
        document.getElementById("mail_error").innerHTML = "Please enter a valid e-mail ID"
        document.getElementById("email_id").style.border = "solid red 2px"
        verifyInput = false;
    }
    if (document.getElementById("user_message").value.length < 5) {
        document.getElementById("message_error").innerHTML = "Please enter a valid message to share"
        document.getElementById("user_message").style.border = "solid red 2px"
        verifyInput = false;
    }

    if (!verifyInput)
        return false;

    return true;
}

// function to send review
sendReview = () => {

    if (!checkinput())
        return;

    var user_response = {
        "name": document.getElementById("user_name").value,
        "email": document.getElementById("email_id").value,
        "message": document.getElementById("user_message").value
    }

    $.ajax({
        type: 'POST',
        url: formAjaxUrl("sendUserResponse"),
        data: JSON.stringify(user_response),
        contentType: "application/json",
        headers: {
            'session-uid':makeid()
        },
        dataType: 'json',
        success: (success) => {
            document.getElementById("message_success").style.opacity = 1
            setTimeout(() => {
                document.getElementById("message_success").style.opacity = 0
            }, 3000)
        },
        error: (err) => {
            setTimeout(() => {
                sendReview()
            }, 30000)
        }
    })

    return false;
}
let isclicked = false

$(document).ready(function() {

    console.log("Javascript file connected successfully");

    $(".header-links").on(
        'click',
        function(event) {

            if (window.innerWidth > 1250)
                return

            var elems = document.getElementsByClassName("header-links")
            for (var i = 0; i < elems.length; i += 1)
                elems[i].style.display = 'none';

        }
    )
});

showmenu = () => {
    console.log("menu show");

    if (!isclicked) {
        var elems = document.getElementsByClassName("header-links")
        for (var i = 0; i < elems.length; i += 1)
            elems[i].style.display = 'block';

    } else {
        var elems = document.getElementsByClassName("header-links")
        for (var i = 0; i < elems.length; i += 1)
            elems[i].style.display = 'none';
    }
    isclicked = !isclicked;
}
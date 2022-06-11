<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <!DOCTYPE html>
    <html class="theme-light">

    <head>
        <meta charset="utf-8" name="viewport">

        <title>Soham's Web Resume</title>

        <link rel="icon" href="./assets/resume.png">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Cagliostro&display=swap" rel="stylesheet">

        <link rel="stylesheet" href="./CSS/ViewPage.css">
        <script src="./JS/ViewPage.js"></script>

    </head>

    <body>

        <!-- navbar... -->
        <div class="header-section">
            <div class="material-icons navbar-icon" onclick="showmenu()">menu</div>
            <div class="header-links">
                <div onclick="hidedivs();smoothScrolltoSection('#Summary_heading')">Summary
                </div>
            </div>
            <div class="header-links">
                <div onclick="hidedivs();smoothScrolltoSection('#Snp_heading')">Skills and Projects
                </div>
            </div>
            <div class="header-links">
                <div onclick="hidedivs();smoothScrolltoSection('#we_heading')">Work Experience
                </div>
            </div>
            <div class="header-links">
                <div onclick="hidedivs();smoothScrolltoSection('#ap_heading')">Academic Profile
                </div>
            </div>
            <div class="header-links">
                <div onclick="hidedivs();smoothScrolltoSection('#cas_heading')">Lets get a bit casual?
                </div>
            </div>
            <div class="header-links">
                <div onclick="hidedivs();smoothScrolltoSection('#abp_heading')">About the page
                </div>
            </div>
        </div>

        <!-- summary... -->
        <div class="generic_div">
            <div style="height: 150px;"></div>
            <div class="header-common-left" id="Summary_heading">
                Summary
            </div>
            <div class="summary" style="display: flex;">
                <div style="padding: 30px;">
                    I am a junior level tech enthusiast with an inquisitive mind, always on the lookout to learn new technologies and have at least a fundamental level of understanding about how things work. This webpage has been designed to give a quick insight into my
                    academic and professional journey so far.
                </div>
                <img class="hex-background" src="./assets/displaypic.jpeg">
            </div>
        </div>

        <!-- Skills and Projects... -->
        <div class="generic_div">
            <div class="header-common-right" id="Snp_heading">
                Skills and Projects
            </div>
            <div>
                <div style="padding-left: 50px;font-size: 20px;">
                    Tap or hover over the technologies to know about the different tech-stacks I have worked with in a professional and personnal capacity.
                </div>
                <div class="snp" id="snp_section">

                </div>
            </div>
            <div>
                <div style="padding: 50px;font-size: 20px;text-align: justify;">Here's a quick look into my coding portfolio from
                    <a href="https://leetcode.com/Soham874/" target="_blank">Leetcode</a> [stored data displayed in beta phase]. Hover or tap on each question category type to know my stats in that particular level. Default displayed are my overall stats.
                </div>
                <div class="category_buttons">
                    <div class="category_class" id="c1" style="color: var(--color-easy);">Easy</div>
                    <div class="category_class" id="c2" style="color: var(--color-medium);">Medium</div>
                    <div class="category_class" id="c3" style="color: var(--color-hard);">Hard</div>
                </div>
                <div style="position: relative;padding: 100px;">
                    <div class="progress" style="left: 33.34%">
                        <svg class="progress-circle" width="200px" height="200px" xmlns="http://www.w3.org/2000/svg">
                        <circle class="progress-circle-back"
                                cx="80" cy="80" r="74"></circle>
                        <circle class="progress-circle-prog"
                                cx="80" cy="80" r="74"></circle>
                    </svg>
                        <div class="progress-text" data-progress="0">0%</div>
                    </div>
                    <div class="progress" style="left: 66.68%">
                        <svg class="progress-circle" width="200px" height="200px" xmlns="http://www.w3.org/2000/svg">
                        <circle class="progress-circle-back"
                                cx="80" cy="80" r="74"></circle>
                        <circle class="progress-circle-prog"
                                cx="80" cy="80" r="74"></circle>
                    </svg>
                        <div class="progress-text" data-progress="0">0%</div>
                    </div>
                </div>
                <div id="progress_bar_container">
                </div>

            </div>
        </div>

        <!-- Work Experience... -->
        <div class="generic_div">
            <div class="header-common-left" id="we_heading">
                Work Experience
            </div>
            <div class="body-common">

            </div>
        </div>

        <!-- Acedemic Profile... -->
        <div class="generic_div">
            <div class="header-common-right" id="ap_heading">
                Academic Profile
            </div>
            <div class="body-common">

            </div>
        </div>

        <!-- Lets get a bit casual... -->
        <div class="generic_div">
            <div class="header-common-left" id="cas_heading">
                Lets get a bit casual?
            </div>
            <div class="body-common">

            </div>
        </div>

        <!-- About the page... -->
        <div class="generic_div">
            <div class="header-common-right" id="abp_heading">
                About the page
            </div>
            <div class="body-common">
                This is my flagship project, developed in an attempt to have better understanding of different technologies used in full-stack development. The technologies used to develop the webapp are as follows:-
                <ul>
                    <li>WebApp Framework -
                        <a href="https://docs.spring.io/spring-framework/docs/3.2.x/spring-framework-reference/html/mvc.html" target="_blank">Spring MVC</a>
                    </li>
                    <li>Client side interface -
                        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">HTML</a>,
                        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">CSS</a> and
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">JavaScript</a>
                    </li>
                    <li>Webpage hosting -
                        <a href="https://www.heroku.com/" target="_blank">Heroku</a></li>
                    <li>Database support -
                        <a href="https://www.mongodb.com/atlas/database" target="_blank">MongoDB Atlas</a>
                    </li>
                </ul>
                The project source code can be viewd <a href="https://github.com/soham874/Online-Web-Resume" target="_blank">here</a>.
            </div>
        </div>

        <!-- Footer section... -->
        <div class="footer-section">
            <div class="thought-box sb4" id="thought-box">
                <div>Thank you for considering to share your valuable opinions with me</div><br>
                <textarea name="lname" id="lname" rows="15" maxlength="10"></textarea><br>
                <button id="post_button">Post</button>
            </div>
            <div>
                Made with ♥ by Soham
            </div>
            <div style="width: 100px">
                <img alt="" src="./assets/sunny.png" style="height: 45px; width: 45px;transition: 500ms;padding:5px" id="imgClickAndChange" onclick="changeImage()" />
            </div>
            <div id="thought-link" onclick="showThoughtBox()">
                Share a thought?
            </div>
        </div>

    </body>

    </html>
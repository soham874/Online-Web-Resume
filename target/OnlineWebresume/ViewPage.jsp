<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
    <!DOCTYPE html>
    <html class="theme-light">

    <head>
        <meta charset="utf-8" name="viewport">

        <title>Soham's Online Portal</title>

        <link rel="icon" href="./assets/resume.png">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Cagliostro&display=swap" rel="stylesheet">

        <link rel="stylesheet" href="./CSS/CommonUtils.css">
        <link rel="stylesheet" href="./CSS/Summary.css">
        <link rel="stylesheet" href="./CSS/SkillsNProfiles.css">
        <link rel="stylesheet" href="./CSS/WorkEmp.css">
        <link rel="stylesheet" href="./CSS/Academics.css">
        <link rel="stylesheet" href="./CSS/Casual.css">
        <link rel="stylesheet" href="./CSS/Contact.css">

        <script src="./JS/Academeics.js"></script>
        <script src="./JS/SkillsNProjects.js"></script>
        <script src="./JS/Experience.js"></script>
        <script src="./JS/CommonUtil.js"></script>


    </head>

    <body>

        <div class="loading_div" id="loader">
            <div class="ring">Loading
                <span></span>
            </div>
        </div>

        <div id="mainbody">

            <!-- Help section -->
            <div class="help_div">
                <div id="top_help">
                    <img id="arr_up" src="assets/Uparray_light.png" />
                    <p style="margin:0px;">Quick scrool to different sections here</p>
                </div>
                <div id="bottom_help">
                    <p style="margin:0px;">Change the theme here</p>
                    <img id="arr_down" src="assets/Downarray_light.png" />
                </div>

            </div>

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

            <!-- Summary... -->
            <div class="generic_div">
                <div class="header-common-left" id="Summary_heading">
                    Summary
                </div>
                <div class="summary" style="display: flex;">
                    <div style="padding: 30px;">
                        I am a junior level tech enthusiast with an inquisitive mind, always on the lookout to learn new technologies and have at least a fundamental level of understanding about how things work. This webpage has been designed to give a quick insight into my
                        academic and professional journey so far.
                    </div>
                    <img id="display_pic" class="hex-background">
                </div>
            </div>

            <!-- Skills and Projects... -->
            <div class="generic_div">
                <div class="header-common-right" id="Snp_heading">
                    Skills and Projects
                </div>
                <!-- Skills... -->
                <div>
                    <div style="padding-left: 50px;font-size: 20px;">
                        Tap or hover over the technologies to know about the different tech-stacks I have worked with in a professional and personnal capacity.
                    </div>
                    <div class="snp" id="snp_section">
                    </div>
                </div>
                <!-- Coding profile... -->
                <div id="coding_container">
                    <div style="padding: 50px;font-size: 20px;text-align: justify;">Here's a quick look into my coding portfolio from
                        <a href="https://leetcode.com/Soham874/" target="_blank">Leetcode</a>. Hover or tap on each question category type to know my stats in that particular level. Tap anywhere outside to see my overall stats.
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
                <!-- Coding error... -->
                <div class="error_api" id="leetcode_error">
                    <div>
                        LeetCode servers are not responding currently, I apologize for the inconvinience. Please feel free to visit my Leetcode profile <a href="https://leetcode.com/Soham874/" target="_blank">here</a>.
                    </div>
                </div>
                <!-- Github profile... -->
                <div id="github_container">
                    <div style="padding: 50px;font-size: 20px;text-align: justify;">Here's some projects from my
                        <a href="https://github.com/soham874" target="_blank">Github</a> profile.
                    </div>
                    <div id="github_projects">
                    </div>
                </div>
                <!-- Github error... -->
                <div class="error_api" id="github_error">
                    <div>
                        Github servers are not responding currently, I apologize for the inconvinience. Please feel free to visit my Github profile <a href="https://github.com/soham874" target="_blank">here</a>.
                    </div>
                </div>
            </div>

            <!-- Work Experience... -->
            <div class="generic_div">
                <div class="header-common-left" id="we_heading">
                    Work Experience
                </div>
                <div>
                    <!-- Timeline -->
                    <div class="timeline" id="work-exp">
                    </div>
                </div>
                <!-- Acedemic error... -->
                <div class="error_api" id="work_error">
                    <div>
                        MongoDB servers are not responding currently, I apologize for the inconvinience.
                    </div>
                </div>
            </div>

            <!-- Acedemic Profile... -->
            <div class="generic_div">
                <div class="header-common-right" id="ap_heading">
                    Academic Profile
                </div>
                <div class="academic_section" id="ac_info">
                </div>
                <!-- Acedemic error... -->
                <div class="error_api" id="academic_error">
                    <div>
                        MongoDB servers are not responding currently, I apologize for the inconvinience.
                    </div>
                </div>
            </div>

            <!-- Lets get a bit casual... -->
            <div class="generic_div">
                <div class="header-common-left" id="cas_heading">
                    Lets get a bit casual?
                </div>
                <div class="body-common">
                    <p>
                        Gaming is easily one of my most crucial pastimes. A part of my day is always dedicated to it. Simulation games are my most favourite. I equally love sliding into virtual worlds to play online. Here are some of my most favourite titles; if you are into
                        either of them, lets have a cup of tea over it sometime :)
                        <div class="game_group">
                            <div class="game_img" id="ksp" onclick="window.open('https://store.steampowered.com/bundle/9245/Kerbal_Space_Program_Complete_Edition/','mywindow');" style="cursor: pointer;"></div>
                            <div class="game_img" id="subnautica" onclick="window.open('https://store.epicgames.com/en-US/p/subnautica','mywindow');" style="cursor: pointer;"></div>
                            <div class="game_img" id="rl" onclick="window.open('https://store.epicgames.com/en-US/p/rocket-league','mywindow');" style="cursor: pointer;"></div>
                            <div class="game_img" id="cs" onclick="window.open('https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/','mywindow');" style="cursor: pointer;"></div>
                        </div>
                    </p>
                    <p>
                        Meming is my next favourite thing. I love to delve deeper into the history of trending memes and find out what gave them their funny edge.
                    </p>
                    <img alt=" " src="assets/casual/meme.png" class="meme_div" />
                    <p>
                        Last but not the least, I ocassionally pick up my pencil and drawing book. While I would not say drawing is my passion, I let the artist in me take control once in a while and draw a line here and a curve there. You can have a romp around my tiny art
                        gallery
                        <a href="https://photos.app.goo.gl/xUt6P46QvXgjAyBa6" target="_blank">here</a>.
                    </p>
                </div>
            </div>

            <!-- About the page... -->
            <div class="generic_div">
                <div class="header-common-right " id="abp_heading">
                    About the page
                </div>
                <div class="body-common">
                    This is my flagship project, developed in an attempt to have better understanding of different technologies used in full-stack development. The technologies used to develop the webapp are as follows:-
                    <ul>
                        <li>WebApp Framework -
                            <a href="https://docs.spring.io/spring-framework/docs/3.2.x/spring-framework-reference/html/mvc.html " target="_blank ">Spring MVC</a>
                        </li>
                        <li>Client side interface -
                            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML " target="_blank ">HTML</a>,
                            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS " target="_blank ">CSS</a> and
                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript " target="_blank ">JavaScript</a>
                        </li>
                        <li>Webpage hosting -
                            <a href="https://www.heroku.com/ " target="_blank ">Heroku</a></li>
                        <li>Database support -
                            <a href="https://www.mongodb.com/atlas/database " target="_blank ">MongoDB Atlas</a>
                        </li>
                    </ul>
                    <div>
                        <div>A rough schematic of the project infrastructure is as follows</div>
                        <img alt=" " id="layout" src="./assets/Project_Layout_Light.png" style="width: 90%;padding:0 5%" />
                    </div>
                    Interested in what is hapenning under the hood? Have a look at the source code <a href="https://github.com/soham874/Online-Web-Resume " target="_blank ">here</a>.
                </div>
            </div>

            <!-- Contact me section... -->
            <div class="generic_div">
                <div class="header-common-left" id="contact_heading">
                    Contact me
                </div>
                <section id="contact">
                    <div class="contact-box">
                        <div class="contact-links">
                            <h2>Thank you for choosing to share your opinions</h2>
                            <div style="text-align: justify;color:white">
                                <br> The project is far from perfect, but it is an honest attempt to reach as close to professionalism as possible. Every suggestion provided, every opinion shared, and every bug reported will help me take a step closer
                                to that level. I thank you profusely for choosing to connect with me.</br>
                            </div>
                            <div class="links">
                                <div class="link">
                                    <a href="https://www.linkedin.com/in/soham-choudhury-342289190/" target="_blank "><img class="image" src="./assets/share/linkedin.png" alt="linkedin"></a>
                                </div>
                                <div class="link">
                                    <a href="https://github.com/soham874" target="_blank "><img class="image" src="./assets/share/github.png" alt="github"></a>
                                </div>
                                <div class="link">
                                    <a href="mailto:soham.choudhury.bwn@gmail.com?subject=Feedback for your Web Portal" target="_blank "><img class="image" src="./assets/share/email.png" alt="email"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <!-- Footer section... -->
            <div class="footer-section ">
                <div>Made with &lt;3 by Soham</div>
                <div style="width:10% ">
                    <img alt=" " src="./assets/sunny.png " style="height: 45px; width: 45px;transition: 500ms;padding:5px " id="imgClickAndChange" onclick="changeImage() " />
                </div>
                <div id="thought-link" onclick="smoothScrolltoSection( '#contact_heading') ">
                    Share a thought?
                </div>
            </div>

        </div>
    </body>

    </html>
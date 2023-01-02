import React from 'react';

export default function About() {
    return (
        <div className="body-common">
            This is my flagship project, developed in an attempt to have better understanding of different technologies used in full-stack development. The technologies used to develop the webapp are as follows:-
            <ul>
                <li>WebApp Framework -
                    <a href="https://spring.io/projects/spring-boot" target="_blank" rel="noreferrer"me>Spring Boot</a>
                </li>
                <li>Client side interface - 
                    <a href="https://reactjs.org/" target="_blank" rel="noreferrer"me>React JavaScript</a>
                </li>
                <li>Backend hosting -
                    <a href="https://aws.amazon.com/elasticbeanstalk/" target="_blank" rel="noreferrer"me>AWS Elastic BeanStalk</a></li>
                <li>Database support -
                    <a href="https://www.mongodb.com/atlas/database " target="_blank" rel="noreferrer"me>MongoDB Atlas</a>,
                    <a href="https://www.google.com/intl/en_in/drive/" target="_blank" rel="noreferrer"me>Google Drive</a>
                </li>
            </ul>
            Interested in what is hapenning under the hood? Have a look at the source code <a href="https://github.com/soham874/Online-Web-Resume" target="_blank" rel="noreferrer"me>here</a>.
        </div>
    );
  }
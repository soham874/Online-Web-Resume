import React from 'react'

import Summary from '../Summary/Summary'
import Casual from '../Casual/Casual'
import About from '../About/About'
import SkillProject from '../SkillProject/SkillProject'
import DefaultComponent from './DefaultComponent'
import WorkExperience from '../WorkExperience/WorkExperience'

// Text input component
export default function ComponentSwitcher (props) {

    switch(props.renderedComponent){
    case "Summary":
        return <Summary/>
    case "Casual":
        return <Casual/>
    case "About":
        return <About/>
    case "SkillProject":
        return <SkillProject/>
    case "WorkExperience":
        return <WorkExperience/>
    default:
        return <DefaultComponent/>
    }
}
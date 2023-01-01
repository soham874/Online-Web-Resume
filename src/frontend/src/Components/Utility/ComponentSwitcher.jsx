import React from 'react'
import Summary from '../Summary/Summary'
import Casual from '../Casual/Casual'
import DefaultComponent from './DefaultComponent'

// Text input component
export default function ComponentSwitcher (props) {

    switch(props.renderedComponent){
    case "Summary":
        return <Summary/>
    case "Casual":
        return <Casual/>
    }

    return <DefaultComponent/>
}
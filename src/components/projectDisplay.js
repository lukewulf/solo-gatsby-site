import * as React from "react"
import { graphql, StaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import {
    projDisplay
} from './projectDisplay.module.css'

function renderImage(edge) {
    console.log(edge)
    return <p>Test</p>
}

const ProjectDisplay = ({queryString, children}) => {

    
    return (
        <p>Test placeholder projectDisplay</p>
    )
}

export default ProjectDisplay
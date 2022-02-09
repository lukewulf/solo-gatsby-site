import * as React from "react"
import {
    projHeading,
    projTitle,
    suffix,
} from './projectHeading.module.css'

const ProjectHeading = ({projectTitle, children}) => {

    return(
        <div class={projHeading}>
            <h1 class={projTitle}>{projectTitle}<span class={suffix}> //</span></h1>
            {children}
        </div>
    )
}

export default ProjectHeading
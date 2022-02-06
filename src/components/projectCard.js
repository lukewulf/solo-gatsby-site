import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
    cardStyle,
    projectDescriptionText
} from './projectCard.module.css'

const ProjectCard = ({title, desc, img, alt, children}) => {
    
    const image = img.childImageSharp.gatsbyImageData

    return (
        <div class={cardStyle}>  
            <GatsbyImage
                image={image}
                alt={alt}
            ></GatsbyImage>
            <h2>{title}</h2>
            <p class={projectDescriptionText}>{desc}</p>
        </div>
    )
}

export default ProjectCard
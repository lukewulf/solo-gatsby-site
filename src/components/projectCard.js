import * as React from "react"
import { GatsbyImage } from 'gatsby-plugin-image'
import {
    cardStyle,
    projectDescriptionText
} from './projectCard.module.css'
import { Link } from "gatsby"


const ProjectCard = ({title, desc, img, alt, link, children}) => {
    
    const image = img.childImageSharp.gatsbyImageData

    return (
        <div class={cardStyle}>  
            <Link to={link}>
                <GatsbyImage
                    image={image}
                    alt={alt}
                ></GatsbyImage>
            </Link>
            <h2>{title}</h2>
            <p class={projectDescriptionText}>{desc}</p>
        </div>
    )
}

export default ProjectCard
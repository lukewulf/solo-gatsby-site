import * as React from "react"
import Layout from '../../components/layout'
import ProjectCard from '../../components/projectCard'
import { graphql } from 'gatsby'

// style
const projectContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  padding: "1rem 0 1rem 0",
}

// markup
const ProjectsPage = ({data}) => {
  return (
    <main>
      <Layout pageTitle="Projects">
        <div style={projectContainer}>
        {
          data.allMdx.nodes.map((node) => {
            return(
              <ProjectCard 
                title={node.frontmatter.title}
                desc={node.frontmatter.description}
                img={node.frontmatter.hero_image}
                alt={node.frontmatter.hero_image_alt}
                link={node.slug}
              ></ProjectCard>
            )
          })
        }
        </div> 
      </Layout>
    </main>
  )
}

export const query = graphql
    `query {
      allMdx(sort: {order: DESC, fields: frontmatter___date}) {
        nodes {
          id
          slug
          frontmatter {
            date(formatString: "MMMM D YYYY")
            title
            description
            hero_image_alt
            hero_image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }`

export default ProjectsPage
import * as React from 'react'
import Layout from '../../components/layout'
import ProjectHeading from '../../components/projectHeading'
import ProjectDisplay from '../../components/projectDisplay'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'

// style
const projectDisplay = {
    marginTop: "20px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    padding: "1rem 10%",
}

const projectImg = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    maxWidth: "200px",
    margin: "10px 10px"
}

// markup
const ProjectPage = ({data}) => {
    console.log(data)
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <ProjectHeading projectTitle={data.mdx.frontmatter.title}>
                <MDXRenderer>
                    {data.mdx.body}    
                </MDXRenderer>
            </ProjectHeading>
            <div style={projectDisplay}>
            {
                data.allFile.edges.map((edge) => {
                    const image = edge.node.childImageSharp.gatsbyImageData
                    return (
                        <div style={projectImg}>
                        <GatsbyImage
                            image={image}
                            alt="Placeholder"
                        ></GatsbyImage>
                        </div>
                    )
                })
            }
            </div>
            
        </Layout>
    )
}

console.log(ProjectPage)

export const query = graphql`
    query ($id: String, $slug: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
                description
                gallery_name
            }
            body
        }
        allFile(filter: {sourceInstanceName: {eq: $slug}}) {
            edges {
              node {
                childImageSharp {
                  gatsbyImageData
                }
                absolutePath
                sourceInstanceName
              }
            }
        }
    }
`

export default ProjectPage
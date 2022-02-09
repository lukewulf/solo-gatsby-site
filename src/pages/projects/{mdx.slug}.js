import * as React from 'react'
import Layout from '../../components/layout'
import ProjectHeading from '../../components/projectHeading'
import ProjectDisplay from '../../components/projectDisplay'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const ProjectPage = ({data}) => {
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <ProjectHeading projectTitle={data.mdx.frontmatter.title}>
                <MDXRenderer>
                    {data.mdx.body}    
                </MDXRenderer>
            </ProjectHeading>
            <ProjectDisplay>

            </ProjectDisplay>
        </Layout>
    )
}

export const query = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
                description
            }
            body
        }
    }
`

export default ProjectPage
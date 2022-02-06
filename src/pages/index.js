import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// markup
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home">
        <StaticImage
          alt="A chinese courtyard"
          src="../images/chineseCourtyard.jpg"
        >
        </StaticImage>
      </Layout>
    </main>
  )
}

export default IndexPage

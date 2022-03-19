import * as React from "react"
import Layout from '../components/layout'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const titleStyle = {
  fontSize: "14vw",
  color: "#00024c",
}

const buttonStyle = {
  position: "absolute",
  top: "38vw",
  right: "20vw",
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 32,
  borderRadius: 10,
  padding: "16px 16px",
  backgroundColor: "#00024c",
  fontFamily: "inherit",
  fontSize: "1em"
}

const buttonText = {
  fontSize: "20px",
  fontWeight: 'bold',
  letterSpacing: 0.4,
  color: 'white',
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// markup
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home">
        <h1 style={titleStyle}>0xWRENCH</h1>
      </Layout>
      <button style={buttonStyle}>
        <Link  to="/projects">
          <span style={buttonText}>Explore The Projects</span>
        </Link>
      </button>
    </main>  
  )
}

export default IndexPage

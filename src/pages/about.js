import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from '../components/layout'

// styles
const columnStyle = {
  width: "40%"
}

const imageStyle = {
  paddingTop: "4em",
  position: "fixed",
  zIndex: -1,
  right: 0,
  bottom: 0,
  width: "40%"
}

// markup
const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="About">
        <div style={columnStyle}>
          <h1>JOIN THE FRAY //</h1>
          <p>My name is Luke and I am a software engineer working out of the Bay Area, 
              I have made this site because I want to pursue my passion of generative art.</p>

          <p>Expect cool generative art projects coming soon in the 'Projects' page</p>
          <p>
            Lorem ipsum nunc mattis enim ut tellus elementum sagittis vitae. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Tincidunt augue interdum velit euismod in. Sed velit dignissim sodales ut eu. Non nisi est sit amet facilisis magna. Ac tortor vitae purus faucibus. Cras fermentum odio eu feugiat pretium. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Tincidunt lobortis feugiat vivamus at augue. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Aliquam nulla facilisi cras fermentum. Duis at tellus at urna condimentum mattis pellentesque id nibh. Mauris ultrices eros in cursus turpis massa tincidunt. Netus et malesuada fames ac turpis. Elementum eu facilisis sed odio.
          </p>

          <h4>Contact Me:</h4>
          <p>Twitter: @lukewulf</p>
          <p>Email: lwulf@ucsd.edu</p>
        </div>
        <StaticImage
          src="../images/pikachu.png"
          alt="An Azuki girl with a claymore"
          style={imageStyle}
        >
        </StaticImage>
      </Layout>
    </main>
  )
}

export default AboutPage
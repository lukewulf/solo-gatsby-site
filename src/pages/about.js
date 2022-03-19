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

const suffix = {
  color: "rgb(211, 211, 211)"
}

// markup
const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="About">
        <div style={columnStyle}>
          <h1>JOIN THE FRAY <span style={suffix}>//</span></h1>
          <p>As times are changing so is the medium and definition of digital art.  Over the past 10 years, digital art
            has made huge strides thanks to the advent of cryptographic protocols, code-as-art languages and advances in
            digital ownership.
          </p>

          <p>
            All showcased work is built on a mixture of Javascript and Processing.  Throughout my art, I aim to capture
            how mechanical processes: such as code flow execution, math equations and recursion can be graphically modelled into compelling visuals.
          </p>
          <p>
            I am not the type of developer to overpromise.  However... I can promise you that things are going to get weird.  
            Expect things such as: digital wallet integration, source code on the blockchain, automatic minting processes and new smart contracts. 
            I think they're all awesome technologies and what better way to learn than by doing?
          </p>

          <p>Cheers!</p>

          <h4>Stay Connected:</h4>
          <p>Twitter: @0xWRENCH</p>
          <p>TikTok: ~~TBD~~</p>
          <p>OpenSea: ~~TBD~~</p>
        </div>
        <StaticImage
          src="../images/aboutPageSpiroEdit.png"
          alt="A compilation of multiple spirographs on a blue background"
          style={imageStyle}
        >
        </StaticImage>
      </Layout>
    </main>
  )
}

export default AboutPage
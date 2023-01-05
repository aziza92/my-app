import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../css/index.css"
import logoSketch from "../images/logo-sketch.png"
import logoFigma from "../images/logo-figma.png"
import logoStudio from "../images/logo-studio.png"
import logoFramer from "../images/logo-framer.png"
import logoReact from "../images/logo-react.png"
import logoSwift from "../images/logo-swift.png"
import Card from "../components/Card"
import Section from "../components/Section"
import Wave from "../components/Wave"
import staticdata from "../../staticdata.json"
import Cell from "../components/Cell"

// <Link to={"/page-2"}>Go to page 2</Link>

const IndexPage = () => (
  <Layout>
    <Seo title="Coding with Aziza" />
    <div className="hero">
      <div className="heroGroup">
        <h1>
          Bienvenue sur <br /> notre site react Coding with Aziza!
        </h1>
        <p>
          Prototyper et construire une application avec React et React native{" "}
        </p>

        {/* Button */}
        <Link to="/page-2/">Watch the video</Link>

        {/* LOGO */}
        <div className="logos">
          <img src={logoSketch} alt="" width="50" />
          <img src={logoFigma} alt="" width="50" />
          <img src={logoStudio} alt="" width="50" />
          <img src={logoFramer} alt="" width="50" />
          <img src={logoReact} alt="" width="50" />
          <img src={logoSwift} alt="" width="50" />
        </div>
        {/* SVG Animations  */}
        <Wave />
      </div>
    </div>
    {/* Cards + Title  */}
    <div className="cards">
      <h2>11 courses, more coming</h2>
      <div className="cardGroup">
        <Card
          title="DesignSystem"
          text="10 sections"
          image={require("../images/wallpaper.jpg").default}
        />
        <Card
          title="React for Designers"
          text="11 sections"
          image={require("../images/wallpaper2.jpg").default}
        />
        <Card
          title="Sound Design"
          text="5 sections"
          image={require("../images/wallpaper3.jpg").default}
        />
        <Card
          title="ARKit 2"
          text="10 sections"
          image={require("../images/wallpaper4.jpg").default}
        />
        <Card
          title="React Native"
          text="5 sections"
          image={require("../images/wallpaper3.jpg").default}
        />
        <Card
          title="Gatsby"
          text="7 sections"
          image={require("../images/wallpaper4.jpg").default}
        />
      </div>
    </div>
    {/* Section  */}
    <Section
      image={require("../images/wallpaper2.jpg").default}
      logo={require("../images/logo-react.png").default}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
    />
    {/* Cell data  */}
    <SectionCaption>12 sections - 6 hours</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell key={cell.id} title={cell.title} image={cell.image} />
      ))}
    </SectionCellGroup>
  </Layout>
)

export default IndexPage

const SectionCaption = styled.h3`
  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
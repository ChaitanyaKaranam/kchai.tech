import React from "react"

import Layout from "../components/layout"
import Showcase from "../components/projects/Showcase"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home">
      <Landing/>
      <Portfolio/>
    </div>
  </Layout>
)

function Landing(){
  return(
    <section>
      <div className="landing">
        <div>
          <div>
            <h1>Hi 👋,</h1>
            <h1>I am Krishna Chaitanya, Full Stack Web Developer</h1>
          </div>
          <div>
            <h1 className="showcase-heading">I create courses on Web Development</h1>
          </div>
          <div>
            <button className="btn-lg btn-showcase black-text">Check Courses 👆</button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Portfolio(){
  return(
    <section>
      <div className="portfolio">
        <div>
          <h2>Portfolio</h2>
          <p className="content-main">Here are some of the projects that I worked on in the past</p>
          <hr/>
        </div>
        <Showcase
          title="Artha"
          description="Learning Platform that curates data from YouTube, GitHub and Udemy. This is still on-going project. Open-sourced on GitHub."
          stack="Using ReactJS, Apollo, GraphQL and ExpressJS"
          src="https://www.youtube.com/embed/rO2U3eFQ440"
        />
        <hr/>
        <Showcase
          title="Rick and Morty Router"
          description="This is a fun project that I built as a part of my React Routers course. It uses hooks and routers to provide bookmark-able URL's"
          stack="Using ReactJS, Hooks and React Router"
          src="https://www.youtube.com/embed/bprkmZAqWJM"
        />
      </div>
    </section>
  )
}

export default IndexPage

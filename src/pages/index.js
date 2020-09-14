import React from "react"

import Layout from "../components/layout"
import Showcase from "../components/projects/Showcase"
import SEO from "../components/seo"
import Skill from "../components/skills"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home">
      <Landing />
      <Portfolio />
      <Skills />
    </div>
  </Layout>
)

function Landing() {
  return (
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

function Portfolio() {
  return (
    <section>
      <div className="portfolio">
        <div className="portfolio__header">
          <h1>Portfolio</h1>
          <p>Here are some of the projects that I worked on</p>
        </div>
        <Showcase
          title="Artha"
          description="Learning Platform that curates data from YouTube, GitHub and Udemy. This is still on-going project. Open-sourced on GitHub."
          stack="Using ReactJS, Apollo, GraphQL and ExpressJS"
          src="https://www.youtube.com/embed/rO2U3eFQ440"
        />
        <hr />
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

function Skills() {
  return (
    <section>
      <div className="skills">
        <div className="skills__header">
          <h1>Skills</h1>
        </div>
        <div className="skills__content">
          <Skill
            skill={'React'}
            img={'/icons/stack/React-icon.svg'}
          />
          <Skill
            skill={'Redux'}
            img={'/icons/stack/Redux.svg'}
          />
          <Skill
            skill={'JavaScript'}
            img={'/icons/stack/JS.svg'}
          />
          <Skill
            skill={'NodeJS'}
            img={'/icons/stack/Nodejs.svg'}
          />
          <Skill
            skill={'Adobe XD'}
            img={'/icons/stack/XD.svg'}
          />
          <Skill
            skill={'Gatsby'}
            img={'/icons/stack/Gatsby.svg'}
          />
        </div>
      </div>
    </section>
  )
}

export default IndexPage

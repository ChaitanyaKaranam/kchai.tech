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
      <Videos />
      <Contact />
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

function Videos() {
  return (
    <section>
      <div className="videos">
        <div className="videos__header">
          <h1>Course Videos</h1>
          <p>Here are some of my course videos from my YouTube Channel - <strong>Kchai Programming</strong></p>
        </div>
        <div className="videos__content">
          <div>
            <iframe width="400" height="215" src="https://www.youtube.com/embed/bprkmZAqWJM" frameborder="0" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div>
            <iframe width="400" height="215" src="https://www.youtube.com/embed/jByPO9TM0Dw" frameborder="0" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div>
            <iframe width="400" height="215" src="https://www.youtube.com/embed/EetplXDgZI0" frameborder="0" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <div className="videos__subscribe">
          <p>Like what you see? Check out all the videos</p>
          <button className="btn-lg btn-subscribe">Start Learning 📔</button>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section>
      <div className="contact">
        <div className="contact__header">
          <h1>Get in Touch</h1>
        </div>
        <form>
          <div className="form-field">
            <label htmlFor="fullname">Full Name: </label>
            <input id="fullname" type="text" name="fullname" required/>
          </div>
          <div className="form-field">
            <label htmlFor="email">Email: </label>
            <input id="email" type="email" name="email" required/>
          </div>
          <div className="form-field">
            <label htmlFor="subject">Subject: </label>
            <input id="subject" type="text" name="subject" required/>
          </div>
          <div className="form-field">
            <label htmlFor="message">Message: </label>
            <textarea id="message" type="textarea" name="message" required/>
          </div>
          <button className="btn-lg btn-showcase black-text">Submit Message 📧</button>
        </form>
      </div>
    </section>
  )
}

export default IndexPage

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing/>
  </Layout>
)

function Landing(){
  return(
    <section>
      <div>
        <h2>Hi 👋,</h2>
        <h2>I am Krishna Chaitanya, Full Stack Web Developer</h2>
        <h2>I create courses on Web Development</h2>
        <button>Check Courses 👆</button>
      </div>
      <Typography/>
    </section>
  )
}

function Typography(){
  return(
    <section>
      <div>
        <h1>Showcase Heading 1</h1>
        <h1 className="showcase-heading-2">Showcase Heading 2</h1>
        <br/>
        <h2>Heading Main</h2>
        <h2 className="heading-main-2">Heading Main 2</h2>
        <br/>
        <h3>Heading Section</h3>
        <h3 className="heading-section-2">Heading Section 2</h3>
        <h3 className="heading-section-3">Heading Section 3</h3>
        <br/>
        <p className="content-main">Content Main</p>
        <p>Content Section</p>
      </div>
    </section>
  )
}

export default IndexPage

import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout.js"

const AboutPage = () => {
  return (
    <>
      <Layout>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>About</h1>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p style={{ maxWidth: "45em", textAlign: "justify" }}>
            Whether it be person, business to consumer, or an individual to
            their interests, technology is meant to bring us closer to what we
            care about in the best way possible. I will use that
            principle to provide fast, modern inexpensive and aesthetic software
            to the Prairies and beyond.
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              Interested in working with me.
            </Link>
          </p>
        </div>
      </Layout>
    </>
  )
}

export default AboutPage

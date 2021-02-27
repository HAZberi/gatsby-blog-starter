import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout.js"

const AboutPage = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Layout>
        <h1>About</h1>
        <p style={{ maxWidth: "45em" }}>
          Whether it be person, business to consumer, or an individual to their
          interests, technology is meant to bring us closer to what we care
          about in the best way possible. beri.dev will use that principle to
          provide fast, modern inexpensive and aesthetic software to the
          Prairies and beyond.
        </p>
        <p>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            Interested in working with me.
          </Link>
        </p>
      </Layout>
    </div>
  )
}

export default AboutPage

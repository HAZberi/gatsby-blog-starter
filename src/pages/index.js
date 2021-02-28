import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout.js"

const HomePage = () => {
  return (
    <div>
      <Layout>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>Hello</h1>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h3>
            I'm Hassaan, a front-end engineer living in beautiful Calgary.
          </h3>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h5>
            Need a Developer?{"  "}
            <Link to="/contact" style={{ textDecoration: "none" }}>
              Contact Me
            </Link>
          </h5>
        </div>
      </Layout>
    </div>
  )
}

export default HomePage

import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout.js"

const HomePage = () => {
  return (
    <div>
      <Layout>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>Home</h1>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p>
            This page will contain the usual elements that Home Pages have!!
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h5>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              Need a Developer
            </Link>
          </h5>
        </div>
      </Layout>
    </div>
  )
}

export default HomePage

import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout.js"

const HomePage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Layout>
        <h1>Home</h1>
        <p>This page will contain the usual elements that Home Pages have!!</p>
        <h5>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            Need a Developer
          </Link>
        </h5>
      </Layout>
    </div>
  )
}

export default HomePage

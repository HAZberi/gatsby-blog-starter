import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const NotFound = () => {
  return (
    <Layout>
      <h1 style={{ textAlign: "center" }}>Page Not Found!!</h1>
      <div style={{ textAlign: "center" }}>
        Go back to <Link to="/">Home Page</Link>
      </div>
    </Layout>
  )
}

export default NotFound

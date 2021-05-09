import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/Head"

const NotFound = () => {
  return (
    <>
      <Head pageTitle="Page Not Found" />
      <Layout>
        <h1 style={{ textAlign: "center" }}>Page Not Found!!</h1>
        <div style={{ textAlign: "center" }}>
          Go back to <Link to="/">Home Page</Link>
        </div>
      </Layout>
    </>
  )
}

export default NotFound

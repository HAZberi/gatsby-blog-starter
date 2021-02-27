import React from "react"
import Layout from "../components/Layout.js"

const BlogPage = () => {
  return (
    <>
      <Layout>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>Blog</h1>
        </div>
        <p style={{ display: "flex", justifyContent: "center" }}>
          All the blog posts will appear here.
        </p>
      </Layout>
    </>
  )
}

export default BlogPage

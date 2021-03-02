import React from "react"
import Layout from "../components/Layout.js"
import { graphql, useStaticQuery } from "gatsby"

const BlogPage = () => {
  const {allMarkdownRemark: { edges: posts}} = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            excerpt
            html
          }
        }
      }
    }
  `);
  return (
    <>
      <Layout>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>Blog</h1>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ol>
          {posts.map((post, i) => {
            return (
              <li key={i} style={{maxWidth: "40em", marginBottom: "3em" }}>
                <h2>{post.node.frontmatter.title}</h2>
                <p>Published On: {post.node.frontmatter.date}</p>
                <p>{post.node.excerpt}</p>
              </li>
            )
          })}
          </ol>
        </div>
      </Layout>
    </>
  )
}

export default BlogPage

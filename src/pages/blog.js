import React from "react"
import Layout from "../components/Layout.js"
import { graphql, useStaticQuery, Link } from "gatsby"

const styles = {
  defaultLink: {
    textDecoration: "none",
    color: "#402f1c",
  },
}

const BlogPage = () => {
  const {
    allMarkdownRemark: { edges: posts },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `)
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
                <li key={i} style={{ maxWidth: "40em", marginBottom: "3em" }}>
                  <h2>
                    <Link
                      to={`/blog/${post.node.fields.slug}`}
                      style={styles.defaultLink}
                    >
                      {post.node.frontmatter.title}
                    </Link>
                  </h2>
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

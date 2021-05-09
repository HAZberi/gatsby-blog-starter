import React from "react"
import Layout from "../components/Layout.js"
import { graphql, useStaticQuery, Link } from "gatsby"
import styles from "../styles/blog.module.scss"
import Head from "../components/Head"

const BlogPage = () => {
  /*   const {
    allMarkdownRemark: { edges: markdownPosts },
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
  `) */
  const {
    allMarkdownRemark: { edges: markdownPosts },
    allContentfulBlogPosts: { edges: contentfulPosts },
  } = useStaticQuery(graphql`
    query {
      allContentfulBlogPosts(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
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
      <Head pageTitle="Blog" />
      <Layout>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>Blog</h1>
        </div>
        <div
          style={{
            marginTop: "1em",
            maxWidth: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ol className={styles.posts}>
            {markdownPosts.map((post, i) => {
              return (
                <li key={i} className={styles.post}>
                  <Link to={`/blog/${post.node.fields.slug}`}>
                    <h2>{post.node.frontmatter.title}</h2>
                    <p>Published On: {post.node.frontmatter.date}</p>
                  </Link>
                </li>
              )
            })}
            {contentfulPosts.map((post, i) => {
              return (
                <li key={i} className={styles.post}>
                  <Link to={`/blog/${post.node.slug}`}>
                    <h2>{post.node.title}</h2>
                    <p>Published On: {post.node.publishedDate}</p>
                  </Link>
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

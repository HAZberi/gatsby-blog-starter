import React from "react"
import Layout from "../components/Layout.js"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const BlogTemplate = props => {
  return (
    <Layout>
      <div style={{ maxWidth: "50em", margin: "0 auto" }}>
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <p>Published On: {props.data.markdownRemark.frontmatter.date}</p>
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        />
      </div>
    </Layout>
  )
}

export default BlogTemplate

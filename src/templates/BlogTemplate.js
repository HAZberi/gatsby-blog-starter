import React from "react"
import Layout from "../components/Layout.js"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
    contentfulBlogPosts(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
      }
    }
  }
`

const BlogTemplate = props => {
  const generateContentJSX = () => {
    if (props.data.markdownRemark)
      return (
        <div style={{ maxWidth: "50em", margin: "0 auto" }}>
          <h1>{props.data.markdownRemark.frontmatter.title}</h1>
          <p>Published On: {props.data.markdownRemark.frontmatter.date}</p>
          <div
            dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
          />
        </div>
      )
    if (props.data.contentfulBlogPosts) {
      const bodyContent = JSON.parse(props.data.contentfulBlogPosts.body.raw)
      console.log(bodyContent)
      return (
        <div style={{ maxWidth: "50em", margin: "0 auto" }}>
          <h1>{props.data.contentfulBlogPosts.title}</h1>
          <p>Published On: {props.data.contentfulBlogPosts.publishedDate}</p>
          <div>{documentToReactComponents(bodyContent)}</div>
        </div>
      )
    }
  }
  return <Layout>{generateContentJSX()}</Layout>
}

export default BlogTemplate

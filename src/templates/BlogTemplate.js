import React from "react"
import Layout from "../components/Layout.js"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import { GatsbyImage } from "gatsby-plugin-image"

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
        references {
          file {
            url
          }
          description
          title
          contentful_id
          gatsbyImageData
        }
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
      const references = props.data.contentfulBlogPosts.body.references
      //if blog posts contained images or if we want to customized a specific
      //node we have to drill down the node and use ids as references
      //especially in the case of images
      //without options object bodyContent
      const options = {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: node => {
            const imageId = node.data.target.sys.id
            const referenceDetail = references.find(
              ({ contentful_id: id }) => id === imageId
            )
            const alt = referenceDetail.title
            //GatsbyImage component requires you to pass image config as prop
            //if images are coming in dynamically - then we have to query
            //gatsbyImageData in GraphQl and set it as image prop to GatsbyImage component
            const image = referenceDetail.gatsbyImageData
            return (
              <GatsbyImage
                alt={alt}
                image={image}
                style={{
                  alignSelf: "center",
                  borderRadius: "15px",
                  marginBottom: "1.25em",
                }}
              />
            )
          },
        },
      }
      return (
        <div style={{ maxWidth: "50em", margin: "0 auto" }}>
          <h1>{props.data.contentfulBlogPosts.title}</h1>
          <p>Published On: {props.data.contentfulBlogPosts.publishedDate}</p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {documentToReactComponents(bodyContent, options)}
          </div>
        </div>
      )
    }
  }
  return <Layout>{generateContentJSX()}</Layout>
}

export default BlogTemplate

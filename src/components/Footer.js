import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer style={{ display: "flex", justifyContent: "center" }}>
      <p>Created By {data.site.siteMetadata.author} © {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer

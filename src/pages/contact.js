import React from "react"
import Layout from "../components/Layout.js"
import { graphql, useStaticQuery } from "gatsby"

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
          phone
        }
      }
    }
  `)
  return (
    <div>
      <Layout>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Contact Me</h1>
          <p>I am waiting</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>
            Phone:{" "}
            <a
              href="tel:5555555555"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {data.site.siteMetadata.phone}
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:hassaan.zuberi@ucalgary.ca"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {data.site.siteMetadata.email}
            </a>
          </p>
          <p>
            Follow me on
            <a
              href="https://twitter.com/"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Twitter
            </a>
          </p>
        </div>
      </Layout>
    </div>
  )
}

export default ContactPage

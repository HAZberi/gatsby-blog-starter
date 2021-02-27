import React from "react"

const ContactPage = () => {
  return (
    <div>
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
            (555) 555-5555
          </a>
        </p>
        <p>
          Email:{" "}
          <a
            href="mailto:hassaan.zuberi@ucalgary.ca"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            hassaan.zuberi@ucalgary.ca
          </a>
        </p>
        <p>
          Follow me on
          <a href="https://twitter.com/" style={{ textDecoration: "none" }} target="_blank">
            {" "}
            Twitter
          </a>
        </p>
      </div>
    </div>
  )
}

export default ContactPage

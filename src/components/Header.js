import React from "react"
import { Link } from "gatsby"

const activeLinks = {
  textDecoration: "none",
  backgroundColor: "#ffffff",
  color: "#000000",
  padding: "5px",
}

const defaultLinks = {
  textDecoration: "none",
  color: "black",
  padding: "5px",
}

const Header = () => {
  return (
    <header
      style={{
        width: "100%",
        height: "5em",
        backgroundColor: "palegreen",
        display: "inline-flex",
      }}
    >
      <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
        }
      `}</style>
      <div>
        <h1 style={{ margin: 0, display: "inline-flex", padding: "20px" }}>
          HZ
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "50em",
          margin: "auto",
        }}
      >
        <Link to="/" style={defaultLinks} activeStyle={activeLinks}>
          Home
        </Link>
        <Link to="/blog" style={defaultLinks} activeStyle={activeLinks}>
          Blog
        </Link>
        <Link to="/about" style={defaultLinks} activeStyle={activeLinks}>
          About Me
        </Link>
        <Link to="/contact" style={defaultLinks} activeStyle={activeLinks}>
          Contact Me
        </Link>
      </div>
    </header>
  )
}

export default Header

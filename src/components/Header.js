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
    <div
      style={{
        width: "100%",
        height: "5em",
        backgroundColor: "palegreen",
      }}
    >
      <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
        }
      `}</style>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          height: "5em",
          maxWidth: "50em",
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
    </div>
  )
}

export default Header

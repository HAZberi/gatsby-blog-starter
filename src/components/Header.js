import React from "react"
import { Link } from "gatsby"
import headerLinks from "./header.module.scss"

const Header = () => {
  return (
    <header
      style={{
        width: "100%",
        height: "5em",
        backgroundColor: "#a2c2cf",
        display: "inline-flex",
      }}
    >
      <style jsx="true" global="true">{`
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
        <Link
          to="/"
          className={headerLinks.defaultLinks}
          activeClassName={headerLinks.activeLinks}
        >
          Home
        </Link>
        <Link
          to="/blog"
          className={headerLinks.defaultLinks}
          activeClassName={headerLinks.activeLinks}
        >
          Blog
        </Link>
        <Link
          to="/about"
          className={headerLinks.defaultLinks}
          activeClassName={headerLinks.activeLinks}
        >
          About Me
        </Link>
        <Link
          to="/contact"
          className={headerLinks.defaultLinks}
          activeClassName={headerLinks.activeLinks}
        >
          Contact Me
        </Link>
      </div>
    </header>
  )
}

export default Header

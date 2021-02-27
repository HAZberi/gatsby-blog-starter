import React from "react"
import { Link } from "gatsby"
import Footer from "../components/Footer.js";
import Header from "../components/Header.js";

const HomePage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Header />
      <h1>Home</h1>
      <p>This page will contain the usual elements that Home Pages have!!</p>
      <h5>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          Need a Developer
        </Link>
      </h5>
      <Footer />
    </div>
  )
}

export default HomePage

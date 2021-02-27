import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import "../styles/index.scss";

const Layout = props => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout

import React from "react";
import Footer from "../components/Footer.js"
import Header from "../components/Header.js";

const BlogPage = () => {
    return (
        <>
            <Header />
            <div style={{display: "flex", justifyContent: "center"}}>
                <h1>Blog</h1>
            </div>
            <p style={{display: "flex", justifyContent: "center"}}>All the blog posts will appear here.</p>
            <Footer />
        </>
    )
}

export default BlogPage;
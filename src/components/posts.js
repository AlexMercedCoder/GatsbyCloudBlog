

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./posts.css"

function Posts() {
  const data = useStaticQuery(
    graphql`
    query {
      allBlogPost {
        nodes {
          blogContent
          blogTitle
          id
        }
      }
    }
    `
  )



  return (
      <div className="posts">
          <p>Latest from Alex Merced's Headless Blog...</p>
          <h1> {data.allBlogPost.nodes[0].blogTitle} </h1>
          <p> {data.allBlogPost.nodes[0].blogContent} </p>
      </div>


  )
}

export default Posts

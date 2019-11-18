

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./posts.css"

function Markdown() {
  const data = useStaticQuery(
    graphql`
    query {
        allMarkdownRemark {
          nodes {
            html
            internal {
              content
            }
            frontmatter {
              Title
            }
          }
        }
      }
    `
  )



  return (
      <div className="posts">
          <p>Latest from Alex Merceds Markdown Blog...</p>
          <h1>{data.allMarkdownRemark.nodes[0].frontmatter.Title}</h1>
          <p>{data.allMarkdownRemark.nodes[0].internal.content}</p>
      </div>


  )
}

export default Markdown

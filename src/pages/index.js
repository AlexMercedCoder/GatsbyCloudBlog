import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Posts from "../components/posts"
import Markdown from "../components/markdown"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Posts/>
    <Markdown/>
    <Link to="/page-2/">Go to page 2</Link>
    <br/>
    <hr/>
  </Layout>
)

export default IndexPage

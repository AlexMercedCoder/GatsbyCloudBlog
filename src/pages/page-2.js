import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./style.css"


const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className ="links">
    <a href="https://sharp-ride-fd9f84.netlify.com/">React Front-End</a>
    <a href="https://inspiring-stonebraker-b067d0.netlify.com/">Angular Front-End</a>
    <a href="https://upbeat-visvesvaraya-747ee7.netlify.com/">Vue Front-End</a>
    <a href="https://flamboyant-tesla-df2b2c.netlify.com/">StencilJS Front-End</a>
    <a href="https://sad-jang-a6f936.netlify.com/">SvelteJS Front-End</a>
    <Link to="/">Back to Main Page</Link>
    </div>
  </Layout>
)

export default SecondPage

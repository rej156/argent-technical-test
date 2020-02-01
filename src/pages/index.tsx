/** @jsx jsx */
import React from "react"
import { Styled, jsx } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArgentContent from "../containers/ArgentContent"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ArgentContent></ArgentContent>
  </Layout>
)

export default IndexPage

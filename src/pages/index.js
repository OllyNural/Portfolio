import React from 'react'

import Layout from '../components/layout'
import Landing from '../components/home/landing'
import About from '../components/home/about'
import Pricing from '../components/home/pricing'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `oliver nural`, `olly nural`, `developer`, `engineer`, `DevOps`]} />
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}> */}
      <Landing />
      <About />
      <Pricing />
    {/* </div> */}
  </Layout>
)

export default IndexPage

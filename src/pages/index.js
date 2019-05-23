import React from 'react'

import Layout from '../components/layout'
import Landing from '../components/home/landing'
import About from '../components/home/about'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <script src="https://unpkg.com/jam-icons@2.0.0/js/jam-icons.min.js"></script>
    <SEO title="Home" keywords={[`gatsby`, `oliver nural`, `olly nural`, `developer`, `engineer`, `DevOps`]} />
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}> */}
      <Landing />
      <About />
    {/* </div> */}
  </Layout>
)

export default IndexPage

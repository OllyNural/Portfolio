import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import SimplexNoise from 'simplex-noise'

import Header from './header'
import './layout.css'
import testText from './test-text.module.css'
import BackgroundCanvas from './background-canvas';

const Layout = ({ children }) => {
  let simplex = new SimplexNoise()
  console.log(simplex)
  return (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
      <div style={{zIndex:1}} >
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </div>
      {/* <BackgroundCanvas noise={simplex} /> */}
      <h1 className={testText.title}> Hello this is some test text!</h1>
      </>
    )}
  />
)}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

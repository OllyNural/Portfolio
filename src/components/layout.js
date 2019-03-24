import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
// import SimplexNoise from 'simplex-noise'

import Header from './header'
// import BackgroundCanvas from './background-canvas';
import './layout.css'

const Layout = ({ children }) => {
  // let simplex = new SimplexNoise()
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
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
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
      </>
    )}
  />
)}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

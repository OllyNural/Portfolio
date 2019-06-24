/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import Header from './headerLeft'

import "./layout.css"

const theme = createMuiTheme({
  palette: {
     primary: {
        light: '#fff',
        main: '#325D79',
        dark: '#325D79'
     },
     secondary: {
       main: '#F26627',
     },
  },
  typography: { 
     useNextVariants: true
  }
});

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteBlogTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <MuiThemeProvider theme={theme}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          {/* <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer> */}
        </div>
      </MuiThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

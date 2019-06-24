import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
// import ChevronLeft from "@material-ui/icons/ChevronLeft"
// import ChevronLeft from "@material-ui/icons/ChevronLeftOutlined"
import ChevronLeft from "@material-ui/icons/ChevronLeftTwoTone"
import React from "react"
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  headerLink: {
  },
  headerChevron: {
    marginLeft: '-19px'
  //   opacity: '0',
  //   transition: 'opacity 100ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-image 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  }
})

function Header(props) {
  const { classes } = props

  return (
    <StaticQuery
      query={graphql`
        query BlogTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => {
        return (
          <header>
            <div
              style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `1.45rem 1.0875rem`,
              }}
            >
              <h1 style={{ margin: 0, display: `block`, textAlign: `left` }}>
                <Link
                  className={classes.headerLink} 
                  to="/"
                  style={{
                    textDecoration: `none`,
                    backgroundImage: 'none',
                    color: `rgba(0, 0, 0, 0.87)`,
                  }}
                >
                <ChevronLeft className={classes.headerChevron} style={{verticalAlign: 'middle', fontSize: '60'}}/>
                </Link>
                <Link
                  className={classes.headerLink} 
                  to="/"
                  style={{
                    textDecoration: `none`,
                    color: `rgba(0, 0, 0, 0.87)`,
                  }}
                >
                {data.site.siteMetadata.title.toUpperCase()}
                </Link>
              </h1>
            </div>
          </header>
        )
      }}
    />
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default withStyles(styles)(Header)

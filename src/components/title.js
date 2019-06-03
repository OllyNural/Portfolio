import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
})

function Title(props) {
  const { classes } = props
  return (
    <StaticQuery
      query={graphql`
        query TitleTitleQuery {
          site {
            siteMetadata {
                about
                social {
                  twitter
                }
            }
          }
        }
      `}
      render={(data) => {
        return (
          <React.Fragment>
            <h1><Link style={{color: `rgba(0, 0, 0, 0.87)`}} to="/">THE JUNIOR DEV</Link></h1>
            <span className={classes.subHeading}> A blog following the life of a junior developer.<br /> Demystifying software delivery for other junior developers. </span>
          </React.Fragment>
        )
      }}
    />
  )
}

export default withStyles(styles)(Title);
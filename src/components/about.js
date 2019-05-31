import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  subHeading: {
    fontSize: '1.75em',
    fontFamily: 'Aleo'
  },
})

function About(props) {
  const { classes } = props
  return (
    <StaticQuery
      query={graphql`
        query AboutTitleQuery {
          site {
            siteMetadata {
                title
            }
          }
        }
      `}
      render={(data) => {
        return (
          <React.Fragment>
            <h1><Link style={{color: `rgba(0, 0, 0, 0.87)`, textDecoration: `none`,}} href="/">THE JUNIOR DEV</Link></h1>
            <span className={classes.subHeading}> A blog following the life of a junior developer.<br /> Demystifying software delivery for junior developers. </span>
          </React.Fragment>
        )
      }}
    />
  )
}

export default withStyles(styles)(About);
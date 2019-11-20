import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { withStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";

const styles = theme => ({
  heroText: {
    textAlign: `center`
  }
})

function Title(props) {
  const { classes } = props
  return (
    <StaticQuery
      query={graphql`
        query HomeTitleQuery {
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
            <Grid item xs={12}>
              <h1><Link style={{color: `rgba(0, 0, 0, 0.87)`, textDecorationColor: 'red'}} to="/">{data.site.siteMetadata.title.toUpperCase()}</Link></h1>
            </Grid>
            <Grid item xs={12} className={classes.heroText} >
              {/* <span className={classes.subHeading}> A blog following the life of a junior developer.</span><br />
              <span className={classes.subHeading}>Demystifying software delivery for other junior developers. </span> */}
              <span className={classes.subHeading}> A blog for new and inexperienced developers; written by a senior developer.</span><br />
              <span className={classes.subHeading}> Demystifying software delivery for junior developers.</span>
            </Grid>
          </React.Fragment>
        )
      }}
    />
  )
}

export default withStyles(styles)(Title);
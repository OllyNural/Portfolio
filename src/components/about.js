import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { withStyles } from "@material-ui/styles";

import { Grid, Paper } from "@material-ui/core";
import Image from "./image"

const styles = theme => ({
  aboutContainer: {
    marginBottom: '35px',
  },
  aboutTextContainer: {
    fontSize: `0.8em`,
    padding: `15px`,
  },
  aboutTitle: {
    textAlign: 'center',
    marginTop: '0px',
    marginBottom: '20px',
  },
  aboutTitleSpan: {
    width: '100%',
    position: 'relative', 
    '&:after': {
      display: 'block',
      content: '""',
      width: '100%',
      height: '2px',
      background: 'black',
      position: 'absolute',
      bottom: '-10px',
      left: '0',
      backgroundColor: theme.palette.secondary.main,
      marginTop: '5px',
    },
  },
  aboutImage: {
    padding: '15px 15px 15px 15px',
    marginBottom: '0px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboutText: {
    marginTop: '10px',
    marginBottom: '0px',
    paddingLeft: '10px',
    paddingRight: '10px',
    textAlign: 'center',
    lineHeight: '24px',
  }
})

function About(props) {
  const { classes } = props

  return (
    <StaticQuery
      query={graphql`
        query AboutSiteInformation {
          site {
            siteMetadata {
              about,
              author
            }
          }
        }
      `}
      render={(data) => {
        return (
          <Paper className={classes.aboutContainer}>
            <Grid container direction="row">
              <Grid className={classes.aboutImage} item xs={5} sm={12}>
                <Image />
              </Grid>
              <Grid className={classes.aboutTextContainer} item xs={7} sm={12}>
                <h3 className={classes.aboutTitle} ><span className={classes.aboutTitleSpan}>{data.site.siteMetadata.author}</span></h3>
                <p className={classes.aboutText}>{data.site.siteMetadata.about}</p>
              </Grid>
            </Grid>
          </Paper>
        )
      }}
    />
  )
}

export default withStyles(styles)(About)
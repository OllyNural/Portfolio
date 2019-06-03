import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { withStyles } from "@material-ui/styles";

import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { Grid } from "@material-ui/core";

const styles = theme => ({
  aboutText: {
    fontSize: `0.8em`,
  },
  aboutContainer: {
    padding: `12px`,
  },
  aboutTitle: {
    display: `inline`,
  }
})

function About(props) {
  const { classes } = props
  return (
    <StaticQuery
      query={graphql`
        query AboutSiteMetadata {
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
          <Grid className={classes.aboutContainer} item xs={12}>
            <h3 className={classes.aboutTitle} >Hello!</h3><span role="img" aria-labelledby="Wave Emoji" aria-label="Wave emoji">👋</span>
            <p className={classes.aboutText}>My name is Oliver - a software engineer based in London, UK.</p>
            <p className={classes.aboutText}>I have passions for <i>Javascript</i>, <i>DevOps</i> and teaching other developers as much as I can along the way.</p>
            <p className={classes.aboutText}> This blog is aimed at recording my progress as a junior developer, and providing insight and thoughts for future junior developers.</p>
            <IoLogoGithub />
            <IoLogoLinkedin />
          </Grid>
        )
      }}
    />
  )
}

export default withStyles(styles)(About)
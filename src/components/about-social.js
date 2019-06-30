import React from 'react'
import { StaticQuery, graphql } from "gatsby";
import { Paper, Grid, withStyles } from '@material-ui/core';
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io';

const styles = theme => ({
  socialContainer: {
    padding: '15px',
  },
  socialTitle: {
    textAlign: 'center',
    marginTop: '0px',
  },
  socialTitleSpan: {
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
  linkContainer: {
    padding: `15px`,
  },
  socialLink: {
    textDecoration: `none`,
    backgroundImage: 'none',
    color: theme.palette.primary.main,
    transition: 'color 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  socialIcon: {
    fontSize: '2em'
  },
  socialLinkContainer: {
    borderRight: '1px #ff0000'
  },
})

function AboutSocial(props) {
  const { classes } = props

  return (
    <StaticQuery
      query={graphql`
        query AboutSiteSocial {
          site {
            siteMetadata {
              social {
                github,
                twitter,
                linkedin
              }
            }
          }
        }
      `}
      render={(data) => {
        return (
          <Paper className={classes.socialContainer}>
            <Grid container item xs={12} direction={'column'} >
              <h3 className={classes.socialTitle}><span className={classes.socialTitleSpan}>Social</span></h3>
              <Grid className={classes.linkContainer} container spacing={2} alignItems="center" justify="center">
                <Grid className={classes.socialLinkContainer} item align="center" xs>
                  <a className={classes.socialLink} target="__github" href={`https://www.github.com/${data.site.siteMetadata.social.github}`}>
                    <IoLogoGithub className={classes.socialIcon} />
                  </a>
                </Grid>
                <Grid item align="center" xs>
                  <a className={classes.socialLink} target="__linkedin" href={`https://www.linkedin.com/in/${data.site.siteMetadata.social.linkedin}`}>
                    <IoLogoLinkedin className={classes.socialIcon} />
                  </a>
                </Grid>
                <Grid item align="center" xs>
                  <a className={classes.socialLink} target="__twitter" href={`https://www.twitter.com/${data.site.siteMetadata.social.twitter}`}>
                    <IoLogoTwitter className={classes.socialIcon} />
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        )
      }}
    />
  )
}

export default withStyles(styles)(AboutSocial)
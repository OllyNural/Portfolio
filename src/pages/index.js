import React from "react"
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeContainer from "../components/homeContainer"
import { Link } from "@material-ui/core";

const styles = theme => ({
  heading: {
    marginTop: '50px',
    marginBottom: '20px',
    textAlign: 'center'
  },
  subHeading: {
    fontSize: '1.75em',
    fontFamily: 'Aleo'
  },
  hidden: {
    display: 'none',
  }
})

// const IndexPage = props => {
function IndexPage(props) {
  const { classes } = props;

  return (
    <Layout>
      <SEO title="Home" />

      <Grid container spacing={3}>
        <Grid item className={classes.heading} xs={12}>
          <h1><Link color='inherit' underline='none' className={classes.link} href="/">THE JUNIOR DEV</Link></h1>
          <span className={classes.subHeading}> A blog demystifying development </span>
        </Grid>
        <HomeContainer />
      </Grid>

      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
  )
}

export default withStyles(styles)(IndexPage);

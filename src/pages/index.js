import React from "react"
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeContainer from "../components/homeContainer"
import About from "../components/about"

const styles = theme => ({
  heading: {
    marginTop: '50px',
    marginBottom: '20px',
    textAlign: 'center'
  },
})

// const IndexPage = props => {
function IndexPage(props) {
  const { classes } = props;

  return (
    <Layout>
      <SEO title="Home" />
      <Grid container spacing={3}>
        <Grid item className={classes.heading} xs={12}>
          <About />
        </Grid>
        <Grid container item className={classes.heading} xs={12}>
          <HomeContainer />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default withStyles(styles)(IndexPage);

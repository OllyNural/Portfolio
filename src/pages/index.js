import React from "react"
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeContainer from "../components/homeContainer"
import Title from "../components/title"

const styles = theme => ({
  aboutHeading: {
    marginTop: '50px',
    marginBottom: '20px',
    // textAlign: 'center'
  },
  homeHeading: {
    marginTop: 0,
  }
})

// const IndexPage = props => {
function IndexPage(props) {
  const { classes } = props;

  return (
    <Layout>
      <SEO title="Home" />
      <Grid container spacing={3}>
        <Grid container item className={classes.aboutHeading} xs={12}>
          <Title />
        </Grid>
        <Grid container className={classes.homeHeading} spacing={1} >
          <HomeContainer />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default withStyles(styles)(IndexPage);

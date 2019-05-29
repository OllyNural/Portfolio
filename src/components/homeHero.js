import React from "react";
import { withStyles } from "@material-ui/styles";
import { Paper, Grid } from "@material-ui/core";

import Image from "../components/image"

const styles = theme => ({
  gridRoot: {
    // padding: '10px'
  },
  homeCard: {

  },
  image: {
    // marginLeft: '12px',
  }
})

function HomeHero(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Grid className={classes.gridRoot} item xs={12} md={12}>
        <Paper>
          <Grid container>
            <Grid className={classes.image} item xs={12} sm={6}>
              <Image />
            </Grid>
            <Grid item xs={12} sm={6}>
              <h2>Hello <span role="img" aria-label="Emoji Wave">👋</span> </h2>

              <p> Welcome to my blog! </p>

              <p> This is a blog aimed at Junior Developers, aiming to demystify </p>

              <p> This blog aims to </p>

              <h2> About Me </h2>
              <p> My name is Oliver Nural</p>
              <p> I am a full stack Javascript engineer with a specialisation in DevOps practices and environments. </p>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid className={classes.gridRoot} item xs={12} md={5}>
        <Paper> 
          <h2>Recent Articles</h2>
          <p> Coming soon </p>
        </Paper>
      </Grid>
    </React.Fragment>
  )
}


export default withStyles(styles)(HomeHero);
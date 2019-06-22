import React from "react";
import { Link } from "gatsby"
import { withStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";

const styles = theme => ({
  blogEntry: {
    textAlign: 'left',
    paddingLeft: '30px',
    paddingRight: '30px',
    marginBottom: '30px'
  },
  blogTitle: {
    marginTop: 0,
    marginBottom: 0,
  },
  blogDate: {
    fontSize: '0.8em',
    textAlign: 'center',
    marginRight: '50px',
    height: '100%',
    color: theme.palette.secondary.main,
  },
})

function BlogEntry(props) {
  const { classes } = props

  return (
    <Grid container item sx={12} direction="column" className={classes.blogEntry} >
      <h3 className={classes.blogTitle} ><Link style={{color: `rgba(0, 0, 0, 0.87)`}} to={props.slug}>{props.title}</Link></h3>
      <Grid container alignItems="center" direction={'row'} item>
        <div className={classes.blogSubhead}>
          <span className={classes.blogDate}>{props.date}</span>
        </div>
        </Grid>
        <p className={classes.blogDescription} dangerouslySetInnerHTML={{
            __html: props.excerpt,
          }}
        />
    </Grid>
  )
}

export default withStyles(styles)(BlogEntry)
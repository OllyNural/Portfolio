import React from "react";
import { Link } from "gatsby"
import { withStyles } from "@material-ui/styles";
import { Grid, Chip, Avatar } from "@material-ui/core";

const styles = theme => ({
  blogEntry: {
    textAlign: 'left',
    paddingLeft: '30px',
    paddingRight: '30px',
  },
  blogTitle: {
    marginTop: 0,
    marginBottom: 0,
  },
  blogDate: {
    marginBottom: '10px',
    fontSize: '0.8em',
  },
  blogDescription: {

  }
})

function BlogEntry(props) {
  const { classes } = props

  return (
    <Grid container item sx={12} direction="column" className={classes.blogEntry}>
      <h3 className={classes.blogTitle} ><Link style={{color: `rgba(0, 0, 0, 0.87)`}} to={props.slug}>{props.title}</Link></h3>
      <span className={classes.blogDate}>{props.date}</span>
      <Grid container className={classes.gridIconsContainer} spacing={2} >
          {props.tags.map(data => {
            console.log(data)
            return (
              <Grid key={data.key} item>
                <Chip label={data} variant={`default`} />
              </Grid>
            )
          })}
        </Grid>
      <p className={classes.blogDescription} dangerouslySetInnerHTML={{
          __html: props.excerpt,
        }}
      />
    </Grid>
  )
}

export default withStyles(styles)(BlogEntry)
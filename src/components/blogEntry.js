import React from "react";
import { Link } from "gatsby"
import { withStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';

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
  blogSubDate: {
    fontSize: '0.8em',
    textAlign: 'center',
    marginRight: '50px',
    marginBottom: '10px',
  },
  blogDescription: {
    marginBottom: '10px',
  },
  blogDate: {
    color: theme.palette.secondary.main,
  },
  tagsList: {
    margin:'0',
    padding:'0',
    listStyle:'none',
    display: 'flex',
  },
  tag: {
    fontSize: '0.8em',
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
    marginRight: '10px'
  }
})

function BlogEntry(props) {
  const { classes } = props

  return (
    <Grid container item sx={12} direction="column" className={classes.blogEntry} >
      <h3 className={classes.blogTitle} ><Link style={{color: `rgba(0, 0, 0, 0.87)`}} to={props.slug}>{props.title}</Link></h3>
      <Grid container direction={'row'} item>
        <span className={classes.blogSubDate}><i>Published on <span className={classes.blogDate}>{props.date}</span></i></span>
        <Divider variant="middle" />
        </Grid>
        <p className={classes.blogDescription} dangerouslySetInnerHTML={{
            __html: props.excerpt,
          }}
        />
        <ul className={classes.tagsList}>
        {props.tags.map((tag) => {
          return (
            <li className={classes.tag}>#{tag}</li>
          )
        })}
        </ul>
    </Grid>
  )
}

export default withStyles(styles)(BlogEntry)
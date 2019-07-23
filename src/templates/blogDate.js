import React from 'react'
import { withStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

const styles = theme => ({
  blogSubDate: {
    textAlign: 'center',
    fontSize: '1em',
    marginBottom: '10px'
  },
  blogDateWhole: {
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
    position: 'relative',
  },
  blogDate: {
    color: theme.palette.secondary.main,
  },
  tagsList: {
    margin: '0',
    padding: '0',
    listStyle: 'none',
    display: 'flex',

  },
  tag: {
    fontSize: '0.8em',
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
    marginRight: '10px'
  }
})

function BlogDate(props) {
  const { classes } = props

  return (
    <React.Fragment>
      <div className={classes.blogSubDate}>
        <i className={classes.blogDateWhole}>Published on <span className={classes.blogDate}>{props.date}</span></i>
      </div>
      <Grid container justify="center" spacing={2}>
        {props.tags.map((tag) => {
          return (
            <Grid item><span className={classes.tag}>#{tag}</span></Grid>
          )
        })}
      </Grid>
      <br />
    </React.Fragment>
  )
}

export default withStyles(styles)(BlogDate)
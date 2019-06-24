import React from 'react'
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
    blogHeader: {
        '&:after': {
          content: '""',
          borderTop: '2px solid',
          color: theme.palette.primary.main,
        },
        '&:before': {
          content: '""',
          borderTop: '2px solid',
          color: theme.palette.primary.main,
        },
        display: 'grid',
        // gridTemplateColumns: 'minmax(20px, 1fr) auto minmax(20px, 1fr)',
        alignItems: 'center',
        textAlign: 'center',
        gridGap: '30px',
        width: '100%',
      },
})

function BlogHeader(props) {
    const { classes } = props

    return (
        <h2 className={classes.blogHeader}>{props.title}</h2>
    )
}

export default withStyles(styles)(BlogHeader)
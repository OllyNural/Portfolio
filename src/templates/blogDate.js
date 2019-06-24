import React from 'react'
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
    blogSubDate: {
        fontSize: '1em',
        textAlign: 'center',
        marginRight: '50px',
        marginBottom: '100px',
    },
    blogDate: {
        color: theme.palette.secondary.main,
    },
})

function BlogDate(props) {
    const { classes } = props

    return (
        <p className={classes.blogSubDate}><i>Published on <span className={classes.blogDate}>{props.date}</span></i></p>
    )
}

export default withStyles(styles)(BlogDate)
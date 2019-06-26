import React from 'react'
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
    blogHeader: {
        '&:after': {
            content: '""',
            borderTop: '2px solid',
            color: theme.palette.primary.main,
            // animation: '$slide-in-from-right 500ms cubic-bezier(0.4, 0, 0.2, 1) 200ms 1',
            // animationFillMode: 'forwards',
        },
        '&:before': {
            content: '""',
            borderTop: '2px solid',
            color: theme.palette.primary.main,
            // animation: '$slide-in-from-left 500ms cubic-bezier(0.4, 0, 0.2, 1) 200ms 1',
            // animationFillMode: 'forwards',
        },
        display: 'grid',
        // gridTemplateColumns: 'minmax(20px, 1fr) auto minmax(20px, 1fr)',
        alignItems: 'center',
        textAlign: 'center',
        gridGap: '30px',
        width: '100%',
        marginBottom: '1em',
        marginTop: '10px',
    },
    // '@keyframes slide-in-from-left': {
    //     '0%': {
    //         transform: 'translateX(-100%)',
    //     },
    //     '100%': {
    //         transform: 'translateX(0)',
    //     }
    // },
    // '@keyframes slide-in-from-right': {
    //     '0%': {
    //         transform: 'translateX(100%)',
    //     },
    //     '100%': {
    //         transform: 'translateX(0)',
    //     }
    // },
})

function BlogHeader(props) {
    const { classes } = props

    return (
        <h2 className={classes.blogHeader}>{props.title}</h2>
    )
}

export default withStyles(styles)(BlogHeader)
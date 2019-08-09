import React from 'react'
import { withStyles } from '@material-ui/styles';

const READING_SPEED = 200

const styles = () => ({
})

function ReadingTime(props) {
    // const { classes } = props

    let content = props.content
    let regex = /<[^>]*>/gmi
    let length = content.replace(regex, "\n\t").split(" ").length
    let readingTime = Math.ceil(length / READING_SPEED)
    return (
        <span>{readingTime} min read</span>
    )

}

export default withStyles(styles)(ReadingTime)
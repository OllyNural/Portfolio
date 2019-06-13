import React from "react";
import { withStyles } from "@material-ui/styles";
// import { createMuiTheme } from '@material-ui/core/styles'
import { Chip, Avatar } from "@material-ui/core";
import Check from "@material-ui/icons/Check"

const styles = theme => ({
  chip: {
  },
  iconShow: {
    // opacity: 1
  },
  iconHide: {
    // opacity: 0
  }
})

function GridIcon(props) {
  const { classes } = props;
  
  const [iconState, setIconState] = React.useState({
    selected: false,
    variant: !props.selected ? props.variant : 'default',
  })

  function handleClick(e) {
    props.onClick(props.key)
    setIconState({
      selected: !iconState.selected,
      variant: iconState.selected ? props.variant : 'default'
    })
  }

  const avatar = () => {
    return (
    <Avatar className={iconState.selected ? classes.iconShow : classes.iconHide}><Check /></Avatar>
  )}

  return (
    // <ThemeProvider >
      <Chip
        key={props.key}
        avatar={iconState.selected ? avatar() : null}
        label={props.label}
        onClick={handleClick}
        className={classes.chip}
        variant={iconState.variant}
        color={iconState.selected ? "primary" : "default"}
      />
    // </ThemeProvider>
  )
}

export default withStyles(styles)(GridIcon);
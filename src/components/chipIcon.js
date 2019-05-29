import React from "react";
import { withStyles } from "@material-ui/styles";

import { Chip, Avatar } from "@material-ui/core";

const styles = theme => ({
  chip: {
    fontSize: '1.2em',
  },
})

function GridIcon(props) {
  const { classes } = props;
  classes.colorPrimary = props.color;

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

  return (
    <Chip
      key={props.key}
      avatar={<Avatar>{props.icon}</Avatar>}
      label={props.label}
      onClick={handleClick}
      className={classes.chip}
      variant={iconState.variant}
      color={"primary"}
    />
  )
}

export default withStyles(styles)(GridIcon);
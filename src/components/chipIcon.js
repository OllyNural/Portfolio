import React from "react";
// import { withStyles, makeStyles } from "@material-ui/styles";
import { Chip, Avatar } from "@material-ui/core";
import Check from "@material-ui/icons/Check"

function GridIcon(props) {
  const [iconState, setIconState] = React.useState({
    selected: false,
  })

  function handleClick(e) {
    props.onClick(props.key)
    setIconState({
      selected: !iconState.selected,
    })
  }

  const avatar = () => {
    return (
      <Avatar className={iconState.selected}><Check /></Avatar>
    )
  }

  return (
    <Chip
      // key={props.key}
      avatar={iconState.selected ? avatar() : null}
      label={props.label}
      onClick={handleClick}
      variant={!iconState.selected ? 'outlined' : 'default'}
      color={"primary"}
    />
  )
}

// export default withStyles(styles)(GridIcon);
export default GridIcon;
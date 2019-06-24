import React from "react";
import { Chip, Avatar } from "@material-ui/core";
import Check from "@material-ui/icons/Check"
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  chip: {
    '& span': {
      transform: 'translateX(-7px)',
      transition: 'transform ease-in-out 150ms',
    }
  },
  chipTransform: {
    '& span': {
      transform: 'translateX(0px)',
    },
    '&:hover > div': {
      backgroundColor: 'rgb(66, 105, 131)',
    },
    '&:visited > div': {
      backgroundColor: 'rgb(66, 105, 131)',
    },
    '&:active > div': {
      backgroundColor: 'rgb(66, 105, 131)',
    },
    '&:focus > div': {
      backgroundColor: 'rgb(66, 105, 131)',
    }
  },
  avatar: {
    transform: 'translateX(5px)',
    width: '20px',
    height: '20px',
    transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, opacity 50ms ease-in 0ms',

  },
  avatarShow: {
    opacity: 1,
  },
  avatarHide: {
    opacity: 0,
  }
})

function GridIcon(props) {
  const { classes } = props

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
      <Avatar className={`${iconState.selected ? classes.avatarShow : classes.avatarHide} ${classes.avatar}`}><Check /></Avatar>
    )
  }

  return (
    <Chip
      avatar={avatar()}
      label={props.label}
      onClick={handleClick}
      variant={!iconState.selected ? 'outlined' : 'default'}
      className={`${iconState.selected ? classes.chipTransform : null} ${classes.chip}`}
      color={'primary'}
    />
  )
}

export default withStyles(styles)(GridIcon);
// export default GridIcon;
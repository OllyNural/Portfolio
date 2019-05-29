import React from "react";
import { withStyles, ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from '@material-ui/core/styles'

import { Chip } from "@material-ui/core";

const styles = theme => ({
  chip: {
    fontSize: '1.2em',
  },
})

function GridIcon(props) {
  const { classes } = props;
  // classes.chip.colorPrimary = props.color;

  let theme = createMuiTheme({
    palette: {
      primary: {
        main: props.color
      },
    }
  });
  console.log(props)
  console.log(theme)

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
    <ThemeProvider theme={theme}>
      <Chip
        key={props.key}
        // avatar={<Avatar>{props.icon}</Avatar>}
        label={props.label}
        onClick={handleClick}
        className={classes.chip}
        variant={iconState.variant}
        color={"primary"}
      />
    </ThemeProvider>
  )
}

export default withStyles(styles)(GridIcon);
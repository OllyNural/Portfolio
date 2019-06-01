import React from "react";
import { withStyles, ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from '@material-ui/core/styles'
import { Chip, Avatar } from "@material-ui/core";
import Check from "@material-ui/icons/Check"

const styles = theme => ({
})

function GridIcon(props) {
  const { classes } = props;

  let theme = createMuiTheme({
    palette: {
      primary: {
        main: props.color
      },
    }
  });

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

  const avatar = () => (
    <Avatar><Check /></Avatar>
  )

  return (
    <ThemeProvider theme={theme}>
      <Chip
        key={props.key}
        avatar={iconState.selected ? avatar() : null}
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
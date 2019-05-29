import React from "react";
import { withStyles } from "@material-ui/styles";
import Loop from "@material-ui/icons/Loop"
import SearchIcon from "@material-ui/icons/Search"

import { Paper, InputBase, Grid, Avatar, IconButton } from "@material-ui/core";

import ChipIcon from "./chipIcon.js";

const styles = theme => ({
  gridSearch: {
    display: 'flex',
    justifyContent: 'center'
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    width: '50%',
  },
  input: {
    marginLeft: 8,
    flex: 1,
    fontSize: '1.2em',
  },
  iconButton: {
    '& svg': {
      fontSize: 24
    }
  },
  gridIcons: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '5%',
    width: '50%',
  },
  chip: {
    fontSize: '1.2em',
    // margin: theme.spacing(1)
  },
});

function SearchInput(props) {
  const { classes } = props;

  const [gridIconsState] = React.useState([
    {key: '0', icon: <Loop />, label: 'DevOps', color: 'red', isFocused: 'outlined'},
  ])

  function onInputChange(e) {
    if (e.keyCode === 13) submitTextInput(e.target.value)
  }

  function submitTextInput(text) {
    props.onSubmitText(text)
  }

  const handleClick = data => () => {
    props.onTagUpdate(data)
  }

  return (
    <React.Fragment>
      <Grid item className={classes.gridSearch} xs={12}>
        <Paper className={classes.paper} >
          <InputBase onKeyDown={onInputChange} onChange={onInputChange} autoFocus className={classes.input} placeholder="Search all articles by keywords" />
          <IconButton className={classes.iconButton} aria-label="Search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Grid>
      <Grid item className={classes.gridIcons} xs={12}>
        Or filter by tag
        {gridIconsState.map(data => {
          return (
            <ChipIcon 
              key={data.key}
              avatar={<Avatar>{data.icon}</Avatar>}
              label={data.label}
              onClick={handleClick(data.label)}
              variant={data.isFocused}
              color={data.color}
            />
          )
        })}
      </Grid>
    </React.Fragment>
  )
}

export default withStyles(styles)(SearchInput);
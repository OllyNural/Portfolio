import React from "react";
import { withStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
// import FilterList from "@material-ui/icons/FilterList"

import ChipIcon from "./chipIcon.js";

const styles = theme => ({
  gridSearch: {
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    marginLeft: 8,
    flex: 1,
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
  gridIconsText: {
    textAlign: 'center',
  },
  gridIconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

function SearchInput(props) {
  const { classes } = props;

  const [gridIconsState] = React.useState([
    {key: '0', label: 'DevOps', color: '#231123'},
    {key: '1', label: 'TDD', color: '#AF1B3F'},
    {key: '2', label: 'Automation', color: '#558C8C'},
    {key: '3', label: 'Pairing', color: '#004BA8'},
    {key: '5', label: 'Workplace', color: '#3D315B'},
  ])

  const handleClick = data => () => {
    props.onTagUpdate(data)
  }

  return (
    <React.Fragment>
      <Grid container item className={classes.gridIcons} xs={12}>
        <Grid item xs={12} className={classes.gridIconsText} >
          <h4 style={{'marginTop': 0}}>Filter by tag</h4>
        </Grid>
        <Grid container className={classes.gridIconsContainer} spacing={2} >
          {gridIconsState.map(data => {
            return (
              <Grid key={data.key} item>
                <ChipIcon 
                  label={data.label}
                  onClick={handleClick(data.label)}
                  color={data.color}
                />
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default withStyles(styles)(SearchInput);
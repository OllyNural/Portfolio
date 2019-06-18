import React from "react";
import { withStyles } from "@material-ui/styles";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";

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
    // marginBottom: '10px',
  },
  gridIconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  chip: {
    // fontSize: '1.2em',
  },
});

const themeTemplate = color => ({
  palette: {
    primary: {
      light: color,
      main: color,
      dark: color,
      contrastText: '#fff',
    },
    default: {
      light: color,
      main: color,
      dark: color,
      contrastText: '#fff',
    },
    secondary: {
      light: color,
      main: color,
      dark: color,
      contrastText: '#000',
    },
  },
})

function SearchInput(props) {
  const { classes } = props;

  const [gridIconsState] = React.useState([
    {key: '0', label: 'DevOps', color: '#231123'},
    {key: '1', label: 'TDD', color: '#AF1B3F'},
    {key: '2', label: 'Automation', color: '#558C8C'},
    {key: '3', label: 'Pairing', color: '#004BA8'},
    {key: '4', label: 'Musings', color: '#3D315B'},
  ])

  const handleClick = data => () => {
    props.onTagUpdate(data)
  }

  return (
    <React.Fragment>
      <Grid container item className={classes.gridIcons} xs={12}>
        <Grid item xs={12} className={classes.gridIconsText} >
          <h3>Filter by tag</h3>
        </Grid>
        <Grid container className={classes.gridIconsContainer} spacing={2} >
          {gridIconsState.map(data => {
            console.log(createMuiTheme(themeTemplate(data.color)))
            return (
              <Grid key={data.key} item>
                <MuiThemeProvider theme={createMuiTheme(themeTemplate(data.color))}>
                  <ChipIcon 
                    label={data.label}
                    onClick={handleClick(data.label)}
                    color={data.color}
                  />
                </MuiThemeProvider>
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default withStyles(styles)(SearchInput);
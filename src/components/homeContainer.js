import React from "react"
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid"

import SearchInput from "./searchInput"
import HomeBase from "./homeBase"
import SearchBase from "./searchBase"

import { Transition } from "react-transition-group";

const styles = theme => ({
  fadeBase: {
    transition: `opacity 225ms ease-in-out`,
    opacity: 0,
  },
  entering: { opacity: 0, display: 'none' },
  entered:  { opacity: 1 , display: 'block'},
  exited:   { opacity: 0, display: 'none'},
})

function HomeContainer(props) {
  const { classes } = props;

  const [tagData, setTagData] = React.useState([])

  const [searchFieldData, setSearchFieldData] = React.useState(null)

  // If search criteria OR array are not empty, then search is true
  function isSearch() {
    return (searchFieldData != null || tagData.length !== 0)
  }

  function onSubmitText(text) {
    console.log(text)
    setSearchFieldData(text)
  }

  function onTagUpdate(tag) {
    console.log(tag)
    let index = tagData.indexOf(tag)
    if (index === -1) {
      setTagData(prevState => [...prevState, tag])
    } else {
      let array = tagData.filter(item => item !== tag)
      setTagData(array)
    }
  }

  return (
    <React.Fragment>
      <SearchInput onSubmitText={onSubmitText} onTagUpdate={onTagUpdate}/>
      <Transition in={!isSearch()} timeout={500}>
        {(state) => (
          <Grid className={`${classes.fadeBase} ${classes[state]}`} container item hidden xs={12} >
            <HomeBase />
          </Grid>
        )}
      </Transition>
      <Transition in={isSearch()} timeout={500}>
        {(state) => (
          <Grid className={`${classes.fadeBase} ${classes[state]}`} container item xs={12}>
            <SearchBase />
          </Grid>
        )}
      </Transition>
    </React.Fragment>
  )
}

export default withStyles(styles)(HomeContainer);
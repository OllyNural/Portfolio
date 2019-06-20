import React from "react"
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeContainer from "../components/homeContainer"
import Title from "../components/title"

const styles = theme => ({
  aboutHeading: {
    marginTop: '50px',
    marginBottom: '20px',
  },
  homeHeading: {
    marginTop: 0,
  }
})

const theme = createMuiTheme({
  palette: {
     primary: {
        light: '#fff',
        main: '#325D79',
        dark: '#325D79'
     },
     secondary: {
       main: '#9bd7d1',
     },
  },
  typography: { 
     useNextVariants: true
  }
});

// const IndexPage = props => {
function IndexPage(props) {
  const { classes } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <Layout>
        <SEO title="Home" />
        <Grid container spacing={3}>
          <Grid container item className={classes.aboutHeading} xs={12}>
            <Title />
          </Grid>
          <Grid container className={classes.homeHeading} spacing={1} >
            <HomeContainer />
          </Grid>
        </Grid>
      </Layout>
    </MuiThemeProvider>
  )
}

export default withStyles(styles)(IndexPage);

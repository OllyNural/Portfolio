import React from "react";
import { withStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
// import FilterList from "@material-ui/icons/FilterList"

import ChipIcon from "./chipIcon.js";
import { StaticQuery, graphql } from "gatsby";

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

  const handleClick = data => () => {
    props.onTagUpdate(data)
  }

  return (
    <StaticQuery
      query={graphql`
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                excerpt
                tags
              }
            }
          }
        }
      }
      `}
      render={(data) => {
        const posts = data.allMarkdownRemark.edges
        console.log(posts)

        let filterTags = []

        const doesExistInArray = (tag, array = filterTags) => {
          return array.findIndex(el => el.tag === tag) !== -1
        }

        posts.forEach(node => {
          let tags = node.node.frontmatter.tags
          tags.forEach(tag => {
            console.log(doesExistInArray(tag))
            if (!doesExistInArray(tag)) filterTags.push({label: tag})
          });
        });
        
        console.log(filterTags)

        return (
          <Grid container item className={classes.gridIcons} xs={12}>
            <Grid item xs={12} className={classes.gridIconsText} >
              <h4 style={{'marginTop': 0}}>Filter by tag</h4>
            </Grid>
            <Grid container className={classes.gridIconsContainer} spacing={2} >
              {filterTags.map((data, i) => {
                return (
                  <Grid key={i} item>
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
        )
      }}
    />
  )
}

export default withStyles(styles)(SearchInput);
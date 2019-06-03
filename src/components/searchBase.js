import React from "react";
import { withStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import { StaticQuery, graphql } from "gatsby";

import BlogEntry from "./blogEntry";

const styles = theme => ({
  gridRoot: {
    // padding: '10px'
  },
  homeCard: {

  },
  image: {
    // marginLeft: '12px',
  }
})

function SearchBase(props) {
  const { classes } = props;

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
                description
                tags
              }
            }
          }
        }
      }
      `}
      render={(data) => {
        const posts = data.allMarkdownRemark.edges

        return (
          <React.Fragment>
            <Grid className={classes.gridRoot} item xs={12} md={12}>
              {posts.filter(({ node }) => props.tagData.some(tag => node.frontmatter.tags.includes(tag))).map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <BlogEntry key={node.fields.slug} slug={node.fields.slug} title={title} date={node.frontmatter.date} description={node.frontmatter.description} excerpt={node.excerpt} />
                )
              })}
            </Grid>
          </React.Fragment>
        )
      }}
    />
  )
}


export default withStyles(styles)(SearchBase);
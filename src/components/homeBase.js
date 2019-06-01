import React from "react";
import { StaticQuery, graphql } from "gatsby"
import { withStyles } from "@material-ui/styles";
import { Paper, Grid } from "@material-ui/core";

import Image from "./image"
import BlogEntry from "./blogEntry"

const styles = theme => ({
})

function HomeBase(props) {
  return (
    <StaticQuery
      query={graphql`
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 10
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
            <Grid item xs={12} sm={3}>
              <Paper>
                <Grid container>
                  <Grid item xs={6} sm={12}>
                    <Image />
                  </Grid>
                  <Grid item xs={6} sm={12}>
                    About me
                  </Grid>
                </Grid>

              </Paper>
            </Grid>
            <Grid item xs={12} sm={9}>
              {posts.map(({ node }) => {
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


export default withStyles(styles)(HomeBase);
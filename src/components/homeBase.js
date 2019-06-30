import React from "react";
import { StaticQuery, graphql } from "gatsby"
import { withStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";

import About from "./about"
import AboutSocial from "./about-social"
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

        return (
          <React.Fragment>
            <Grid item xs={12} sm={8}>
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <BlogEntry key={node.fields.slug} slug={node.fields.slug} title={title} date={node.frontmatter.date} excerpt={node.frontmatter.excerpt} tags={node.frontmatter.tags}/>
                )
              })}
            </Grid>
            <Grid item xs={12} sm={4}>
              <About />
              <AboutSocial />
            </Grid>
          </React.Fragment>
        )
      }}
    />
  )
}


export default withStyles(styles)(HomeBase);
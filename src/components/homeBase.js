import React from "react";
import { withStyles } from "@material-ui/styles";
import { Paper, Grid, Link } from "@material-ui/core";

import Image from "../components/image"
import { StaticQuery, graphql } from "gatsby";

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

function HomeBase(props) {
  const { classes } = props;

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
            <Grid className={classes.gridRoot} item xs={12} md={12}>
              <Paper>
                <Grid container>
                  <Grid className={classes.image} item xs={12} sm={6}>
                    <Image />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <h2>Hello <span role="img" aria-label="Emoji Wave">👋</span> </h2>

                    <p> Welcome to my blog! </p>

                    <p> This is a blog aimed at Junior Developers, aiming to demystify </p>

                    <p> This blog aims to </p>

                    <h2> About Me </h2>
                    <p> My name is Oliver Nural</p>
                    <p> I am a full stack Javascript engineer with a specialisation in DevOps practices and environments. </p>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid className={classes.gridRoot} item xs={12} md={5}>
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <Paper key={node.fields.slug}>
                    <h3>
                      <Link to={node.fields.slug}>
                        {title}
                      </Link>
                    </h3>
                    <small>{node.frontmatter.date}</small>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </Paper>
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
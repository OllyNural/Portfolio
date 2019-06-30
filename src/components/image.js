import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { withStyles } from '@material-ui/core';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const styles = (theme) => ({
  image: {
    // borderRadius: '100px',
    width: '100%',
    margin: '0 auto',
    marginBottom: '0px'
    // padding: '10px 0px 0px 10px',
  }
})

function Image(props) {
  const { classes } = props
  return (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "single_cropped_2.png" }) {
            childImageSharp {
              fluid(maxWidth: 200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <Img className={classes.image} fluid={data.placeholderImage.childImageSharp.fluid} />}
    />
  )
}

export default withStyles(styles)(Image)

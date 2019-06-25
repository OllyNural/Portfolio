import React from "react"
import { Link, graphql } from "gatsby"
import { withStyles } from "@material-ui/styles";

// import Bio from "../components/bio"
import LayoutBlog from "../components/layout-blog"
import SEO from "../components/seo"
import BlogHeader from './blogHeader'
import BlogDate from './blogDate'

const styles = theme => ({

})

// class BlogPostTemplate extends React.Component {
function BlogPostTemplate(props) {
  const post = props.data.markdownRemark
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext
  // const { classes } = props

  return (      
    <LayoutBlog location={props.location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
      />
      <BlogHeader title={post.frontmatter.title}/>
      <BlogDate date={post.frontmatter.date} tags={post.frontmatter.tags}/>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr/>
      {/* <Bio /> */}

      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </LayoutBlog>
  )
}

export default withStyles(styles)(BlogPostTemplate)
// export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlugOld($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        excerpt
        tags
      }
    }
  }
`
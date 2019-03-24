import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import blogPost from './blog-post.module.css'

export default function Template({
    data,
}) {
    const { markdownRemark: post } = data
    const heroTitle = post.frontmatter.title.toUpperCase()
    return (
        <div>
            <Helmet title={`${post.frontmatter.title} - Oliver Nural`} />
            <div className={blogPost.heroContainer}>
                <Img className={blogPost.heroImage} fluid={post.frontmatter.hero.childImageSharp.fluid} />
                <h1 className={blogPost.heroTitle}>{heroTitle}</h1>
            </div>
            <div className='blog-post'>
                <h1>{post.frontmatter.title} </h1>
                <div className='blog-post-content' dangerouslySetInnerHTML={{ __html: post.html }}>
                </div>
            </div>
        </div>
    )
}

export const PageQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path }}) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                hero {
                    childImageSharp {
                        fluid(maxWidth: 980) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`
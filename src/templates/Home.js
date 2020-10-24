import React from "react"
import { graphql } from "gatsby"
// Components
import {Layout, SEO, Hero, BlogPostCard, PageNavigation} from "components"
import "./layout.css";
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();


const IndexPage = ({ data, pageContext }) => { //pageContext is a default prop, available on all the pages
  const posts = data.allMarkdownRemark.edges
  console.log(data);
  return(
    <Layout>
      <SEO title="Home" />
      <Hero />
      <main>
        <PageNavigation
            currentPage={pageContext.currentPage}
            numPages={pageContext.numPages}
        />
        {posts.map(({ node }, i) =>{
          const title = node.frontmatter.title || node.fields.slug
          return(
            <BlogPostCard 
              key={node.fields.slug}
              slug={node.fields.slug}
              title={title}
              date={node.frontmatter.date}
              readingTime={node.fields.readingTime.text}
              excerpt={node.excerpt}
              image={node.frontmatter.image.childImageSharp.fluid}
            />
          )
        })}
      </main>
      <center class="abopad">
      <p>
      Crafted with <span role="img" aria-label="love">❤️</span> by <a href="https://github.com/Neilblaze" class="neel" target="_blank" rel="noreferrer noopener">Neel</a>
      </p>
      </center>
      {/* Social icons */}

        <center>
        
        <span class="social-icons icon-rounded  list-unstyled list-inline"> 
        <a href="https://www.linkedin.com/in/x3nosiz"><i class="fa fa-linkedin" aria-label="Linkedin" /></a> &nbsp;
	      <a href="https://github.com/Neilblaze"><i class="fa fa-github" aria-label="Github" /></a> &nbsp;
        <a href="https://facebook.com/Neilzblaze"><i class="fa fa-facebook" aria-label="Facebook" /></a> &nbsp;
        <a href="https://twitter.com/Neilzblaze007"><i class="fa fa-twitter" aria-label="Twitter" /></a> &nbsp;
        <a href="https://www.instagram.com/neilz_xd"><i class="fa fa-instagram" aria-label="Instagram" /></a> &nbsp;
        <a href="https://neilblaze.live/sitemap.xml"><i class="fa fa-sitemap" aria-label="Sitemap" /></a>
        </span>

        </center>

      {/* End Layout */}
    </Layout>
  )
}
  

export default IndexPage

// Created a PageQuery using GraphQL to extract the blogposts as it's a dynamic query involving many-
//- variables to extract the blogpost data

// Conveting the StaticQuery to a PageQuery, to use the variables, provided to the page context, which
//- are available to be used in the PageQuery, to filter out the published posts, for displaying
export const indexQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      filter: { frontmatter: { type: { eq: "post" }, published: { eq: true } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            date
            title
            image {
              childImageSharp {
                fluid(maxWidth: 200, maxHeight: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`

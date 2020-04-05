import React from "react"
import { graphgl, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: blue;
`

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1>Michael's thoughts.</h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {
          data.allMarkdownRemark.edges.map(({node}) =>
            <div key={node.id}>
              <BlogLink to={node.fields.slug}>
                <BlogTitle>
                  { node.frontmatter.title } - { node.frontmatter.date }
                </BlogTitle>
              </BlogLink>
              <p>{ node.excerpt }</p>
            </div>
          )
        }
      </div>
      <SEO title="Home" />
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          fields {
            slug
          }
  				excerpt
        }
      }
    }
  }
`

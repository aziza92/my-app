import React from "react"
import { useStaticQuery, graphql } from "gatsby"
//import { Helmet } from "react-helmet"
import Header from "./header"
import Footer from "./footer"
import "../css/layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }
      allContentfulLink(sort: { fields: [createdAt], order: ASC }) {
        edges {
          node {
            title
            url
            createdAt
          }
        }
      }
    }
  `)

  return (
    <div>
      <meta
        title={data.site.siteMetadata.title}
        meta={[
          {
            name: "description",
            content: data.site.siteMetadata.description,
          },
          { name: "keywords", content: data.site.siteMetadata.keywords },
        ]}
      />
      <Header />
      {children}
      <Footer data={data.allContentfulLink.edges}>
        Backgrounds made in Cinema 4D, iOS app in Swift, site in React.{" "}
        <a href="mailto:support@designcode.io">Email us</a> to ask anything. ©
        2023
      </Footer>
    </div>
  )
}

export default Layout

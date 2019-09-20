/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import PageTransition from 'gatsby-plugin-page-transitions';

import Sass from '../scss/app.scss'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <link rel="preload"
      as="style"
      href={Sass}
      crossOrigin="anonymous" />
      <Header siteTitle={data.site.siteMetadata.title} />
      <PageTransition>
      <main role="main" id="wrapper">
        {children}
      </main>
      </PageTransition>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"

export default ({ children }) => {
  const query = useStaticQuery(
    graphql`
      query {
        wordpressWpApiMenusMenusItems (slug: {eq: "header-menu"}) {
          items {
            title,
            url,
            target,
            object_slug,
            type
          }
        }
      }
    `
  )
  
  return(
    <header id="header">
      <Link to="/" className="logo">WordPressówka</Link>
      <ul role="navigation">
        {query.wordpressWpApiMenusMenusItems.items.map((node) => {
          return (
            <li key={node.object}>
              {node.type === 'custom' ? (
              <a href={node.url} target={node.target}>
                <span>{node.title}</span>
              </a>
              ) : (
              <Link to={node.object_slug} target={node.target}>
                <span>{node.title}</span>
              </Link>
              )
              }
            </li>
          )
        })}
      </ul>
      <div className="buttons">
        <span className="newsletter-btn" id="gotonewsletter"><span>Zapisz się na</span> Newsletter</span>
      </div>
    </header>
  )
}
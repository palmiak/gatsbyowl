import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Pagination from "../components/pagination"
import Newsletter from "../components/newsletter"

export default ({ data }) => {
  const posts = data.allWordpressPost.edges[0].node;
  const date = new Date(posts.date);
  const fulldate = date.toLocaleString('pl', { month: 'long', day: "2-digit" , year: "numeric" });

  return(
  <Layout>
    <SEO title="Home" />	
    <div id="right-column">
      <div role="list" id="content">
        <article className="article">
          <time>
            <strong>{posts.title}</strong>
            {fulldate}
          </time>
          <div dangerouslySetInnerHTML={{__html: posts.content}} />
          <Link className="comments-btn" to={ posts.slug + "#comments" }>Dołącz do dyskusji</Link>
        </article>
      </div>
    </div>
    <Pagination next={posts.next_post} prev={posts.prev_post} />
    <Newsletter />
  </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWordpressPost( limit: 1 ) {
      edges {
        node {
          content,
          title,
          date,
          slug,
          next_post,
          prev_post
        }
      }
    }
  }
`
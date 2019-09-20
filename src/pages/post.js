import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Pagination from "../components/pagination"
import SEO from "../components/seo"
import Newsletter from "../components/newsletter"

export default ({ data }) => {
  const posts = data.wordpressPost;
  const date = new Date(posts.date);
  const fulldate = date.toLocaleString('pl', { month: 'long', day: "2-digit" , year: "numeric" });

  return(
  <Layout>
    <SEO title="Home" />	
    <div id="right-column">
      <div role="list" id="content">
        <article class="article">
          <time>
            <strong>{posts.title}</strong>
            {fulldate}
          </time>
          <div dangerouslySetInnerHTML={{__html: posts.content}} />
        </article>
      </div>
    </div>
    <Pagination next={posts.next_post} prev={posts.prev_post} />
    <Newsletter />
  </Layout>
  )
}

export const query = graphql`
    query($id: Int) {
        wordpressPost(wordpress_id: { eq: $id }) {
          content,
          title,
          date,
          next_post,
          prev_post,
        }
}
`
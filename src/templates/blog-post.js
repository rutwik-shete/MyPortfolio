import React, { useEffect, useRef } from 'react';
import { Link, graphql } from 'gatsby';
import { Space } from '../styles/components';
import Bio from '../components/bio';
import Layout from '../templates/layout';
import SEO from '../components/seo';
import { rhythm, scale } from '../utils/typography';
import { sizing } from '../styles/components';

import { MDXRenderer } from 'gatsby-plugin-mdx';
import Social from '../components/ui/Social';
import { Hero, Note, HeroP, Section } from '../components/ui/screens/blog';

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  useEffect(() => {
    const links = document.querySelectorAll('section a');
    links.forEach((el) => (el.target = 'blank'));
  }, []);

  return (
    <Layout title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        thumb={post.frontmatter.thumb}
        keywords={post.frontmatter.tags}
        description={post.frontmatter.description || post.excerpt}
      />
      {/* <Space> */}
      <Section>
        <header>
          <Hero
            id="title"
            style={{
              marginTop: sizing.paddingExterior.base,
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </Hero>
          <Note>{post.timeToRead} minute read</Note>
          <HeroP
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: sizing.paddingExterior.base,
            }}
          >
            {post.frontmatter.date}
          </HeroP>
        </header>
        <MDXRenderer>{post.body}</MDXRenderer>
        <hr
          style={{
            marginBottom: sizing.paddingExterior.base,
          }}
        />
        <nav>
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
                <>
                  <div>Previous</div>
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                </>
              )}
            </li>
            <li>
              {next && (
                <>
                  <div>Next</div>
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                </>
              )}
            </li>
          </ul>
        </nav>
        <Social />
      </Section>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      timeToRead
      frontmatter {
        title
        thumb
        date(formatString: "MMMM DD, YYYY")
        description
        keywords
      }
    }
  }
`;

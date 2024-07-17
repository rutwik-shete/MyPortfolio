import React from 'react';

import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FeaturedProjects, GotoBlog, ProjectImage } from './elements';

const Featured = () => {
  const {
    allMdx: { edges },
  } = useStaticQuery(graphql`
    query featuredQuery {
      allMdx(
        filter: {
          fileAbsolutePath: { regex: "/blog/" }
          frontmatter: { featured: { eq: true } }
        }
      ) {
        edges {
          node {
            frontmatter {
              title
              thumb
              description
              keywords
            }
            excerpt(pruneLength: 30)
            slug
          }
        }
      }
    }
  `);

  const featuredPosts = Object.values(edges).map((el) => {
    return {
      ...el.node.frontmatter,
      excerpt: el.node.excerpt,
      slug: el.node.slug,
    };
  });

  return (
    <>
      <FeaturedProjects id="deck">
        {featuredPosts.map((el, i) => (
          <React.Fragment key={i}>
            <ProjectImage>
              <div className="top">
                <h3>{el.title}</h3>
                <span>Blog</span>
              </div>

              <Link href={`/${el.slug}`}>
                <img
                  alt="Blog post image"
                  src={`/img/${el.thumb ? el.thumb : 'logo.png'}`}
                  className="imageFluidContainer"
                />
              </Link>
              <p>{el.description}</p>
              <Link href={`/${el.slug}`}>Read the full post</Link>
            </ProjectImage>
          </React.Fragment>
        ))}
      </FeaturedProjects>
      <Link to="/blog">
        <GotoBlog>
          <span>More blog posts</span>
          <AiOutlineArrowRight />
        </GotoBlog>
      </Link>
    </>
  );
};

export default Featured;

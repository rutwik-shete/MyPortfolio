import React, { useEffect, useState } from 'react';
import Layout from './layout';
import PropTypes from 'prop-types';
import { Section } from '../styles/components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import ReadTime from '../components/ReadTime';
import Icon from '../components/Icon';
import styled from 'styled-components';
import SEO from '../components/seo';
import remark from '../utils/remark';

export const Project = ({ data }) => {
  const { title, details, description, body, timeToRead, seo, keywords } = data;
  const { stack, code, live, type } = details;

  const [remarkDescription, setDescription] = useState(description);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    setDescription(remark(description));
  }, [description]);

  return (
    <Section top={true}>
      <SEO description={seo || description} title={title} keywords={keywords} />
      <h1>{title.split(':')[0]}</h1>
      <ReadTime text={timeToRead} />
      <div dangerouslySetInnerHTML={{ __html: remarkDescription }} />

      <Icon speed={'4s'} />
      <ProjectDetails>
        <div>
          <h3>Type</h3>
          <div>{type}</div>
        </div>
        <div>
          <h3>Stack</h3>
          {showMore ? (
            <div>
              {stack.split(' ').map((e, i) => (
                <div key={`stack-i-${i}`}>{e.replaceAll('_', ' ')}</div>
              ))}
            </div>
          ) : (
            <>
              {stack
                .split(' ')
                .filter((e, i) => i < 7)
                .map((e, i) => (
                  <div key={`stacksplit-${i}`}>{e.replaceAll('_', ' ')}</div>
                ))}
              {stack.split(' ').length > 7 && (
                <div onClick={() => setShowMore(true)}>...show more</div>
              )}
            </>
          )}
        </div>
        {code !== ' ' ? (
          <div>
            <h3>Code</h3>
            <a href={code}>Github</a>
          </div>
        ) : null}
        <div>
          <h3>Live</h3>
          <a href={live} target={'blank'}>
            <a href={live}>Site</a>
          </a>
        </div>
      </ProjectDetails>
      <MDXRenderer>{body}</MDXRenderer>
    </Section>
  );
};

const Markdown = styled(MDXRenderer)`
  .gif {
    float: left;
    margin: 0 2rem 0 0;
    padding: 1rem 0;
  }
`;

const ProjectDetails = styled.div`
  padding-bottom: 2rem;
  > div {
    flex-basis: 100%;
  }
  display: flex;
  justify-content: space-around;
  flex-flow: column;
  h3 {
    margin: 1rem 0 1rem;
    font-family: Montserrat;
  }
  div {
    font-family: Muli;
  }
  @media only screen and (min-width: 768px) {
    flex-flow: row;
  }
`;

const ProjectPage = ({ data }) => {
  const {
    mdx: { body, frontmatter, timeToRead },
  } = data;

  const { title, details, description, seo, keywords } = frontmatter;

  return (
    <Layout>
      <Project
        data={{ title, details, description, body, timeToRead, seo, keywords }}
      />
    </Layout>
  );
};

ProjectPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProjectPage;

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      timeToRead
      body
      frontmatter {
        title
        internal
        keywords
        description
        seo
        details {
          code
          live
          stack
          type
        }
      }
    }
  }
`;

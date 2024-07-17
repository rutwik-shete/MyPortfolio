import Icon from '@/components/Icon';
import ReadTime from '@/components/ReadTime';
import { SEO } from '@/components/SEO';
import { Content, content } from '@/content/projects';
import { Section } from '@/styles/components';
import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import path from 'path';
import { useState } from 'react';
import { remark } from 'remark';
import html from 'remark-html';
import styled from 'styled-components';

type PageProps = {
  mdxSource: string;
  content?: Content;
};

export const getStaticProps = (async ({ params }) => {
  if (
    typeof params?.id === 'string' &&
    Object.keys(content).includes(params?.id)
  ) {
    const { id } = params;
    const pageContent = content[id as keyof typeof content] as Content;

    const filePath = path.join(
      process.cwd(),
      `public/projects/${id}/overview.md`,
    );
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const mdxSource = processedContent.toString();

    return { props: { mdxSource, content: pageContent } };
  }
  return {
    props: {
      // redirect to 404
      notFound: true,
      mdxSource: '',
    },
    notFound: true,
  };
}) satisfies GetStaticProps;

export const getStaticPaths = (async () => {
  return {
    paths: Object.keys(content).map((contentkey) => ({
      params: { id: contentkey },
    })),
    fallback: true, // false or "blocking"
  };
}) satisfies GetStaticPaths;

const ProjectPage = ({ mdxSource, content }: PageProps) => {
  const [showMore, setShowMore] = useState(false);
  if (!content) return null;
  const {
    title,
    description,
    featuredImage,
    details: { type, stack, code, live },
    keywords,
    seo,
  } = content;
  return (
    <Section top={true}>
      <SEO
        title={title}
        thumb={featuredImage}
        description={seo || description}
        keywords={keywords}
        lang={'english'}
      />
      <h1>{title}</h1>
      <ReadTime text={mdxSource} />
      <p dangerouslySetInnerHTML={{ __html: description }} />
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
        {code && (
          <div>
            <h3>Code</h3>
            <a href={code}>Github</a>
          </div>
        )}
        <div>
          <h3>Live</h3>
          <a href={live} target={'blank'}>
            <a href={live}>Site</a>
          </a>
        </div>
      </ProjectDetails>

      <Body
        className="post-body"
        dangerouslySetInnerHTML={{ __html: mdxSource }}
      />
    </Section>
  );
};

export default ProjectPage;

const Body = styled.div`
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
  @media only screen and (min-width: 768px) {
    flex-flow: row;
  }
`;

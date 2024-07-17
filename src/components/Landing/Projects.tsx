import {
  Header,
  Paragraph,
  Projects,
  SectionTag,
  Tags,
} from '@/styles/components';

import Link from 'next/link';
import { ProjectImage } from '.';

import { landingPage } from '../../content/landing';
import { HighlightedWords } from '../HighlightedWords';
import { SlidingButton } from './Buttons';

type Props = { projects: typeof landingPage.projects };

export const ProjectsSection = ({ projects }: Props) => {
  return (
    <>
      <h1>
        <HighlightedWords title="**Projects" />
      </h1>

      <div>
        {projects.map((project, i) => {
          const { buttonText, body, link, title, image, role, keywords } =
            project;

          const tags = keywords;

          return (
            <Projects key={`projects-${i}`}>
              <SectionTag className="latest" style={{ gridArea: 'top' }}>
                {role || `Personal Project`}
              </SectionTag>
              <Header>
                <HighlightedWords title={title} />
              </Header>

              {tags && (
                <Tags>
                  {tags.map((keyword, i) => (
                    <li key={`keyword-element-${i}`}>{keyword}</li>
                  ))}
                </Tags>
              )}

              <Paragraph style={{ gridArea: 'text' }}>{body}</Paragraph>

              <div style={{ gridArea: 'button' }}>
                <SlidingButton buttonText={buttonText} link={link} />
              </div>

              <ProjectImage style={{ gridArea: 'image' }}>
                <Link href={link}>
                  <img
                    className="imageFluidContainer"
                    alt="project image"
                    src={`/img/${image}`}
                  />
                </Link>
              </ProjectImage>
            </Projects>
          );
        })}
      </div>
    </>
  );
};

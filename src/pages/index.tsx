import { Hero, HeroP, colors } from '../styles/components';

import Social from '../components/Social';

import { HighlightedWords } from '@/components/HighlightedWords';
import { HeroSection, Section } from '@/components/Landing';
import { BioSection } from '@/components/Landing/Bio';
import { MakeClouds } from '@/components/Landing/Clouds';
import { ContactSection } from '@/components/Landing/Contact';
import { ProjectsSection } from '@/components/Landing/Projects';
import { useLogger } from '@/hooks/useLogger';
import { landingPage } from '@/content/landing';
import { SEO } from '@/components/SEO';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

const Index = ({
  mainpitch,
  bio,
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  useLogger();

  const { title, subtitle } = mainpitch;

  return (
    <>
      <SEO
        title="Rutwik Shete | AI Engineer"
        description={''}
        lang={''}
        thumb={''}
        keywords={[]}
      />
      <div
        style={{
          padding: '0 clamp(1rem, 7vw, 200px)',
          background: colors.background,
        }}
      >
        <HeroSection invert={true}>
          <div>
            <MakeClouds cloudCount={30} mult={1} />
            <div className="marquee">
              <Hero invert={true}>
                <HighlightedWords title={title} />
              </Hero>
              <Social />
              <HeroP>{subtitle}</HeroP>
            </div>
          </div>
        </HeroSection>
      </div>

      <Section id="bio">
        <BioSection bio={bio} />
      </Section>

      {/* Hiding featured section during refactor */}
      {/* <Section id="featured">
        <h1>
          <HighlightedWords title={'**Featured'} />
        </h1>
        <Featured />
      </Section> */}

      <Section id="projects">
        <ProjectsSection projects={projects} />
      </Section>

      <Section id="contact">
        <ContactSection />
      </Section>
    </>
  );
};

export const getStaticProps = (async () => {
  return {
    props: { ...landingPage },
  };
}) satisfies GetStaticProps;

export default Index;

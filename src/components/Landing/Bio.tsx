import { Bio, ImageFull } from '@/styles/components';
import { HighlightedWords } from '../HighlightedWords';
import { Img } from '@chakra-ui/react';
import Link from 'next/link';
import { ReadMore } from '.';
import SkillIcons from '../SkillIcons';
import { Features } from './Features';

type Props = {
  bio: {
    title: string;
    features: { body: string; header: string }[];
    image: string;
  };
};

export const BioSection = ({ bio }: Props) => {
  const { title, features, image } = bio;

  return (
    <Bio>
      <div id="bioContainer">
        <h1 style={{ height: '3rem' }}>
          <HighlightedWords title={title} />
        </h1>
        <ImageFull id="bioImage">
          <Img
            alt="a picture of rutwik"
            style={{ gridArea: 'image', maxWidth: '320px', margin: 'auto' }}
            src="/img/rutwik.jpg"
          />
        </ImageFull>

        <div id="bioText">
          <SkillIcons />
          <Features features={features} />
          <ReadMore>
            <Link href="https://docs.google.com/document/d/1sxAFyUWH0reppsR0o-SmBc1k959uWxLzP6OUARiqKQM/edit?usp=sharing" target="blank">Looking For My CV ?</Link>
          </ReadMore>
        </div>
      </div>
    </Bio>
  );
};

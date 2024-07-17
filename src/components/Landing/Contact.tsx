import { CupContainer, Hero } from '@/styles/components';
import { Email } from '.';
import { HighlightedWords } from '../HighlightedWords';
import { SlidingButton } from './Buttons';
import Cup from './cup.svg';
import Steam from './steam_1.svg';

export const ContactSection = () => {
  return (
    <div id="contactBox">
      <Hero invert={false}>
        {<HighlightedWords title={"Let's have a **chat**"} />}
      </Hero>
      <CupContainer>
        <div className="steam">
          <Steam />
        </div>
        <div className="cup">
          <Cup />
        </div>
      </CupContainer>

      <Email href={'mailto:rutwik.shete@icloud.com'}>
        rutwik.shete@icloud.com
      </Email>

      <div
        style={{
          gridArea: 'button',
          marginTop: '1rem',
          marginBottom: '3rem',
        }}
      >
        <SlidingButton
          buttonText={'Get in touch'}
          link="https://calendly.com/aaspinwall/15"
        />
      </div>
    </div>
  );
};

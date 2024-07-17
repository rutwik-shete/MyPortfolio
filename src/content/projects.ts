import * as movingday from '../../public/projects/movingday/content';
import * as refy from '../../public/projects/refy/content';
import * as gleefactor from '../../public/projects/gleefactor/content';
import * as ing from '../../public/projects/ing/content';
import * as wodly from '../../public/projects/wodly/content';

export type Content = {
  title: string;
  featuredImage: string;
  description: string;
  seo?: string;
  details: {
    type: string;
    stack: string;
    code: string;
    live: string;
  };
  keywords: string[];
  role: string;
};

export const content = {
  movingday: { ...movingday.content },
  refy: { ...refy.content },
  gleefactor: { ...gleefactor.content },
  ing: { ...ing.content },
  wodly: { ...wodly.content },
};

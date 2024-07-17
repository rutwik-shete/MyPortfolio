import { content as projectData } from './projects';

export const landingPage = {
  title: 'Landing page title from local markdown',
  internal: true,
  mainpitch: {
    title: 'Yello, I’m Rutwik | **AI** **Engineer**',
    subtitle:
      "I'm passionate about the thrill of riding motorcycles 🏍️ and the serenity of playing guitar 🎸. Creating AI that makes a difference in people's lives is my mission 🤖. I thrive on learning through hands-on experience, and let's just say, sushi 🍣 is my ultimate treat!",
    buttonText: 'Book a call',
  },
  bio: {
    title: 'My **Skills**',
    image: 'landingImage.jpg',
    features: [
      {
        header: 'I love Building AI 🤖',
        body: "I began my coding journey in 8th grade, and since then, it's been a constant exploration of one language after another. I started with Android application development, then delved into data analysis, and eventually transitioned into the fascinating worlds of AI and computer vision. Each step has fueled my passion for technology and innovation.",
      },
    ],
  },
  projects: [
    {
      body: 'Adding Soon',
      image: 'ComingSoon.jpg',
      buttonText: 'Adding Soon',
      link: '/',
      ...projectData.refy,
    },
    // {
    //   body: 'Assembled and lead a team of 8 developers to create core features and integrate third party APIs. Implemented CI/CD pipeline with Typescript type-checking, database migration, code linting and preview deploys.',
    //   image: 'refy.png',
    //   buttonText: 'View project',
    //   link: '/projects/refy/',
    //   ...projectData.refy,
    // },
    // {
    //   body: 'I took their existing wordpress site and turned it into a headless CMS with React on the frontend. The site features e-commerce, downloads and a seamless bilingual experience.',
    //   image: 'glee.png',
    //   buttonText: 'View project',
    //   link: '/projects/gleefactor/',
    //   ...projectData.gleefactor,
    //   title: 'Glee Factor',
    // },
    // {
    //   body: 'I built the latest version of the site to improve speed and performance. It features statically generated pages, cloud image resizing and a custom CMS.',
    //   image: 'ing.png',
    //   buttonText: 'View project',
    //   link: '/projects/ing/',
    //   ...projectData.ing,
    //   title: 'ING Creatives',
    // },
    // {
    //   body: "Looking for an apartment in Montreal is quite a pain. Since Kijiji doesn't provide a public API, I made one that runs on a local server.",
    //   image: 'movingday.png',
    //   buttonText: 'View project',
    //   link: '/projects/movingday/',
    //   ...projectData.movingday,
    //   title: 'Moving day',
    // },
    // {
    //   body: 'Save your home workouts and display them in a friendly manner. Share with your friends!',
    //   image: 'wodly.png',
    //   buttonText: 'View project',
    //   link: '/projects/wodly/',
    //   ...projectData.wodly,
    // },
  ],
  contact: {
    title: "Let's have a **chat**",
    buttonText: 'Get in touch',
  },
};

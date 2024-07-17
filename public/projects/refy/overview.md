![Results page](refy/screen.png "Resources page that shows the available workshops")

# Project Purpose and Goal

Designed the architecture and lead a team of 8 developers to create core features and integrate third party APIs. Integrated machine learning enabled micro-services to **calculate credit scores, estimate property values and yield mortgage offers**. Leveraged Google Maps API and TensorFlow API.

# Web Stack and Explanation

Built the project using Next.js because of its powerful server-side rendering and dynamic routing. The backend is fully serverless, it handles automated magic link emails (Postmark), auithentication using JWT and Passport, Airtable CRM, and connects to the propietary credit-score and property-estimation microservices (Elastic Beanstalk / Google Maps / TensorFlow).

For the databse I used PostgreSQL and **Prisma ORM**. I generated the **GraphQL schema using Nexus**.

To ensure code/platform stability, I Implemented a CI/CD pipeline with **Jest for unit testing, Cypress for End to End, Typescript type-checking, database migration, code linting** and preview deploys. Finally, I **deployed the site to Vercel**

# Problems and Thought Process

The client requested me to develop the platform from scratch. I worked with them to detemine the core features and presented a plan. After the user is authenticated, they're able to fill a multi part form. After the forms are completed, a serverless function makes a request to determine a credit score, estimate the value of the property and match the client to the best suited financial institution.

The main goal of the project was to make it **scalable and flexible** enough so that it would support future partners and integrate with existing fintech platforms to monetize the user base.

![Profile page](refy/profile.png "Profile page showing active applications")

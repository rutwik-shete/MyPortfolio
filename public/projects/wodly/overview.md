![Workout display](wodly/workout.png "Workout display")

# Project Purpose and Goal

Wodly, was intended to display my workouts in a simple way. Later I added **multi-user support** so others could add their own routines, and keep track of the ones they liked. This meant that I had to add **user profiles, authentication and a more robust database.**

**My goal was to understand user authentication and the options that allow for a secure session.** I also wanted to learn about database structures and figure out a way to manage data efficiently.

# Web Stack and Explanation

Initially, it was intended to be a personal project without additional users. This is why **I went straight into create-react-app and got a functioning prototype** working as fast as possible. I added styled components and a redux store to make loading as fast as possible. Once my friends told me they wanted in, I had to re-think my approach. For the backend I wanted to try firebase user authentication and realtime database. **I chose these because I wasn’t comfortable with the environment but I wanted to get better at it.** Finally, I deployed the site to **AWS Amplify**, also a first for me.

# Problems and Thought Process

Since most of the application’s frontend resembled a project that I had completed a few months ago, I was comfortable with that part. The only difference was that **I wanted to challenge myself to write the whole application using React Hooks instead of class components.**

![Timer](wodly/timer.png "Timer")

Towards the end of the development process, **I was finding myself using timers for most of the exercises**. I tired every free app I could find but most were too ugly or too hard to use. **This motivated me to code a simple timer** where you can choose the number of rounds, time on the exercise and time for rest between rounds.

Checkout the timer [here](https://wodly.netlify.app/timer)

# Lessons Learned

**Authentication was a big problem for me.** Page refreshing was a big one, because it rendered the login screen for half a second (as it fetched the user’s information) until it loaded the actual page. This was happening because **I didn’t want to store the user’s information in the browser’s local storage** as it is easily susceptible to malicious attacks. After reading more about how firebase manages sessions, I realized that they actually store their data on the user’s browser but they validate it on their servers. Knowing this, **I re-designed the authentication process and stored the user id on the browser’s local storage.** Finally, I added a persisted state that re-hydrated the Redux store on reload.

![Login screen](wodly/loginDesktop.png "Login screen")

I tried the React Context API instead of Redux to share states between components. Unfortunately, after making it work, **I went back to Redux because I was more comfortable with their Chrome extension** for debugging and monitoring.

# Further work

Luckily, the lockdown situation that motivated me to start this project has ended for the time being. I want to add a smoother user experience and some data analysis to the workouts. **I want to look for keywords within the workouts and be able to tag them accordingly.** Hopefully in the future it will be harder to skip leg day.

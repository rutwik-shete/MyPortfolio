---
name: full
title: Prof g
internal: true
type: custom-blog
---

Being part of Prof G's brand strategy sprint has been unique from day one. It's been a huge opportunity to meet people from very diverse backgrounds. We come together because we're embracing change and want to be part of this massive learning experience.

On the first day of the sprint we were added to the Slack workspace. Here we were greeted by the awesome TAs and admins that would help us through the course. There was a channel called #networking where the welcome message was. "Share a quick intro about who you are, what you do, and why you’re here." I quickly realized that there were over a thousand participants on the community!

I was ecstatic to meet so many leaders and I wanted to learn more. Unfortunately, in matter of hours it was impossible to keep up with the messages. There where more than 500 messages posted in the #networking channel within the span of 24 hours.

Fun fact, it would take an average reader 2.8 hours to go through every message. I wanted to understand the group a bit better, or at least be able to get an overview of what was going on. Luckily, machines are really good at processing data.

Meet my ( partner ) => the robot 🤖

We crunched the numbers and came up with some very interesting results.

[GRAPH]

Although we're over 1,100 sprinters in the channel, less than half of us wrote an introduction. We found 482 posts, where the average length was 448 words.

If you're struggling to imagine how that looks like. That's about 1.6 tweets.

[TWEET]

Words

The top 5 words were: excited, love, creative, great and help. Awesome energy from the start! Here is the top 100 words.

[CLOUD]

Sentiment

Next, I wanted to get a feel for the mood of the group. We ran a sentiment analysis (also known as opinion mining or emotion AI) based on the words we used to describe ourselves.

While 0 is neutral, anything above would be positive and viceversa. Most of the messages tended towards the positive with a few outliers all the way up at + 1.2 !

Here is an example of how that would look like:

"I'm incredibly happy to be sharing this learning experience with everybody here!"

[GRAPH]

Warning! nerd talk ahead:

AFINN
AFINN is a list of words rated for valence with an integer between minus five (negative) and plus five (positive). Sentiment analysis is performed by cross-checking the string tokens (words, emojis) with the AFINN list and getting their respective scores. The comparative score is simply: sum of each token / number of tokens. So for example let's take the following:

"I love cats, but I am allergic to them."

In this case, love has a value of 3, allergic has a value of -2, and the remaining tokens are neutral with a value of 0. Because the string has 9 tokens the resulting comparative score looks like:

(3 + -2) / 9 = 0.111111111

This approach leaves you with a mid-point of 0 and the upper and lower bounds are constrained to positive and negative 5 respectively (the same as each token! 😸). For example, let's imagine an incredibly "positive" string with 200 tokens and where each token has an AFINN score of 5. Our resulting comparative score would look like this:

(max positive score _ number of tokens) / number of tokens
(5 _ 200) / 200 = 5

Good vs Bad

The score is a good way to assess the mood, but if we take a look a the actual words, we can get a better sense of what's going on. Look at the diversity of positive words and how many times each one shows up. In contrast, there are fewer negative ones and occur far less frequently.

(Hover/tap to see how many times each word occurred)

[CLOUD]

Talk after lunch?

Intuitively, I thought that most people would take part in conversations sometime after lunch. I realized that the cohort was composed of people from all over the world. Lunchtime could be dinner time for somebody else. After running the numbers, we can see that the universal talk time for international business people is ~2pm Eastern Time.

Conclusion

I started the sprint wanting to learn about brand strategy. Right away, I came to realize that the community around the course would be just as important to the experience as the curriculum. At this point it's been a week since we started the sprint. So many interesting discussions have sparked on the Slack workplace that it's hard to keep up. But knowing that there's such a positive energy from the start makes me want to go even further. This year has been challenging for everyone, no doubt about it. But what I've learned from this analysis, makes me very hopeful for the future. I'm excited to be part of this great community of creative people, I want to learn more and I'd love to help as much as possible. I'll be talking to you after lunch 😉

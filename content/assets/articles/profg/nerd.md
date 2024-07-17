---
name: nerd
title: Prof g
internal: true
type: custom-blog
---

**Warning! nerd talk ahead**

**AFINN**

AFINN is a list of words rated for valence with an integer between minus five (negative) and plus five (positive). Sentiment analysis is performed by cross-checking the string tokens (words, emojis) with the AFINN list and getting their respective scores. The comparative score is simply: sum of each token / number of tokens. So for example let's take the following:

"I love cats, but I am allergic to them."

In this case, love has a value of 3, allergic has a value of -2, and the remaining tokens are neutral with a value of 0. Because the string has 9 tokens the resulting comparative score looks like:

_(3 + -2) / 9 = 0.111111111_

This approach leaves you with a mid-point of 0 and the upper and lower bounds are constrained to positive and negative 5 respectively (the same as each token! 😸). For example, let's imagine an incredibly "positive" string with 200 tokens and where each token has an AFINN score of 5. Our resulting comparative score would look like this:

_(max positive score - number of tokens) / number of tokens
(5 - 200) / 200 = 5_

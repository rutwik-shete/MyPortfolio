---
title: Responsive fonts
draft: false
date: 2020-08-03T18:44:42.151Z
description: "Sometimes we want to make things simple"
internal: false
---

I'll be using styled-components 💅

**Responsive stuff**

```scss
const H1 = styled.h1`
  font-size: clamp(4rem, 14vw, 9.3rem);
  line-height: clamp(4rem, 14vw, 9.3rem);
`
```

**Media queries**

```scss
const H1 = styled.h1`
  font-size: 4rem;
  line-height: 4rem;
  @media only screen and (min-width: 768px) {
    font-size: 6.1rem;
    line-height: 6.1rem;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 9.3rem;
    line-height: 9.3rem;
  }
`
```

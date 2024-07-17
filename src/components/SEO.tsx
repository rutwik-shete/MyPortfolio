import Head from 'next/head';

export type Props = {
  description: string;
  lang: string;
  title: string;
  thumb: string;
  keywords: string[];
};

export const SEO = ({ description, lang, title, thumb, keywords }: Props) => {
  const metaTags = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `keywords`,
      content: keywords.join(', '),
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:image`,
      itemprop: 'image',
      content: `https://www.aaspinwall.com/img/${thumb || 'logo.png'}`,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:image`,
      content: `https://www.aaspinwall.com/img/${thumb}`,
    },
    {
      name: `twitter:image:alt`,
      content: `Rutwik Shete Logo`,
    },
    //     {
    //       name: `twitter:creator`,
    //       content: site.siteMetadata.social.twitter,
    //     },
    //     {
    //       name: `twitter:site`,
    //       content: site.siteMetadata.social.twitter,
    //     },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
    {
      name: 'google-site-verification',
      content: 'We7BOl_CZVyDeFTxQEtsewDNNE2nwsw5rJi7Kf1s4JA',
    },
  ];

  return metaTags.map(({ name, content }, i) => {
    return (
      <Head key={i}>
        <meta name={name} content={content} />
      </Head>
    );
  });
};

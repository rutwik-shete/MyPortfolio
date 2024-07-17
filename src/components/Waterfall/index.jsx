import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Waterfall = ({ size = 'md' }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      lg: allFile(filter: { relativePath: { eq: "images/waterfall.jpg" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData(
              maxWidth: 1000
              webpOptions: { quality: 100 }
              layout: FLUID
              placeholder: BLURRED
            )
          }
        }
      }
      md: allFile(filter: { relativePath: { eq: "images/waterfall.jpg" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData(
              maxWidth: 500
              webpOptions: { quality: 100 }
              layout: FLUID
              placeholder: BLURRED
            )
          }
        }
      }
      sm: allFile(filter: { relativePath: { eq: "images/waterfall.jpg" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData(
              maxWidth: 250
              webpOptions: { quality: 100 }
              layout: FLUID
              placeholder: BLURRED
            )
          }
        }
      }
    }
  `);

  const getSize = {
    sm: data.sm,
    md: data.md,
    lg: data.lg,
  };
  const image = getSize[size].nodes[0];
  const imageData = getImage(image);
  console.log(imageData);

  return (
    <GatsbyImage
      image={imageData}
      style={{ maxWidth: '1100px', margin: 'auto', width: '100%' }}
      alt="waterfall"
    />
  );
};

export default Waterfall;

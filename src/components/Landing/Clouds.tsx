import { makeClouds, randomizeValue } from '@/utils/clouds';
import React from 'react';
import Clouds from '../Clouds';

export const MakeClouds = ({
  cloudCount,
  mult,
}: {
  cloudCount: number;
  mult: number;
}) => {
  const cloudArray = makeClouds(cloudCount * mult);
  return (
    <>
      {cloudArray.map((i) => {
        return (
          <React.Fragment key={`cloud-${i}`}>
            <Clouds
              roll={`${randomizeValue(120, 300)}s`}
              top={`${randomizeValue(12, 90)}vh`}
              pulse={`${randomizeValue(7, 12)}s`}
              size={`${randomizeValue(0.5, 7)}rem`}
              offset={`${randomizeValue(-10, 90)}vw`}
            />
          </React.Fragment>
        );
      })}
    </>
  );
};

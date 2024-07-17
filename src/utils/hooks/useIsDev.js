import { useEffect, useState } from 'react';

const useIsDev = () => {
  const [isDev, setisDev] = useState(
    process.env.GATSBY_STATE === 'development',
  );
  useEffect(() => {
    setisDev(process.env.GATSBY_STATE === 'development');
  }, []);
  return isDev;
};
export default useIsDev;

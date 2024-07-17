import { Button as B } from '@chakra-ui/react';
import { Link } from 'gatsby';

const Button = ({ children, to, ...props }) => {
  const external = to.includes('http');
  return (
    <B {...props}>
      {external ? (
        <a href={to} target="blank">
          {children}
        </a>
      ) : (
        <Link to={to}>{children}</Link>
      )}
    </B>
  );
};

export default Button;

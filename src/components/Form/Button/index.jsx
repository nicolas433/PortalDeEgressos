import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Anchor, ReactRouterLink } from './styles';

/*
mt=margin-top
mr=margin-right
ml=margin-left
mb=margin-bottom
*/

function ButtonContent({
  children,
  className,
  width,
  disabled,
  theme,
  style,
  justifyContent,
  href,
  to,
  onClick,
  mt,
  mr,
  mb,
  ml,
  diameter,
}) {
  if (href) {
    return (
      <Anchor
        width={width}
        theme={theme}
        justifyContent={justifyContent}
        href={href}
        className={className}
        style={style}
        target="_blank"
        rel="noopener noreferrer"
        mt={mt}
        mr={mr}
        mb={mb}
        ml={ml}
      >
        {children}
      </Anchor>
    );
  }

  if (to) {
    return (
      <ReactRouterLink
        width={width}
        theme={theme}
        justifyContent={justifyContent}
        mt={mt}
        mr={mr}
        mb={mb}
        ml={ml}
      >
        <Link
          disabled={disabled}
          to={to}
          className={className}
          style={style}
        >
          {children}
        </Link>
      </ReactRouterLink>
    );
  }

  return (
    <Button
      width={width}
      theme={theme}
      justifyContent={justifyContent}
      type="button"
      className={className}
      style={style}
      disabled={disabled}
      onClick={onClick}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
      diameter={diameter}
    >
      {children}
    </Button>
  );
}

export default ButtonContent;

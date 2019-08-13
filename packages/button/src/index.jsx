import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.element,
  disabled: PropTypes.string,
  label: PropTypes.string,
  title: PropTypes.string,
  as: PropTypes.oneOf(['a', 'button']),
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit']),
};
const defaultProps = {
  className: 'button',
};

const Button = (props) => {
  const {
    className,
    onClick,
    children,
    disabled,
    label,
    title,
    as,
    href,
    target,
    rel,
    type,
  } = props;

  const isButton = type === 'button' || type === 'submit' || as === 'button';

  if (isButton) {
    return (
      <button
        type={type}
        title={title || label}
        className={className}
        onClick={onClick}
        disabled={!onClick || disabled}
      >
        {children || label}
      </button>
    );
  }

  const externalLink = !!href && href.indexOf('http') === 0;

  return (
    <a
      href={href}
      title={title || label}
      className={className}
      disabled={!href || disabled}
      target={externalLink ? '_blank' : target}
      rel={externalLink ? 'noreferrer' : rel}
    >
      {children || label}
    </a>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;

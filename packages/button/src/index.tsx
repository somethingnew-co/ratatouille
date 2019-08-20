import React from 'react';

interface Props {
  className?: string;
  onClick?: () => void;
  children?: React.ReactChildren;
  disabled?: boolean;
  label?: string;
  title?: string;
  as?: 'a' | 'button';
  href?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit';
}
const defaultProps = {
  className: 'button',
};

const Button: React.FC<Props> = (props) => {
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
      target={externalLink ? '_blank' : target}
      rel={externalLink ? 'noreferrer' : rel}
    >
      {children || label}
    </a>
  );
};

Button.defaultProps = defaultProps;

export default Button;

import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

interface AProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean;
}

const defaultProps = {
  className: 'button',
};

const Button: React.FC<{ as?: 'button' | 'a' } & ButtonProps & AProps> = props => {
  const {
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
    external,
    ...rest
  } = props;

  const isButton = type === 'button' || type === 'submit' || as === 'button';

  if (isButton) {
    return (
      <button
        type={type}
        title={title || label}
        onClick={onClick}
        disabled={!onClick || disabled}
        {...rest}
      >
        {children || label}
      </button>
    );
  }

  const externalLink = !!href && href.indexOf('http') === 0 || external;

  return (
    <a
      href={href}
      title={title || label}
      target={externalLink ? '_blank' : target}
      rel={externalLink ? 'noopener noreferrer' : rel}
      {...rest}
    >
      {children || label}
    </a>
  );
};

Button.defaultProps = defaultProps;

export default Button;

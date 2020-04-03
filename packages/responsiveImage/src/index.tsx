import React, { ImgHTMLAttributes } from 'react';

interface ResponsiveImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  sources: {
    src: string;
    width: number;
    isDefault?: boolean;
  }[];
  indexBy?: 'min-width' | 'max-width';
  indexUnit?: 'px' | 'rem' | 'vw';
  lazyTimeout?: number;
  lazy?: boolean;
}

interface ResponsiveImageState {
  loaded: boolean;
}

class ResponsiveImage extends React.Component<ResponsiveImageProps, ResponsiveImageState> {
  static defaultProps: Partial<ResponsiveImageProps> = {
    lazy: false,
    lazyTimeout: 2000,
    indexBy: 'min-width',
    indexUnit: 'px',
  };

  imageElement: React.RefObject<HTMLImageElement>;

  observer: IntersectionObserver | null;

  constructor(props: ResponsiveImageProps) {
    super(props);
    const { lazy } = props;

    this.state = { loaded: !lazy };

    this.imageElement = React.createRef();
    this.observer = null;

    this.completeLoad = this.completeLoad.bind(this);
    this.interactionHandler = this.interactionHandler.bind(this);
  }

  componentDidMount(): void {
    const { lazy } = this.props;
    if (!lazy) {
      this.observer = new IntersectionObserver(this.interactionHandler, {
        rootMargin: '500px',
      });
      if (this.imageElement.current) this.observer.observe(this.imageElement.current);
      setTimeout(this.completeLoad, this.props.lazyTimeout);
    }
  }

  componentWillUnmount(): void {
    if (this.observer) this.observer.disconnect();
  }

  interactionHandler(entries: IntersectionObserverEntry[]): void {
    if (entries[0].isIntersecting) this.completeLoad();
  }

  completeLoad(): void {
    const { loaded } = this.state;
    if (!loaded && !!this.imageElement.current) {
      this.setState({ loaded: true }, () => {
        if (this.observer)
          this.observer.unobserve(this.imageElement.current as Element);
      });
    }
  }

  render(): JSX.Element {
    const { sources, alt, title, lazy, indexBy, indexUnit } = this.props;
    const { loaded } = this.state;

    const defaultMedia = sources
      .filter(source => source.isDefault && source.src)[0]
      || sources.filter(source => source.src)[0];

    const otherMedia = sources
      .filter(source => source.src);

    if (loaded && defaultMedia) {
      return (
        <picture ref={this.imageElement}>
          {otherMedia.map((media, index) => (
            <source
              key={`resposive-image-${index}`}
              media={`(${indexBy}: ${media.width}${indexUnit})`}
              srcSet={media.src}
            />
          ))}
          <img
            src={defaultMedia.src}
            alt={alt || title}
            title={title || alt}
            loading={lazy ? 'lazy' : 'eager'}
          />
        </picture>
      );
    }

    return (
      <picture ref={this.imageElement}>
        <img alt={alt || title} title={alt ? title : ''} />
      </picture>
    );
  }
}

export default ResponsiveImage;

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
  nativeLazy?: boolean;
  rootMargin?: string;
  onLoad?: (ev?: any) => void;
}

interface ResponsiveImageState {
  loaded: boolean;
}

class ResponsiveImage extends React.Component<ResponsiveImageProps, ResponsiveImageState> {
  static defaultProps = {
    lazy: false,
    nativeLazy: false,
    indexBy: 'min-width',
    indexUnit: 'px',
  };

  imageElement: React.RefObject<HTMLImageElement>;
  observer: IntersectionObserver | null;
  timeout: ReturnType<typeof setTimeout> | null;

  constructor(props: ResponsiveImageProps) {
    super(props);
    const { lazy } = props;

    this.state = { loaded: !lazy };

    this.imageElement = React.createRef();
    this.observer = null;

    this.completeLoad = this.completeLoad.bind(this);
    this.interactionHandler = this.interactionHandler.bind(this);
    this.timeout = null;
  }

  componentDidMount(): void {
    const { lazy, lazyTimeout, onLoad } = this.props;
    const img = this.imageElement.current;
    if (img && onLoad) {
      if (img.complete || img.naturalWidth) onLoad();
      else img.addEventListener('load', onLoad);
    }

    if (lazyTimeout !== undefined) {
      this.timeout = setTimeout(this.completeLoad, lazyTimeout);
    }

    if (lazy) {
      this.observer = new IntersectionObserver(this.interactionHandler, {
        rootMargin: this.props.rootMargin || '500px',
      });
      if (img) this.observer.observe(img);
    }
  }

  componentWillUnmount(): void {
    if (this.observer) this.observer.disconnect();
    if (this.timeout) clearTimeout(this.timeout);
  }

  interactionHandler(entries: IntersectionObserverEntry[]): void {
    if (entries[0].isIntersecting) this.completeLoad();
  }

  completeLoad(): void {
    const { loaded } = this.state;
    if (!loaded && !!this.imageElement.current) {
      this.setState({ loaded: true }, () => {
        if (this.observer)
          this.observer.disconnect();
      });
    }
  }

  render(): JSX.Element {
    const { sources, alt, title, nativeLazy, indexBy, indexUnit } = this.props;
    const { loaded } = this.state;

    const defaultMedia = sources
      .filter(source => source.isDefault && source.src)[0]
      || sources.filter(source => source.src)[0];

    const otherMedia = sources
      .filter(source => source.src);

    if (loaded && defaultMedia) {
      return (
        <picture>
          {otherMedia.map((media, index) => (
            <source
              key={`resposive-image-${index}`}
              media={`(${indexBy}: ${media.width}${indexUnit})`}
              srcSet={media.src}
            />
          ))}
          <img
            ref={this.imageElement}
            src={defaultMedia.src}
            alt={alt ? alt || '' : title}
            title={title || alt}
            loading={nativeLazy ? 'lazy' : 'eager'}
          />
        </picture>
      );
    }

    return (
      <picture >
        <img alt={alt ? alt || '' : title} title={title || alt}
          ref={this.imageElement}/>
      </picture>
    );
  }
}

export default ResponsiveImage;

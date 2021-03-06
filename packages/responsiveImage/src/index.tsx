import React, { ImgHTMLAttributes } from 'react';

interface ResponsiveImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  sources?: {
    src: string
    width?: number
    isDefault?: boolean
  }[]
  indexBy?: 'min-width' | 'max-width'
  indexUnit?: 'px' | 'rem' | 'vw'
  lazyTimeout?: number
  lazy?: boolean
  nativeLazy?: boolean
  rootMargin?: string
  onLoad?: (ev?: any) => void
  alt?: string
  title?: string
}

interface ResponsiveImageState {
  loaded: boolean
}

class ResponsiveImage extends React.Component<ResponsiveImageProps, ResponsiveImageState> {
  static defaultProps = {
    lazy: false,
    nativeLazy: false,
    indexBy: 'min-width',
    indexUnit: 'px',
    rootMargin: '500px',
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
    const { lazy, lazyTimeout, onLoad, rootMargin } = this.props;
    const img = this.imageElement.current;
    if (img && onLoad && !lazy) {
      if (img.complete || img.naturalWidth) this.completeLoad();
      else img.addEventListener('load', this.completeLoad);
    }

    if (lazyTimeout !== undefined) {
      this.timeout = setTimeout(this.completeLoad, lazyTimeout);
    }

    if (lazy) {
      this.observer = new IntersectionObserver(this.interactionHandler, {
        rootMargin,
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
    const { onLoad } = this.props;
    const { loaded } = this.state;
    if (!loaded && !!this.imageElement.current) {
      if (onLoad) onLoad();
      this.setState({ loaded: true }, () => {
        if (this.observer)
          this.observer.disconnect();
      });
    }
  }

  render(): JSX.Element {
    const { sources, src, alt, title, nativeLazy, indexBy, indexUnit } = this.props;
    const { loaded } = this.state;

    let sourceSet: {
      src: string
      width?: number
      isDefault?: boolean
    }[] = [];

    if (sources && sources.length > 0) sourceSet = sources;
    else if (src) sourceSet = [{ src, isDefault: true }];

    const defaultMedia = sourceSet
      .find(source => source.isDefault && !!source.src)
      || sourceSet.find(source => !!source.src);

    const otherMedia = sourceSet
      .filter(source => !!source.src);

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
            alt={alt || title || ''}
            title={title}
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

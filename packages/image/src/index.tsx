import React from 'react';

interface ImageProps {
  src: string;
  alt?: string;
  title?: string;
  lazy?: boolean;
  lazyTimeout?: number;
}
interface ImageState {
  loaded: boolean;
}

class Image extends React.Component<ImageProps, ImageState> {
  defaultProps = { lazyTimeout: 2000 };

  imageElement: React.RefObject<HTMLImageElement>;

  observer: IntersectionObserver | null;

  constructor(props: ImageProps) {
    super(props);
    const { lazy } = props;

    this.state = { loaded: !lazy };

    this.imageElement = React.createRef();
    this.observer = null;

    this.completeLoad = this.completeLoad.bind(this);
    this.interactionHandler = this.interactionHandler.bind(this);
  }

  componentDidMount() {
    const { lazy, lazyTimeout } = this.props;
    if (lazy && this.imageElement.current) {
      this.observer = new IntersectionObserver(this.interactionHandler, {
        rootMargin: '500px',
      });
      this.observer.observe(this.imageElement.current as Element);
      setTimeout(this.completeLoad, lazyTimeout);
    }
  }

  componentWillUnmount() {
    if (this.observer) this.observer.disconnect();
  }

  interactionHandler(entries: IntersectionObserverEntry[]) {
    if (entries[0].isIntersecting) this.completeLoad();
  }

  completeLoad() {
    const { loaded } = this.state;
    if (!loaded && this.imageElement.current) {
      this.setState({ loaded: true }, () => {
        if (this.observer)
          this.observer.unobserve(this.imageElement.current as Element);
      });
    }
  }

  render() {
    const { title, alt, src } = this.props;
    const { loaded } = this.state;

    return (
      <img
        src={loaded ? src : ''}
        alt={alt || title}
        title={title || alt}
        ref={this.imageElement}
      />
    );
  }
}

export default Image;

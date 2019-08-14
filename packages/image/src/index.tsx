import React from 'react';
import get from 'lodash/get';

interface ImageProps {
  title: string,
  description: string,
  defaultMedia: string,
  mobileMedia: string,
  tabletMedia: string,
  hideTooltip: boolean,
  fit: string,
  noLazy: boolean,
}
interface ImageState {
  loaded: boolean,
}

const isSVG = (fileName: string): boolean => {
  const ext = fileName.split('.').pop();
  return !!ext && ext.toLowerCase() === 'svg';
};

class Image extends React.Component<ImageProps, ImageState> {
  static defaultProps = {
    title: null,
    description: null,
    hideTooltip: false,
    fit: 'contain',
    noLazy: false,
  };

  imageElement: React.RefObject<unknown>;
  observer: IntersectionObserver | null;

  constructor(props: ImageProps) {
    super(props);
    const { noLazy } = props;

    this.state = { loaded: noLazy };

    this.imageElement = React.createRef();
    this.observer = null;

    this.completeLoad = this.completeLoad.bind(this);
    this.interactionHandler = this.interactionHandler.bind(this);
  }

  componentDidMount() {
    const { noLazy } = this.props;
    if (!noLazy && this.imageElement.current) {
      this.observer = new IntersectionObserver(this.interactionHandler, {
        rootMargin: '500px',
      });
      this.observer.observe(this.imageElement.current as Element);
      setTimeout(this.completeLoad, 2000);
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
    const { } = this.props;
    const { } = this.state;

    return (
      <div>edit me</div>
    );
  }
};

export default Image;

import React, { ReactNode } from 'react';

interface AnimationWrapperProps {
  children?: ReactNode | ReactNode[];
  rootMargin?: string;
  generalClass?: string;
  finalClass?: string;
  initialClass?: string;
  delay?: number;
  heightDelayMult: number;
}

interface AnimationWrapperState {
  visible: boolean;
  delay: number;
}

class AnimationWrapper extends React.Component<AnimationWrapperProps, AnimationWrapperState> {
  static defaultProps = {
    rootMargin: '100px',
    generalClass: 'animation-general',
    finalClass: 'animation-final',
    initialClass: 'animation-initial',
    delay: 0,
    heightDelayMult: 1,
  };

  wrapper: React.RefObject<HTMLDivElement>;
  observer?: IntersectionObserver;

  constructor(props: AnimationWrapperProps) {
    super(props);
    const { delay } = props;

    this.state = {
      visible: false,
      delay: Math.abs(delay || 0),
    };

    this.wrapper = React.createRef();
    this.completeLoad = this.completeLoad.bind(this);
    this.interactionHandler = this.interactionHandler.bind(this);
  }

  componentDidMount(): void {
    const { rootMargin, heightDelayMult } = this.props;
    const { delay } = this.state;
    const { top } = this.wrapper.current ? this.wrapper.current.getBoundingClientRect() : { top: null };
    const height = window.innerHeight;

    if (top && top < height) {
      const newDelay = (height - (height - top)) * 0.5 * Math.abs(heightDelayMult);
      this.setState({ delay: delay + newDelay });
    }

    if (this.wrapper.current) {
      this.observer = new IntersectionObserver(this.interactionHandler, {
        rootMargin,
      });
      this.observer.observe(this.wrapper.current);
    }
  }

  componentWillUnmount(): void {
    if (this.observer) this.observer.disconnect();
  }

  interactionHandler(entries: IntersectionObserverEntry[]): void {
    const { delay } = this.state;
    if (entries[0].isIntersecting) setTimeout(this.completeLoad, delay);
  }

  completeLoad(): void {
    const { visible } = this.state;
    if (!visible && this.wrapper.current) {
      this.setState({ visible: true }, () => {
        if (this.observer && this.wrapper.current) this.observer.unobserve(this.wrapper.current);
      });
    }
  }

  render(): JSX.Element {
    const { children, generalClass, finalClass, initialClass } = this.props;
    const { visible } = this.state;

    const classList = [];
    if (generalClass) classList.push(generalClass);
    if (visible && finalClass) classList.push(finalClass);
    if (!visible && initialClass) classList.push(initialClass);

    return (
      <div ref={this.wrapper} className={classList.join(' ')}>
        {children}
      </div>
    );
  }
}

export default AnimationWrapper;

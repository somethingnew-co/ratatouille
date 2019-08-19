import React, { ReactNode } from 'react';

interface CarouselProps {
  items: ReactNode[];
  prevButton?: ReactNode;
  nextButton?: ReactNode;
  startIndex?: number;
  autoRotate?: boolean;
  autoRotateTimeout?: number;
}
interface CarouselState {
  current: number;
}

const mod = (n: number, m: number): number => ((n % m) + m) % m;

const modDist = (n1: number, n2: number, m: number): number => {
  const r0 = Math.abs(n1 - n2);
  const r1 = Math.abs(n1 - (n2 + m));
  const r2 = Math.abs(n1 - (n2 - m));
  return Math.min(Math.min(r0, r1), r2);
};

class Carousel extends React.Component<CarouselProps, CarouselState> {
  static defaultProps: Partial<CarouselProps> = {
    startIndex: 0,
    autoRotate: false,
    autoRotateTimeout: 3000,
  };

  rotateInterval?: number;

  constructor(props: CarouselProps) {
    super(props);
    const { startIndex } = props;

    this.state = { current: startIndex || 0 };

    this.rotateForward = this.rotateForward.bind(this);
    this.rotateBackward = this.rotateBackward.bind(this);
  }

  componentDidMount(): void {
    const { autoRotate, autoRotateTimeout } = this.props;
    if (autoRotate && setInterval) {
      this.rotateInterval = setInterval(this.rotateForward, autoRotateTimeout);
    }
  }

  rotateForward(): void {
    const { items } = this.props;
    const { current } = this.state;
    const next = mod(current + 1, items.length);
    this.setState({ current: next });
  }

  rotateBackward(): void {
    const { items } = this.props;
    const { current } = this.state;
    const next = mod(current - 1, items.length);
    this.setState({ current: next });
  }

  render(): JSX.Element | null {
    const { items, prevButton, nextButton } = this.props;
    const { current } = this.state;

    if (items.length < 3) return null;

    return (
      <div className="carousel-container">
        <div
          className="carousel-button backward"
          onClick={this.rotateBackward}
        >
          {prevButton}
        </div>
        <div className="carousel-items">
          {items.map((item, i) => {
            if (modDist(current, i, items.length) > 1) return null;
            let itemState = 'active';
            if (i === mod(current - 1, items.length)) itemState = 'prev';
            else if (i === mod(current + 1, items.length)) itemState = 'next';
            return (
              <div
                key={`carousel-item-${i}`}
                className={`carousel-item-wrapper ${itemState}`}
              >
                {item}
              </div>
            );
          })}
        </div>
        <div className="carousel-indicators">
          {items.map((item, i) => (
            <div
              key={`carousel-indicator-${i}`}
              className={`carousel-indicator ${i === current && 'active'}`}
            />
          ))}
        </div>
        <div
          className="carousel-button forward"
          onClick={this.rotateForward}
        >
          {nextButton}
        </div>
      </div>
    );
  }
}

export default Carousel;

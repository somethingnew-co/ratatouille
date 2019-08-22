import React, { ReactNode } from 'react';

interface AnimationWrapperProps {
  children: ReactNode | ReactNode[];
  rootMargin: number;
}
interface AnimationWrapperState {
  loaded: boolean;
  addedDelay: number;
}

class AnimationWrapper extends React.Component<AnimationWrapperProps, AnimationWrapperState> {
  static defaultProps = {
    rootMargin: 100,
  };

  constructor(props: AnimationWrapperProps) {
    super(props);

    this.state = {
      loaded: false,
      addedDelay: 0,
    };

    this.wrapper = React.createRef();
    this.observer = null;

    this.completeLoad = this.completeLoad.bind(this);
    this.interactionHandler = this.interactionHandler.bind(this);
  }

  componentDidMount() { }

  render() {
    const { } = this.props;
    const { } = this.state;

    return (
      <div>edit me</div>
  );
  }
};

export default AnimationWrapper;

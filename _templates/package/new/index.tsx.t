---
to: packages/<%=h.changeCase.camel(name)%>/src/index.tsx
---
<%_ const fName = h.changeCase.pascal(name); _%>
<%_ if (locals.component) { _%>
import React from 'react';
<%_ if(locals.styled) { _%>
import * as Styled from './index.styled';
<%_ } _%>

interface <%= fName %>Props { }
<%_ if(locals.functional) { _%>

const <%= fName %>: React.FC<<%= fName %>Props> = props => (
  <%_ if(locals.styled) { _%>
  <Styled.<%= fName %>>{props.children}</Styled.<%= fName %>>
  <%_ } else { _%>
  <div>{props.children}</div>
  <%_ } _%>
);
<%_ } else { _%>
interface <%= fName %>State { }

class <%= fName %> extends React.Component<<%= fName %>Props, <%= fName %>State> {
  constructor(props: <%= fName %>Props) {
    super(props);

    this.state = { };
  }

  componentDidMount(): void { }

  render(): JSX.Element {
    const { } = this.props;
    const { } = this.state;

    return (
      <%_ if(locals.styled) { _%>
      <Styled.<%= fName %>>{this.props.children}</Styled.<%= fName %>>
      <%_ } else { _%>
      <div>{this.props.children}</div>
    <%_ } _%>
    );
  }
};
<%_ } _%>
<%_ } else { _%>
const <%= fName %> = {};
<%_ } _%>

export default <%= fName %>;

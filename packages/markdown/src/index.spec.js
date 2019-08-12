/* eslint-disable no-console */

import React from 'react';
import PropTypes from 'prop-types';
import Markdown from '.';

const exampleString = `
## Try CommonMark

You can try CommonMark here. &amp; This dingus is powered by
[commonmark.js](https://github.com/jgm/commonmark.js), the
JavaScript reference implementation.

1. item one
2. item two
   - sublist
   - sublist

<TestA classname="testclass" someProp="ComponentA" someBool someNum=333 />
<TestB>asdf</TestB>
`;

const TestA = ({
  className,
  someProp,
  someBool,
  someNum,
}) => (
  <div>{someBool ? `${someProp}-${someNum * 2}-${className}` : ''}</div>
);
TestA.propTypes = {
  className: PropTypes.string.isRequired,
  someProp: PropTypes.string.isRequired,
  someBool: PropTypes.bool.isRequired,
  someNum: PropTypes.number.isRequired,
};

const TestB = ({ children }) => (
  <div className="test-b">{children}</div>
);
TestB.propTypes = { children: PropTypes.node.isRequired };

const customTags = {
  TestA,
  TestB,
};

const realError = console.error;
console.error = (...x) => {
  if (x[0].indexOf('recognize') > -1 || x[0].indexOf('incorrect casing. Use PascalCase') > -1) {
    return;
  }
  realError(...x);
};

describe('Markdown Component', () => {
  it('renders null when no props are passed', () => {
    const comp = shallow(<Markdown />);
    expect(comp.type()).toEqual(null);
  });

  it('parses a markdown string', () => {
    const comp = mount(<Markdown content={exampleString} />);
    expect(comp.find('h2').length).toBe(1);
    expect(comp.find('a').length).toBe(1);
    expect(comp.find('ol').length).toBe(1);
  });

  it('parses and renders custom component tags', () => {
    const comp = mount(<Markdown content={exampleString} customTags={customTags} />);
    expect(comp.find('TestA').length).toBe(1);
    expect(comp.find('TestB').length).toBe(1);
    expect(comp.find('TestB').text()).toEqual('asdf');
  });

  it('converts attributes to props', () => {
    const comp = mount(<Markdown content={exampleString} customTags={customTags} />);
    expect(comp.find('TestA').length).toBe(1);
    expect(comp.find('TestA').text()).toEqual('ComponentA-666-testclass');
  });
});

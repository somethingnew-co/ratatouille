import React from 'react';
import {mount, shallow} from 'enzyme';
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

<TestA className="test" />
<TestB>asdf</TestB>
`; 

const TestA = ({ className }) => (
  <div className={className}>ComponentTestA</div>
);

const TestB = ({ children }) => (
  <div className="test-b">{children}</div>
);

const customTags = {
  TestA,
  TestB,
};

const realError = console.error;
console.error = (...x) => {
  if (x[0].indexOf('is unrecognized in this browser') > -1 || x[0].indexOf('incorrect casing. Use PascalCase') > -1) {
    return;
  }
  realError(...x);
};

describe('Markdown Component', function() {
  it('renders null when no props are passed', function() {
    const comp = shallow(<Markdown />);
    expect(comp.type()).toEqual(null)
  })

  it('parses a markdown string', function() {
    const comp = mount(<Markdown content={exampleString} />);
    expect(comp.find('h2').length).toBe(1);
    expect(comp.find('a').length).toBe(1);
    expect(comp.find('ol').length).toBe(1);
  })


  it('parses and renders custom component tags', function() {
    const comp = mount(<Markdown content={exampleString} customTags={customTags} />);
    expect(comp.find('TestA').length).toBe(1);
    expect(comp.find('TestA').text()).toEqual('ComponentTestA');
    expect(comp.find('TestB').length).toBe(1);
    expect(comp.find('TestB').text()).toEqual('asdf');
  })

})

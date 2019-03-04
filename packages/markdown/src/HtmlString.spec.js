import React from 'react';
import {mount, shallow} from 'enzyme';
import HtmlString from '.';

const exampleString = `
<h2>Try CommonMark</h2>
<p>You can try CommonMark here.  This dingus is powered by
  <a href="https://github.com/jgm/commonmark.js">commonmark.js</a>, the
  JavaScript reference implementation.
</p>
<ol>
  <li>item one</li>
  <li>item two</li>
</ol>    
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

describe('HtmlString Component', function() {
  it('renders null when no props are passed', function() {
    const comp = shallow(<HtmlString />);
    expect(comp.type()).toEqual(null)
  })

  it('parses a string into html markup', function() {
    const comp = mount(<HtmlString content={exampleString} />);
    expect(comp.find('h2').length).toBe(1);
    expect(comp.find('ol').length).toBe(1);
  })

  it('parses and renders custom component tags', function() {
    const comp = mount(<HtmlString content={exampleString} customTags={customTags} />);
    expect(comp.find('TestA').length).toBe(1);
    expect(comp.find('TestA').text()).toEqual('ComponentTestA');
    expect(comp.find('TestB').length).toBe(1);
    expect(comp.find('TestB').text()).toEqual('asdf');
  })
})

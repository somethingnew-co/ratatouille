---
to: packages/<%= h.changeCase.camel(name) %>/src/index.test.tsx
---
<%_ const fName = h.changeCase.pascal(name); _%>
import React from 'react';
import { shallow } from 'enzyme';
import <%= fName %> from '.';

describe('@stnew/<%= h.inflection.dasherize(h.changeCase.lower(name)) %>', () => {
  it('Renders <%= fName %>', () => {
    const wrapper = shallow(<<%= fName %>>Hello World!</<%= fName %>>);
    expect(wrapper.text()).toEqual('Hello World!');
  });
});

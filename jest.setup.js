const React = require('react');
const {
  configure,
  mount,
  render,
  shallow,
} = require('enzyme');

const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');

configure({ adapter: new Adapter() });

// Globals
global.shallow = shallow;
global.mount = mount;
global.render = render;
global.React = React;

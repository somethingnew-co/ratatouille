/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Markdown from '.';

const contentA = `## Markdown
A React component for **parsing and rendering** a _markdown_ string.
Especially useful to render markdown content from [Contentful](https://www.contentful.com).
`;

const contentB = `## Markdown
The Markdown component also allows defining custom tags, so that the markdown
string can contain markup that translates to React components.
<Example color="red">This is an Example: <Demo /></Example>
`;

const Example = ({ color, children }) => (
  <div style={{ background: color, padding: '20px', marginTop: '20px' }}>{children}</div>
);
Example.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const DemoButton = () => <button type="button" onClick={action('button click')}>Button</button>;

storiesOf('Markdown', module)

  .add('regular markdown', () => (
    <Markdown content={contentA} />
  ))

  .add('custom component tags', () => (
    <Markdown content={contentB} customTags={{ Example, Demo: DemoButton }} />
  ));

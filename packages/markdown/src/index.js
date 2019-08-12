import React from 'react';
import PropTypes from 'prop-types';
import commonmark from 'commonmark';
import { decode } from 'he';
import HtmlString from './HtmlString';

const Markdown = (props) => {
  const { content, component, ...other } = props;

  if (!content || content.trim() === '') {
    return null;
  }

  const reader = new commonmark.Parser();
  const writer = new commonmark.HtmlRenderer({ esc: (str) => str });
  const parsedContent = writer.render(reader.parse(content));
  const decoded = decode(parsedContent); // decode HTML entities

  return (
    <HtmlString
      content={decoded}
      component={component}
      {...other}
    />
  );
};

Markdown.propTypes = {
  className: PropTypes.string,
  component: PropTypes.string,
  content: PropTypes.string,
  customTags: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

Markdown.defaultProps = {
  className: null,
  component: 'div',
  content: '',
  customTags: {},
};

export default Markdown;

import React from 'react';
import PropTypes from 'prop-types';
import commonmark from 'commonmark';
import { decode } from 'he';
import HtmlString from './HtmlString';

const Markdown = (props) => {
  const { content, ...other } = props;

  if (!content) {
    return null;
  }

  let parsedContent = Array.isArray(content) ? content.join('') : content;

  const reader = new commonmark.Parser();
  const writer = new commonmark.HtmlRenderer({ esc: str => str });
  parsedContent = writer.render(reader.parse(parsedContent));
  const decoded = decode(parsedContent); // decode HTML entities

  return (
    <HtmlString
      content={decoded}
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

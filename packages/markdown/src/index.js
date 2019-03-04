import React from 'react';
import commonmark from 'commonmark';
import HtmlString from './HtmlString';

const Markdown = (props) => {
  const { content, ...other } = props;

  if (!content) {
    return null;
  }

  let parsedContent = Array.isArray(content) ? content.join('') : content;

  const reader = new commonmark.Parser();
  const writer = new commonmark.HtmlRenderer({esc: str => str});
  parsedContent = writer.render(reader.parse(parsedContent));

  // decode HTML entities
  const elem = document.createElement('textarea');
  elem.innerHTML = parsedContent;
  const decoded = elem.value;

  return <HtmlString content={decoded} {...other} />;
};

Markdown.defaultProps = {
  className: null,
  component: 'div',
  content: '',
  customTags: {},
};

export default Markdown;

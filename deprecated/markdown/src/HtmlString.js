import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isString from 'lodash/isString';
import isNaN from 'lodash/isNaN';
import flatten from 'lodash/flatten';

class HtmlString extends Component {
  replace(source, regex, fn) {
    const self = this;
    if (!Array.isArray(source)) {
      // eslint-disable-next-line no-param-reassign
      source = [source];
    }
    // eslint-disable-next-line arrow-body-style
    return flatten(source.map((x) => {
      return isString(x) ? self.replaceString(x, regex, fn) : x;
    }));
  }

  replaceString(str, regex, fn) {
    // find all matches
    const matches = [];
    let match;
    do {
      match = regex.exec(str);
      if (match) {
        matches.push({
          matched: match[0],
          tag: match[1],
          attributes: this.parseAttributes(match[2]),
          content: (match.length > 3) ? match[3] : '',
          index: matches.length,
        });
      }
    } while (match);

    // transform matches into array that can be rendered by react
    let remain = str;
    const result = [];
    // eslint-disable-next-line no-shadow
    matches.forEach((match) => {
      const start = remain.indexOf(match.matched);
      const pre = remain.substr(0, start);
      const parsed = fn(match.tag, match.attributes, match.content);
      const post = remain.substr(start + match.matched.length);
      result.push(pre);
      result.push(parsed);
      remain = post;
    });
    result.push(remain);

    return result;
  }

  /**
   * Parses an attribute name. This is necessary, because some resserved
   * attribute names have to be in camelcase, but the markdown parser
   * converts them to lowercase.
   */
  // eslint-disable-next-line class-methods-use-this
  parseAttributeName(attrName) {
    const reserved = {
      classname: 'className',
    };
    if (Object.keys(reserved).indexOf(attrName) > -1) {
      return reserved[attrName];
    }
    return attrName;
  }

  /**
   * Parses an attribute string (e.g 'id="asdf" someProp="asdf" selected') and
   * returns a prop object (e.g. {id: 'asdf', someProp: 'asdf', selected: true}).
   */
  parseAttributes(attrString) {
    const props = {};

    if (!attrString || attrString.trim() === '') {
      return props;
    }

    const sanitized = attrString.replace(/\s*([=])\s*/g, '$1').trim(); // remove whitespace around equal signs
    const attrs = sanitized.split(' ');
    attrs.forEach((attr) => {
      // don't process if empty string
      if (attr.trim() === '') {
        return;
      }

      // if no equal sign, treat as boolean
      if (attr.indexOf('=') === -1) {
        props[this.parseAttributeName(attr.trim())] = true;
        return;
      }

      // attribute had assigned value
      const keyValue = attr.split('=');
      const key = keyValue[0].trim();
      let value = keyValue[1].trim();

      value = value.replace(/'([^']+(?='))'/g, '$1'); // strip surrounding quotes
      value = value.replace(/"([^"]+(?="))"/g, '$1'); // strip surrounding quotes

      // value was number
      if (isNaN(value * 1) === false) {
        props[this.parseAttributeName(key)] = value * 1;
        return;
      }

      // value was boolean
      if (['false', 'true'].indexOf(value.toLowerCase()) > -1) {
        props[this.parseAttributeName(key)] = value.toLowerCase() === 'true';
        return;
      }

      // value was string
      props[this.parseAttributeName(key)] = value;
    });

    return props;
  }

  render() {
    const {
      content,
      component: ComponentProp,
      customTags,
      ...other
    } = this.props;

    const parsers = [
      // matches <Tag attributes>content</Tag>
      // groups: 1|tags 2|attributes 3|content
      /<(\w+)(\s+[^>]*|)>([\s\S]*?)<\/\1>/g,
      // matches <Tag attributes />
      // groups: 1|tags 2|attributes
      /<(\w+)(\s+[^>]*|)([^>/]*?)\/>/g,
    ];

    let parsedContent = content;
    let matches = 0;
    parsers.forEach((regex) => {
      parsedContent = this.replace(
        parsedContent,
        regex,
        // eslint-disable-next-line no-shadow
        (tagname, attributes, content) => {
          matches += 1;
          const parsedComponent = (tagname in customTags) ? customTags[tagname] : tagname;
          return (
            <HtmlString
              component={parsedComponent}
              content={content}
              customTags={customTags}
              key={`markdown-${tagname}-${matches}`}
              {...attributes}
            />
          );
        },
      );
    });
    if (!parsedContent
      || (isString(parsedContent) && parsedContent.trim() === '')
      || (Array.isArray(parsedContent) && parsedContent.join('').trim() === '')
    ) {
      return <ComponentProp {...other} />;
    }
    return <ComponentProp {...other}>{parsedContent}</ComponentProp>;
  }
}

HtmlString.propTypes = {
  className: PropTypes.string,
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.shape({ render: PropTypes.func.isRequired }),
  ]),
  content: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  customTags: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

HtmlString.defaultProps = {
  className: null,
  component: 'div',
  content: '',
  customTags: {},
};

export default HtmlString;

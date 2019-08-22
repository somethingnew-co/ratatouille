import React from 'react';
import { storiesOf } from '@storybook/react';
import styled, { css } from 'styled-components';

import README from '../README.md';
import { ZipCodeInput, EmailInput } from '.';

const generalStyles = css`
  .form-input-wrapper {
    border: 1px solid black;
    border-radius: 30px;
    overflow: hidden;
    transition: border-color 0.3s;
  }

  .form-input-wrapper.invalid {
    border-color: red;
  }
  .form-input-wrapper.valid {
    border-color: green;
  }

  .form-input-wrapper .form-input {
    width: calc(100% - 30px);
    outline: none;
    border: none;

    height: 30px;
    background-color: white;
    padding: 0 15px;
  }
`;

const ZipCodeWrapper = styled.div`
  .form-input-wrapper { max-width: 100px; }
  ${generalStyles}
`;

const EmailWrapper = styled.div`
  .form-input-wrapper { max-width: 175px; }
  ${generalStyles}
`;

const EmailWrapperIndicator = styled.div`
  .form-input-wrapper {
    position: relative;
    max-width: 175px;
    padding: 0;
    margin: 0;

    .form-input-indicator {
      position: absolute;
      right: 0;
      top: 0;
      width: 0;
      height: 100%;
      transition: width 0.3s, color 0.3s;
    }

    .form-input-indicator.invalid {
      width: 15px;
      background-color: red;
    }

    .form-input-indicator.valid {
      width: 15px;
      background-color: green;
    }
  }

  ${generalStyles}
`;

const FormsStories = storiesOf('Forms', module);

FormsStories.addParameters({
  readme: {
    sidebar: README,
  },
});

FormsStories.add('Zip Code Input', () => (
  <ZipCodeWrapper>
    <ZipCodeInput disableIndicator />
  </ZipCodeWrapper>
));

FormsStories.add('Email Input', () => (
  <EmailWrapper>
    <EmailInput disableIndicator placeholder="hi@somethingnew.co"/>
  </EmailWrapper>
));

FormsStories.add('Email Input w/ Indicator', () => (
  <EmailWrapperIndicator>
    <EmailInput onInvalid={() => console.log('invalid')} onEmpty={() => console.log('empty')} onValid={() => console.log('valid')} />
  </EmailWrapperIndicator>
));

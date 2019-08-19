---
to: "<%= locals.component ? `packages/${h.changeCase.camel(name)}/src/index.stories.tsx` : null %>"
---
<%_ const fName = h.changeCase.pascal(name); _%>
import React from 'react';
import { storiesOf } from '@storybook/react';

import <%= fName %> from '.';

const <%= fName %>Stories = storiesOf('<%= fName %>', module);

<%= fName %>Stories.add('default', () => (
  <<%= fName %> />
));

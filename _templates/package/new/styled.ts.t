---
to: "<%= locals.component && locals.styled ? `packages/${h.changeCase.camel(name)}/src/index.styled.ts` : null %>"
---
<%_ const fName = h.changeCase.pascal(name); _%>
import styled from 'styled-components';

export const <%= fName %> = styled.div``;

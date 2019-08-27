---
to: packages/<%=h.changeCase.camel(name)%>/README.md
---
# @stnew/<%= h.inflection.dasherize(h.changeCase.lower(name)) %>

<%= locals.description ? description : null %>

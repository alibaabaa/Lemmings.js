Lemmings.js
===========

Lemmings.js is a barebones jQuery plugin to provide check all / uncheck all functionality to a collection of checkboxes. The name comes from the classic video game where the lemmings would simply follow the master blindly. That, and other sensible names like checkAll and selectAll were already taken.

Usage
-----
In this example, a checkbox with id of `parent` controls all checkboxes marked with class `lemming`.

    $('#parent').lemmings({ group: '.lemming' });

Options
-------
<table>
  <tr>
    <th>Key</th><th>Default</th><th>Description</th>
  </tr>
  <tr>
    <td>group</td><td>'input[type="checkbox"]'</td><td>The selector for the child checkboxes, otherwise known as the lemmings.</td>
  </tr>
  <tr>
    <td>parentPriority</td><td>true</td><td>When lemmings.js is first attached to a selector, the parent and child checkboxes may be in contradictory states. Set to `true` to apply the child states based on the current parent state. Set to `false` to set the parent based on the current state of the children.</td>
  </tr>
</table>
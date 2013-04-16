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

Good to know
------------
The primary motivation for writing lemmings.js was to include some features that were missing from alternatives at the time.

* Fully implemented UI. Behaves like an operating system parent checkbox, including the [indeterminate sate](http://css-tricks.com/indeterminate-checkboxes/).
* Automatic removal of parent from child selector, so if you do just want the parent to control all other checkboxes on the page, `input[type="checkbox"]` is the only selector you need. Or maybe you're just clumsy like me.
* Ignores elements that aren't checkboxes. If your `group` selector picks up more than just checkboxes, they will be ignored.
* 
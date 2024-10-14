var React = require('react');

function WithoutJSX() {
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Welcome to React'),
    React.createElement('p', null, 'This is a React application without JSX')
  );
}

module.exports = WithoutJSX;

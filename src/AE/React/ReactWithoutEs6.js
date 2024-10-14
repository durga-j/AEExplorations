var React = require('react');

function Es6(props) {
  return React.createElement('h1', null, 'Hello, ' + props.name);
}

module.exports = Es6;

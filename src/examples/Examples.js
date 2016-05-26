// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var Examples = React.createClass({
  contextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  childContextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  getChildContext: function() {
    return {
      routePrefix: this.context.routePrefix + 'examples/'
    };
  },

  componentWillMount() {
    const script = document.createElement('script');
    script.src = 'http://grommet.us.rdlabs.hpecorp.net/hpe/hpe-internal/hpe.js';
    document.body.appendChild(script);

    setTimeout(function() {
      window._HPE.initialize({
        styleWholePage: false,
        header: {
          load: true,
          isExternal: true,
          links: [{
            label: 'Home',
            href: '/home'
          }, {
            label: 'Navigation',
            links: [{
              label: 'Contact',
              href: '/contact'
            }, {
              label: 'Help',
              href: '/help'
            }]
          }, {
            label: 'About Us',
            href: '/about'
          }]
        },
        footer: {
          load: true
        }
      });
    }, 1000);
  },

  render: function () {
    return (
      <div>
        Examples
      </div>
    );
  }
});

Examples.routes = function () {
  return [
    <Route key="top" path="examples" component={Examples} />
  ];
};

module.exports = Examples;

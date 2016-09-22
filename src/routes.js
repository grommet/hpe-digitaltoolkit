var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

var Docs = require('./Docs');
var Home = require('./Home');
var Design = require('./design/Design');
var Develop = require('./develop/Develop');
var Examples = require('./examples/Examples');
var Primary = require('./examples/Primary');

module.exports = function (rootPath) {
  var DocsRouter = React.createClass({

    childContextTypes: {
      rootPath: React.PropTypes.string.isRequired,
      routePrefix: React.PropTypes.string.isRequired
    },

    getChildContext: function() {
      return {
        rootPath: rootPath,
        routePrefix: rootPath
      };
    },

    render: function() {
      return (
        <Docs {...this.props} />
      );
    }
  });

  return (
    <Route path={rootPath} component={DocsRouter}>
      <IndexRoute component={Home} />
      {Design.routes()}
      {Develop.routes()}
      {Examples.routes()}
      {Primary.routes()}
    </Route>
  );
};

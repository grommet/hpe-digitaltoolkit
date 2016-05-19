// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;

var Section = require('grommet/components/Section');
var DocsSplit = require('../DocsSplit');
var DocsArticle = require('../DocsArticle');
var Menu = require('grommet/components/Menu');
var Anchor = require('grommet/components/Anchor');

var Philosophy = require('./Philosophy');

var CONTENTS = [
  {route: "design_philosophy", label: 'Philosophy', component: Philosophy,
    contents: [
      {label: 'Best Practices', id: 'best-practices'},
      {label: 'Usability', id: 'usability'},
      {label: 'Interactions', id: 'interactions'},
      {label: 'Mobile', id: 'mobile'},
      {label: 'Accessibility', id: 'accessibility'}
    ]
  }
];

var Design = React.createClass({

  contextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  childContextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  getChildContext: function() {
    return {
      routePrefix: this.context.routePrefix + 'design/'
    };
  },

  render: function () {
    var title = <Link to={this.context.routePrefix + "design"}>Design</Link>;
    return (
      <DocsSplit title={title} contents={CONTENTS} onChange={this._highlightCode}>
        <DocsArticle title="Design" colorIndex="neutral-2">

          <Section>
            <p>This application style guide was created by the designers at Hewlett
            Packard Enterprise. The guide covers the general design principles as well
            as specific design guidelines. You'll also find downloadable assets for the
            basic elements of the application style. These are meant to help designers
            quickly begin designing applications based on these styles and patterns.
            Finally, we've also created a web-based development platform that enables
            developers to quickly begin implementing enterprise applications.</p>
            <Menu direction="column">
              <Link to={this.context.routePrefix + "design/resources"}>
                <Anchor id="resources-button" tag="span" primary={true}>Resources</Anchor>
              </Link>
            </Menu>
          </Section>
        </DocsArticle>
      </DocsSplit>
    );
  }
});

var DesignDocument = React.createClass({

  contextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  childContextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  getChildContext: function() {
    return {
      routePrefix: this.context.routePrefix + 'design/'
    };
  },

  render: function () {
    var title = <Link to={this.context.routePrefix + "design"}>Design</Link>;
    return (
      <DocsSplit title={title} contents={CONTENTS}>
        {this.props.children}
      </DocsSplit>
    );
  }
});

var Empty = React.createClass({
  render: function () {
    return (<div></div>);
  }
});

function createContentRoutes(contents) {
  var result = [];
  contents.forEach(function (content) {

    var component = content.component || Empty;
    result.push(
      <Route key={content.label}
        path={content.label.toLowerCase().replace(/ /g, "-")}
        component={component} />
    );

    if (content.hasOwnProperty('contents')) {
      result = result.concat(createContentRoutes(content.contents));
    }
  });
  return result;
}

Design.routes = function () {
  var routes = createContentRoutes(CONTENTS);
  return [
    <Route key="top" path="design" component={Design} />,
    <Route key="docs" path="design" component={DesignDocument}>{routes}</Route>
  ];
};

module.exports = Design;

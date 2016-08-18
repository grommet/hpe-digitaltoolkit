// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;

var DocsSplit = require('../DocsSplit');
var DocsArticle = require('../DocsArticle');
var Menu = require('grommet/components/Menu');
var Anchor = require('grommet/components/Anchor');

var HelloWorld = require('./HelloWorld');
var GetStarted = require('./GetStarted');

var ActionsDoc = require('./patterns/ActionsDoc');
var BoxDoc = require('./components/BoxDoc');
var DashboardDoc = require('./patterns/DashboardDoc');
var NavigationDoc = require('./patterns/NavigationDoc');
var MarqueeDoc = require('./components/MarqueeDoc');
var WorldMapDoc = require('./components/WorldMapDoc');
var ContentCardDoc = require('./components/ContentCardDoc');
var StackDoc = require('./components/StackDoc');

//hjjs configuration
var hljs = require('highlight.js/lib/highlight');
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'));
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('scss', require('highlight.js/lib/languages/scss'));

var CONTENTS = [
  {label: 'Guides',
    contents: [
      {route: 'develop_helloworld', label: 'Hello World',
        component: HelloWorld},
      {route: 'develop_getstarted', label: 'Get Started',
        component: GetStarted}
    ]
  },
  {label: 'Patterns',
    contents: [
      {route: 'develop_dashboard', label: 'Dashboard', component: DashboardDoc},
      {route: 'develop_navigation', label: 'Navigation', component: NavigationDoc},
      {route: 'develop_actions', label: 'Actions', component: ActionsDoc}
    ]
  },
  {label: 'Components',
    contents: [
      {route: 'develop_box', label: 'Box', component: BoxDoc},
      {route: 'develop_marquee', label: 'Marquee', component: MarqueeDoc},
      {route: 'develop_content-card', label: 'ContentCard', component: ContentCardDoc},
      {route: 'develop_stack', label: 'Stack', component: StackDoc},
      {route: 'develop_world-map', label: 'WorldMap', component: WorldMapDoc}
    ]
  }
];

var Develop = React.createClass({
  contextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  childContextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  getChildContext: function() {
    return {
      routePrefix: this.context.routePrefix + 'develop/'
    };
  },

  render: function () {
    var title = <Link to={this.context.routePrefix + "develop"}>Develop</Link>;
    return (
      <DocsSplit title={title} contents={CONTENTS} onChange={this._highlightCode}>
        <DocsArticle title="Develop" colorIndex="neutral-1">
          <section>
            <p>Grommet was created to give developers and designers alike access to tools
            that otherwise are out of reach of most product teams. Grommet’s goal is to
            assist in creating experiences that work accross the many different interaction
            methods and screen sizes.</p>
            <Menu direction="column">
              <Link to={this.context.routePrefix + "develop/hello-world"}>
                <Anchor tag="span" primary={true}>Hello Grommet!</Anchor>
              </Link>
              <Link to={this.context.routePrefix + "develop/get-started"}>
                <Anchor tag="span" primary={true}>Get Started</Anchor>
              </Link>
            </Menu>
          </section>
        </DocsArticle>
      </DocsSplit>
    );
  }
});

var DevelopDocument = React.createClass({

  contextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  childContextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  getChildContext: function() {
    return {
      routePrefix: this.context.routePrefix + 'develop/'
    };
  },

  componentDidMount: function () {
    this._highlightCode();
  },

  componentDidUpdate: function () {
    this._highlightCode();
  },

  _highlightCode: function () {
    var nodes = document.querySelectorAll('pre code');
    for (var i = 0; i < nodes.length; i++) {
      hljs.highlightBlock(nodes[i]);
    }
  },

  render: function () {
    var title = <Link to={this.context.routePrefix + "develop"}>Develop</Link>;
    return (
      <DocsSplit title={title} contents={CONTENTS} onChange={this._highlightCode}>
        {this.props.children}
      </DocsSplit>
    );
  }
});

function createContentRoutes(contents) {
  var result = [];
  contents.forEach(function (content) {
    result.push(
      <Route key={content.label}
        path={content.label.toLowerCase().replace(/ /g, "-")}
        component={content.component} />
    );
    if (content.hasOwnProperty('contents')) {
      result = result.concat(createContentRoutes(content.contents));
    }
  });
  return result;
}

Develop.routes = function () {
  var routes = createContentRoutes(CONTENTS);
  return [
    <Route key="top" path="develop" component={Develop} />,
    <Route key="docs" path="develop" component={DevelopDocument}>{routes}</Route>
  ];
};

module.exports = Develop;

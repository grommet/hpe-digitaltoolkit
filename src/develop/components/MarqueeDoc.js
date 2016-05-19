// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var jsxToString = require('jsx-to-string');
var DocsArticle = require('../../DocsArticle');
var Marquee = require('../../modules/Marquee');

Marquee.displayName = 'Marquee';

var inline = "<Marquee />";

var MarqueeDoc = React.createClass({

  contextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  _renderCode(name, jsx) {
    return (
      <div>
        <h3>{name}</h3>
        <div className="example">
          {jsx}
        </div>
        <pre><code className="html hljs xml">
          {jsxToString(jsx)}
        </code></pre>
      </div>
    );
  },

  render: function() {
    var simpleMarquee = (
      <Marquee darkTheme={false}
        backgroundImage="url(../img/MarqueeImage_051916_H.jpg)"
        headline="Accelerate your transformation with the cloud"
        subHeadline="HPE can help you benefit now from your right mix of cloud" />
    );

    return (
      <DocsArticle title="Marquee" colorIndex="neutral-3">

        <p>The Marquee module.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>backgroundImage            string</code></dt>
            <dd>Background image for the marquee. Required.</dd>
            <dt><code>darkTheme                  true|false</code></dt>
            <dd>Text will be light-colored if true, dark if false.  Defaults to <code>true</code>.</dd>
            <dt><code>flush                      true|false</code></dt>
            <dd>If true, the marquee will horizontally fill the browser screen.  Defaults to true.</dd>
            <dt><code>headline                   string</code></dt>
            <dd>Headline of the marquee.  Required.</dd>
            <dt><code>headlineSize               small|medium|large</code></dt>
            <dd>Size of the headline.  Defaults to <code>large</code>.</dd>
            <dt><code>justify                    start|center|end</code></dt>
            <dd>Position of the text on the marquee.  Defaults to <code>end</code>.</dd>
            <dt><code>link                       string</code></dt>
            <dd>External URL where the "Learn More" link should go.</dd>
            <dt><code>onClick                    function</code></dt>
            <dd>Click handler for the "Learn More" link.</dd>
            <dt><code>subHeadline                string</code></dt>
            <dd>Content for the subtext.  Required.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          {this._renderCode('Default', simpleMarquee)}
        </section>

      </DocsArticle>
    );
  }
});

module.exports = MarqueeDoc;

// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var jsxToString = require('jsx-to-string');
var DocsArticle = require('../../DocsArticle');
var Callout = require('../../modules/Callout');

Callout.displayName = 'Callout';

var inline = "<Callout ... />";

var CalloutDoc = React.createClass({

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
    var simpleCallout = (
      <Callout
        thumbnail="/docs/img/Case_Study_image.png"
        eyebrow="Case Study"
        heading="The Key Steps to Reducing Software Spend"
        description="HPE Software Licensing and Management Solutions can help you optimize your software investments through control of complex negotiations and renewal processes"
        link="#"
      />
    );

    return (
      <DocsArticle title="Callout" colorIndex="neutral-3">

        <p>The Callout module.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Callout Options</h2>
          <dl>
            <dt><code>thumbnail            {'{url}'}</code></dt>
            <dd>Url path to image. Required.</dd>
            <dt><code>eyebrow              {'{string}'}</code></dt>
            <dd>Content label.</dd>
            <dt><code>heading              {'{string}'}</code></dt>
            <dd>Content heading. Required.</dd>
            <dt><code>description          {'{string}'}</code></dt>
            <dd>Content description. Required.</dd>
            <dt><code>link                 {'{location}'}</code></dt>
            <dd>Anchor hyperlink reference. If no <code>link</code> is provided, <code>linkIcon</code> and <code>linkText</code> will not be displayed.</dd>
            <dt><code>linkIcon             {'{element}'}</code></dt>
            <dd>Anchor Icon element. Defaults to <code>&lt;LinkNext&gt;</code> icon. See <a href="http://www.grommet.io/docs/develop/icon">Icon</a>. </dd>
            <dt><code>linkText             {'{string}'}</code></dt>
            <dd>Anchor text. Defaults to "Get the Details".</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          {this._renderCode('Default', simpleCallout)}
        </section>
      </DocsArticle>
    );
  }
});

module.exports = CalloutDoc;

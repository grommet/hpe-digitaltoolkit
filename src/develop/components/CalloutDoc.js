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
        overline="Case Study"
        heading="The Key Steps to Reducing Software Spend"
        description="HPE Software Licensing and Management Solutions can help you optimize your software investments through control of complex negotiations and renewal processes"
      />
    );

    var linkCallout = (
      <Callout
        thumbnail="/docs/img/Case_Study_image.png"
        overline="Case Study"
        heading="The Key Steps to Reducing Software Spend"
        description="HPE Software Licensing and Management Solutions can help you optimize your software investments through control of complex negotiations and renewal processes"
        link="#"
      />
    );

    var videoCallout = (
      <Callout
        thumbnail="/docs/img/Video_image.png"
        overline="Video - 4:27"
        heading="Foundation Paraguay Empowers Microbusinesses"
        description="See how Hewlett Packard Enterprise delivers mobile solutions to improve quality of life and help eliminate poverty in South America."
        video={{
          source: 'video/test.mp4',
          type: 'mp4'
        }}
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
            <dt><code>overline              {'{string}'}</code></dt>
            <dd>Content label.</dd>
            <dt><code>heading              {'{string}'}</code></dt>
            <dd>Content heading. Required.</dd>
            <dt><code>description          {'{string}'}</code></dt>
            <dd>Content description. Required.</dd>
            <dt><code>link                 {'{location}'}</code></dt>
            <dd>Anchor hyperlink reference.</dd>
            <dt><code>linkIcon             {'{element}'}</code></dt>
            <dd>
              Anchor Icon element. If video is provided, default is <code>&lt;Play&gt;</code> icon, else it is <code>&lt;LinkNext&gt;</code> icon. See <a href="http://www.grommet.io/docs/develop/icon">Icon</a>.
              If no <code>link, onClick, or video</code> is provided, <code>linkIcon</code> will not be displayed.
            </dd>
            <dt><code>linkText             {'{string}'}</code></dt>
            <dd>
              Anchor text. If video is provided, default is "Watch Now", else it is "Get the Details".
              If no <code>link, onClick, or video</code> is provided, <code>linkText</code> will not be displayed.
            </dd>
            <dt><code>onClick              {'{func}'}</code></dt>
            <dd>Click handler.</dd>
            <dt><code>video                {'{source: , type: mp4|webm|ogg}'}</code></dt>
            <dd>Video media type and source path.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          {this._renderCode('Default', simpleCallout)}

          {this._renderCode('Link', linkCallout)}

          {this._renderCode('Video', videoCallout)}
        </section>
      </DocsArticle>
    );
  }
});

module.exports = CalloutDoc;

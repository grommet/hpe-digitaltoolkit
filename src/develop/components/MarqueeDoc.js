// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var jsxToString = require('jsx-to-string');
var DocsArticle = require('../../DocsArticle');
var Marquee = require('../../modules/Marquee');
var Video = require('grommet/components/Video');

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
        backgroundImage="/docs/img/MarqueeImage_051916_H.jpg"
        headline="Accelerate your transformation with the cloud"
        subHeadline="HPE can help you benefit now from your right mix of cloud"
        link="http://www.grommet.io/docs/"
        responsiveBackgroundPosition="left" />
    );

    var videoMarquee = (
      <Marquee size="small" darkTheme={true} justify="start"
        backgroundVideo={<Video muted={true} loop={true} autoPlay={true} showControls={false}><source src="/docs/img/VideoMarque_Part3V2.mp4" type='video/mp4'/></Video>}
        link="http://www.grommet.io/docs/"
        headline="Accelerate your transformation with the cloud"
        subHeadline="HPE can help you benefit now from your right mix of cloud"
        responsiveBackgroundPosition="left"
        overlayVideo={<Video autoPlay={true}><source src="/docs/img/VideoMarque_Part3V3.mp4" type='video/mp4'/></Video>} />
    );

    return (
      <DocsArticle title="Marquee" colorIndex="neutral-3">

        <p>The Marquee module.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>backgroundImage                  {"{string}"}</code></dt>
            <dd>Source of image to be used as the background for the marquee.  Optional.</dd>
            <dt><code>backgroundVideo                  {"{element}"}</code></dt>
            <dd>Video component to be used as the background for the marquee.  Optional.</dd>
            <dt><code>darkTheme                        true|false</code></dt>
            <dd>Text will be light-colored if true, dark if false.  Defaults to <code>true</code>.</dd>
            <dt><code>flush                            true|false</code></dt>
            <dd>If true, the marquee will horizontally fill the browser screen.  Defaults to <code>true</code>.</dd>
            <dt><code>headline                         {"{string}"}</code></dt>
            <dd>Headline of the marquee.  Required.</dd>
            <dt><code>headlineSize                     small|medium|large</code></dt>
            <dd>Size of the headline.  Defaults to <code>large</code>.</dd>
            <dt><code>image                            {"{string}"}</code></dt>
            <dd>Source of image to be shown opposite the text.  Optional.</dd>
            <dt><code>justify                          start|center|end</code></dt>
            <dd>Position of the text on the marquee.  Defaults to <code>end</code>.</dd>
            <dt><code>link                             {"{string}"}</code></dt>
            <dd>External URL where the link should go.  Optional.</dd>
            <dt><code>linkIcon                         {"{element}"}</code></dt>
            <dd>Icon component to be used with the link.  Optional.</dd>
            <dt><code>linkText                         {"{string}"}</code></dt>
            <dd>Text to be shown for the link.  Defaults to <code>Learn More</code>.</dd>
            <dt><code>onClick                          {"{function}"}</code></dt>
            <dd>Click handler for the link.  Optional.</dd>
            <dt><code>overlayVideo                     {"{element}"}</code></dt>
            <dd>Video component to be shown when the "Watch Now" link is clicked.  Optional.</dd>
            <dt><code>responsiveBackgroundPosition     left|center|right</code></dt>
            <dd>Background position where the background image should be pinned for smaller screen sizes.  Defaults to <code>center</code>.</dd>
            <dt><code>separator                        true|false</code></dt>
            <dd>A thin line that will be shown on mobile-size screens, to separate the Marquee text from the next component.  Defaults to <code>false</code>.</dd>
            <dt><code>size                             small|large</code></dt>
            <dd>The size of the Marquee.  Defaults to <code>large</code>.</dd>
            <dt><code>subHeadline                      {"{string}"}</code></dt>
            <dd>Content for the subtext.  Required.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          {this._renderCode('Default', simpleMarquee)}
          {this._renderCode('Small video marquee', videoMarquee)}
        </section>

      </DocsArticle>
    );
  }
});

module.exports = MarqueeDoc;

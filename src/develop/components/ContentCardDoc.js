// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var jsxToString = require('jsx-to-string');
var DocsArticle = require('../../DocsArticle');
var ContentCard = require('../../modules/ContentCard');
var Box = require('grommet/components/Box');
var Tiles = require('grommet/components/Tiles');
var Heading = require('grommet/components/Heading');
var SocialTwitterIcon = require('grommet/components/icons/base/SocialTwitter');
var SocialFacebookIcon = require('grommet/components/icons/base/SocialFacebook');
var SocialLinkedinIcon = require('grommet/components/icons/base/SocialLinkedin');


ContentCard.displayName = 'ContentCard';

var inline = "<ContentCard ... />";

var ContentCardDoc = React.createClass({

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
    var simpleContentCard = (
      <Box colorIndex="light-2">
        <ContentCard
          thumbnail="/docs/img/Case_Study_image.png"
          overline="Featured Post"
          heading="The Key Steps to Reducing Software Spend"
          description="HPE Software Licensing and Management Solutions can help you optimize your software investments through control of complex negotiations and renewal processes"
        />
      </Box>
    );

    var linkContentCard = (
      <Box colorIndex="light-2">
        <ContentCard
          contentPlacement="bottom"
          thumbnail="/docs/img/Case_Study_image.png"
          overline="Featured Post"
          heading="The Key Steps to Reducing Software Spend"
          description="HPE Software Licensing and Management Solutions can help you optimize your software investments through control of complex negotiations and renewal processes"
          link="#"
        />
      </Box>
    );

    var videoContentCard = (
      <Box colorIndex="light-2">
        <ContentCard
          direction="row"
          thumbnail="/docs/img/Case_Study_image.png"
          overline="Video - 4:27"
          heading="Foundation Paraguay Empowers Microbusinesses"
          description="See how Hewlett Packard Enterprise delivers mobile solutions to improve quality of life and help eliminate poverty in South America."
          video={{
            source: 'video/test.mp4',
            type: 'mp4'
          }}
        />
      </Box>
    );

    var socialFeedCard1 = (
      <ContentCard
        direction="column"
        overline="Social"
        socialIcon={<SocialTwitterIcon />}
        link="http://www.twitter.com">
        <Heading tag="h2">Protect Your Digital Enterprise ipsum lorem dolores aeat el</Heading>
      </ContentCard>
    );

    var socialFeedCard2 = (
      <ContentCard
        direction="column"
        overline="Social"
        socialIcon={<SocialFacebookIcon />}
        link="http://www.twitter.com">
        <Heading tag="h2">Protect Your Digital Enterprise ipsum lorem dolores aeat el</Heading>
      </ContentCard>
    );

    var socialFeedCard3 = (
      <ContentCard
        direction="column"
        overline="Social"
        socialIcon={<SocialLinkedinIcon />}
        link="http://www.twitter.com">
        <Heading tag="h2">Protect Your Digital Enterprise ipsum lorem dolores aeat el</Heading>
      </ContentCard>
    );

    var blogPostCard = (
      <ContentCard
        direction="column"
        overline="Featured Post"
        link="http://www.twitter.com">
        <Heading tag="h2">Protect Your Digital Enterprise ipsum lorem dolores aeat el</Heading>
      </ContentCard>
    );

    var featuredPostCard = (
      <ContentCard
        thumbnail="/docs/img/Case_Study_image.png"
        direction="column"
        overline="Featured Post"
        link="http://www.twitter.com">
        <Heading tag="h2">Protect Your Digital Enterprise ipsum lorem dolores aeat el</Heading>
      </ContentCard>
    );

    var socialCards = (
      <Tiles size="large" colorIndex="light-2">
        {socialFeedCard1}
        {blogPostCard}
        {socialFeedCard2}
        {socialFeedCard3}
      </Tiles>
    );

    var contentCardTiles = (
      <Tiles size="large" colorIndex="light-2">
        <ContentCard
          direction="column"
          thumbnail="/docs/img/Case_Study_image.png"
          overline="Featured Post"
          heading="Protect Your Digital Enterprise ipsum Learn More lorem dolores aeat"
          description="It’s not an either/or world. It’s about finding the right platform for each app, workload and service. Learn how hybrid infrastructure can help you achieve cloud agility with traditional IT predictability. It’s not an either/or world. It’s about finding the right platform for each app, workload and service. Learn how hybrid infrastructure can help you achieve cloud agility with traditional IT predictability. It’s not an either/or world. It’s about finding the right platform for each app, workload and service. Learn how hybrid infrastructure can help you achieve cloud agility with traditional IT predictability. "
          link="http://grommet.io"
        />
        <ContentCard
          direction="column"
          thumbnail="/docs/img/Case_Study_image.png"
          overline="Video - 4:27"
          heading="Foundation Paraguay Empowers Microbusinesses"
          description="See how Hewlett Packard Enterprise delivers mobile solutions to improve quality of life and help eliminate poverty in South America."
          video={{
            source: 'video/test.mp4',
            type: 'mp4'
          }}
        />
        <ContentCard
          direction="column"
          thumbnail="/docs/img/Case_Study_image.png"
          overline="Featured Post"
          heading="The Key Steps to Reducing Software Spend"
          description="HPE Software Licensing and Management Solutions can help you optimize your software investments through control of complex negotiations and renewal processes"
        />
        <ContentCard
          direction="column"
          thumbnail="/docs/img/Case_Study_image.png"
          overline="Featured Post"
          heading="The Key Steps to Reducing Software Spend"
          description="HPE Software Licensing and Management Solutions can help you optimize your software investments through control of complex negotiations and renewal processes"
        />
      </Tiles>
    );

    var contentCardTilesMasonry = (
      <Tiles size="large" masonry={true} numColumns={7} colorIndex="light-2">
        {blogPostCard}
        {featuredPostCard}
        {socialFeedCard1}
        {socialFeedCard1}
        {blogPostCard}
        {featuredPostCard}
        {featuredPostCard}
        {blogPostCard}
      </Tiles>
    );

    return (
      <DocsArticle title="ContentCard" colorIndex="neutral-3">

        <p>The ContentCard module.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>ContentCard Options</h2>
          <dl>
            <dt><code>thumbnail            {'{url}'}</code></dt>
            <dd>Url path to image. Use contentPlacement option to position thumbnail within card.</dd>
            <dt><code>overline             {'{string}'}</code></dt>
            <dd>Content label.</dd>
            <dt><code>heading              {'{string}'}</code></dt>
            <dd>Content heading.</dd>
            <dt><code>description          {'{string}'}</code></dt>
            <dd>Content description.</dd>
            <dt><code>link                 {'{location}'}</code></dt>
            <dd>Anchor hyperlink reference.</dd>
            <dt><code>linkIcon             {'{element}'}</code></dt>
            <dd>
              Anchor Icon element. If video is provided, default is <code>&lt;Play&gt;</code> icon, else it is <code>&lt;LinkNext&gt;</code> icon. See <a href="http://www.grommet.io/docs/develop/icon">Icon</a>.
              If no <code>link, onClick, or video</code> is provided, <code>linkIcon</code> will not be displayed.
            </dd>
            <dt><code>linkText             {'{string}'}</code></dt>
            <dd>
              Anchor text. If video is provided, default is "Watch Now", else it is "Learn More".
              If no <code>link, onClick, or video</code> is provided, <code>linkText</code> will not be displayed.
            </dd>
            <dt><code>onClick              {'{func}'}</code></dt>
            <dd>Click handler.</dd>
            <dt><code>video                {'{source: <string>, type: mp4|webm|ogg}'}</code></dt>
            <dd>Video media type and source path.</dd>
            <dt><code>socialIcon           {'{element}'}</code></dt>
            <dd>
              Icon element. See <a href="http://www.grommet.io/docs/develop/icon">Icon</a>.
              If <code>socialIcon</code> is present, Anchor (<code>linkIcon</code> and <code>linkText</code>) will not be displayed.
            </dd>
            <dt><code>direction            {'column|row'}</code></dt>
            <dd>Applies the ContentCards in a column (default) or row direction. Expects multiple ContentCard modules to be wrapped in a <a href="http://www.grommet.io/docs/hpe/develop/tiles">Tiles</a> component.</dd>
            <dt><code>contentPlacement     {'top|bottom'}</code></dt>
            <dd>If thumbnail url is set, align thumbnail to top or bottom of card. Defaults to <code>'top'</code>.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          {this._renderCode('Default', simpleContentCard)}

          {this._renderCode('Bottom contentPlacement, Link', linkContentCard)}

          {this._renderCode('Row, Video', videoContentCard)}

          {this._renderCode('Custom Children, with and without socialIcon (Tiles)', socialCards)}

          {this._renderCode('Link, Video, Simple, Simple (Tiles)', contentCardTiles)}

          {this._renderCode('Tiles with Masonry', contentCardTilesMasonry)}
        </section>
      </DocsArticle>
    );
  }
});

module.exports = ContentCardDoc;

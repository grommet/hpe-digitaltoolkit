// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var jsxToString = require('jsx-to-string');
var DocsArticle = require('../../DocsArticle');
var ContentCard = require('../../modules/ContentCard');
var Masonry = require('../../modules/Masonry');
var Heading = require('grommet/components/Heading');
var SocialTwitterIcon = require('grommet/components/icons/base/SocialTwitter');


Masonry.displayName = 'Masonry';

var inline =
  "<Masonry numColumns={#}>\n" +
  "  <CardContent>\n" +
  "   ...\n" +
  "  </CardContent>\n" +
  "  ...\n" +
  "</Masonry>";

var MasonryDoc = React.createClass({

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
    var socialFeedCard = (
      <ContentCard
        direction="vertical"
        overline="Featured Post"
        socialIcon={<SocialTwitterIcon />}
        link="http://www.twitter.com">
        <Heading tag="h2">Protect Your Digital Enterprise ipsum lorem dolores aeat el</Heading>
      </ContentCard>
    );

    var blogPostCard = (
      <ContentCard
        direction="vertical"
        overline="Featured Post"
        link="http://www.twitter.com">
        <Heading tag="h2">Protect Your Digital Enterprise ipsum lorem dolores aeat el</Heading>
      </ContentCard>
    );

    var featuredPostCard = (
      <ContentCard
        thumbnail="/docs/img/Case_Study_image.png"
        direction="vertical"
        overline="Featured Post"
        link="http://www.twitter.com">
        <Heading tag="h2">Protect Your Digital Enterprise ipsum lorem dolores aeat el</Heading>
      </ContentCard>
    );

    var contentCardMasonry = (
      <Masonry numColumns={7}>
        {blogPostCard}
        {featuredPostCard}
        {socialFeedCard}
        {socialFeedCard}
        {blogPostCard}
        {featuredPostCard}
        {featuredPostCard}
        {blogPostCard}
      </Masonry>
    );

    return (
      <DocsArticle title="Masonry" colorIndex="neutral-3">

        <p>The Masonry module.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Masonry Options</h2>
          <dl>
            <dt><code>numColumns            {'{number}'}</code></dt>
            <dd>Number of columns to allow, based on component width. Responds based on minimum column width.</dd>
            <dt><code>responsive            {'true|false'}</code></dt>
            <dd>Whether or not to update number of columns based on component width. Defaults to <code>true</code>.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          {this._renderCode('7 Columns', contentCardMasonry)}
        </section>
      </DocsArticle>
    );
  }
});

module.exports = MasonryDoc;

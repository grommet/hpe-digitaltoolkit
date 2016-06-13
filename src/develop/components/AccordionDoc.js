// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var jsxToString = require('jsx-to-string');
var DocsArticle = require('../../DocsArticle');
var Accordion = require('../../modules/AccordionGrommet');
var AccordionPanel = require('../../modules/AccordionPanelGrommet');

Accordion.displayName = 'Accordion';

var inline = "<Accordion ... />";

var AccordionDoc = React.createClass({

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
    var simpleAccordionPanel = (
      <AccordionPanel
        panelTitle="Enterprise Mobility Services"
        headline="Empower your employees while ensuring your workplace remains
enterprise grade, scalable and secure."
        subHeadline="See how Hewlett Packard Enterprise delivers mobile solutions to improve quality of life
and help eliminate poverty in South America."
        ctaData={{
          headline: 'Foundation Paraguay Empowers Microbusinesses',
          subHeadline: 'See how Hewlett Packard Enterprise delivers mobile solutions to improve quality of life and help eliminate poverty in South America.',
          link: 'link url',
          linkText: 'Watch Now'
        }}
        ctaThumbnail="../img/carousel-1.png"
        resources={[
          {
            thumbnail: '../img/carousel-1.png',
            headline: 'Lorem ipsum',
            subHeadline: 'Lorem ipsum dolor sit amet dicat sonet.',
            link: 'link url',
            linkText: 'Learn more'
          },
          {
            thumbnail: '../img/carousel-1.png',
            headline: 'Lorem ipsum',
            subHeadline: 'Lorem ipsum dolor sit amet dicat sonet.',
            link: 'link url',
            linkText: 'Learn more'
          }
        ]}
      />
    );

    var simpleAccordion = (
      <Accordion
        headline="Services Portfolio"
        subHeadline="Lorem ipsum dolor sit amet, dicat sonet congue ei mei, est
        summo copiosae facilisi an. Sumo accumsan mel ea, eu ignota hendrerit
        consequuntur me"
      >
        {simpleAccordionPanel}
        {simpleAccordionPanel}
        {simpleAccordionPanel}
      </Accordion>
    );

    return (
      <DocsArticle title="Accordion" colorIndex="neutral-3">

        <p>The Accordion module.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Accordion Options</h2>
          <dl>
            <dt><code>headline            string</code></dt>
            <dd>Headline of the section.</dd>
            <dt><code>subHeadline         string</code></dt>
            <dd>Content for the subheadline.</dd>
          </dl>
        </section>

        <section>
          <h2>AccordionPanel Options</h2>
          <dl>
            <dt><code>panelTitle          string</code></dt>
            <dd>Title of panel, displayed when panel is collapsed. Required.</dd>
            <dt><code>headline            string</code></dt>
            <dd>Headline of the section.</dd>
            <dt><code>subHeadline         string</code></dt>
            <dd>Content for the subheadline.</dd>
            <dt><code>ctaData             {`{headline: , subHeadline: , link: , linkText: }`}</code></dt>
            <dd>Call to action content to display.</dd>
            <dt><code>ctaThumbnail        {`{url}`}</code></dt>
            <dd>Call to action thumbnail image.</dd>
            <dt><code>resources           {`[{thumbnail: , headline: , subHeadline: , link: , linkText: ,}, ...]`}</code></dt>
            <dd>An array of resource tiles.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          {this._renderCode('Default', simpleAccordion)}
        </section>
      </DocsArticle>
    );
  }
});

module.exports = AccordionDoc;


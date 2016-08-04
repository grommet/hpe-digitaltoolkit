// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var jsxToString = require('jsx-to-string');
var DocsArticle = require('../../DocsArticle');
var Heading = require('grommet/components/Heading');
var Paragraph = require('grommet/components/Paragraph');
var Accordion = require('../../modules/Accordion');
var AccordionPanel = require('../../modules/AccordionPanel');
var ContentCard = require('../../modules/ContentCard');

Accordion.displayName = 'Accordion';

var inline =
  "<Accordion>\n" +
  "  <AccordionPanel>\n" +
  "   ...\n" +
  "  </AccordionPanel>\n" +
  "  ...\n" +
  "</Accordion>";

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
      <AccordionPanel panelTitle="Enterprise Mobility Services">
        <Heading tag="h3" margin="none">
          Empower your employees while ensuring your workplace remains enterprise grade, scalable and secure.
        </Heading>
        <Paragraph margin="none">
          See how Hewlett Packard Enterprise delivers mobile solutions to improve quality of life and help eliminate poverty in South America.
        </Paragraph>
        <ContentCard
          thumbnail="/docs/img/Case_Study_image.png"
          overline="Case Study"
          heading="The Key Steps to Reducing Software Spend"
          description="HPE Software Licensing and Management Solutions can help you optimize your software investments through control of complex negotiations and renewal processes"
          link="#"
        />
      </AccordionPanel>
    );

    var simpleAccordion = (
      <Accordion
        colorIndex="light-2"
        headline="Services Portfolio"
        subHeadline="Lorem ipsum dolor sit amet, dicat sonet congue ei mei, est summo copiosae facilisi an. Sumo accumsan mel ea, eu ignota hendrerit consequuntur me"
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
            <dt><code>headline            {'{string}'}</code></dt>
            <dd>Headline of the section.</dd>
            <dt><code>subHeadline         {'{string}'}</code></dt>
            <dd>Content for the subheadline.</dd>
            <dt><code>colorIndex          {'{category}-{index}'}</code></dt>
            <dd>The color identifier to use for the background color.
              For example: <code>"neutral-1"</code></dd>
          </dl>
        </section>

        <section>
          <h2>AccordionPanel Options</h2>
          <dl>
            <dt><code>panelTitle          {'{string}'}</code></dt>
            <dd>Title of panel, displayed when panel is collapsed. Required.</dd>
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


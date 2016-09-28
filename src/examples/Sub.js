// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

const React = require('react');
const Router = require('react-router');
const Route = Router.Route;
const Anchor = require('grommet/components/Anchor');
const Box = require('grommet/components/Box');
const Card = require('grommet/components/Card');
const Heading = require('grommet/components/Heading');
const Headline = require('grommet/components/Headline');
const Paragraph = require('grommet/components/Paragraph');
const Tiles = require('grommet/components/Tiles');
const LinkNextIcon = require('grommet/components/icons/base/LinkNext');
const CubesIcon = require('grommet/components/icons/base/Cubes');
const ComplianceIcon = require('grommet/components/icons/base/Compliance');
const Marquee = require('../modules/Marquee');
const Header = require('./Header');

const grommetPath = 'http://grommet.github.io';

const SubPage = React.createClass({
  contextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  childContextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  getChildContext: function() {
    return {
      routePrefix: this.context.routePrefix + 'sub/'
    };
  },

  _onClickCard: function (path, event) {
    event.preventDefault();
    window.location.href = path;
  },

  _renderCardTiles: function () {
    return (
      <Tiles size="medium" justify="center">
        <Card
          textSize="small"
          colorIndex="light-1"
          margin="small"
          contentPad="medium"
          onClick={this._onClickCard.bind(this, grommetPath)}
          direction="column"
          thumbnail="/docs/img/Case_Study_image.png"
          label="Featured Post"
          heading="Protect Your Digital Enterprise ipsum dolores aeat"
          link={<Anchor href={grommetPath}
            label="Learn More" icon={<LinkNextIcon />} />}>
          <Paragraph>
            {`It’s not an either/or world. It’s about finding the
              right platform for each app, workload and service. Learn how
              hybrid infrastructure can help you achieve cloud agility with
              traditional IT predictability. It’s not an either/or world. It’s
              about finding the right platform for each app, workload and
              service.`}
          </Paragraph>
        </Card>
        <Card
          textSize="small"
          colorIndex="light-1"
          margin="small"
          contentPad="medium"
          onClick={this._onClickCard.bind(this, grommetPath)}
          direction="column"
          thumbnail="/docs/img/Case_Study_image.png"
          label="Featured Post"
          heading="Foundation Paraguay Empowers Microbusinesses"
          link={<Anchor href={grommetPath}
            label="Learn More" icon={<LinkNextIcon />} />}>
          <Paragraph>
            {`See how Hewlett Packard Enterprise delivers mobile
              solutions to improve quality of life and help eliminate poverty
              in South America.`}
          </Paragraph>
        </Card>
        <Card
          textSize="small"
          colorIndex="light-1"
          margin="small"
          contentPad="medium"
          onClick={this._onClickCard.bind(this, grommetPath)}
          direction="column"
          thumbnail="/docs/img/Case_Study_image.png"
          label="Featured Post"
          heading="The Key Steps to Reducing Software Spend"
          link={<Anchor href={grommetPath}
            label="Learn More" icon={<LinkNextIcon />} />}>
          <Paragraph>
            {`HPE Software Licensing and Management Solutions can
            help you optimize your software investments through control of
            complex negotiations and renewal processes`}
          </Paragraph>
        </Card>
      </Tiles>
    );
  },

  render: function () {
    return (
      <div>
        <Header external={true}
          logoLink={'/docs/hpe/examples'}
          links={
            [{
              label: 'Documentation',
              links: [{
                label: 'Accordion',
                href: 'http://grommet.github.io/docs/accordion/'
              }, {
                label: 'Card',
                href: 'http://grommet.github.io/docs/card/'
              }, {
                label: 'Marquee',
                href: '/docs/hpe/develop/marquee'
              }, {
                label: 'Stack',
                href: '/docs/hpe/develop/stack'
              }]
            }, {
              label: 'Page Templates',
              links: [{
                label: 'Primary',
                href: '/docs/hpe/primary'
              }, {
                label: 'Sub',
                href: '/docs/hpe/sub'
              }, {
                label: 'Details',
                href: '/docs/hpe/details'
              }]
            }]
          } />
        <Marquee
          separator={true}
          darkTheme={false}
          backgroundImage="/docs/img/MarqueeImage_051916_H.jpg"
          label="label"
          headline="Accelerate your transformation with the cloud"
          subHeadline={<Paragraph margin="none" size="large">
            HPE can help you benefit now from your right mix of cloud
          </Paragraph>}
          link="http://www.grommet.io/docs/"
          textSize="medium"
          responsiveBackgroundPosition="left" />
        <Box align="center">
          <Box pad="large" align="center" textAlign="center"
            size={{"width": {"max": "xxlarge"}}}>
            <Heading tag="h1" strong={true}>
              Sumo accumsan mel ignota hendrerit.
            </Heading>
            <Paragraph size="xlarge" width="large" margin="none">
              Lorem ipsum dolor sit amet, dicat sonet congue ei mei, est summo copiosae facilisi an. Sumo accumsan mel ea, eu ignota hendrerit consequuntur me.
            </Paragraph>
          </Box>
          <Box size={{width: {max: "xxlarge"}}} direction="row">
            <Box pad="medium" basis="1/2">
              <CubesIcon colorIndex="brand" size="large" />
              <Headline size="small" strong={true} margin="medium">
                Lorem ipsum dolor sit amet
              </Headline>
              <Paragraph>
                Lorem ipsum dolor sit amet, dicat sonet congue ei mei, est summo copiosae facilisi an. Sumo accumsan mel ea, eu ignota hendrerit consequuntur me.
              </Paragraph>
            </Box>
            <Box pad="medium" basis="1/2">
              <ComplianceIcon colorIndex="brand" size="large" />
              <Headline size="small" strong={true} margin="medium">
                Lorem ipsum dolor sit amet
              </Headline>
              <Paragraph>
                Lorem ipsum dolor sit amet, dicat sonet congue ei mei, est summo copiosae facilisi an. Sumo accumsan mel ea, eu ignota hendrerit consequuntur me.
              </Paragraph>
            </Box>
          </Box>
        </Box>
        <Marquee darkTheme={false}
          backgroundImage="/docs/img/section-3.jpg"
          label="Section 01"
          headline={<Heading tag="h1" strong={true}>
            Accelerate your transformation with the cloud
          </Heading>}
          justify="start"
          subHeadline={<Paragraph margin="none" size="large">
            HPE can help you benefit now from your right mix of cloud
          </Paragraph>}
          responsiveBackgroundPosition="left"
          textSize="medium"
          link="http://www.grommet.io/docs/" />
        <Marquee darkTheme={false}
          backgroundImage="/docs/img/section-4.jpg"
          label="Section 02"
          headline={<Heading tag="h1" strong={true}>
            Accelerate your transformation with the cloud
          </Heading>}
          subHeadline={<Paragraph margin="none" size="large">
            HPE can help you benefit now from your right mix of cloud
          </Paragraph>}
          responsiveBackgroundPosition="left"
          textSize="medium"
          link="http://www.grommet.io/docs/" />
        <Box colorIndex="light-2" pad={{vertical: "large"}} align="center">
          <Box size={{"width": {"max": "xxlarge"}}}>
            {this._renderCardTiles()}
          </Box>
        </Box>
      </div>
    );
  }
});

SubPage.routes = function () {
  return [
    <Route key="top" path="sub" component={SubPage} />
  ];
};

module.exports = SubPage;

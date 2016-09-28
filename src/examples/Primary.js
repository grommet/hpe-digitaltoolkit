// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

const React = require('react');
const Router = require('react-router');
const Route = Router.Route;
const Columns = require('grommet/components/Columns');
const Box = require('grommet/components/Box');
const Heading = require('grommet/components/Heading');
const Paragraph = require('grommet/components/Paragraph');
const Card = require('grommet/components/Card');
const Anchor = require('grommet/components/Anchor');
const SocialTwitterIcon = require('grommet/components/icons/base/SocialTwitter');
const SocialFacebookIcon = require('grommet/components/icons/base/SocialFacebook');
const SocialLinkedinIcon = require('grommet/components/icons/base/SocialLinkedin');
const LinkNextIcon = require('grommet/components/icons/base/LinkNext');
const Marquee = require('../modules/Marquee');
const Header = require('./Header');

const grommetPath = 'http://grommet.github.io';

const Primary = React.createClass({
  contextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  childContextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  getChildContext: function() {
    return {
      routePrefix: this.context.routePrefix + 'primary/'
    };
  },

  _onClickCard: function (path, event) {
    event.preventDefault();
    window.location.href = path;
  },

  _renderNewsFeed: function () {
    const twitterIconBox = (
      <Box align="end">
        <SocialTwitterIcon />
      </Box>
    );

    const facebookIconBox = (
      <Box align="end">
        <SocialFacebookIcon />
      </Box>
    );

    const linkedinIconBox = (
      <Box align="end">
        <SocialLinkedinIcon />
      </Box>
    );

    const socialFeedCard1 = (
      <Card
        colorIndex="light-1"
        margin="small"
        contentPad="medium"
        onClick={this._onClickCard.bind(this, 'http://www.twitter.com')}
        direction="column"
        label="Social">
        <Heading tag="h2">
          Protect Your Digital Enterprise ipsum lorem dolores aeat el
        </Heading>
        {twitterIconBox}
      </Card>
    );

    const socialFeedCard2 = (
      <Card
        colorIndex="light-1"
        margin="small"
        contentPad="medium"
        onClick={this._onClickCard.bind(this, 'http://www.facebook.com')}
        direction="column"
        label="Social">
        <Heading tag="h2">
          Protect Your Digital Enterprise ipsum lorem dolores aeat el
        </Heading>
        {facebookIconBox}
      </Card>
    );

    const socialFeedCard3 = (
      <Card
        colorIndex="light-1"
        margin="small"
        contentPad="medium"
        onClick={this._onClickCard.bind(this, 'http://www.linkedin.com')}
        direction="column"
        label="Social">
        <Heading tag="h2">
          Protect Your Digital Enterprise ipsum lorem dolores aeat el
        </Heading>
        {linkedinIconBox}
      </Card>
    );

    const blogPostCard = (
      <Card
        colorIndex="light-1"
        margin="small"
        contentPad="medium"
        onClick={this._onClickCard.bind(this, grommetPath)}
        direction="column"
        label="Featured Post"
        link={<Anchor href={grommetPath} label="Learn More" icon={<LinkNextIcon />} />}>
        <Heading tag="h2">
          Protect Your Digital Enterprise ipsum lorem dolores aeat el
        </Heading>
      </Card>
    );

    const featuredPostCard = (
      <Card
        colorIndex="light-1"
        margin="small"
        contentPad="medium"
        onClick={this._onClickCard.bind(this, grommetPath)}
        thumbnail="/docs/img/carousel-1.png"
        direction="column"
        label="Featured Post"
        link={<Anchor href={grommetPath} label="Learn More" icon={<LinkNextIcon />} />}>
        <Heading tag="h2">
          Protect Your Digital Enterprise ipsum lorem dolores aeat el
        </Heading>
      </Card>
    );

    return (
      <Box className="columns-container" colorIndex="light-2"
        pad={{horizontal: "large"}} size={{width: {max: "xxlarge"}}}>
        <Columns size="medium" justify="center" masonry={true}
          maxCount={7} responsive={true}>
          {blogPostCard}
          {featuredPostCard}
          {socialFeedCard1}
          {socialFeedCard2}
          {blogPostCard}
          {featuredPostCard}
          {featuredPostCard}
          {socialFeedCard3}
        </Columns>
      </Box>
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
          stackSize="medium"
          responsiveBackgroundPosition="left" />
        <Box align="center">
          <Box pad="large" align="center" textAlign="center"
            size={{"width": {"max": "xxlarge"}}}>
            <Heading tag="h1" strong={true}>
              Sumo accumsan mel ignota hendrerit.
            </Heading>
            <Paragraph size="xlarge" width="large">
              Lorem ipsum dolor sit amet, dicat sonet congue ei mei, est summo copiosae facilisi an. Sumo accumsan mel ea, eu ignota hendrerit consequuntur me.
            </Paragraph>
          </Box>
        </Box>
        <Box colorIndex="light-2" pad={{vertical: "large"}} align="center">
          <Box size={{"width": "xxlarge"}} pad={{horizontal: "large"}}>
            <Heading tag="h2" strong={true}>
              Recent News
            </Heading>
          </Box>
          {this._renderNewsFeed()}
        </Box>
        <Box colorIndex="accent-2-t" pad="large" align="center">
          <Box className="footer-cards-container" pad={{vertical: "medium"}}
            size={{width: "xxlarge"}} direction="row">
            <Card
              pad={{horizontal: "large"}}
              contentPad="medium"
              basis="1/2"
              direction="row"
              heading="Lorem ipsum dolor sit amet"
              label="Label"
              link={<Anchor href="http://www.grommet.io/docs/" primary={true}>
                Learn More</Anchor>}
              separator="right" />
            <Card
              pad={{horizontal: "large"}}
              contentPad="medium"
              basis="1/2"
              direction="row"
              heading="Lorem ipsum dolor sit amet"
              label="Label"
              link={<Anchor href="http://www.grommet.io/docs/" primary={true}>
                Learn More</Anchor>} />
          </Box>
        </Box>
      </div>
    );
  }
});

Primary.routes = function () {
  return [
    <Route key="top" path="primary" component={Primary} />
  ];
};

module.exports = Primary;

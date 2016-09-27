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

  _loremIpsum: function() {
    return (
      <Box colorIndex="light-1" pad={{ horizontal: 'large', vertical: 'none' }}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae rhoncus dui, eu gravida est. Cras consectetur enim eget erat rutrum, et suscipit lorem iaculis. Maecenas sed metus nulla. Vestibulum nibh risus, facilisis non sem a, mattis venenatis lacus. Maecenas condimentum interdum arcu eu consectetur. Etiam magna ligula, elementum ac leo vel, sagittis tempus neque. Duis dapibus at velit aliquam varius. Nulla facilisi. Donec rutrum augue neque. Suspendisse ut metus neque. Praesent interdum ornare condimentum.</p>
        <p>Ut vel varius arcu. Suspendisse bibendum turpis eu nunc hendrerit suscipit. In feugiat nibh sed justo tincidunt, nec pellentesque quam tempor. Etiam condimentum iaculis dolor et semper. Curabitur tincidunt imperdiet ante, eu consequat nulla facilisis cursus. Cras metus ipsum, vehicula non vestibulum in, lacinia ut erat. Curabitur sed nulla porttitor, sollicitudin risus molestie, auctor massa. Curabitur porttitor sodales tincidunt. In in enim dapibus, lobortis dui vitae, vehicula augue. Quisque quis cursus ipsum, ut tincidunt dui. Donec eget bibendum turpis. Integer porttitor libero at luctus sodales. Donec varius consectetur quam, a vestibulum nulla rhoncus sit amet. Nunc blandit molestie dapibus. Etiam eleifend neque justo, et imperdiet augue euismod sed.</p>
        <p>Nullam mauris neque, dictum in nibh pulvinar, facilisis faucibus enim. Nullam semper sem vitae finibus molestie. Fusce sollicitudin lacus dolor, at placerat eros rhoncus et. Suspendisse id neque vel metus lobortis tristique at interdum nisl. Fusce pretium nulla in neque feugiat, ut fermentum libero pellentesque. Sed et malesuada ligula. Quisque quis blandit massa.</p>
        <p>Aliquam porta aliquam varius. Suspendisse interdum turpis sit amet bibendum efficitur. Phasellus finibus justo ac nisi porta sollicitudin. Vivamus lorem diam, dignissim ac posuere finibus, auctor nec nisi. Aenean pulvinar rhoncus eros sit amet porta. Nam egestas gravida risus quis dignissim. Nullam quis nibh vitae ipsum aliquam tristique vitae at ex. Praesent ultricies felis sit amet dolor interdum, vitae placerat diam lacinia. Quisque vitae pharetra magna, vitae commodo urna.</p>
        <p>Praesent lectus felis, malesuada vel tellus ut, maximus blandit orci. Nunc semper maximus nisi, a ornare magna vestibulum sit amet. Morbi rutrum ante quis nunc gravida porttitor. Nullam dignissim ex a odio tincidunt, in posuere massa dapibus. Duis pretium rutrum metus. Aliquam nulla sapien, aliquet ac efficitur sed, tempor vitae quam. Integer scelerisque tempus lorem eu volutpat. Integer egestas laoreet felis at convallis. Vivamus commodo euismod mauris, ut pulvinar mi iaculis non. Morbi tempor urna et gravida vestibulum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi vel neque libero.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae rhoncus dui, eu gravida est. Cras consectetur enim eget erat rutrum, et suscipit lorem iaculis. Maecenas sed metus nulla. Vestibulum nibh risus, facilisis non sem a, mattis venenatis lacus. Maecenas condimentum interdum arcu eu consectetur. Etiam magna ligula, elementum ac leo vel, sagittis tempus neque. Duis dapibus at velit aliquam varius. Nulla facilisi. Donec rutrum augue neque. Suspendisse ut metus neque. Praesent interdum ornare condimentum.</p>
      </Box>
    );
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
                href: '#'
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

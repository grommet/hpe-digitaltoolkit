// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Columns = require('grommet/components/Columns');
var Tiles = require('grommet/components/Tiles');
var Box = require('grommet/components/Box');
var Heading = require('grommet/components/Heading');
var Headline = require('grommet/components/Headline');
var Paragraph = require('grommet/components/Paragraph');
var Accordion = require('grommet/components/Accordion');
var AccordionPanel = require('grommet/components/AccordionPanel');
var Card = require('grommet/components/Card');
var Anchor = require('grommet/components/Anchor');
var Video = require('grommet/components/Video');
var SocialTwitterIcon = require('grommet/components/icons/base/SocialTwitter');
var SocialFacebookIcon = require('grommet/components/icons/base/SocialFacebook');
var SocialLinkedinIcon = require('grommet/components/icons/base/SocialLinkedin');
var LinkNextIcon = require('grommet/components/icons/base/LinkNext');
var CirclePlayIcon = require('grommet/components/icons/base/CirclePlay');
var Marquee = require('../modules/Marquee');
var MarqueeParallax = require('../modules/MarqueeParallax');
var Header = require('./Header');

const grommetPath = 'http://grommet.github.io';

var Examples = React.createClass({
  contextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  childContextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  getChildContext: function() {
    return {
      routePrefix: this.context.routePrefix + 'examples/'
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
      <Box pad={{horizontal: 'large'}}>
        <Box colorIndex="light-2">
          <Columns size="medium" masonry={true} maxCount={3} justify="center"
            responsive={true}>
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
      </Box>
    );
  },

  _renderCards: function () {
    return (
      <Box pad={{horizontal: 'large'}}>
        <Tiles size="medium" colorIndex="light-2" justify="center">
          <Card
            colorIndex="light-1"
            truncate={true}
            margin="small"
            contentPad="medium"
            onClick={this._onClickCard.bind(this, grommetPath)}
            direction="column"
            thumbnail="/docs/img/Case_Study_image.png"
            label="Featured Post"
            heading="Protect Your Digital Enterprise ipsum dolores aeat"
            description={`It’s not an either/or world. It’s about finding the
              right platform for each app, workload and service. Learn how
              hybrid infrastructure can help you achieve cloud agility with
              traditional IT predictability. It’s not an either/or world. It’s
              about finding the right platform for each app, workload and
              service. Learn how hybrid infrastructure can help you achieve
              cloud agility with traditional IT predictability. It’s not an
              either/or world. It’s about finding the right platform for each
              app, workload and service. Learn how hybrid infrastructure can
              help you achieve cloud agility with traditional IT
              predictability.`}
            link={<Anchor href={grommetPath} label="Learn More" icon={<LinkNextIcon />} />}
          />
          <Card
            colorIndex="light-1"
            truncate={true}
            margin="small"
            contentPad="medium"
            direction="column"
            thumbnail="/docs/img/Case_Study_image.png"
            label="Video - 4:27"
            heading="Foundation Paraguay Empowers Microbusinesses"
            description={`See how Hewlett Packard Enterprise delivers mobile
              solutions to improve quality of life and help eliminate poverty
              in South America.`}
            video={{
              source: 'video/test.mp4',
              type: 'mp4'
            }}
            link={<Anchor href="#" label="Watch Now" icon={<CirclePlayIcon />} />}
          />
          <Card
            colorIndex="light-1"
            truncate={true}
            margin="small"
            contentPad="medium"
            direction="column"
            thumbnail="/docs/img/Case_Study_image.png"
            label="Featured Post"
            heading="The Key Steps to Reducing Software Spend"
            description={`HPE Software Licensing and Management Solutions can
              help you optimize your software investments through control of
              complex negotiations and renewal processes`}
          />
          <Card
            colorIndex="light-1"
            truncate={true}
            margin="small"
            contentPad="medium"
            direction="column"
            thumbnail="/docs/img/Case_Study_image.png"
            label="Featured Post"
            heading="The Key Steps to Reducing Software Spend"
            description={`HPE Software Licensing and Management Solutions can
              help you optimize your software investments through control of
              complex negotiations and renewal processes`}
          />
        </Tiles>
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
        <MarqueeParallax darkTheme={false}
          backgroundImage="/docs/img/MarqueeImage_051916_H.jpg"
          headline="Accelerate your transformation with the cloud"
          subHeadline="HPE can help you benefit now from your right mix of cloud"
          link="http://www.grommet.io/docs/"
          responsiveBackgroundPosition="left" />
        <Box pad={{horizontal: 'large'}}><p><strong>Large Marquee with Parallax</strong></p></Box>
        <MarqueeParallax darkTheme={false}
          backgroundImage="/docs/img/TK_Marquee_Image.jpg"
          headline="Accelerate your transformation with the cloud"
          subHeadline="HPE can help you benefit now from your right mix of cloud"
          link="http://www.grommet.io/docs/"
          justify="start"
          size="small"
          responsiveBackgroundPosition="right" />
        <Box pad={{horizontal: 'large'}}><p><strong>Small Marquee with Parallax</strong></p></Box>
        <MarqueeParallax darkTheme={true}
          backgroundImage="/docs/img/Hero4_marquee.jpg"
          headline="Accelerate your transformation with the cloud"
          subHeadline="HPE can help you benefit now from your right mix of cloud"
          link="http://www.grommet.io/docs/"
          justify="end"
          size="large"
          separator={true}
          responsiveBackgroundPosition="left" />
        <Box pad={{horizontal: 'large'}}><p><strong>Large Marquee with Parallax, light text</strong></p></Box>
        <Marquee darkTheme={false}
          backgroundImage="/docs/img/MarqueeImage_051916_H.jpg"
          headline="Accelerate your transformation with the cloud"
          subHeadline="HPE can help you benefit now from your right mix of cloud"
          link="http://www.grommet.io/docs/"
          linkIcon={<SocialTwitterIcon />}
          responsiveBackgroundPosition="left" />
        <Box pad={{horizontal: 'large'}}><p><strong>Large Marquee with NO Parallax</strong></p></Box>
        <Marquee size="small" darkTheme={true} justify="start"
          backgroundVideo={<Video muted={true} loop={true} autoPlay={true} showControls={false}><source src="/docs/img/VideoMarque_Part3V2.mp4" type='video/mp4'/></Video>}
          link="http://www.grommet.io/docs/"
          headline="Accelerate your transformation with the cloud"
          subHeadline="HPE can help you benefit now from your right mix of cloud"
          responsiveBackgroundPosition="left"
          overlayVideo={<Video autoPlay={true}><source src="/docs/img/VideoMarque_Part3V3.mp4" type='video/mp4'/></Video>} />
        <Box pad={{horizontal: 'large'}}><p><strong>Small Video Marquee with NO Parallax</strong></p></Box>
        <Marquee darkTheme={false}
          backgroundImage="/docs/img/section-1.jpg"
          headline="Head of the class at the IDC MarketScape"
          logo="/docs/img/idc-logo.png"
          subHeadline="Hewlett Packard Enterprise is recognized as a 2014 IDC MarketScape leader in Cloud, Security, and Big Data"
          responsiveBackgroundPosition="left"
          responsiveDropText={false}
          stackSize="large"
          textBackgroundColorIndex="grey-1" />
        <Box pad={{horizontal: 'large'}}><p><strong>Section Marquee #1</strong></p></Box>
        <Marquee darkTheme={false}
          backgroundImage="/docs/img/section-2.jpg"
          headline="Head of the class at the IDC MarketScape"
          justify="start"
          logo="/docs/img/idc-logo.png"
          subHeadline="Hewlett Packard Enterprise is recognized as a 2014 IDC MarketScape leader in Cloud, Security, and Big Data"
          responsiveBackgroundPosition="left"
          stackSize="large"
          textBackgroundColorIndex="grey-1" />
        <Box pad={{horizontal: 'large'}}><p><strong>Section Marquee #2</strong></p></Box>
        <Marquee darkTheme={false}
          backgroundImage="/docs/img/section-3.jpg"
          headline="Head of the class at the IDC MarketScape"
          justify="start"
          logo="/docs/img/idc-logo-dark.png"
          subHeadline="Hewlett Packard Enterprise is recognized as a 2014 IDC MarketScape leader in Cloud, Security, Big Data, Storage, ITIL/ITSM, and Project Management Training."
          responsiveBackgroundPosition="left"
          responsiveDropText={false}
          stackSize="large"
          overlayVideo={<Video autoPlay={true}><source src="/docs/img/VideoMarque_Part3V3.mp4" type='video/mp4'/></Video>} />
        <Box pad={{horizontal: 'large'}}><p><strong>Section Marquee #3</strong></p></Box>
        <Marquee darkTheme={false}
          backgroundImage="/docs/img/section-4.jpg"
          headline="Head of the class at the IDC MarketScape"
          logo="/docs/img/idc-logo-dark.png"
          subHeadline="Hewlett Packard Enterprise is recognized as a 2014 IDC MarketScape leader in Cloud, Security, Big Data, Storage, ITIL/ITSM, and Project Management Training."
          responsiveBackgroundPosition="left"
          stackSize="large"
          link="http://www.grommet.io/docs/" />
        <Box pad={{horizontal: 'large'}}><p><strong>Section Marquee #4</strong></p></Box>
        <Marquee darkTheme={true}
          backgroundImage="/docs/img/section-5.jpg"
          backgroundOverlayColorIndex="neutral-1"
          headline="Head of the class at the IDC"
          justify="center"
          logo="/docs/img/idc-logo.png"
          subHeadline="Hewlett Packard Enterprise is recognized as a 2014 IDC MarketScape leader in Cloud, Security, Big Data, Storage, ITIL/ITSM, and Project Management Training."
          responsiveBackgroundPosition="left"
          responsiveDropText={false}
          stackSize="large"
          link="http://www.grommet.io/docs/" />
        <Box pad={{horizontal: 'large'}}><p><strong>Section Marquee #5</strong></p></Box>
        <Marquee darkTheme={false}
          backgroundImage="/docs/img/section-6.jpg"
          headline="Head of the class at the IDC"
          justify="center"
          logo="/docs/img/idc-logo-dark.png"
          subHeadline="Hewlett Packard Enterprise is recognized as a 2014 IDC MarketScape leader in Cloud, Security, Big Data, Storage, ITIL/ITSM, and Project Management Training."
          responsiveBackgroundPosition="left"
          responsiveDropText={false}
          stackSize="large"
          link="http://www.grommet.io/docs/" />
        <Box pad={{horizontal: 'large'}}><p><strong>Section Marquee #6</strong></p></Box>
        {this._loremIpsum()}
        <Box pad={{ horizontal: 'large', vertical: 'none' }}>
          <Box align="center" separator="bottom">
            <Headline size="large" strong={true} margin="none" align="center">
              Services Portfolio
            </Headline>
            <Paragraph size="large" align="center">
              Lorem ipsum dolor sit amet, dicat sonet congue ei mei, est summo copiosae facilisi an. Sumo accumsan mel ea, eu ignota hendrerit consequuntur me.
            </Paragraph>
          </Box>
          <Accordion>
            <AccordionPanel
              heading={
                <Heading tag="h2">
                  Enterprise Mobility Services
                </Heading>
              }
              a11yTitle='Enterprise Mobility Services'
            >
              <Box pad="medium">
                <Heading tag="h3" margin="none">
                  Empower your employees while ensuring your workplace remains enterprise grade, scalable and secure.
                </Heading>
                <Paragraph margin="small">
                  With proficiency in the latest mobile and social technologies,
                  we can help your business develop new systems of engagement
                  while leveraging your legacy investments
                </Paragraph>
                <Card
                  margin="small"
                  contentPad="medium"
                  direction="row"
                  thumbnail="/docs/img/Case_Study_image.png"
                  label="Video - 4:27"
                  heading="Foundation Paraguay Empowers Microbusinesses"
                  description="See how Hewlett Packard Enterprise delivers mobile solutions to improve quality of life and help eliminate poverty in South America."
                  video={{
                    source: 'video/test.mp4',
                    type: 'mp4'
                  }}
                  link={<Anchor href="#" label="Watch Now" icon={<CirclePlayIcon />} />}
                />
              </Box>
            </AccordionPanel>
            <AccordionPanel
              heading={
                <Heading tag="h2">
                  Software Licensing and Management
                </Heading>
              }
              a11yTitle="Software Licensing and Management"
            >
              <Box pad="medium">
                <Heading tag="h3" margin="none">
                  Manage control, compliance and cost through our value-added
                  Licensing, Advisory Services and Software Asset Management.
                </Heading>
                <Paragraph margin="small">
                  We help you get the most out of your software investments by
                  facilitating cost-efective acquisition, giving you better
                  control throughout your organization, and helping you meet
                  licensing compliance requirements
                </Paragraph>
                <Card
                  margin="small"
                  contentPad="medium"
                  direction="row"
                  thumbnail="/docs/img/Case_Study_image.png"
                  label="Case Study"
                  heading="The Key Steps to Reducing Software Spend"
                  description="HPE Software Licensing and Management Solutions can help you optimize your software investments through control of complex negotiations and renewal processes"
                  video={{
                    source: 'video/test.mp4',
                    type: 'mp4'
                  }}
                  link={<Anchor href="#" label="Watch Now" icon={<CirclePlayIcon />} />}
                />
              </Box>
            </AccordionPanel>
          </Accordion>
        </Box>
        <Box pad={{horizontal: 'large'}}><p><strong>Accordion with Card, row direction</strong></p></Box>
        {this._loremIpsum()}
        {this._renderCards()}
        <Box pad={{horizontal: 'large'}}><p><strong>Card with Tiles wrapper</strong></p></Box>
        {this._loremIpsum()}
        {this._renderNewsFeed()}
        <Box pad={{horizontal: 'large'}}><p><strong>Card with Columns wrapper, masonry option</strong></p></Box>
      </div>
    );
  }
});

Examples.routes = function () {
  return [
    <Route key="top" path="examples" component={Examples} />
  ];
};

module.exports = Examples;

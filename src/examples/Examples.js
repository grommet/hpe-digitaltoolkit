// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Tiles = require('grommet/components/Tiles');
var Box = require('grommet/components/Box');
var Heading = require('grommet/components/Heading');
var Paragraph = require('grommet/components/Paragraph');
var Video = require('grommet/components/Video');
var SocialTwitterIcon = require('grommet/components/icons/base/SocialTwitter');
var Marquee = require('../modules/Marquee');
var ContentCard = require('../modules/ContentCard');
var MarqueeParallax = require('../modules/MarqueeParallax');
var Accordion = require('../modules/Accordion');
var AccordionPanel = require('../modules/AccordionPanel');
var Header = require('./Header');

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

  _renderNewsFeed: function () {
    var socialFeedCard = (
      <ContentCard
        direction="column"
        overline="Social"
        socialIcon={<SocialTwitterIcon />}
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

    return (
      <Box pad={{horizontal: 'large'}}>
        <Tiles size="large" masonry={true} numColumns={7} colorIndex="light-2" justify="center">
          {blogPostCard}
          {featuredPostCard}
          {socialFeedCard}
          {socialFeedCard}
          {blogPostCard}
          {featuredPostCard}
          {featuredPostCard}
          {blogPostCard}
        </Tiles>
      </Box>
    );
  },

  _renderContentCards: function () {
    return (
      <Box pad={{horizontal: 'large'}}>
        <Tiles size="large" colorIndex="light-2" justify="center">
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
            thumbnail="/docs/img/Video_image.png"
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
                label: 'Marquee',
                href: '/docs/hpe/develop/marquee'
              }, {
                label: 'ContentCard',
                href: '/docs/hpe/develop/contentcard'
              }, {
                label: 'Stack',
                href: '/docs/hpe/develop/stack'
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
          responsiveBackgroundPosition="left" />
        <Box pad={{horizontal: 'large'}}><p><strong>Large Marquee with NO Parallax</strong></p></Box>
        <Marquee size="small" darkTheme={true} justify="start"
          backgroundVideo={<Video muted={true} loop={true} autoPlay={true} showControls={false}><source src="/docs/img/VideoMarque_Part3V2.mp4" type='video/mp4'/></Video>}
          headline="Accelerate your transformation with the cloud"
          subHeadline="HPE can help you benefit now from your right mix of cloud"
          responsiveBackgroundPosition="left"
          overlayVideo={<Video autoPlay={true}><source src="/docs/img/VideoMarque_Part3V3.mp4" type='video/mp4'/></Video>} />
        <Box pad={{horizontal: 'large'}}><p><strong>Small Video Marquee with NO Parallax</strong></p></Box>
        {this._loremIpsum()}
        <Box pad={{ horizontal: 'large', vertical: 'none' }}>
          <Accordion
            colorIndex="light-2"
            headline="Services Portfolio"
            subHeadline="Lorem ipsum dolor sit amet, dicat sonet congue ei mei, est summo copiosae facilisi an. Sumo accumsan mel ea, eu ignota hendrerit consequuntur me."
          >
            <AccordionPanel panelTitle="Enterprise Mobility Services">
              <Heading tag="h3" margin="none">
                Empower your employees while ensuring your workplace remains enterprise grade, scalable and secure.
              </Heading>
              <Paragraph margin="small">
                With proficiency in the latest mobile and social technologies,
                we can help your business develop new systems of engagement
                while leveraging your legacy investments
              </Paragraph>
              <ContentCard
                direction="row"
                thumbnail="/docs/img/Video_image.png"
                overline="Video - 4:27"
                heading="Foundation Paraguay Empowers Microbusinesses"
                description="See how Hewlett Packard Enterprise delivers mobile solutions to improve quality of life and help eliminate poverty in South America."
                video={{
                  source: 'video/test.mp4',
                  type: 'mp4'
                }}
              />
            </AccordionPanel>
            <AccordionPanel panelTitle="Software Licensings and Managment">
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
              <ContentCard
                direction="row"
                thumbnail="/docs/img/Case_Study_image.png"
                overline="Case Study"
                heading="The Key Steps to Reducing Software Spend"
                description="HPE Software Licensing and Management Solutions can help you optimize your software investments through control of complex negotiations and renewal processes"
                link="#"
              />
            </AccordionPanel>
          </Accordion>
        </Box>
        <Box pad={{horizontal: 'large'}}><p><strong>Accordion with ContentCard, row direction</strong></p></Box>
        {this._loremIpsum()}
        {this._renderContentCards()}
        <Box pad={{horizontal: 'large'}}><p><strong>ContentCard with Tiles wrapper</strong></p></Box>
        {this._loremIpsum()}
        {this._renderNewsFeed()}
        <Box pad={{horizontal: 'large'}}><p><strong>ContentCard with Tiles wrapper, masonry option</strong></p></Box>
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

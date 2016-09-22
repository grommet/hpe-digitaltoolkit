// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development L.P.

import React, { Component } from 'react';
import { Route } from 'react-router';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';
import Label from 'grommet/components/Label';
import Hero from 'grommet/components/Hero';
import Video from 'grommet/components/Video';
import Marquee from '../modules/Marquee';

export default class DetailsPage extends Component {
  render () {
          // backgroundVideo={
          //   <Video muted={true} loop={true} autoPlay={true} showControls={false}>
          //     <source src="/docs/img/VideoMarque_Part3V2.mp4" type='video/mp4'/>
          //   </Video>
          // }

    return (
      <div>
        <Marquee darkTheme={true} justify="start"
          link="http://www.grommet.io/docs/"
          headline="Accelerate your transformation with the cloud"
          subHeadline="HPE can help you benefit now from your right mix of cloud"
          responsiveBackgroundPosition="left"
          overlayVideo={
            <Video autoPlay={true}>
              <source src="/docs/img/VideoMarque_Part3V3.mp4" type='video/mp4'/>
          </Video>
          }
        />
        <Box pad={{horizontal: 'large'}}>
          <Paragraph size="small" margin="none">
            <strong>By Kirk Bresniker, Hewlett Packard Labs Chief Architect
              and HPE Fellow</strong>
          </Paragraph>
        </Box>

        <Section align="center" pad="large">
          <Box direction="row" justify="center" size="xxlarge" pad={{between: 'large'}}>
            <Box>
              <Paragraph size="xlarge">
                Dolor eveniet possimus possimus aut praesentium dignissimos sit
                debitis. Fugit minima totam provident optio aliquam! Magni tenetur
                doloremque rem tempore amet voluptatibus ipsum. Eos aliquid
                debitis sed mollitia laudantium sit?
              </Paragraph>
              <Paragraph>
                Sit architecto veritatis neque ex laboriosam, laboriosam?
                Aliquid illum ullam tenetur molestiae veniam velit quam. Facilis
                ipsam hic labore cupiditate illo soluta error molestias corporis
                quia, ipsa. Nobis ipsa nam eius esse illum unde. Veritatis
                tenetur incidunt consectetur dolore blanditiis.
              </Paragraph>
              <Paragraph>
                Lorem dolores incidunt similique aliquid rerum reiciendis est!
                Placeat minima voluptas quis tenetur deleniti harum. Nesciunt
                aut consequatur consequuntur sequi delectus quam qui. Illo odio
                dolorem sunt cupiditate nihil, ad veniam quibusdam suscipit unde
                laboriosam, laborum ratione, dicta nihil culpa.
              </Paragraph>
              <Paragraph>
                Dolor amet voluptate nisi molestias praesentium. Eveniet
                consectetur aliquid earum reprehenderit nam dicta tempora!
                Maiores nostrum eius quo odit et facere quaerat maxime beatae
                minus nihil expedita non facere ipsa cupiditate minus velit
                beatae. Assumenda nemo quis ad maxime modi.
              </Paragraph>
            </Box>
            <Box basis="1/4">
              <img src="/docs/img/Case_Study_image.png" alt="example image" />
              <Label size="small" uppercase>The Author</Label>
              <Paragraph size="large"><strong>Kirk Bresniker</strong></Paragraph>
              <Paragraph>
                Lorem delectus accusantium alias voluptate explicabo? Quaerat
                eius veniam corrupti laboriosam odio, consectetur, autem
                aspernatur enim nulla. Animi dolorem ipsum nobis quibusdam
                possimus quae non quis reprehenderit iusto. Esse mollitia
                mollitia molestiae illum aspernatur velit odit odit? Consectetur
                blanditiis omnis.
              </Paragraph>
              Share
            </Box>
          </Box>
        </Section>
        <Hero
          backgroundType="image"
          backgroundImage="/docs/img/section-1.jpg"
        />
      </div>
    );
  }
};

DetailsPage.defaultProps = {
};

DetailsPage.routes = () => {
  return [
    <Route path="details-page" component={DetailsPage} />
  ];
};

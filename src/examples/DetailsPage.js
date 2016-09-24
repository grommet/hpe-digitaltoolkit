// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development L.P.

import React, { Component } from 'react';
import { Route } from 'react-router';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Label from 'grommet/components/Label';
import Hero from 'grommet/components/Hero';
import Anchor from 'grommet/components/Anchor';
import WatchIcon from 'grommet/components/icons/base/Watch';
import Quote from 'grommet/components/Quote';
import Image from 'grommet/components/Image';
import Video from 'grommet/components/Video';
import Chart, { Area, Axis, Base, Layers } from 'grommet/components/chart/Chart';
import Marquee from '../modules/Marquee';

export default class DetailsPage extends Component {
  render () {
    return (
      <div>
        <Marquee darkTheme justify="start"
          backgroundImage="/docs/img/details_marquee.jpg"
          headline="Lorem ipsum dolor sit amet consectetur elit."
          subHeadline="Pellentesque porta ut augue ac ultricies. Sed vehicula
          metus a vulputate egestas."
          link="http://www.grommet.io/docs/"
          responsiveBackgroundPosition="left" />
        <Box pad={{horizontal: 'large'}}>
          <Paragraph margin="none">
            <strong>By Kirk Bresniker, Hewlett Packard Labs Chief Architect
              and HPE Fellow</strong>
          </Paragraph>
        </Box>

        <Section align="center">
          <Box direction="row" justify="center" size={{width: 'xxlarge'}} pad={{between: 'large'}}>
            <Box>
              <Paragraph size="xlarge">
                Dolor eveniet possimus possimus aut praesentium dignissimos sit
                debitis. Fugit minima totam provident optio aliquam! Magni tenetur
                doloremque rem tempore amet voluptatibus ipsum. Eos aliquid
                debitis sed mollitia laudantium sit?
              </Paragraph>
              <Paragraph size="large">
                Sit architecto veritatis neque ex laboriosam, laboriosam?
                Aliquid illum ullam tenetur molestiae veniam velit quam. Facilis
                ipsam hic labore cupiditate illo soluta error molestias corporis
                quia, ipsa. Nobis ipsa nam eius esse illum unde. Veritatis
                tenetur incidunt consectetur dolore blanditiis.
              </Paragraph>
              <Paragraph size="large">
                Lorem dolores incidunt similique aliquid rerum reiciendis est!
                Placeat minima voluptas quis tenetur deleniti harum. Nesciunt
                aut consequatur consequuntur sequi delectus quam qui. Illo odio
                dolorem sunt cupiditate nihil, ad veniam quibusdam suscipit unde
                laboriosam, laborum ratione, dicta nihil culpa.
              </Paragraph>
              <Paragraph size="large">
                Dolor amet voluptate nisi molestias praesentium. Eveniet
                consectetur aliquid earum reprehenderit nam dicta tempora!
                Maiores nostrum eius quo odit et facere quaerat maxime beatae
                minus nihil expedita non facere ipsa cupiditate minus velit
                beatae. Assumenda nemo quis ad maxime modi.
              </Paragraph>
            </Box>
            <Box basis="1/3">
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
        <Box pad={{horizontal: 'large'}}>
          <Paragraph margin="none">
            Photos by Michael Blumenfeld
          </Paragraph>
        </Box>
        <Section align="center">
          <Box direction="row" justify="center" size={{width: 'xxlarge'}} pad={{between: 'large'}}>
            <Box>
              <Heading strong>Pellentesque porta</Heading>
              <Paragraph size="large">
                Lorem dolores incidunt similique aliquid rerum reiciendis est!
                Placeat minima voluptas quis tenetur deleniti harum. Nesciunt
                aut consequatur consequuntur sequi delectus quam qui. Illo odio
                dolorem sunt cupiditate nihil, ad veniam quibusdam suscipit unde
                laboriosam, laborum ratione, dicta nihil culpa.
                Dolor eveniet possimus possimus aut praesentium dignissimos sit
                debitis. Fugit minima totam provident optio aliquam! Magni tenetur
                doloremque rem tempore amet voluptatibus ipsum. Eos aliquid
                debitis sed mollitia laudantium sit?
              </Paragraph>
              <Paragraph size="large">
                Sit architecto veritatis neque ex laboriosam, laboriosam?
                Aliquid illum ullam tenetur molestiae veniam velit quam. Facilis
                ipsam hic labore cupiditate illo soluta error molestias corporis
                quia, ipsa. Nobis ipsa nam eius esse illum unde. Veritatis
                tenetur incidunt consectetur dolore blanditiis.
              </Paragraph>
              <Paragraph size="large">
                Lorem dolores incidunt similique aliquid rerum reiciendis est!
                Placeat minima voluptas quis tenetur deleniti harum. Nesciunt
                aut consequatur consequuntur sequi delectus quam qui. Illo odio
                dolorem sunt cupiditate nihil, ad veniam quibusdam suscipit unde
                laboriosam, laborum ratione, dicta nihil culpa.
              </Paragraph>
              <Paragraph size="large">
                Dolor amet voluptate nisi molestias praesentium. Eveniet
                consectetur aliquid earum reprehenderit nam dicta tempora!
                Maiores nostrum eius quo odit et facere quaerat maxime beatae
                minus nihil expedita non facere ipsa cupiditate minus velit
                beatae. Assumenda nemo quis ad maxime modi.
              </Paragraph>
              <Quote
                borderColorIndex="accent-1"
                credit="Cullen Basg, Director at HPE"
                size="medium"
              >
                <Paragraph size="xlarge">
                  Quisque eleifned tempor arcu, quis fringilla sem. Pellentesque
                  sed lacus ligula. Eleifend tempor arcu, quis fringilla sem.
                  Pellentesque.
                </Paragraph>
              </Quote>
            </Box>
            <Box basis="1/3">
              <Heading tag="h3">The Team</Heading>
              <Paragraph>
                Pellentesque porta ut augue ac ultricies. Sed vehicula metus a
                vulputate egestas. Lorem delectus accusantium alias voluptate
                explicabo? Quaerat eius veniam corrupti laboriosam odio,
                consectetur, autem aspernatur enim nulla. Animi dolorem ipsum
                nobis quibusdam possimus quae non quis reprehenderit iusto.
                Esse mollitia mollitia molestiae illum aspernatur velit odit.
              </Paragraph>
              <Heading tag="h3">Highlights</Heading>
              <img src="/docs/img/Case_Study_image.png" alt="example image" />
              <Paragraph>
                Lorem delectus accusantium alias voluptate explicabo? Quaerat
                eius veniam corrupti laboriosam odio, consectetur, autem
                aspernatur enim nulla.
                <Anchor href="#" label="Watch the video" icon={<WatchIcon />} />
              </Paragraph>
              <img src="/docs/img/Case_Study_image.png" alt="example image" />
              <Paragraph>
                Lorem delectus accusantium alias voluptate explicabo? Quaerat
                eius veniam corrupti laboriosam odio, consectetur, autem
                aspernatur enim nulla.
                <Anchor href="#" label="Watch the video" icon={<WatchIcon />} />
              </Paragraph>
              <Heading tag="h3">Media Coverage</Heading>
              <Paragraph>
                <a href="#">The Machine is coming:</a> Star Trek beyond Meets The machine - and
                the Future of Technology Begins.
              </Paragraph>
              <Paragraph>
                For media enquiries, send an email to <a href="#">corpmediarelations@hpe.com</a>
              </Paragraph>
            </Box>
          </Box>
        </Section>
        <Marquee darkTheme={true}
          backgroundImage="/docs/img/section-5.jpg"
          backgroundOverlayColorIndex="neutral-1"
          headline="Aenean sit amet sollicitudin eros."
          justify="center"
          logo="/docs/img/idc-logo.png"
          subHeadline="Lorem maxime dolorem amet fugit sapiente unde quaerat accusantium ratione itaque laudantium vitae commodi necessitatibus. Soluta ipsa dolores error numquam itaque saepe laborum? Repellendus debitis."
          responsiveBackgroundPosition="left"
          responsiveDropText={false}
          stackSize="large"
          link="http://www.grommet.io/docs/"
        />
        <Section align="center">
          <Box justify="center" size={{width: 'xxlarge'}}>
            <Heading strong>Pellentesque porta</Heading>
            <Paragraph size="large">
              Lorem dolores incidunt similique aliquid rerum reiciendis est!
              Placeat minima voluptas quis tenetur deleniti harum. Nesciunt
              aut consequatur consequuntur sequi delectus quam qui. Illo odio
              dolorem sunt cupiditate nihil, ad veniam quibusdam suscipit unde
              laboriosam, laborum ratione, dicta nihil culpa.
              Dolor eveniet possimus possimus aut praesentium dignissimos sit
              debitis. Fugit minima totam provident optio aliquam! Magni tenetur
              doloremque rem tempore amet voluptatibus ipsum. Eos aliquid
              debitis sed mollitia laudantium sit?
            </Paragraph>
          </Box>
          <Box direction="row" align="center" justify="center" size={{width: 'xxlarge'}} pad={{between: 'large'}}>
            <Box basis="1/3">
              <Quote
                borderColorIndex="accent-1"
                credit="Cullen Basg, Director at HPE"
                size="medium"
              >
                <Paragraph size="xlarge">
                  Quisque eleifned tempor arcu, quis fringilla sem. Pellentesque
                  sed lacus ligula. Eleifend tempor arcu, quis fringilla sem.
                  Pellentesque.
                </Paragraph>
              </Quote>
            </Box>
            <Box>
              <Paragraph size="large">
                Lorem dolores incidunt similique aliquid rerum reiciendis est!
                Placeat minima voluptas quis tenetur deleniti harum. Nesciunt
                aut consequatur consequuntur sequi delectus quam qui. Illo odio
                dolorem sunt cupiditate nihil, ad veniam quibusdam suscipit unde
                laboriosam, laborum ratione, dicta nihil culpa.
                Dolor eveniet possimus possimus aut praesentium dignissimos sit
                debitis. Fugit minima totam provident optio aliquam! Magni tenetur
                doloremque rem tempore amet voluptatibus ipsum. Eos aliquid
                debitis sed mollitia laudantium sit?
              </Paragraph>
              <Paragraph size="large">
                Sit architecto veritatis neque ex laboriosam, laboriosam?
                Aliquid illum ullam tenetur molestiae veniam velit quam. Facilis
                ipsam hic labore cupiditate illo soluta error molestias corporis
                quia, ipsa. Nobis ipsa nam eius esse illum unde. Veritatis
                tenetur incidunt consectetur dolore blanditiis.
              </Paragraph>
              <Paragraph size="large">
                Lorem dolores incidunt similique aliquid rerum reiciendis est!
                Placeat minima voluptas quis tenetur deleniti harum. Nesciunt
                aut consequatur consequuntur sequi delectus quam qui. Illo odio
                dolorem sunt cupiditate nihil, ad veniam quibusdam suscipit unde
                laboriosam, laborum ratione, dicta nihil culpa.
              </Paragraph>
              <img src="/docs/img/details_marquee.jpg" alt="smaple image" />
              <Paragraph size="large">
                Dolor amet voluptate nisi molestias praesentium. Eveniet
                consectetur aliquid earum reprehenderit nam dicta tempora!
                Maiores nostrum eius quo odit et facere quaerat maxime beatae
                minus nihil expedita non facere ipsa cupiditate minus velit
                beatae. Assumenda nemo quis ad maxime modi.
              </Paragraph>
            </Box>
          </Box>
          <Box justify="center" size={{width: 'xxlarge'}}>
            <Heading strong>Aenean sit amet solicitudin eros.</Heading>
            <Paragraph size="large">
              Lorem dolores incidunt similique aliquid rerum reiciendis est!
              Placeat minima voluptas quis tenetur deleniti harum. Nesciunt
              aut consequatur consequuntur sequi delectus quam qui. Illo odio
              dolorem sunt cupiditate nihil, ad veniam quibusdam suscipit unde
              laboriosam, laborum ratione, dicta nihil culpa.
              Dolor eveniet possimus possimus aut praesentium dignissimos sit
              debitis. Fugit minima totam provident optio aliquam! Magni tenetur
              doloremque rem tempore amet voluptatibus ipsum. Eos aliquid
              debitis sed mollitia laudantium sit?
            </Paragraph>
            <Paragraph size="large">
              Sit architecto veritatis neque ex laboriosam, laboriosam?
              Aliquid illum ullam tenetur molestiae veniam velit quam. Facilis
              ipsam hic labore cupiditate illo soluta error molestias corporis
              quia, ipsa. Nobis ipsa nam eius esse illum unde. Veritatis
              tenetur incidunt consectetur dolore blanditiis.
            </Paragraph>
            <Paragraph size="large">
              Lorem dolores incidunt similique aliquid rerum reiciendis est!
              Placeat minima voluptas quis tenetur deleniti harum. Nesciunt
              aut consequatur consequuntur sequi delectus quam qui. Illo odio
              dolorem sunt cupiditate nihil, ad veniam quibusdam suscipit unde
              laboriosam, laborum ratione, dicta nihil culpa.
            </Paragraph>
            <Paragraph size="large">
              Dolor amet voluptate nisi molestias praesentium. Eveniet
              consectetur aliquid earum reprehenderit nam dicta tempora!
              Maiores nostrum eius quo odit et facere quaerat maxime beatae
              minus nihil expedita non facere ipsa cupiditate minus velit
              beatae. Assumenda nemo quis ad maxime modi.
            </Paragraph>
          </Box>
        </Section>
        <Box direction="row" justify="between" full="horizontal" pad={{between: 'medium'}}>
          <Box>
            <Image size="large" src="/docs/img/Case_Study_image.png" alt="example image" />
          </Box>
          <Box>
            <Image size="large" src="/docs/img/Case_Study_image.png" alt="example image" />
          </Box>
          <Box>
            <Image size="large" src="/docs/img/Case_Study_image.png" alt="example image" />
          </Box>
        </Box>
        <Section align="center">
          <Box justify="center" size={{width: 'xxlarge'}}>
            <Heading strong>Pellentesque porta</Heading>
            <Paragraph size="large">
              Lorem dolores incidunt similique aliquid rerum reiciendis est!
              Placeat minima voluptas quis tenetur deleniti harum. Nesciunt
              aut consequatur consequuntur sequi delectus quam qui. Illo odio
              dolorem sunt cupiditate nihil, ad veniam quibusdam suscipit unde
              laboriosam, laborum ratione, dicta nihil culpa.
              Dolor eveniet possimus possimus aut praesentium dignissimos sit
              debitis. Fugit minima totam provident optio aliquam! Magni tenetur
              doloremque rem tempore amet voluptatibus ipsum. Eos aliquid
              debitis sed mollitia laudantium sit?
            </Paragraph>
            <Video>
              <source src="/video/test.mp4" type="video/mp4" />
            </Video>
            <Box>
              <Paragraph margin="none">
                Photos by Michael Blumenfeld
              </Paragraph>
            </Box>
            <Paragraph size="large">
              Lorem dolores incidunt similique aliquid rerum reiciendis est!
              Placeat minima voluptas quis tenetur deleniti harum. Nesciunt
              aut consequatur consequuntur sequi delectus quam qui. Illo odio
              dolorem sunt cupiditate nihil, ad veniam quibusdam suscipit unde
              laboriosam, laborum ratione, dicta nihil culpa.
              Dolor eveniet possimus possimus aut praesentium dignissimos sit
              debitis. Fugit minima totam provident optio aliquam! Magni tenetur
              doloremque rem tempore amet voluptatibus ipsum. Eos aliquid
              debitis sed mollitia laudantium sit?
            </Paragraph>
            <Paragraph size="large">
              Lorem dolores incidunt similique aliquid rerum reiciendis est!
              Placeat minima voluptas quis tenetur deleniti harum. Nesciunt
              aut consequatur consequuntur sequi delectus quam qui. Illo odio
              dolorem sunt cupiditate nihil, ad veniam quibusdam suscipit unde
              laboriosam, laborum ratione, dicta nihil culpa.
              Dolor eveniet possimus possimus aut praesentium dignissimos sit
              debitis. Fugit minima totam provident optio aliquam! Magni tenetur
              doloremque rem tempore amet voluptatibus ipsum. Eos aliquid
              debitis sed mollitia laudantium sit?
            </Paragraph>
          </Box>
          <Chart vertical={true} full={true}>
            <Base height="small" width="full" />
            <Layers>
              <Area colorIndex="graph-1" values={[100, 95, 80, 82, 75, undefined, 60, 55, 0, 15, 40, 50]} />
              <Area colorIndex="graph-2" values={[50, 40, 15, 0, 55, 60, undefined, 75, 82, 80, 95, 100]} />
            </Layers>
            <Axis ticks={true} count={6} labels={[
              {"index": 0, "label": "May 16"},
              {"index": 1, "label": "May 17"},
              {"index": 2, "label": "May 18"},
              {"index": 3, "label": "May 19"},
              {"index": 4, "label": "May 20"},
              {"index": 5, "label": "May 21"}
            ]} />
          </Chart>
          <Box justify="center" size={{width: 'xxlarge'}}>
            <Paragraph size="large">
              Lorem dolores incidunt similique aliquid rerum reiciendis est!
              Placeat minima voluptas quis tenetur deleniti harum. Nesciunt
              aut consequatur consequuntur sequi delectus quam qui. Illo odio
              dolorem sunt cupiditate nihil, ad veniam quibusdam suscipit unde
              laboriosam, laborum ratione, dicta nihil culpa.
              Dolor eveniet possimus possimus aut praesentium dignissimos sit
              debitis. Fugit minima totam provident optio aliquam! Magni tenetur
              doloremque rem tempore amet voluptatibus ipsum. Eos aliquid
              debitis sed mollitia laudantium sit?
            </Paragraph>
            <Paragraph size="large">
              Lorem dolores incidunt similique aliquid rerum reiciendis est!
              Placeat minima voluptas quis tenetur deleniti harum. Nesciunt
              aut consequatur consequuntur sequi delectus quam qui. Illo odio
              dolorem sunt cupiditate nihil, ad veniam quibusdam suscipit unde
              laboriosam, laborum ratione, dicta nihil culpa.
              Dolor eveniet possimus possimus aut praesentium dignissimos sit
              debitis. Fugit minima totam provident optio aliquam! Magni tenetur
              doloremque rem tempore amet voluptatibus ipsum. Eos aliquid
              debitis sed mollitia laudantium sit?
            </Paragraph>
          </Box>
        </Section>
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

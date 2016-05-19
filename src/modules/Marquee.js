// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';
import Headline from 'grommet/components/Headline';
import Paragraph from 'grommet/components/Paragraph';
import Anchor from 'grommet/components/Anchor';

const CLASS_ROOT = 'marquee';

export default class Marquee extends Component {
  render () {
    let { backgroundImage, darkTheme, flush, headlineSize, headline, justify, link, onClick, subHeadline } = this.props;

    let classes = classnames(
      CLASS_ROOT,
      this.props.className
    );

    let full = flush ? 'horizontal' : false;
    let pad = flush ? 'none' : 'large';
    let colorIndex = darkTheme ? 'dark' : 'light';

    return (
      <Section className={classes} appCentered={true} pad={pad}
        backgroundImage={backgroundImage} colorIndex={colorIndex}
        primary={true} full={full} direction="row" justify={justify} align="center">
        <Box pad={{horizontal: 'large', vertical: 'large', between: 'medium'}}>
          <Headline size={headlineSize} strong={true} margin="none">
            {headline}
          </Headline>
          <Paragraph size="large" margin="none">{subHeadline}</Paragraph>
          <h3><Anchor href={link} primary={true} label="Learn More" onClick={onClick} /></h3>
        </Box>
      </Section>
    );
  }
};

Marquee.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  darkTheme: PropTypes.bool,
  flush: PropTypes.bool,
  headline: PropTypes.string.isRequired,
  headlineSize: PropTypes.oneOf(['small', 'medium', 'large']),
  justify: PropTypes.oneOf(['start', 'center', 'end']),
  link: PropTypes.string,
  onClick: PropTypes.func,
  subHeadline: PropTypes.string.isRequired
};

Marquee.defaultProps = {
  darkTheme: true,
  flush: true,
  headlineSize: 'large',
  justify: 'end'
};

// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';
import Headline from 'grommet/components/Headline';
import Paragraph from 'grommet/components/Paragraph';
import Anchor from 'grommet/components/Anchor';
import Split from 'grommet/components/Split';

const CLASS_ROOT = 'marquee-grommet';

export default class MarqueeGrommet extends Component {
  render () {
    let { backgroundImage, darkTheme, flush, headlineSize, headline, justify, link, linkIcon, linkText, onClick, subHeadline } = this.props;

    let classes = classnames(
      CLASS_ROOT,
      this.props.className
    );

    let colorIndex = darkTheme ? 'grey-1' : 'light-1';
    let full = flush ? 'horizontal' : false;
    let pad = flush ? 'none' : 'large';

    let subHeadlineMarkup;
    if (subHeadline) {
      subHeadlineMarkup = (
        <Paragraph size="large" margin="none">{subHeadline}</Paragraph>
      );
    }

    let linkMarkup;
    if (link || onClick) {
      linkMarkup = (
        <h3><Anchor href={link} primary={true} label={linkText} icon={linkIcon} onClick={onClick} /></h3>
      );
    }

    let content = (
      <Box justify={justify} align="center" primary={true} direction="row" pad={{ vertical: 'large', horizontal: 'none' }} >
        <Box pad={{horizontal: 'large', vertical: 'large', between: 'medium'}}>
          <Headline size={headlineSize} strong={true} margin="none">
            {headline}
          </Headline>
          {subHeadlineMarkup}
          {linkMarkup}
        </Box>
      </Box>
    );

    let split;
    if (justify === 'start') {
      split = (
        <Split>
          {content}
          <Box />
        </Split>
      );
    } else if (justify === 'end') {
      split = (
        <Split>
          <Box />
          {content}
        </Split>
      );
    } else {
      split = (
        <Box direction="row">
          <Box pad="large" size="small" />
          {content}
          <Box pad="large" size="small" />
        </Box>
      );
    }

    return (
      <Box className={classes} colorIndex={colorIndex}>
        <Section appCentered={true} pad={pad}
          backgroundImage={backgroundImage} full={full}>
          {split}
        </Section>
      </Box>
    );
  }
};

MarqueeGrommet.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  darkTheme: PropTypes.bool,
  flush: PropTypes.bool,
  headline: PropTypes.string.isRequired,
  headlineSize: PropTypes.oneOf(['small', 'medium', 'large']),
  justify: PropTypes.oneOf(['start', 'center', 'end']),
  link: PropTypes.string,
  linkIcon: PropTypes.element,
  linkText: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'large']),
  subHeadline: PropTypes.string
};

MarqueeGrommet.defaultProps = {
  darkTheme: true,
  flush: true,
  headlineSize: 'large',
  justify: 'end',
  linkText: 'Learn More',
  size: 'large'
};

// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';
import classnames from 'classnames';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Anchor from 'grommet/components/Anchor';

const CLASS_ROOT = 'stack';

export default class Stack extends Component {
  render () {
    const {
      className,
      label,
      headline,
      headlineStrong,
      paragraph,
      print,
      size,
      link,
      linkText
    } = this.props;

    const classes = classnames(
      CLASS_ROOT,
      className
    );

    let labelTag;
    let headlineTag;
    let paragraphSize;
    let printSize;
    if (size === 'xlarge') {
      labelTag = 'h3';
      headlineTag = 'h1';
      paragraphSize = 'xlarge';
      printSize = 'large';
    } else if (size === 'large') {
      labelTag = 'h4';
      headlineTag = 'h1';
      paragraphSize = 'xlarge';
      printSize = 'large';
    } else if (size === 'small') {
      labelTag = 'h5';
      headlineTag = 'h3';
      paragraphSize = 'medium';
      printSize = 'small';
    } else {
      labelTag = 'h4';
      headlineTag = 'h2';
      paragraphSize = 'xlarge';
      printSize = 'large';
    }

    return (
      <Box className={classes}>
        {label &&
          <Heading tag={labelTag} margin="none" uppercase={true}>
            {label}
          </Heading>
        }
        {headline &&
          <Heading tag={headlineTag} strong={headlineStrong} margin="none">
            {headline}
          </Heading>
        }
        {paragraph &&
          <Paragraph size={paragraphSize} margin="none">
            {paragraph}
          </Paragraph>
        }
        {print &&
          <Paragraph size={printSize} margin="none">
            {print}
          </Paragraph>
        }
        {link &&
          <Anchor primary={true} href={link}>
            {linkText}
          </Anchor>
        }
      </Box>
    );
  }
};

Stack.propTypes = {
};

Stack.defaultProps = {
  size: 'medium',
  headlineStrong: true,
  linkText: 'Learn More'
};


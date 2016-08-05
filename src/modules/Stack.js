// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
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
      linkText,
      onClick,
      ...props
    } = this.props;

    const classes = classnames(
      CLASS_ROOT,
      className,
      {
        [`${CLASS_ROOT}--${size}`]: size
      }
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
      <Box className={classes} {...props}>
        {label &&
          <Heading className={`${CLASS_ROOT}__label`} tag={labelTag} margin="none" uppercase={true}>
            {label}
          </Heading>
        }
        {headline &&
          <Heading className={`${CLASS_ROOT}__headline`}
            tag={headlineTag} strong={headlineStrong} margin="none">
            {headline}
          </Heading>
        }
        {paragraph &&
          <Paragraph className={`${CLASS_ROOT}__paragraph`} size={paragraphSize}
            margin="none">
            {paragraph}
          </Paragraph>
        }
        {print &&
          <Paragraph className={`${CLASS_ROOT}__print`} size={printSize}
            margin="none">
            {print}
          </Paragraph>
        }
        {(link || onClick) &&
          <Anchor className={`${CLASS_ROOT}__link`} primary={true} href={link}
            onClick={onClick}>
            {linkText}
          </Anchor>
        }
      </Box>
    );
  }
};

Stack.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
  label: PropTypes.string,
  headline: PropTypes.string,
  headlineStrong: PropTypes.bool,
  paragraph: PropTypes.string,
  print: PropTypes.string,
  link: PropTypes.string,
  linkText: PropTypes.string,
  onClick: PropTypes.func
};

Stack.defaultProps = {
  size: 'medium',
  headlineStrong: true,
  linkText: 'Learn More'
};


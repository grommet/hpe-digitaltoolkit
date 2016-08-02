// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';
import classnames from 'classnames';
import Box from 'grommet/components/Box';
import Headline from 'grommet/components/Headline';
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
      size,
      link,
      linkText
    } = this.props;

    const classes = classnames(
      CLASS_ROOT,
      className
    );

    return (
      <Box className={classes}>
        {label &&
          <Heading tag="h3" margin="none" uppercase={true}>
            {label}
          </Heading>
        }
        {headline &&
          <Headline strong={headlineStrong} margin="none">
            {headline}
          </Headline>
        }
        {paragraph &&
          <Paragraph margin="none">
            {paragraph}
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


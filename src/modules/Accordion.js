// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Box from 'grommet/components/Box';
import Headline from 'grommet/components/Headline';
import List from 'grommet/components/List';
import Paragraph from 'grommet/components/Paragraph';

const CLASS_ROOT = 'accordion';

export default class Accordion extends Component {
  render () {
    const { headline, subHeadline, children } = this.props;

    const classes = classnames(
      CLASS_ROOT,
      this.props.className
    );

    let headlineMarkup;
    if (headline) {
      headlineMarkup = (
        <Headline size="large" strong={true} margin="none" align="center">
          {headline}
        </Headline>
      );
    }

    let subHeadlineMarkup;
    if (subHeadline) {
      subHeadlineMarkup = (
        <Paragraph size="large" margin="none" align="center">
          {subHeadline}
        </Paragraph>
      );
    }

    let content;
    if (headline || subHeadline) {
      content = (
        <Box align="center">
          {headlineMarkup}
          {subHeadlineMarkup}
        </Box>
      );
    }

    return (
      <Box className={classes}>
        {content}
        <List>
          {children}
        </List>
      </Box>
    );
  }
};

Accordion.propTypes = {
  headline: PropTypes.string,
  subHeadline: PropTypes.string
};

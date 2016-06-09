// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Box from 'grommet/components/Box';
import Headline from 'grommet/components/Headline';
import List from 'grommet/components/List';
import Paragraph from 'grommet/components/Paragraph';

const CLASS_ROOT = 'accordion-grommet';

export default class AccordionGrommet extends Component {
  render () {
    let { headline, subHeadline, children } = this.props;

    let classes = classnames(
      CLASS_ROOT,
      this.props.className
    );

    let headlineMarkup;
    if (headline) {
      headlineMarkup = (
        <Headline size="large" strong={true} margin="none">
          {headline}
        </Headline>
      );
    }

    let subHeadlineMarkup;
    if (subHeadline) {
      subHeadlineMarkup = (
        <Paragraph size="large" margin="none">
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

AccordionGrommet.propTypes = {
  headline: PropTypes.string,
  subHeadline: PropTypes.string
};

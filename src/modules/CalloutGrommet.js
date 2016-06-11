// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Anchor from 'grommet/components/Anchor';

const CLASS_ROOT = 'callout-grommet';

export default class CalloutGrommet extends Component {
  render () {
    const { content, heading, label, link, linkIcon, linkText, thumbnail } = this.props;

    const classes = classnames(
      CLASS_ROOT,
      this.props.className
    );

    return (
      <Box className={classes} direction="row" pad={{vertical: "medium"}}>
        <img src={thumbnail} className="accordion-cta-image" />
        <Box pad="medium">
          <Heading tag="h3" margin="none">{label}</Heading>
          <Heading tag="h3" margin="none">{heading}</Heading>
          <Paragraph margin="none">{content}</Paragraph>
          <Anchor href={link} primary={true} icon={linkIcon} label={linkText} />
        </Box>
      </Box>
    );
  }
};

CalloutGrommet.propTypes = {
};


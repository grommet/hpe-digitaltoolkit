// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Anchor from 'grommet/components/Anchor';

const CLASS_ROOT = 'callout-grommet';
const PALM_BREAKPOINT = 720;

export default class CalloutGrommet extends Component {
  render () {
    const { thumbnail, content, heading, label, link, linkIcon, linkText } = this.props;

    const classes = classnames(
      CLASS_ROOT,
      this.props.className
    );

    let styles = {
      width: (window.innerWidth > PALM_BREAKPOINT) ? 270 : '',
      height: (window.innerWidth < PALM_BREAKPOINT) ? 270 : '',
      backgroundImage: thumbnail
    };

    return (
      <Box className={classes} direction="row" pad={{vertical: "medium"}}>
        <Box style={styles} />
        <Box pad="medium">
          <Heading tag="h5" margin="none">{label}</Heading>
          <Heading tag="h3" margin="none">{heading}</Heading>
          <Paragraph margin="none">{content}</Paragraph>
          <Heading tag="h3" margin="none">
            <Anchor href={link} primary={true} icon={linkIcon} label={linkText} />
          </Heading>
        </Box>
      </Box>
    );
  }
};

CalloutGrommet.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  label: PropTypes.string,
  link: PropTypes.string.isRequired,
  linkIcon: PropTypes.element,
  linkText: PropTypes.string
};


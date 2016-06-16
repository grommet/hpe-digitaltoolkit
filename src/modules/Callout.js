// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Anchor from 'grommet/components/Anchor';
import LinkNextIcon from 'grommet/components/icons/base/LinkNext';

const CLASS_ROOT = 'callout';

export default class Callout extends Component {
  render () {
    const { thumbnail, description, heading, eyebrow, link, linkIcon, linkText } = this.props;

    const classes = classnames(
      CLASS_ROOT,
      this.props.className
    );

    const thumbnailStyles = {
      backgroundImage: `url(${thumbnail})`
    };

    let linkMarkup;
    if (link) {
      linkMarkup = (
        <Box pad={{vertical: "small"}}>
          <Anchor href={link} icon={linkIcon} label={linkText} />
        </Box>
      );
    }

    return (
      <Box className={classes} direction="row" pad={{vertical: "medium"}}>
        <Box className={`${CLASS_ROOT}__thumbnail`} style={thumbnailStyles} />
        <Box pad="medium">
          <Heading tag="h5" margin="none"
            uppercase={true}>{eyebrow}</Heading>
          <Heading tag="h3" margin="none">{heading}</Heading>
          <Paragraph margin="none">{description}</Paragraph>
          {linkMarkup}
        </Box>
      </Box>
    );
  }
};

Callout.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  eyebrow: PropTypes.string,
  link: PropTypes.string,
  linkIcon: PropTypes.element,
  linkText: PropTypes.string
};

Callout.defaultProps = {
  linkText: 'Get the Details',
  linkIcon: <LinkNextIcon />
};

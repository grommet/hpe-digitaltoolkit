// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Anchor from 'grommet/components/Anchor';
import Layer from 'grommet/components/Layer';
import Video from 'grommet/components/Video';
import LinkNextIcon from 'grommet/components/icons/base/LinkNext';

const CLASS_ROOT = 'callout';

export default class Callout extends Component {
  constructor (props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
    this.state = {
      activeVideo: false
    };
  }

  _handleClick (event) {
    const { onClick, video } = this.props;

    if (onClick) {
      onClick(event);
    } else if (video) {
      event.preventDefault();
      this.setState({ activeVideo : !this.state.activeVideo });
    }
  }

  render () {
    const { thumbnail, description, heading, eyebrow, link, linkIcon, linkText, onClick, video } = this.props;

    const classes = classnames(
      CLASS_ROOT,
      this.props.className
    );

    const thumbnailStyles = {
      backgroundImage: `url(${thumbnail})`
    };

    let thumbnailMarkup = (
      <Box className={`${CLASS_ROOT}__thumbnail`} style={thumbnailStyles} />
    );

    let linkMarkup;
    if (link || onClick || video) {
      linkMarkup = (
        <Box pad={{vertical: "small"}}>
          <Anchor href={link} icon={linkIcon} label={linkText}
            onClick={this._handleClick} />
        </Box>
      );

      thumbnailMarkup = (
        <Anchor href={link} onClick={this._handleClick}>
          {thumbnailMarkup}
        </Anchor>
      );
    }

    let videoMarkup;
    if (video && video.source && this.state.activeVideo) {
      videoMarkup = (
        <Layer onClose={this._handleClick} closer={true} flush={true}>
          <Video>
            <source src={video.source} type={`video/${video.type}`}/>
          </Video>
        </Layer>
      );
    }

    return (
      <Box className={classes} direction="row" pad={{vertical: "medium"}}>
        {thumbnailMarkup}
        <Box pad="medium">
          <Heading tag="h5" margin="none"
            uppercase={true}>{eyebrow}</Heading>
          <Heading tag="h3" margin="none">{heading}</Heading>
          <Paragraph margin="none">{description}</Paragraph>
          {linkMarkup}
        </Box>
        {videoMarkup}
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
  linkText: PropTypes.string,
  onClick: PropTypes.func,
  video: PropTypes.shape({
    source: PropTypes.string.isRequired,
    type: PropTypes.string
  })
};

Callout.defaultProps = {
  linkText: 'Get the Details',
  linkIcon: <LinkNextIcon />
};

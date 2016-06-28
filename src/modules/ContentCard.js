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
import PlayIcon from 'grommet/components/icons/base/Play';

const CLASS_ROOT = 'content-card';

export default class ContentCard extends Component {
  constructor (props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
    this.state = {
      activeVideo: false
    };
  }

  _handleClick (event) {
    const { video, link } = this.props;

    if (video) {
      event.preventDefault();
      this.setState({ activeVideo : !this.state.activeVideo });
    } else if (link) {
      window.location.href = link;
    }
  }

  render () {
    const { thumbnail, description, heading, overline, link, linkIcon, linkText, onClick, video, direction } = this.props;

    const classes = classnames(
      CLASS_ROOT,
      {
        [`${CLASS_ROOT}--direction-${this.props.direction}`]: this.props.direction
      },
      this.props.className
    );

    let anchorLabel = linkText;
    if (!linkText) {
      anchorLabel = video ? 'Watch Now' : 'Get the Details';
    }

    let anchorIcon = linkIcon;
    if (!linkIcon) {
      anchorIcon = video ? <PlayIcon /> : <LinkNextIcon />;
    }

    let linkMarkup;
    if (link || onClick || video) {
      linkMarkup = (
        <Box pad={{vertical: "small"}}>
          <Anchor href={link} icon={anchorIcon} label={anchorLabel}
            onClick={this._handleClick} />
        </Box>
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

    let cardDirection = 'row';
    let cardPad = {vertical: 'small'};
    if (direction === 'row') {
      cardDirection = 'column';
      cardPad = 'small';
    }

    let onContentCardClick = onClick;
    if (!onContentCardClick && (link || video)) {
      onContentCardClick = this._handleClick;
    }

    return (
      <Box className={classes} direction={cardDirection} onClick={onContentCardClick} pad={cardPad}>
        <Box className={`${CLASS_ROOT}__thumbnail`} backgroundImage={`url(${thumbnail})`} />
        <Box className={`${CLASS_ROOT}__content`} pad="medium">
          <Heading tag="h5" margin="none"
            uppercase={true}>{overline}</Heading>
          <Heading tag="h3" margin="none">{heading}</Heading>
          <Paragraph margin="none">{description}</Paragraph>
          {linkMarkup}
        </Box>
        {videoMarkup}
      </Box>
    );
  }
};

ContentCard.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  overline: PropTypes.string,
  link: PropTypes.string,
  linkIcon: PropTypes.element,
  linkText: PropTypes.string,
  onClick: PropTypes.func,
  video: PropTypes.shape({
    source: PropTypes.string.isRequired,
    type: PropTypes.string
  }),
  direction: PropTypes.oneOf(['row', 'column'])
};

ContentCard.defaultProps = {
  direction: 'column'
};

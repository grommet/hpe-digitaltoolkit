// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Box from 'grommet/components/Box';
import Tile from 'grommet/components/Tile';
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

  _renderChildren () {
    const { children, socialIcon } = this.props;

    if (socialIcon) {
      return (
        <Box className="flex" pad={{between: 'large'}}>
          {children}
          <Box align="end">
            {socialIcon}
          </Box>
        </Box>
      );
    }

    return children;
  }

  _renderLinkMarkup () {
    const { link, linkIcon, linkText, onClick, video } = this.props;

    let linkMarkup;
    let anchorLabel = linkText;
    if (!linkText) {
      anchorLabel = video ? 'Watch Now' : 'Learn More';
    }

    let anchorIcon = linkIcon;
    if (!linkIcon) {
      anchorIcon = video ? <PlayIcon /> : <LinkNextIcon />;
    }

    if (link || onClick || video) {
      linkMarkup = (
        <Box pad={{vertical: "small"}}>
          <Anchor href={link} icon={anchorIcon} label={anchorLabel}
            onClick={this._handleClick} />
        </Box>
      );
    }

    return linkMarkup;
  }

  _renderVideoMarkup () {
    const { video } = this.props;
    const { activeVideo } = this.state;
    let videoMarkup;

    if (video && video.source && activeVideo) {
      videoMarkup = (
        <Layer onClose={this._handleClick} closer={true} flush={true}>
          <Video>
            <source src={video.source} type={`video/${video.type}`}/>
          </Video>
        </Layer>
      );
    }

    return videoMarkup;
  }

  render () {
    const { thumbnail, description, heading, overline, link, onClick,
      video, socialIcon, orientation, contentPlacement } = this.props;

    const classes = classnames(
      CLASS_ROOT,
      {
        [`${CLASS_ROOT}--orientation-${this.props.orientation}`]: this.props.orientation,
        [`${CLASS_ROOT}--selectable`]: (link || onClick || video)
      },
      this.props.className
    );


    let onContentCardClick = onClick;
    if (!onContentCardClick && (link || video)) {
      onContentCardClick = this._handleClick;
    }

    const contentMarkup = (
      <Box className={`${CLASS_ROOT}__content`} pad="medium">
        <Heading tag="h5" uppercase={true} margin="none">{overline}</Heading>
        <Heading tag="h2" strong={true}>{heading}</Heading>
        <Paragraph margin="none">{description}</Paragraph>
        {this._renderChildren()}
        {(!socialIcon) ? this._renderLinkMarkup() : null}
      </Box>
    );

    let thumbnailMarkup;
    if (thumbnail) {
      thumbnailMarkup = (
        <Box className={`${CLASS_ROOT}__thumbnail`} backgroundImage={`url(${thumbnail})`} />
      );
    }

    let first = thumbnailMarkup;
    let second = contentMarkup;
    let cardJustify;

    if (contentPlacement === 'bottom') {
      first = contentMarkup;
      second = thumbnailMarkup;
      // align thumbnail to bottom of card for bottom cardPlacement
      cardJustify = 'between';
    }

    let cardDirection;
    let cardPad = 'small';
    let cardFull;
    if (orientation === 'horizontal') {
      cardDirection = 'row';
      cardPad = {vertical: 'small'};
      cardFull = 'horizontal';
    }

    return (
      <Tile className={classes} onClick={onContentCardClick} pad={cardPad}>
        <Box className="flex" direction={cardDirection} justify={cardJustify} full={cardFull}>
          {first}
          {second}
          {this._renderVideoMarkup()}
        </Box>
      </Tile>
    );
  }
};

ContentCard.propTypes = {
  thumbnail: PropTypes.string,
  description: PropTypes.string,
  heading: PropTypes.string,
  overline: PropTypes.string,
  link: PropTypes.string,
  linkIcon: PropTypes.element,
  linkText: PropTypes.string,
  onClick: PropTypes.func,
  video: PropTypes.shape({
    source: PropTypes.string.isRequired,
    type: PropTypes.string
  }),
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  contentPlacement: PropTypes.oneOf(['top', 'bottom']),
  socialIcon: PropTypes.element
};

ContentCard.defaultProps = {
  orientation: 'vertical',
  contentPlacement: 'top'
};

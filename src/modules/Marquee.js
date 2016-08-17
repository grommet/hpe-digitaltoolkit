// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Image from 'grommet/components/Image';
import PlayIcon from 'grommet/components/icons/base/Play';
import CloseIcon from 'grommet/components/icons/base/Close';
import Stack from './Stack';

const CLASS_ROOT = 'marquee';
const LIGHT_COLORINDEX = 'light-1';
const DARK_COLORINDEX = 'grey-1';
const PALM_BREAKPOINT = 720;

export default class Marquee extends Component {
  constructor (props) {
    super(props);
    this._setReverse = this._setReverse.bind(this);
    this._setBackgroundColorIndex = this._setBackgroundColorIndex.bind(this);
    this._onShowVideo = this._onShowVideo.bind(this);
    this._onClose = this._onClose.bind(this);

    this.state = {
      colorIndex: props.darkTheme ? DARK_COLORINDEX : LIGHT_COLORINDEX,
      reverse: (props.justify === 'start') ? true : false,
      showVideo: false
    };
  }

  componentDidMount () {
    window.addEventListener('resize', this._setReverse);
    window.addEventListener('resize', this._setBackgroundColorIndex);
    this._setReverse();
    this._setBackgroundColorIndex();
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this._setReverse);
    window.removeEventListener('resize', this._setBackgroundColorIndex);
  }

  _setBackgroundColorIndex () {
    const { darkTheme } = this.props;

    if (window.innerWidth < PALM_BREAKPOINT) {
      this.setState({ colorIndex: LIGHT_COLORINDEX });
    } else {
      this.setState({ colorIndex: darkTheme ? DARK_COLORINDEX : LIGHT_COLORINDEX });
    }
  }

  _setReverse () {
    const { justify } = this.props;

    if (window.innerWidth < PALM_BREAKPOINT) {
      this.setState({ reverse: false });
    } else {
      this.setState({ reverse: (justify === 'start') ? true : false });
    }
  }

  _onShowVideo () {
    const { overlayVideo } = this.props;

    if (overlayVideo) {
      this.setState({ showVideo: true });
    }
  }

  _onClose () {
    this.setState({ showVideo: false });
  }

  _renderMarquee () {
    const { backgroundImage, backgroundVideo, flush, headline, image, justify, link, linkIcon, linkText, onClick, overlayVideo, responsiveBackgroundPosition, separator, subHeadline } = this.props;

    let classes = classnames(
      {
        [`${CLASS_ROOT}--bg-${responsiveBackgroundPosition}`]: responsiveBackgroundPosition,
        [`${CLASS_ROOT}--mobile-separator`]: separator
      }
    );

    let full = flush ? 'horizontal' : false;
    let pad = flush ? 'none' : 'large';

    let backgroundMarkup;
    if (backgroundImage) {
      backgroundMarkup = <Box containerClassName={CLASS_ROOT + "__background"} appCentered={true} pad={pad} backgroundImage={`url(${backgroundImage})`} full={full} />;
    } else if (backgroundVideo) {
      backgroundMarkup = (
        <Box className={CLASS_ROOT + "__background " + CLASS_ROOT + "__background-video"} ref="video">
          {backgroundVideo}
        </Box>
      );
    }

    let imageMarkup = <Box />;
    if (image) {
      imageMarkup = <Image src={`url(${image})`} />;
    }

    let stack;
    if (link || onClick || overlayVideo) {
      let linkCopy;
      if (!linkText) {
        linkCopy = "Learn More";
      } else {
        linkCopy = linkText;
      }

      if (overlayVideo) {
        let cta;
        if (link || onClick) {
          cta = (
            <Box direction="row">
              <Box pad={{ horizontal: 'small' }} separator="right" />
              <Box pad={{ horizontal: 'small' }} />
              <Anchor primary={true} target="_blank" href={link} onClick={onClick} icon={linkIcon}>
                {linkCopy}
              </Anchor>
            </Box>
          );
        }

        stack = (
          <Box pad={{horizontal: 'large', vertical: 'large', between: 'medium'}}>
            <Stack size="xlarge" headline={headline} print={subHeadline} />
            <Box direction="row">
              <Anchor primary={true} onClick={this._onShowVideo} icon={<PlayIcon />}>
                Watch Now
              </Anchor>
              {cta}
            </Box>
          </Box>
        );
      } else {
        stack = (
          <Box pad={{horizontal: 'large', vertical: 'large', between: 'medium'}}>
            <Stack size="xlarge" headline={headline} print={subHeadline} link={link} linkText={linkCopy} linkIcon={linkIcon} onClick={onClick} />
          </Box>
        );
      }
    } else {
      stack = (
        <Box pad={{horizontal: 'large', vertical: 'large', between: 'medium'}}>
          <Stack size="xlarge" headline={headline} print={subHeadline} />
        </Box>
      );
    }

    let contentMarkup;
    if (justify === 'center') {
      contentMarkup = (
        <Box className={CLASS_ROOT + "__overlay"} justify={justify} align="center" primary={true} full={full} direction="row" >
          {stack}
        </Box>
      );
    } else {
      contentMarkup = (
        <Box className={CLASS_ROOT + "__overlay"} align="center" primary={true} full={full} direction="row" reverse={this.state.reverse} >
          <Box className={CLASS_ROOT + "__image"} align="center" justify="center">
            {imageMarkup}
          </Box>
          {stack}
        </Box>
      );
    }

    return (
      <Box className={classes}>
        {backgroundMarkup}
        {contentMarkup}
      </Box>
    );
  }

  _renderVideo () {
    const { overlayVideo } = this.props;

    return (
      <div className={`${CLASS_ROOT}__video-overlay`} key={this.state.timestamp}>
        <Anchor icon={<CloseIcon />} onClick={this._onClose} />
        {overlayVideo}
      </div>
    );
  }

  render () {
    const { className, size } = this.props;
    let content;

    let classes = classnames(
      CLASS_ROOT,
      className,
      {
        [`${CLASS_ROOT}--${size}`]: size,
        [`${CLASS_ROOT}--show-video`]: this.state.showVideo
      }
    );

    if (this.state.showVideo) {
      content = this._renderVideo();
    } else {
      content = this._renderMarquee();
    }

    return (
      <Box className={classes} colorIndex={this.state.colorIndex}>
        {content}
      </Box>
    );
  }
};

Marquee.propTypes = {
  backgroundImage: PropTypes.string,
  backgroundVideo: PropTypes.element,
  darkTheme: PropTypes.bool,
  flush: PropTypes.bool,
  headline: PropTypes.string.isRequired,
  image: PropTypes.string,
  justify: PropTypes.oneOf(['start', 'center', 'end']),
  link: PropTypes.string,
  linkIcon: PropTypes.element,
  linkText: PropTypes.string,
  onClick: PropTypes.func,
  overlayVideo: PropTypes.element,
  responsiveBackgroundPosition: PropTypes.oneOf(['left', 'center', 'right']),
  separator: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'large']),
  subHeadline: PropTypes.string
};

Marquee.defaultProps = {
  darkTheme: true,
  flush: true,
  headlineSize: 'large',
  justify: 'end',
  responsiveBackgroundPosition: 'center',
  separator: false,
  size: 'large'
};

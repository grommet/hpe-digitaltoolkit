// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Image from 'grommet/components/Image';
import WatchIcon from 'grommet/components/icons/base/Watch';
import CloseIcon from 'grommet/components/icons/base/Close';
import Card from 'grommet/components/Card';

const CLASS_ROOT = 'marquee';
const LIGHT_COLORINDEX = 'light-1';
const DARK_COLORINDEX = 'grey-1';
const PALM_BREAKPOINT = 720;

export default class Marquee extends Component {
  constructor (props) {
    super(props);
    this._setReverse = this._setReverse.bind(this);
    this._setTextPad = this._setTextPad.bind(this);
    this._setBackgroundColorIndex = this._setBackgroundColorIndex.bind(this);
    this._onShowVideo = this._onShowVideo.bind(this);
    this._onClose = this._onClose.bind(this);

    this.state = {
      colorIndex: props.darkTheme ? DARK_COLORINDEX : LIGHT_COLORINDEX,
      reverse: (props.justify === 'start') ? true : false,
      showVideo: false,
      textPad: { horizontal: 'none', vertical: 'none', between: 'medium' }
    };
  }

  componentDidMount () {
    window.addEventListener('resize', this._setReverse);
    window.addEventListener('resize', this._setTextPad);
    window.addEventListener('resize', this._setBackgroundColorIndex);
    this._setReverse();
    this._setTextPad();
    this._setBackgroundColorIndex();
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this._setReverse);
    window.removeEventListener('resize', this._setTextPad);
    window.removeEventListener('resize', this._setBackgroundColorIndex);
  }

  _setBackgroundColorIndex () {
    const { darkTheme } = this.props;

    if (window.innerWidth < PALM_BREAKPOINT) {
      this.setState({ colorIndex: LIGHT_COLORINDEX });
    } else {
      this.setState({ colorIndex: darkTheme ?
        DARK_COLORINDEX :
        LIGHT_COLORINDEX });
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

  _setTextPad () {
    const { textBackgroundColorIndex } = this.props;

    if (window.innerWidth < PALM_BREAKPOINT) {
      this.setState({ textPad: textBackgroundColorIndex ?
        { horizontal: 'none', vertical: 'none', between: 'medium' } :
        { horizontal: 'large', vertical: 'large', between: 'medium' } });
    } else {
      this.setState({
        textPad: { horizontal: 'large', vertical: 'large', between: 'medium' }
      });
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

  _renderBackground() {
    const { backgroundImage, backgroundVideo, flush } = this.props;

    const full = flush ? 'horizontal' : false;
    const pad = flush ? 'none' : 'large';

    const backgroundVideoClasses =
      `${CLASS_ROOT}__background ${CLASS_ROOT}__background-video`;

    if (backgroundImage) {
      return (
        <Box containerClassName={CLASS_ROOT + "__background"}
          appCentered={true} pad={pad}
          backgroundImage={`url(${backgroundImage})`} full={full} />
      );
    } else if (backgroundVideo) {
      return (
        <Box className={backgroundVideoClasses} ref="video">
          {backgroundVideo}
        </Box>
      );
    } else {
      return undefined;
    }
  }

  _renderImage() {
    const { image } = this.props;

    if (image) {
      return <Image src={`url(${image})`} />;
    } else {
      return <Box/>;
    }
  }

  _renderLogo() {
    const { logo } = this.props;

    if (logo) {
      return (
        <Box>
          <Image className={CLASS_ROOT + "__logo"} src={logo} />
          <Box pad="small" />
        </Box>
      );
    } else {
      return undefined;
    }
  }

  _renderCta() {
    const { link, linkIcon, onClick } = this.props;

    if (link || onClick) {
      return (
        <Box direction="row" responsive={false}>
          <Box pad={{ horizontal: 'small' }} separator="right" />
          <Box pad={{ horizontal: 'small' }} />
          <Anchor primary={true} target="_blank" href={link} onClick={onClick}
            icon={linkIcon}>
            {this._linkCopy}
          </Anchor>
        </Box>
      );
    } else {
      return undefined;
    }
  }

  _linkCopy() {
    const { linkText } = this.props;

    if (!linkText) {
      return "Learn More";
    } else {
      return linkText;
    }
  }

  _renderCard() {
    const { heading, label, link, onClick, overlayVideo, textSize,
      subHeading, textBackgroundColorIndex } = this.props;

    const logoMarkup = this._renderLogo();

    let textPad = "none";
    if (textBackgroundColorIndex) {
      textPad = "large";
    }

    if (link || onClick || overlayVideo) {
      if (overlayVideo) {
        return (
          <Box className={CLASS_ROOT + "__card"} pad={this.state.textPad}>
            <Box pad={textPad}
              colorIndex="">
              {logoMarkup}
              <Card direction="row"
                textSize={textSize} heading={heading}
                description={subHeading} label={label} />
              <Box direction="row"
                pad={{ horizontal: 'none', vertical: 'small'}}
                responsive={false}>
                <Anchor primary={true} onClick={this._onShowVideo}
                  icon={<WatchIcon />}>
                  Watch Now
                </Anchor>
                {this._renderCta()}
              </Box>
            </Box>
          </Box>
        );
      } else {
        return (
          <Box className={CLASS_ROOT + "__card"} pad={this.state.textPad}>
            <Box pad={textPad}
              colorIndex="">
              {logoMarkup}
              <Card direction="row"
                textSize={textSize} heading={heading}
                description={subHeading} label={label}
                link={<Anchor href={link} primary={true} onClick={onClick}>
                  {this._linkCopy()}</Anchor>} />
            </Box>
          </Box>
        );
      }
    } else {
      return (
        <Box className={CLASS_ROOT + "__card"} pad={this.state.textPad}>
          <Box pad={textPad} colorIndex="">
            {logoMarkup}
            <Card direction="row"
              textSize={textSize} heading={heading} description={subHeading}
              label={label} />
          </Box>
        </Box>
      );
    }
  }

  _renderMarqueeContent() {
    const { backgroundOverlayColorIndex, flush, justify } = this.props;

    const full = flush ? 'horizontal' : false;
    const card = this._renderCard();

    let overlayColorIndex;
    if (backgroundOverlayColorIndex) {
      overlayColorIndex = backgroundOverlayColorIndex + '-a';
    }

    if (justify === 'center') {
      return (
        <Box className={CLASS_ROOT + "__overlay"}
          colorIndex={overlayColorIndex} justify={justify} align="center"
          primary={true} full={full} direction="row" textAlign="center">
          {card}
        </Box>
      );
    } else {
      return (
        <Box className={CLASS_ROOT + "__overlay"}
          colorIndex={overlayColorIndex} align="center" primary={true}
          full={full} direction="row" reverse={this.state.reverse} >
          <Box className={CLASS_ROOT + "__image"} align="center"
            justify="center">
            {this._renderImage()}
          </Box>
          {card}
        </Box>
      );
    }
  }

  _renderMarquee () {
    const { responsiveBackgroundPosition, separator } = this.props;

    const classes = classnames(
      {
        [`${CLASS_ROOT}--bg-${responsiveBackgroundPosition}`]: responsiveBackgroundPosition,
        [`${CLASS_ROOT}--mobile-separator`]: separator
      }
    );

    return (
      <Box className={classes}>
        {this._renderBackground()}
        {this._renderMarqueeContent()}
      </Box>
    );
  }

  _renderVideo () {
    const { overlayVideo } = this.props;

    return (
      <div className={`${CLASS_ROOT}__video-overlay`}
        key={this.state.timestamp}>
        <Anchor icon={<CloseIcon />} onClick={this._onClose} />
        {overlayVideo}
      </div>
    );
  }

  render () {
    const { className, responsiveDropText, size } = this.props;

    const classes = classnames(
      CLASS_ROOT,
      className,
      {
        [`${CLASS_ROOT}--${size}`]: size,
        [`${CLASS_ROOT}--show-video`]: this.state.showVideo,
        [`${CLASS_ROOT}--responsive-drop`]: responsiveDropText
      }
    );

    let content;
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
  backgroundOverlayColorIndex: PropTypes.string,
  darkTheme: PropTypes.bool,
  flush: PropTypes.bool,
  heading: PropTypes.string.isRequired,
  image: PropTypes.string,
  justify: PropTypes.oneOf(['start', 'center', 'end']),
  label: PropTypes.string,
  link: PropTypes.string,
  linkIcon: PropTypes.element,
  linkText: PropTypes.string,
  logo: PropTypes.string,
  onClick: PropTypes.func,
  overlayVideo: PropTypes.element,
  responsiveBackgroundPosition: PropTypes.oneOf(['left', 'center', 'right']),
  responsiveDropText: PropTypes.bool,
  separator: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'large']),
  textSize: PropTypes.oneOf(['large', 'xlarge']),
  subHeading: PropTypes.string,
  textBackgroundColorIndex: PropTypes.string
};

Marquee.defaultProps = {
  darkTheme: true,
  flush: true,
  justify: 'end',
  responsiveBackgroundPosition: 'center',
  responsiveDropText: true,
  separator: false,
  size: 'large',
  textSize: 'xlarge'
};

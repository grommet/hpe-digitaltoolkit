// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Headline from 'grommet/components/Headline';
import Paragraph from 'grommet/components/Paragraph';
import Anchor from 'grommet/components/Anchor';
import Hero from 'grommet/components/Hero';
import Video from 'grommet/components/Video';

const LIGHT_COLORINDEX = 'light-1';
const DARK_COLORINDEX = 'grey-1';
const PALM_BREAKPOINT = 720;

export default class Marquee extends Component {
  constructor (props) {
    super(props);
    this._setReverse = this._setReverse.bind(this);
    this._setBackgroundColorIndex = this._setBackgroundColorIndex.bind(this);

    this.state = {
      colorIndex: props.darkTheme ? DARK_COLORINDEX : LIGHT_COLORINDEX,
      reverse: (props.justify === 'start') ? true : false
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

  render () {
    const { backgroundImage, backgroundVideo, backgroundVideoLoop, backgroundVideoMuted, backgroundVideoPoster, flush, headlineSize, headline, image, justify, link, linkIcon, linkText, onClick, responsiveBackgroundPosition, separator, size, subHeadline } = this.props;

    let subHeadlineMarkup;
    if (subHeadline) {
      subHeadlineMarkup = (
        <Paragraph size="large" margin="none">{subHeadline}</Paragraph>
      );
    }

    let linkMarkup;
    if (link || onClick) {
      linkMarkup = (
        <h3><Anchor href={link} primary={true} label={linkText} icon={linkIcon} onClick={onClick} /></h3>
      );
    }

    let video;
    if (backgroundVideo) {
      video = (
        <Video loop={backgroundVideoLoop} muted={backgroundVideoMuted} poster={backgroundVideoPoster} colorIndex={this.state.colorIndex}>
          <source src={backgroundVideo} type='video/mp4'/>
        </Video>
      );
    }

    return (
      <Hero colorIndex={this.state.colorIndex} backgroundImage={backgroundImage} backgroundVideo={video} flush={flush} image={image} justify={justify} responsiveBackgroundPosition={responsiveBackgroundPosition} separator={separator} size={size}>
        <Headline size={headlineSize} strong={true} margin="none">
          {headline}
        </Headline>
        {subHeadlineMarkup}
        {linkMarkup}
      </Hero>
    );
  }
};

Marquee.propTypes = {
  backgroundImage: PropTypes.string,
  backgroundVideo: PropTypes.string,
  backgroundVideoLoop: PropTypes.bool,
  backgroundVideoMuted: PropTypes.bool,
  backgroundVideoPoster: PropTypes.string,
  darkTheme: PropTypes.bool,
  flush: PropTypes.bool,
  headline: PropTypes.string.isRequired,
  headlineSize: PropTypes.oneOf(['small', 'medium', 'large']),
  image: PropTypes.string,
  justify: PropTypes.oneOf(['start', 'center', 'end']),
  link: PropTypes.string,
  linkIcon: PropTypes.element,
  linkText: PropTypes.string,
  onClick: PropTypes.func,
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
  linkText: 'Learn More',
  responsiveBackgroundPosition: 'center',
  separator: false,
  size: 'large'
};

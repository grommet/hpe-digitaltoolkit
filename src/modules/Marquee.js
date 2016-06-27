// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Box from 'grommet/components/Box';
import Headline from 'grommet/components/Headline';
import Paragraph from 'grommet/components/Paragraph';
import Anchor from 'grommet/components/Anchor';
import Image from 'grommet/components/Image';

const CLASS_ROOT = 'marquee';
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
    const { backgroundImage, flush, headlineSize, headline, image, justify, link, linkIcon, linkText, onClick, subHeadline } = this.props;

    let classes = classnames(
      CLASS_ROOT,
      this.props.className,
      {
        [`${CLASS_ROOT}--${this.props.size}`]: this.props.size,
        [`${CLASS_ROOT}--bg-${this.props.responsiveBackgroundPosition}`]: this.props.responsiveBackgroundPosition,
        [`${CLASS_ROOT}--mobile-separator`]: this.props.separator
      }
    );

    let full = flush ? 'horizontal' : false;
    let pad = flush ? 'none' : 'large';

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

    let contentMarkup;
    if (justify === 'center') {
      contentMarkup = (
        <Box className="marquee__overlay" justify={justify} align="center" primary={true} full={full} direction="row" >
          <Box pad={{horizontal: 'large', vertical: 'large', between: 'medium'}}>
            <Headline size={headlineSize} strong={true} margin="none">
              {headline}
            </Headline>
            {subHeadlineMarkup}
            {linkMarkup}
          </Box>
        </Box>
      );
    } else {
      contentMarkup = (
        <Box className="marquee__overlay" align="center" primary={true} full={full} direction="row" reverse={this.state.reverse} >
          <Box className="marquee__image" align="center" justify="center">
            <Image src={`url(${image})`} />
          </Box>
          <Box pad={{horizontal: 'large', vertical: 'large', between: 'medium'}}>
            <Headline size={headlineSize} strong={true} margin="none">
              {headline}
            </Headline>
            {subHeadlineMarkup}
            {linkMarkup}
          </Box>
        </Box>
      );
    }

    return (
      <Box className={classes} colorIndex={this.state.colorIndex}>
        <Box containerClassName="marquee__background" appCentered={true} pad={pad} backgroundImage={`url(${backgroundImage})`} full={full} />
        {contentMarkup}
      </Box>
    );
  }
};

Marquee.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
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

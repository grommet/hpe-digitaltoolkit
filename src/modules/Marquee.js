// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';
import Headline from 'grommet/components/Headline';
import Paragraph from 'grommet/components/Paragraph';
import Anchor from 'grommet/components/Anchor';

const CLASS_ROOT = 'marquee';

export default class Marquee extends Component {
  constructor () {
    super();
    this._handleScroll = this._handleScroll.bind(this);
  }

  componentDidMount () {
    window.addEventListener('scroll', this._handleScroll);
    window.addEventListener('resize', this._handleScroll);
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this._handleScroll);
    window.removeEventListener('resize', this._handleScroll);
  }

  _handleScroll () {
    let marqueeOriginalHeight = window.innerHeight * 0.85;
    let marquee = ReactDOM.findDOMNode(this).getElementsByClassName('box__container')[0];
    let marqueeTop = marquee.getBoundingClientRect().top;
    let marqueeText = ReactDOM.findDOMNode(this).getElementsByClassName('marquee__overlay')[0];
    let marqueeBackgroundImage = new Image();
    marqueeBackgroundImage.src = marquee.style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];

    let backgroundRatio = marqueeBackgroundImage.width / marqueeBackgroundImage.height;
    let marqueeRatio = marquee.offsetWidth / marqueeOriginalHeight;
    let backgroundHeight = 0;
    let backgroundWidth = 0;
    if (backgroundRatio > marqueeRatio) {
      // constrained by marquee height
      backgroundHeight = marqueeOriginalHeight;
      backgroundWidth = backgroundHeight * backgroundRatio;
    } else {
      // constrained by marquee width
      backgroundWidth = marquee.offsetWidth;
      backgroundHeight = backgroundWidth / backgroundRatio;
    }

    let positionRatio = (marqueeOriginalHeight + marqueeTop) / marqueeOriginalHeight;
    if (window.innerWidth >= 720) {
      marqueeText.style.opacity = positionRatio;

      if (-marqueeTop > marqueeOriginalHeight) {
        marqueeText.style.height = 0;
        marqueeText.style.top = marqueeOriginalHeight + 'px';
      } else if (marqueeTop > 0) {
        marqueeText.style.height = marqueeOriginalHeight;
        marqueeText.style.top = 0;
      } else {
        marqueeText.style.height = marqueeOriginalHeight + marqueeTop + 'px';
        marqueeText.style.top = -marqueeTop + 'px';
      }
    } else {
      marqueeText.style.opacity = 1;
      marqueeText.style.height = '';
      marqueeText.style.top = 0;
    }

    let positionPercentage;
    if (marqueeTop < 0) {
      positionPercentage = ((1 - positionRatio) * 50 + 100) / 100;
    } else {
      positionPercentage = 1;
    }
    marquee.style.backgroundSize = (backgroundWidth * positionPercentage) + 'px ' + (backgroundHeight * positionPercentage) + 'px';
  }

  render () {
    let { backgroundImage, darkTheme, flush, headlineSize, headline, justify, link, linkIcon, linkText, onClick, subHeadline } = this.props;

    let classes = classnames(
      CLASS_ROOT,
      this.props.className
    );

    let full = flush ? 'horizontal' : false;
    let pad = flush ? 'none' : 'large';
    let colorIndex = darkTheme ? 'dark' : 'light';

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

    return (
      <Box className={classes}>
        <Section appCentered={true} pad={pad}
          backgroundImage={backgroundImage} full={full} />
        <Box className="marquee__overlay" justify={justify} align="center" colorIndex={colorIndex} primary={true} full={full} direction="row" >
          <Box pad={{horizontal: 'large', vertical: 'large', between: 'medium'}}>
            <Headline size={headlineSize} strong={true} margin="none">
              {headline}
            </Headline>
            {subHeadlineMarkup}
            {linkMarkup}
          </Box>
        </Box>
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
  justify: PropTypes.oneOf(['start', 'center', 'end']),
  link: PropTypes.string,
  linkIcon: PropTypes.element,
  linkText: PropTypes.string,
  onClick: PropTypes.func,
  subHeadline: PropTypes.string
};

Marquee.defaultProps = {
  darkTheme: true,
  flush: true,
  headlineSize: 'large',
  justify: 'end',
  linkText: 'Learn More'
};

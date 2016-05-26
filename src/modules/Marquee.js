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
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this._handleScroll);
  }

  _handleScroll () {
    if (this.props.fixed) {
      let top = window.pageYOffset;
      let marqueeOriginalHeight = window.innerHeight * 0.85;
      let marquee = ReactDOM.findDOMNode(this).getElementsByClassName('box__container')[0];
      let marqueeText = marquee.getElementsByClassName('section')[0];
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

      if (top > marqueeOriginalHeight) {
        marquee.style.height = 0;
      } else {
        marquee.style.height = marqueeOriginalHeight - top + 'px';
      }

      let positionRatio = (marqueeOriginalHeight - top) / marqueeOriginalHeight;
      let positionPercentage = ((1 - positionRatio) * 30 + 100) / 100;
      marqueeText.style.opacity = positionRatio;
      marquee.style.backgroundSize = (backgroundWidth * positionPercentage) + 'px ' + (backgroundHeight * positionPercentage) + 'px';
    }
  }

  render () {
    let { backgroundImage, darkTheme, flush, headlineSize, headline, justify, link, linkIcon, linkText, onClick, subHeadline } = this.props;

    let classes = classnames(
      CLASS_ROOT,
      this.props.className,
      {
        [`${CLASS_ROOT}--fixed`]: this.props.fixed
      }
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
          backgroundImage={backgroundImage} colorIndex={colorIndex}
          primary={true} full={full} direction="row" justify={justify} align="center">
          <Box className="box--size-half" pad={{horizontal: 'large', vertical: 'large', between: 'medium'}}>
            <Headline size={headlineSize} strong={true} margin="none">
              {headline}
            </Headline>
            {subHeadlineMarkup}
            {linkMarkup}
          </Box>
        </Section>
      </Box>
    );
  }
};

Marquee.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  darkTheme: PropTypes.bool,
  fixed: PropTypes.bool,
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
  fixed: false,
  headlineSize: 'large',
  justify: 'end',
  linkText: 'Learn More'
};

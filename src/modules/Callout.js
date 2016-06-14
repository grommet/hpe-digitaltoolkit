// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Anchor from 'grommet/components/Anchor';

const CLASS_ROOT = 'callout';
const PALM_BREAKPOINT = 720;

export default class Callout extends Component {
  constructor(props) {
    super(props);
    this._handleResize = this._handleResize.bind(this);
    this.state = {
      thumbnailWidth: 270,
      thumbnailHeight: ''
    };
  }

  componentDidMount () {
    window.addEventListener('resize', this._handleResize);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this._handleResize);
  }

  _handleResize () {
    if (window.innerWidth > PALM_BREAKPOINT) {
      this.setState({ thumbnailWidth: 270, thumbnailHeight: '' });
    } else {
      this.setState({ thumbnailWidth: '', thumbnailHeight: 270 });
    }
  }

  render () {
    const { thumbnail, content, heading, label, link, linkIcon, linkText } = this.props;
    const { thumbnailWidth, thumbnailHeight } = this.state;

    const classes = classnames(
      CLASS_ROOT,
      this.props.className
    );

    const thumbnailStyles = {
      width: thumbnailWidth,
      height: thumbnailHeight,
      backgroundImage: thumbnail
    };

    return (
      <Box className={classes} direction="row" pad={{vertical: "medium"}}>
        <Box style={thumbnailStyles} />
        <Box pad="medium">
          <Heading tag="h5" margin="none">{label}</Heading>
          <Heading tag="h3" margin="none">{heading}</Heading>
          <Paragraph margin="none">{content}</Paragraph>
          <Heading tag="h3" margin="none">
            <Anchor href={link} primary={true} icon={linkIcon} label={linkText} />
          </Heading>
        </Box>
      </Box>
    );
  }
};

Callout.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  label: PropTypes.string,
  link: PropTypes.string.isRequired,
  linkIcon: PropTypes.element,
  linkText: PropTypes.string
};


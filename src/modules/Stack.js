// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';
import classnames from 'classnames';
import Box from 'grommet/components/Box';
// import Paragraph from 'grommet/components/Paragraph';

const CLASS_ROOT = 'stack';

export default class Stack extends Component {
  render () {
    const {
      className,
      label,
      headline,
      heading,
      subhead,
      paragraph,
      paragraphSize,
      print,
      link,
      linkText
    } = this.props;

    const classes = classnames(
      CLASS_ROOT,
      className
    );

    return (
      <Box className={classes}>
        {label &&
          <p>{label}</p>
        }
        {headline &&
          <h1>{headline}</h1>
        }
        {heading &&
          <h2>{heading}</h2>
        }
        {subhead &&
          <h3>{subhead}</h3>
        }
        {paragraph &&
          <p>{paragraph}</p>
        }
        {print &&
          <p>{print}</p>
        }
        {link &&
          <a href={link}>{linkText}</a>
        }
      </Box>
    );
  }
};

Stack.propTypes = {
};

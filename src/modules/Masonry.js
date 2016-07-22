// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes, Children } from 'react';
import { findDOMNode } from 'react-dom';
import classnames from 'classnames';
import Box from 'grommet/components/Box';

const CLASS_ROOT = 'masonry';
const MIN_COLUMN_SIZE = 384;

export default class Masonry extends Component {
  constructor (props) {
    super(props);

    this._onResize = this._onResize.bind(this);
    this._layout = this._layout.bind(this);
    this._minColumnWidths = Array.apply(null, Array(this.props.numColumns))
      .map((current, i) => (i + 1) * MIN_COLUMN_SIZE);

    this.state = {
      numColumns: this.props.numColumns
    };
  }

  componentDidMount () {
    const { responsive } = this.props;

    if (responsive) {
      window.addEventListener('resize', this._onResize);
    }

    this._layout();
  }

  componentWillUnmount () {
    const { responsive } = this.props;

    if (responsive) {
      window.removeEventListener('resize', this._onResize);
    }
  }

  _onResize () {
    // debounce
    clearTimeout(this._resizeTimer);
    this._resizeTimer = setTimeout(this._layout, 50);
  }

  _getNumberColumns () {
    const masonryContainer = findDOMNode(this.refs.masonry);

    const maxColumnIndex = this._minColumnWidths
      .filter((currentMin) => {
        return currentMin <= masonryContainer.offsetWidth;
      })
      .reduce((maxIndex, currentMin, i, columnMins) => {
        return (currentMin > columnMins[maxIndex]) ? i : maxIndex;
      }, 0);

    return maxColumnIndex + 1;  // return appropriate number of columns
  }

  _layout () {
    const { responsive } = this.props;
    const { numColumns } = this.state;

    if (responsive) {
      const newNumColumns = this._getNumberColumns();
      if (numColumns !== newNumColumns) {
        this.setState({ numColumns: newNumColumns });
      }
    }
  }

  _renderColumns () {
    const { children } = this.props;
    const { numColumns } = this.state;

    let columnContents = {};

    Children.map(children, (child, i) => {
      let currentColumn = i % numColumns;

      if (!columnContents[`column-${currentColumn}`]) {
        columnContents[`column-${currentColumn}`] = [];
      }

      // place children into appropriate column
      columnContents[`column-${currentColumn}`].push(child);
    });

    const columnsArray = Array.apply(null, Array(numColumns));
    let columns = columnsArray.map((current, i) => {
      return (
        <Box key={`column-${numColumns}-${i}`}>
          {columnContents[`column-${i}`]}
        </Box>
      );
    });

    return columns;
  }

  render () {
    const classes = classnames(
      CLASS_ROOT,
      this.props.className
    );

    return (
      <Box ref="masonry" className={classes} direction="row">
        {this._renderColumns()}
      </Box>
    );
  }
};

Masonry.propTypes = {
  numColumns: PropTypes.number,
  responsive: PropTypes.bool
};

Masonry.defaultProps = {
  numColumns: 1,
  responsive: true
};

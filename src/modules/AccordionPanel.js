// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import ListItem from 'grommet/components/ListItem';
import OpenIcon from 'grommet/components/icons/base/Add';
import CloseIcon from 'grommet/components/icons/base/Subtract';

const CLASS_ROOT = 'accordion-panel';

export default class AccordionPanel extends Component {
  constructor (props) {
    super(props);

    this._onClickPanel = this._onClickPanel.bind(this);

    this.state = {
      isOpen: false
    };
  }

  _onClickPanel () {
    this.setState({ isOpen : !this.state.isOpen });
  }

  render () {
    const { panelTitle, children } = this.props;

    const classes = classnames(
      CLASS_ROOT,
      this.props.className
    );

    let panelControlIcon = <OpenIcon colorIndex="brand" />;
    let panelContent;

    if (this.state.isOpen) {
      panelControlIcon = <CloseIcon colorIndex="brand" />;

      panelContent = (
        <Box full="horizontal" pad={{vertical: "medium"}}>
          {children}
        </Box>
      );
    }

    return (
      <ListItem className={classes} direction="column">
        <Box full="horizontal" direction="row" justify="between" align="center" onClick={this._onClickPanel} responsive={false}>
          <Heading tag="h2" margin="small">{panelTitle}</Heading>
          {panelControlIcon}
        </Box>
        {panelContent}
      </ListItem>
    );
  }
};

AccordionPanel.propTypes = {
  panelTitle: PropTypes.string.isRequired
};

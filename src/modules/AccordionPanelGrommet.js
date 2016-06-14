// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import ListItem from 'grommet/components/ListItem';
import Paragraph from 'grommet/components/Paragraph';
import Tile from 'grommet/components/Tile';
import Tiles from 'grommet/components/Tiles';
import OpenIcon from 'grommet/components/icons/base/Add';
import CloseIcon from 'grommet/components/icons/base/Subtract';

const CLASS_ROOT = 'accordion-panel';

export default class AccordionPanelGrommet extends Component {
  constructor (props) {
    super(props);

    this._onClickPanel = this._onClickPanel.bind(this);

    this.state = {
      isOpen: false
    };
  }

  _renderCTA () {
    const { ctaThumbnail } = this.props;
    const { headline, subHeadline, link, label } = this.props.ctaData;
    // TODO: add video overlay functionality for ctaVideo

    return (
      <Box direction="row" pad={{vertical: "medium"}}>
        <img src={ctaThumbnail} className={`${CLASS_ROOT}__image`} />
        <Box pad="medium">
          <Heading tag="h3" margin="none">{headline}</Heading>
          <Paragraph margin="none">{subHeadline}</Paragraph>
          <Anchor href={link} primary={true} label={label} />
        </Box>
      </Box>
    );
  }

  _renderResources () {
    const { resources } = this.props;
    let resourceTiles;

    if (resources) {
      resourceTiles = resources.map(({ thumbnail, headline, subHeadline, link, label }, key) => {
        return (
          <Tile key={key} direction="row">
            <img src={thumbnail} className="resource__image" />
            <Box pad="medium">
              <Heading tag="h6" margin="none">{headline}</Heading>
              <Paragraph margin="none">{subHeadline}</Paragraph>
              <Anchor href={link} primary={true} label={label} />
            </Box>
          </Tile>
        );
      });

      return (
        <Box pad={{vertical: "medium"}}>
          <Heading tag="h3">Resources</Heading>
          <Tiles fill={true}>
            {resourceTiles}
          </Tiles>
        </Box>
      );
    }

    return undefined;
  }

  _onClickPanel () {
    const { isOpen } = this.state;
    this.setState({ isOpen : !isOpen });
  }

  _renderPanelContent () {
    const { headline, subHeadline } = this.props;
    const { isOpen } = this.state;
    if (isOpen) {
      return (
        <Box full="horizontal" pad={{vertical: "medium"}}>
          <Heading tag="h3" margin="none" >{headline}</Heading>
          <Paragraph margin="none">{subHeadline}</Paragraph>
          {this._renderCTA()}
          {this._renderResources()}
        </Box>
      );
    }

    return null;
  }

  render () {
    const { panelTitle } = this.props;
    const { isOpen } = this.state;

    const classes = classnames(
      CLASS_ROOT,
      this.props.className
    );

    const panelControlIcon = (isOpen) ? <CloseIcon /> : <OpenIcon />;

    return (
      <ListItem className={classes} direction="column">
        <Box full="horizontal" direction="row" justify="between" align="center" onClick={this._onClickPanel} responsive={false}>
          <Heading tag="h2" margin="none">{panelTitle}</Heading>
          {panelControlIcon}
        </Box>
        {this._renderPanelContent()}
      </ListItem>
    );
  }
};

AccordionPanelGrommet.propTypes = {
  panelTitle: PropTypes.string.isRequired,
  headline: PropTypes.string,
  subHeadline: PropTypes.string,
  ctaData: PropTypes.shape({
    headline: PropTypes.string,
    subHeadline: PropTypes.string,
    link: PropTypes.string,
    label: PropTypes.string
  }),
  ctaThumbnail: PropTypes.string,
  ctaVideo: PropTypes.element,
  resources: PropTypes.arrayOf(PropTypes.shape({
    thumbnail: PropTypes.string,
    headline: PropTypes.string,
    subHeadline: PropTypes.string,
    link: PropTypes.string,
    label: PropTypes.string
  }))
};

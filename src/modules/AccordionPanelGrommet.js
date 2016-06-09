// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Image from 'grommet/components/Image';
import ListItem from 'grommet/components/ListItem';
import Paragraph from 'grommet/components/Paragraph';
import Tile from 'grommet/components/Tile';
import Tiles from 'grommet/components/Tiles';
import OpenIcon from 'grommet/components/icons/base/Add';
import CloseIcon from 'grommet/components/icons/base/Subtract';

const CLASS_ROOT = 'accordion-panel-grommet';

export default class AccordionPanelGrommet extends Component {
  constructor (props) {
    super(props);

    this._renderCTA = this._renderCTA.bind(this);
    this._renderResources = this._renderResources.bind(this);
    this._onClickPanel = this._onClickPanel.bind(this);

    this.state = {
      isOpen: false
    };
  }

  _renderCTA () {
    let { ctaThumbnail } = this.props;
    // let { ctaThumbnail, ctaVideo } = this.props;
    let { headline, subHeadline, link, linkText } = this.props.ctaText;
    // TODO: add video overlay functionality for ctaVideo

    return (
      <Box direction="row" pad={{vertical: "medium"}}>
        <Image src={ctaThumbnail} />
        <Box>
          <Paragraph margin="none"><strong>{headline}</strong></Paragraph>
          <Paragraph margin="none">{subHeadline}</Paragraph>
          <Anchor href={link} primary={true} label={linkText} />
        </Box>
      </Box>
    );
  }

  _renderResources () {
    let { resources } = this.props;
    let resourceTiles;

    if (resources) {
      resourceTiles = resources.map(({ thumbnail, headline, subHeadline, link, linkText }, i) => {
        return (
          <Tile key={i} direction="row">
            <Image src={thumbnail} />
            <Box>
              <Paragraph margin="none"><strong>{headline}</strong></Paragraph>
              <Paragraph margin="none">{subHeadline}</Paragraph>
              <Anchor href={link} primary={true} label={linkText} />
            </Box>
          </Tile>
        );
      });

      return (
        <Box pad={{vertical: "medium"}}>
          <Heading tag="h3" strong={true} margin="none">Resources</Heading>
          <Tiles fill={true}>
            {resourceTiles}
          </Tiles>
        </Box>
      );
    }

    return null;
  }

  _onClickPanel () {
    let { isOpen } = this.state;
    this.setState({ isOpen : !isOpen });
  }

  _renderPanelContent () {
    let { headline, subHeadline } = this.props;
    let { isOpen } = this.state;
    if (isOpen) {
      return (
        <Box full="horizontal" pad={{vertical: "medium"}}>
          <Heading tag="h3" strong={true} margin="none" >{headline}</Heading>
          <Paragraph size="large" margin="none">{subHeadline}</Paragraph>
          {this._renderCTA()}
          {this._renderResources()}
        </Box>
      );
    }

    return null;
  }

  render () {
    let { panelTitle } = this.props;
    let { isOpen } = this.state;

    let classes = classnames(
      CLASS_ROOT,
      this.props.className
    );

    let panelControlIcon = (isOpen) ? <CloseIcon /> : <OpenIcon />;

    return (
      <ListItem className={classes} direction="column">
        <Box full="horizontal" direction="row" justify="between" align="center" onClick={this._onClickPanel} responsive={false}>
          <Heading tag="h2" strong={true}>{panelTitle}</Heading>
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
  ctaText: PropTypes.shape({
    headline: PropTypes.string,
    subHeadline: PropTypes.string,
    link: PropTypes.string,
    linkText: PropTypes.string
  }),
  ctaThumbnail: PropTypes.string,
  ctaVideo: PropTypes.element,
  resources: PropTypes.arrayOf(PropTypes.shape({
    thumbnail: PropTypes.string,
    headline: PropTypes.string,
    subHeadline: PropTypes.string,
    link: PropTypes.string,
    linkText: PropTypes.string
  }))
};

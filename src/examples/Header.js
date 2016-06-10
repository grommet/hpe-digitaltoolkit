// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development L.P.

import React, { Component, PropTypes } from 'react';
import Responsive from 'grommet/utils/Responsive';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import HeaderMenu from './HeaderMenu';
import Logo from './Logo';

const CLASS_ROOT = 'hpe-header';

export default class HPEHeader extends Component {

  constructor () {
    super();
    this._onResponsive = this._onResponsive.bind(this);
    this._onClickTitle = this._onClickTitle.bind(this);
    this.state = {
      responsive: false
    };
  }

  componentDidMount () {
    this._responsive = Responsive.start(this._onResponsive);
  }

  componentWillUnmount () {
    this._responsive.stop();
  }

  _onResponsive (responsive) {
    this.setState({ responsive: responsive });
  }

  _onClickTitle () {
    if (this.props.onClickLogo) {
      this.props.onClickLogo();
    } else {
      window.location = this.props.logoLink;
    }
  }

  render () {
    let headerMenu = (
      <HeaderMenu
        responsive={this.state.responsive} centered={this.props.centered}
        external={this.props.external} links={this.props.links}
        colorIndex={this.props.external ? 'neutral-1' : 'accent-2'} />
    );

    let reverseLogo = false;
    let classes = [CLASS_ROOT];
    let colorIndex = null;
    let titleBoxClass;
    let titleBoxPad;
    let menuAlignedWithHeader;
    let headerVerticalPad = 'none';
    let headerAlign = 'center';
    let menuAfterHeader = headerMenu;

    if (this.props.external) {
      reverseLogo = true;
      classes.push(`${CLASS_ROOT}--external`);

      if (!this.state.responsive) {
        headerVerticalPad = 'small';
        headerAlign = 'end';
        titleBoxPad = {vertical: 'small'};
        menuAlignedWithHeader = headerMenu;
        menuAfterHeader = null;
        // add flex class so menu is centered for external header
        titleBoxClass = 'flex';
      }

      if (!this.props.colorIndex) {
        colorIndex = 'neutral-1';
      }
    }

    if (this.props.className) {
      classes.push(this.props.className);
    }

    return (
      <div>
        <Box className={classes.join(' ')} full="horizontal">
          <Header appCentered={this.props.centered}
            justify="between" align={headerAlign} size="large"
            colorIndex={colorIndex}
            pad={{horizontal: 'medium', vertical: headerVerticalPad, between: 'small'}} wrap={true}
            external={this.props.external}>
            <Box className={titleBoxClass} pad={titleBoxPad}>
              <Title onClick={this._onClickTitle}>
                <Logo reverse={reverseLogo} />
              </Title>
            </Box>
            {this.props.children}
            {menuAlignedWithHeader}
          </Header>
          {menuAfterHeader}
        </Box>
      </div>
    );
  }
};

HPEHeader.propTypes = {
  centered: PropTypes.bool,
  colorIndex: PropTypes.string,
  external: PropTypes.bool,
  links: HeaderMenu.propTypes.links,
  logoLink: PropTypes.string,
  onClickLogo: PropTypes.func
};

HPEHeader.defaultProps = {
  logoLink: '/',
  links: []
};

// (C) Copyright 2014-2016 Hewlett-Packard Development Company, L.P.

import React, { PropTypes } from 'react';
import Menu from 'grommet/components/Menu';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';

function renderLink (link, index = 0) {
  return <Anchor key={index} href={link.href}>{link.label}</Anchor>;
}

function renderMenuLinks (props) {
  return (
    <Box appCentered={props.centered}
      className={(props.external && !props.responsive) ? 'flex' : undefined}
      colorIndex={props.colorIndex} direction="row"
      separator={(props.external && props.responsive) ? 'top' : undefined}
      pad={{ horizontal: 'medium',vertical: 'none' }}>
      <Menu direction="row" inline={true}
        label="Menu" dropAlign={{top: 'top', left: 'left'}}>
        {props.links.map((link, index) => {
          if (link.links && link.links.length > 0) {
            return (
              <Menu key={index} label={link.label} align="stretch"
                colorIndex="dark"
                dropColorIndex={props.colorIndex}
                dropAlign={{top: 'top', left: 'left'}}>
                {link.links.map((dropdownLink, linkIndex) =>
                  renderLink(dropdownLink, linkIndex)
                )}
              </Menu>
            );
          } else {
            return renderLink(link, index);
          }
        })}
      </Menu>
    </Box>
  );
}

const HeaderMenu = (props) => {
  if (props.links.length > 0) {
    return renderMenuLinks(props);
  } else {
    return null;
  }
};

HeaderMenu.propTypes = {
  centered: PropTypes.bool,
  colorIndex: PropTypes.string,
  external: PropTypes.bool,
  links: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string
    }))
  })),
  responsive: PropTypes.bool
};

HeaderMenu.defaultProps = {
  links: []
};

export default HeaderMenu;

// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development L.P.

import React, { Component } from 'react';
import { Route } from 'react-router';
import Box from 'grommet/components/Box';

const CLASS_ROOT = 'details-page';

export default class DetailsPage extends Component {
  render () {
    const test = "Testing 123";

    return (
      <div>
        <Box className={CLASS_ROOT} full="horizontal" colorIndex="grey-3">
          <h1>{test}</h1>
        </Box>
      </div>
    );
  }
};

DetailsPage.defaultProps = {
};

DetailsPage.routes = () => {
  return [
    <Route path="details-page" component={DetailsPage} />
  ];
};

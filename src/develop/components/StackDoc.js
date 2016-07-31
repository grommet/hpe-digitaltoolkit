// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../DocsArticle';
import Example from '../Example';
import Stack from '../../modules/Stack';

Stack.displayName = 'Stack';

export default class StackDoc extends Component {
  render () {
    return (
      <DocsArticle title="Stack" colorIndex="neutral-3">

        <p>A stack component.</p>
        <pre><code className="html hljs xml">
          {`<Stack />`}
        </code></pre>

        <section>
          <h2>Stack Options</h2>
          <dl>
            <dt><code>label                string</code></dt>
            <dd>Label content.</dd>
            <dt><code>headline             string</code></dt>
            <dd>Headline content.</dd>
            <dt><code>heading              string</code></dt>
            <dd>Heading content.</dd>
            <dt><code>subhead              string</code></dt>
            <dd>Sub heading content.</dd>
            <dt><code>paragraph            string</code></dt>
            <dd>Paragraph content.</dd>
            <dt><code>paragraphSize        none|small|medium|large</code></dt>
            <dd>Size of the paragraph. Defaults to <code>medium</code>.</dd>
            <dt><code>print                string</code></dt>
            <dd>Small print content.</dd>
            <dt><code>link                 string</code></dt>
            <dd>Call to action hyperlink reference.</dd>
            <dt><code>linkText             string</code></dt>
            <dd>Call to action text.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Example name="Default" code={
            <Stack
              label="Label: 24. Light"
              headline="Headline: 64, Semibold, Light"
              paragraph="Paragraph XLarge: 32, Light"
              link="#"
              linkText="CTA: 19, Semibold"
            />
          } />

        </section>
      </DocsArticle>
    );
  }
};

StackDoc.contextTypes = {
  routePrefix: React.PropTypes.string.isRequired
};


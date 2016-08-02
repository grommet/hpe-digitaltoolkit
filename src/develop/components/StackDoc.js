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
            <dt><code>size                 none|small|medium|large</code></dt>
            <dd>Size of content within Stack. Defaults to <code>medium</code>.</dd>
            <dt><code>label                string</code></dt>
            <dd>Label content.</dd>
            <dt><code>headline             string</code></dt>
            <dd>Headline content.</dd>
            <dt><code>headlineStrong       string</code></dt>
            <dd>If the Headline should be bold. Defaults to <code>true</code>.</dd>
            <dt><code>paragraph            string</code></dt>
            <dd>Paragraph content.</dd>
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
              label="Label Light"
              headline="Headline Semibold, Light"
              paragraph="Consectetur sunt nemo numquam quos vero sed iste vitae quis."
              link="#"
              linkText="CTA Semibold"
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


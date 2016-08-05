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

        <p>A text stack component.</p>
        <pre><code className="html hljs xml">
          {`<Stack />`}
        </code></pre>

        <section>
          <h2>Stack Options</h2>
          <dl>
            <dt><code>size                 small|medium|large|xlarge</code></dt>
            <dd>Size of content within Stack. Defaults to <code>medium</code>.</dd>
            <dt><code>label                string</code></dt>
            <dd>Label content.</dd>
            <dt><code>headline             string</code></dt>
            <dd>Headline content.</dd>
            <dt><code>headlineStrong       true|false</code></dt>
            <dd>If the Headline should be bold. Defaults to <code>true</code>.</dd>
            <dt><code>paragraph            string|[string, ...]</code></dt>
            <dd>Paragraph content. Array of strings will render multiple
              paragraphs.</dd>
            <dt><code>print                string|[string, ...]</code></dt>
            <dd>Small print content. Array of strings will render multiple print
              paragraphs.</dd>
            <dt><code>link                 string</code></dt>
            <dd>Call to action hyperlink reference.</dd>
            <dt><code>linkText             string</code></dt>
            <dd>Call to action text.</dd>
            <dt><code>onClick              func</code></dt>
            <dd>Click handler for the "Learn More" link.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Example name="XLarge" code={
            <Stack
              size="xlarge"
              label="Label Light"
              headline="Headline Semibold, Light"
              paragraph="Consectetur sunt nemo numquam."
              print="Amet ipsa amet delectus culpa odit."
              link="#"
              linkText="CTA Semibold"
            />
          } />

          <Example name="Large" code={
            <Stack
              size="large"
              label="Label Light"
              headline="Headline Semibold, Light"
              paragraph="Consectetur sunt nemo numquam."
              print="Amet ipsa amet delectus culpa odit."
              link="#"
              linkText="CTA Semibold"
            />
          } />

          <Example name="Medium" code={
            <Stack
              label="Label Light"
              headline="Headline Semibold, Light"
              paragraph="Consectetur sunt nemo numquam."
              print="Amet ipsa amet delectus culpa odit."
              link="#"
              linkText="CTA Semibold"
            />
          } />

          <Example name="Small" code={
            <Stack
              size="small"
              label="Label Light"
              headline="Headline Semibold, Light"
              paragraph="Consectetur sunt nemo numquam."
              print="Amet ipsa amet delectus culpa odit."
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


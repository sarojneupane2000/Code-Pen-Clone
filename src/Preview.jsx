import React from 'react';
import styled from 'styled-components';

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const Preview = ({ html, css, js }) => {
  const srcDoc = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}</script>
      </body>
    </html>
  `;

  return <Iframe srcDoc={srcDoc} title="preview" sandbox="allow-scripts" />;
};

export default Preview;

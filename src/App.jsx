import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Editor from './Editor';
import Preview from './Preview';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const EditorContainer = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

const Split = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const [html, setHtml] = useState(localStorage.getItem('html') || '');
  const [css, setCss] = useState(localStorage.getItem('css') || '');
  const [js, setJs] = useState(localStorage.getItem('js') || '');

  useEffect(() => {
    localStorage.setItem('html', html);
  }, [html]);

  useEffect(() => {
    localStorage.setItem('css', css);
  }, [css]);

  useEffect(() => {
    localStorage.setItem('js', js);
  }, [js]);

  return (
    <Container>
      <EditorContainer>
        <Split>
          <h2>HTML</h2>
          <Editor language="xml" value={html} onChange={setHtml} />
        </Split>
        <Split>
          <h2>CSS</h2>
          <Editor language="css" value={css} onChange={setCss} />
        </Split>
        <Split>
          <h2>JS</h2>
          <Editor language="javascript" value={js} onChange={setJs} />
        </Split>
      </EditorContainer>
      <Preview html={html} css={css} js={js} />
    </Container>
  );
};

export default App;

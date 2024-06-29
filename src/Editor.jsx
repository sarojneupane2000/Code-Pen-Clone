import React, { useEffect, useRef } from 'react';
import { EditorView, basicSetup } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 100%;
`;

const Editor = ({ language, value, onChange }) => {
  const editorRef = useRef();

  useEffect(() => {
    if (editorRef.current) {
      const updateListener = EditorView.updateListener.of((v) => {
        if (v.docChanged) {
          const doc = v.state.doc;
          onChange(doc.toString());
        }
      });

      const state = EditorState.create({
        doc: value,
        extensions: [
          basicSetup,
          language === 'xml' ? html() : language === 'css' ? css() : javascript(),
          updateListener,
        ],
      });

      const view = new EditorView({
        state,
        parent: editorRef.current,
      });

      return () => {
        view.destroy();
      };
    }
  }, [editorRef, language, value, onChange]);

  return <Container ref={editorRef}></Container>;
};

export default Editor;

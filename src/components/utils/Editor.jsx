import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { createEditor, Transforms, Editor as SlateEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

const Editor = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ]);

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case 'code':
        return <code {...props} />;
      default:
        // return <DefaultElement {...props} />;
        return <p {...props} />;
    }
  }, []);

  return (
    <Slate editor={editor} value={value} onChange={(newValue) => setValue(newValue)}>
      <Editable
        renderElement={renderElement}
        onKeyDown={(e) => {
          if (!e.ctrlKey) return;

          switch (e.key) {
            case '`': {
              e.preventDefault();
              const [match] = SlateEditor.nodes(editor, {
                match: (n) => n.type === 'code',
              });
              break;
            }
            case 'b': {
              e.preventDefault();
              Transforms.setNodes(
                editor,
                { bold: true },
                { match: (n) => Text.isText(n), split: true },
              );
              break;
            }
            default: {
              break;
            }
          }

          if ((e.key === '`' && e.ctrlKey) || e.metaKey) {
            e.preventDefault();
            const { selection } = editor;
            const [match] = SlateEditor.nodes(editor, {
              match: (n) => n.type === 'code',
            });
            Transforms.setNodes(
              editor,
              { type: match ? 'paragraph' : 'code' },
              { match: (n) => SlateEditor.isBlock(editor, n) },
            );
          }
        }}
      />
    </Slate>
  );
};

export default Editor;

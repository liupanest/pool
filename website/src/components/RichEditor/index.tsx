import React, { useImperativeHandle } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const RichEditor = (props: any, ref: any) => {
  const { className } = props;
  let richEditor: ClassicEditor;

  useImperativeHandle(ref, () => ({
    getData: () => {
      return richEditor.getData();
    },
    getText: () => {
      const contentHtml =
        richEditor.ui.view.element?.getElementsByClassName(
          "ck-editor__main"
        )?.[0];
      if (contentHtml instanceof HTMLElement) {
        return contentHtml.innerText;
      }
      return "";
    },
  }));

  return (
    <div className={className}>
      <CKEditor
        editor={ClassicEditor}
        data=""
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
          richEditor = editor;
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    </div>
  );
};

export default React.forwardRef(RichEditor);

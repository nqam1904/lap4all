import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./textEditor.module.scss";

type TTextEditor = {
  onChange: (value: any) => void;
};

const TextEditor: React.FC<TTextEditor> = ({ onChange }) => {
  const [content, setContent] = useState("");

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const handleChange = (value: any) => {
    setContent(value);
    onChange?.(value);
  };

  return (
    <div className={styles.container}>
      <ReactQuill
        value={content}
        onChange={handleChange}
        modules={modules}
        style={{ height: "250px" }}
      />
    </div>
  );
};

export default TextEditor;

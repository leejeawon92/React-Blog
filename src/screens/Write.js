import styled from 'styled-components';
import Header from './Header';
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState } from 'react';
import draftjsToHtml from "draftjs-to-html";

const WriteForm = styled.div`
  width: 80%;
  margin: 100px;
  align-items: center;
  justify-content: center;

  input {
    margin-bottom: 10px;
    width: 500px;
    height: 40px;
  }
  textarea {
    width: 80%;
    min-height: 500px;
  }
`

const WriteBtn = styled.button`
  width: 200px;
  height: 50px;
  font-size: 20px;
  padding: 20px;
  border: none;
  border-radius: 5px;
  margin-top: 40px;
`

function Write() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [htmlString, setHtmlString] = useState("");

  const updateTextDescription = async (state) => {
    await setEditorState(state);
    const html = draftjsToHtml(convertToRaw(editorState.getCurrentContent()));
    setHtmlString(html);
  };
  const uploadCallback = () => {
    console.log("이미지 업로드");
  };


  return (
    <>
      <Header/>
      <WriteForm>
        <input type='text' placeholder='제목을 입력하세요'></input>
        {/* <textarea placeholder='내용을 입력하세요'></textarea> */}
        <Editor
          placeholder="게시글을 작성해주세요"
          editorState={editorState}
          onEditorStateChange={updateTextDescription}
          toolbar={{
            image: { uploadCallback: uploadCallback },
          }}
          localization={{ locale: "ko" }}
          editorStyle={{
            height: "400px",
            width: "100%",
            border: "3px solid lightgray",
            padding: "20px",
          }}
        />
        <WriteBtn>입력</WriteBtn>
      </WriteForm>
    </>
  );
}

export default Write;
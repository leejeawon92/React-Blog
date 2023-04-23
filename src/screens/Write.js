import styled from 'styled-components';
import Header from './Header';
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState } from 'react';
import draftToHtml from "draftjs-to-html";


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

const Viewer = styled.div`
`

function Write() {
  // const [editorState, setEditorState] = useState(EditorState.createEmpty());
  // const [htmlString, setHtmlString] = useState("");

  // const updateTextDescription = async (state) => {
  //   await setEditorState(state);
  //   const html = draftjsToHtml(convertToRaw(editorState.getCurrentContent()));
  //   setHtmlString(html);
  // };
  // const uploadCallback = () => {
  //   console.log("이미지 업로드");
  // };

  // useState로 상태관리하기 초기값은 EditorState.createEmpty()
  // EditorState의 비어있는 ContentState 기본 구성으로 새 개체를 반환 => 이렇게 안하면 상태 값을 나중에 변경할 수 없음.
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const editorToHtml = draftToHtml(convertToRaw(editorState.getCurrentContent()));

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);    // editorState에 값 설정
  };


  return (
    <>
      <Header/>
      <WriteForm>
        <input type='text' placeholder='제목을 입력하세요'></input>
        {/* <textarea placeholder='내용을 입력하세요'></textarea> */}
        {/* <Editor
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
        /> */}
        <Editor
          wrapperClassName="wrapper-class"  // 에디터와 툴바 모두에 적용되는 클래스
          editorClassName="editor"    // 에디터 주변에 적용된 클래스
          toolbarClassName="toolbar-class"  // 툴바 주위에 적용된 클래스
          toolbar={{  // 툴바 설정
            // list: { inDropdown: true },  // inDropdown: 해당 항목과 관련된 항목을 드롭다운으로 나타낼것인지
            // textAlign: { inDropdown: true },
            // link: { inDropdown: true },
            // history: { inDropdown: false },
            // icon: {}
            options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'image', 'remove', 'history'],
            inline: {
              inDropdown: false,
              className: undefined,
              component: undefined,
              dropdownClassName: undefined,
              options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace', 'superscript', 'subscript'],
              bold: { className: undefined },
              italic: { className: undefined },
              underline: { className: undefined },
              strikethrough: { className: undefined },
              monospace: {  className: undefined },
              superscript: { className: undefined },
              subscript: { className: undefined },
            },
            blockType: {
              inDropdown: true,
              options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote', 'Code'],
              className: undefined,
              component: undefined,
              dropdownClassName: undefined,
            },
            fontSize: {
              options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
              className: undefined,
              component: undefined,
              dropdownClassName: undefined,
            },
            fontFamily: {
              options: ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'],
              className: undefined,
              component: undefined,
              dropdownClassName: undefined,
            },
            list: {
              inDropdown: false,
              className: undefined,
              component: undefined,
              dropdownClassName: undefined,
              options: ['unordered', 'ordered', 'indent', 'outdent'],
              unordered: { className: undefined },
              ordered: { className: undefined },
              indent: { className: undefined },
              outdent: { className: undefined },
            },
            textAlign: {
              inDropdown: false,
              className: undefined,
              component: undefined,
              dropdownClassName: undefined,
              options: ['left', 'center', 'right', 'justify'],
              left: { className: undefined },
              center: { className: undefined },
              right: { className: undefined },
              justify: { className: undefined },
            },
            colorPicker: {
              className: undefined,
              component: undefined,
              popupClassName: undefined,
              colors: ['rgb(97,189,109)', 'rgb(26,188,156)', 'rgb(84,172,210)', 'rgb(44,130,201)',
                'rgb(147,101,184)', 'rgb(71,85,119)', 'rgb(204,204,204)', 'rgb(65,168,95)', 'rgb(0,168,133)',
                'rgb(61,142,185)', 'rgb(41,105,176)', 'rgb(85,57,130)', 'rgb(40,50,78)', 'rgb(0,0,0)',
                'rgb(247,218,100)', 'rgb(251,160,38)', 'rgb(235,107,86)', 'rgb(226,80,65)', 'rgb(163,143,132)',
                'rgb(239,239,239)', 'rgb(255,255,255)', 'rgb(250,197,28)', 'rgb(243,121,52)', 'rgb(209,72,65)',
                'rgb(184,49,47)', 'rgb(124,112,107)', 'rgb(209,213,216)'],
            },
            link: {
              inDropdown: false,
              className: undefined,
              component: undefined,
              popupClassName: undefined,
              dropdownClassName: undefined,
              showOpenOptionOnHover: true,
              defaultTargetOption: '_self',
              options: ['link', 'unlink'],
              link: { className: undefined },
              unlink: { className: undefined },
              linkCallback: undefined
            },
            emoji: {
              className: undefined,
              component: undefined,
              popupClassName: undefined,
              emojis: [
                '😀', '😁', '😂', '😃', '😉', '😋', '😎', '😍', '😗', '🤗', '🤔', '😣', '😫', '😴', '😌', '🤓',
                '😛', '😜', '😠', '😇', '😷', '😈', '👻', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '🙈',
                '🙉', '🙊', '👼', '👮', '🕵', '💂', '👳', '🎅', '👸', '👰', '👲', '🙍', '🙇', '🚶', '🏃', '💃',
                '⛷', '🏂', '🏌', '🏄', '🚣', '🏊', '⛹', '🏋', '🚴', '👫', '💪', '👈', '👉', '👉', '👆', '🖕',
                '👇', '🖖', '🤘', '🖐', '👌', '👍', '👎', '✊', '👊', '👏', '🙌', '🙏', '🐵', '🐶', '🐇', '🐥',
                '🐸', '🐌', '🐛', '🐜', '🐝', '🍉', '🍄', '🍔', '🍤', '🍨', '🍪', '🎂', '🍰', '🍾', '🍷', '🍸',
                '🍺', '🌍', '🚑', '⏰', '🌙', '🌝', '🌞', '⭐', '🌟', '🌠', '🌨', '🌩', '⛄', '🔥', '🎄', '🎈',
                '🎉', '🎊', '🎁', '🎗', '🏀', '🏈', '🎲', '🔇', '🔈', '📣', '🔔', '🎵', '🎷', '💰', '🖊', '📅',
                '✅', '❎', '💯',
              ],
            },
            embedded: {
              className: undefined,
              component: undefined,
              popupClassName: undefined,
              embedCallback: undefined,
              defaultSize: {
                height: 'auto',
                width: 'auto',
              },
            },
            image: {
              className: undefined,
              component: undefined,
              popupClassName: undefined,
              urlEnabled: true,
              uploadEnabled: true,
              alignmentEnabled: true,
              uploadCallback: undefined,
              previewImage: false,
              inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
              alt: { present: false, mandatory: false },
              defaultSize: {
                height: 'auto',
                width: 'auto',
              },
            },
            remove: { className: undefined, component: undefined },
            history: {
              inDropdown: false,
              className: undefined,
              component: undefined,
              dropdownClassName: undefined,
              options: ['undo', 'redo'],
              undo: {  className: undefined },
              redo: { className: undefined },
            },
          }} 
          placeholder="내용을 작성해주세요."
          localization={{
            locale: 'ko',  // 한국어 설정
          }}
          editorState={editorState}    // 초기값 설정
          onEditorStateChange={onEditorStateChange} // 에디터의 값이 변경될 때마다 onEditorStateChange 호출
          editorStyle={{
            height: "400px",
            width: "100%",
            border: "3px solid lightgray",
            padding: "20px",
          }}
        />
        <WriteBtn>입력</WriteBtn>
      </WriteForm>
      <Viewer dangerouslySetInnerHTML={{__html: editorToHtml}}></Viewer>
    </>
  );
}

export default Write;
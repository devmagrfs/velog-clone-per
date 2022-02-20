import React from 'react';
import Prism from 'prismjs';
import axios from 'axios';
// 여기 css를 수정해서 코드 하이라이팅 커스텀 가능
import 'prismjs/themes/prism.css';

import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

export default function PostAdd() {
    const editorRef = React.createRef();

    const [contents, setContents] = React.useState("");


    // React.useEffect(() => {
    //     if (editorRef.current) {
    //         // 기존에 Image 를 Import 하는 Hook 을 제거한다.
    //         editorRef.current.getInstance().removeHook("addImageBlobHook");

    //         // 새롭게 Image 를 Import 하는 Hook 을 생성한다.
    //         editorRef.current
    //             .getInstance()
    //             .addHook("addImageBlobHook", (blob, callback) => {
    //                 (async () => {
    //                     let formData = new FormData();
    //                     formData.append("file", blob);

    //                     console.log("이미지가 업로드 됐습니다.");

    //                     const { data: filename } = await axios.post(
    //                         "/file/upload",
    //                         formData,
    //                         {
    //                             header: { "content-type": "multipart/formdata" },
    //                         }
    //                     );

    //                     const imageUrl = "http://localhost:8080/file/upload/" + filename;

    //                     // Image 를 가져올 수 있는 URL 을 callback 메서드에 넣어주면 자동으로 이미지를 가져온다.
    //                     callback(imageUrl, "iamge");
    //                 })();

    //                 return false;
    //             });
    //     }

    //     return () => { };
    // }, [editorRef]);

    const onChangeIntroFunction = () => {
        console.log(editorRef.current.getInstance().getMarkdown());
    };

    const handleContent = (e) => {
        setContents(editorRef.current.getInstance().getMarkdown());
        console.log(contents);
    }

    return (
        <>
            <Editor
                height="80vh"
                previewStyle="vertical"
                initialEditType="markdown"
                plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
                onChange={handleContent}
                ref={editorRef}
            // onChange={handleContent}
            />
            <div className="save">
                Save
            </div>
        </>
    );
}
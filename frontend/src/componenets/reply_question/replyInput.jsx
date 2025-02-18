import styled from 'styled-components';
import { useState } from 'react';
import '../../assets/font.css';

import InputBox from "../../assets/reply/r_input.svg";

export default function Question({ initialText = "" }) {
    const [text, setText] = useState(initialText);

    const handleChange = (e) => {
        setText(e.target.value); // 사용자 입력값을 상태로 업데이트
    };

    return (
        <Wrapper>
            <textarea
                id="reply"
                name="reply"
                value={text} // 상태값을 value로 설정
                onChange={handleChange} // 변경 시 상태 업데이트
                placeholder="Answer to the question above..."
                required
            ></textarea>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    max-width: 1030px;
    height: auto;
    aspect-ratio: 1030 / 173;
    max-height: 173px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${InputBox});
    background-size: contain;
    background-repeat: no-repeat;

    textarea {
        width: 95%;
        height: 85%;
        box-sizing: border-box;
        border: none;
        font-family: 'ABeeZee';
        font-size: 18px;
        outline: none;
        resize: none;
        // border: 1px solid;
    }
`;

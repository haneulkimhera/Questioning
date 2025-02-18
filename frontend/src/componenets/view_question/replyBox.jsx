import styled from 'styled-components';
import '../../assets/font.css';

import RBox from "../../assets/view_question/reply_box.svg";

export default function ReplyBox({replyText}) {
    return (
        <Wrapper>
            <span>{replyText}</span>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    max-width: 1030px;
    height: auto;
    aspect-ratio: 1030 / 216;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${RBox});
    background-size: contain;
    background-repeat: no-repeat;

    // border: 1px solid;

    span {
        width: 95%;
        height: 80%;
        box-sizing: border-box;
        border: none;
        font-family: 'ABeeZee';
        font-size: 18px;
        outline: none;
        overflow: auto;
        white-space: pre-line;

        // border: 1px solid;
    }

`
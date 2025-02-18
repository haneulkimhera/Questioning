import styled from 'styled-components';
import '../../assets/font.css';

import QuestionBox from "../../assets/reply/question_recieved.svg";

export default function QuestionRecieved({questionText}) {
    return (
        <Wrapper>
            <span>{questionText}</span>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    max-width: 1030px;
    height: auto;
    aspect-ratio: 1030 / 105;
    max-height: 105px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${QuestionBox});
    background-size: contain;
    background-repeat: no-repeat;

    span {
        width: 95%;
        height: 90%;
        box-sizing: border-box;
        border: none;
        font-family: 'ABeeZee';
        font-size: 18px;
        outline: none;
        overflow: auto;
        /* border: 1px solid; */
    }

`
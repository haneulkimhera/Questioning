import styled from 'styled-components';

import InputBox from "../../assets/ask_question/q_input.svg";

export default function QuestionInput({ onChange }) {
    return (
        <Wrapper>
            <textarea
                type="text"
                id="question"
                name="quesiton"
                placeholder="What do you want to ask about?"
                required
                onChange={onChange}
            ></textarea>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    max-width: 1030px;
    height: auto;
    aspect-ratio: 1030 / 275;
    max-height: 275px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${InputBox});
    background-size: contain;
    background-repeat: no-repeat;

    textarea {
        width: 95%;
        height: 90%;
        box-sizing: border-box;
        border: none;
        font-family: 'ABeeZee';
        font-size: 18px;
        outline: none;
        /* border: 1px solid; */
    }

`
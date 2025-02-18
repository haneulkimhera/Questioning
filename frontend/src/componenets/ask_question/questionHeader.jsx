import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import '../../assets/font.css';

import Question from '../../assets/ask_question/question_header.svg';

export default function QuestionHeader(){
    return(
        <Wrapper>
            <Image src={Question} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 524px;
    height: 76px;
    box-sizing: border-box;
    user-select: none;
    pointer-events: none;
`

const Image = styled.img`
    width: 524px;
    height: 76px;
`
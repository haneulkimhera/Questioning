import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import '../../assets/font.css';

import Answer from '../../assets/reply/answer_header.svg';

export default function QuestionHeader(){
    return(
        <Wrapper>
            <Image src={Answer} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 512px;
    height: 76px;
    box-sizing: border-box;
    user-select: none;
    pointer-events: none;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    draggable: false;
`
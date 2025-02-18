import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import '../../assets/font.css';

export default function ViewHeader({to, from}){
    return(
        <Wrapper>
            <Title>to.&nbsp;{to}</Title>
            <Title>from.&nbsp;{from}</Title>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    height: 76px;
    box-sizing: border-box;
    user-select: none;
    pointer-events: none;
    display: flex;
    flex-direction: column;
    align-items: start;
    box-sizing: border-box;
    margin-left: 10px;
`
const Title = styled.div`
    font-size: 30px;
    font-family: 'Bevan', 'Noto Sans';
    weight: 700;
    line-height: 35px;
`

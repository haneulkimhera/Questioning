import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import '../../assets/font.css';

import Submit from '../../assets/global/submit.svg';

export default function SubmitBtn({ width, height, onClick }) {

    return (
        <Wrapper width={width} height={height} onClick={onClick}>
            <Image src={Submit} draggable="false" />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: ${({width}) => width};
    height: ${({height}) => height};
    box-sizing: border-box;
    user-select: none;

    &:hover {
        transform: scale(1.05);
    }

    // border: solid 1px;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`
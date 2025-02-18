import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import '../../assets/font.css';

import Me from '../../assets/global/me.svg';

export default function MeBtn() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/mypage'); 
    };

    return (
        <Wrapper onClick={handleClick}>
            <Image src={Me} draggable="false" />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 50px;
    height: 50px;
    box-sizing: border-box;
    user-select: none;

    &:hover {
        transform: scale(1.05);
    }

    // border: solid 1px;
`

const Image = styled.img`
    width: 50px;
    height: 50px; 
`

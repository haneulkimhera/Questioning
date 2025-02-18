import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import '../../assets/font.css';

import Me from '../../assets/global/me.svg'
import LogoutBtn from "../global/logoutBtn";

export default function MypageHeader(){
    return(
        <Wrapper>
            <CenterButtonWrapper>
                <Image src={Me} />
            </CenterButtonWrapper>
            <LogoutBtn/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    height: 76px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    
    // border: 1px solid;
`

const CenterButtonWrapper = styled.div`
    width: 76px;
    height: 76px;
    display: flex;
    justify-content: center;
    flex-grow: 1;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    draggable: false;
`
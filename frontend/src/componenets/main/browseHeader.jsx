import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import '../../assets/font.css';

import Browse from '../../assets/main/browse_header.svg';

export default function BrowseHeader(){
    return(
        <Wrapper>
            <Image src={Browse} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 295px;
    height: 76px;
    box-sizing: border-box;
    user-select: none;
    pointer-events: none;
    
    // border: 1px solid;
`

const Image = styled.img`
    width: 295px;
    height: 76px;
`
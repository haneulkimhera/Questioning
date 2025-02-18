import styled from 'styled-components';

import Board from '../../assets/board/board_header.svg'

export default function BoardHeader({name}){
    return(
        <Wrapper>
            <Name>{name}</Name>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 244px;
    height: 65px;
    background-image: url(${Board});
    // display: flex;
    // display: column;
    // align-items: center;
    position: relative;
`

const Name = styled.div`
    width: 40px;
    height: 40px;
    line-height: 40px;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Bevan';
    font-size: 40px;
    color: #ffffff;
    user-select: none;
    position: absolute;
    inset: 12px 0 0 12px;

    // border: 1px solid blue;
`
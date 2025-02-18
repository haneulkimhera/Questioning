import styled from "styled-components";

export default function Header({ justifyContent, alignItems, children }){
    return (
        <Wrapper justifyContent={justifyContent} alignItems={alignItems}>
            {children}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 76px;
    max-width: 1040px;
    box-sizing: border-box;
    padding: 0 5px 0 5px;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: ${({ justifyContent }) => justifyContent || 'center'};
    align-items: ${({ alignItems }) => alignItems || 'center'};

    // border: 1px solid;
`
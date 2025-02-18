import styled from "styled-components";

export default function Body({ padding, justifyContent, alignItems, children }) {
    return (
        <Wrapper padding={padding} justifyContent={justifyContent} alignItems={alignItems}>
            {children}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin-top: 34px;
    width: 100%;
    aspect-ratio: 1040 / 390;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: ${({ justifyContent }) => justifyContent || 'start'};
    align-items: ${({ alignItems }) => alignItems || 'center'};
    padding: ${({ padding }) => padding || '0'};

    // border: 1px solid;
`
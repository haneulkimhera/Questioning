import styled from "styled-components";

export default function Container({ children }) {
    return (
        <WrapperParent>
            <Wrapper>
                {children}
            </Wrapper>
        </WrapperParent>
    );
}

const WrapperParent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`

const Wrapper = styled.div`
    width: 100%;
    max-width: 1040px;
    aspect-ratio: 1040 / 500;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    // border: 1px solid;
`
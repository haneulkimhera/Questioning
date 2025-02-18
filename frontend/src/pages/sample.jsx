import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'


import SignIn from '../componenets/login/signIn'
import Logo from '../assets/global/Logo.svg';


export default function Sample(){
    return (
        <WrapperParent>
            <Wrapper>
                <img src={Logo}/>
            </Wrapper>
        </WrapperParent>
    );
}

const WrapperParent = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

const Wrapper = styled.div`
    height: 484px;
    width: 100%;
    max-width: 1030px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #e5e5e5;
`

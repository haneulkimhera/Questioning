import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import Logo from '../assets/global/Logo.svg';
import SignUp from '../componenets/create_account/signUp';

export default function CreateAccount(){
    return (
        <WrapperParent>
            <Wrapper>
                <LogoStyle src={Logo} alt="Logo" />
                <SignUp/>
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

const Wrapper = styled.form`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const LogoStyle = styled.img`
    width: 280px;
    height: 245px;
    user-select: none;
    pointer-events: none;
`

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import '../../assets/font.css'

export default function SignUp() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/create_account');
    };

    return (
        <Wrapper>
            <p>-or-</p>
            <button type="button" onClick={handleClick}>Create Account</button>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        font-family: 'ADLaM Display';
        font-size: 15px;
        color: #808080;
    }

    button {
        background-color: transparent;
        font-family: 'ADLaM Display';
        font-size: 20px;
        border: 0;
        text-decoration: underline;

        &: hover {
            transform: scale(1.05);
        }   
    }
`;


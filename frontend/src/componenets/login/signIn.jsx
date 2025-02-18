import styled from "styled-components";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import '../../assets/font.css';

import { login } from "../../apis/user";

export default function SignIn() {
    const navigate = useNavigate();
    const {setLogin, isLoggedIn } = useAuth();
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [responseMessage, setResponseMessage] = useState(""); 

    const isLoggedInLocal = localStorage.getItem("isLoggedIn");
    // console.log("IsLoggedInLocal : ",isLoggedInLocal);

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/main");
        }
    }, [isLoggedIn, navigate]);

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            await login(email, password).then((data) => {
                // console.log(data);
                setLogin();
            })
            alert("로그인 성공");
        } catch (error) {
            alert("로그인 실패");
        }
    };

    return (
        <Wrapper>
            <p>Sign in</p>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // email 상태 업데이트
                required
            />
            <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // password 상태 업데이트
                required
            />
            <button onClick={(e) => handleSignIn(e)}>Sign in</button>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin-top: 35px;
    width: 387px;
    height: 195px;
    box-sizing: border-box;
    border: 1px solid #e5e5e5;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    p {
        font-family: 'ADLaM Display';
        font-size: 20px;
        color: #000000;
        margin: 0px;
    }

    input {
        height: 40px;
        width: 337px;
        box-sizing: border-box;
        border: 1px solid #e5e5e5;
        border-radius: 10px;
        padding-left: 21px;
        font-family: 'ABeeZee';
        font-size: 18px;
        outline: none;
    }

    input::placeholder {
        color: #808080;
        font-family: 'ABeeZee';
        font-size: 18px;
    }

    input:focus {
        border-color: #000000;
    }

    button {
        width: 71px;
        height: 25px;
        line-height: 20px;
        border-radius: 10px;
        background-color: #000000;
        color: #ffffff;
        border: 0;
        font-family: 'ADLaM Display';
        font-size: 15px;
        display: flex;
        flex-direction: column;
        justify content: center;
        align-items: center;

        &: hover {
            transform: scale(1.05);
        }
    }
`;

const Form = styled.div`

`
import styled from "styled-components";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import '../../assets/font.css';

import { signup } from "../../apis/user";

export default function SignUp() {
    const navigate = useNavigate();
    const { isLoggedIn } = useAuth();
    const [username, setUsername] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/main");
        }
    }, [isLoggedIn, navigate]);

    const handleSignup = async (e) => {
        e.preventDefault();
        if (!username || !email || !password1 || !password2) {
            alert("모든 필드를 입력해야 합니다.");
            return;
        }
        if (username.length < 3 || username.length > 25) {
            alert("사용자 이름은 3자 이상, 25자 이하로 입력해야 합니다.");
            return;
        }
        if (password1 !== password2) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }
        if (password1.length < 3 || password1.length > 25) {
            alert("비밀번호는 3자 이상, 25자 이하로 입력해야 합니다.");
            return;
        }
    
        try {
            await signup(username, password1, password2, email);
            alert("회원가입 성공");
            navigate("/login");
        } catch (error) {
            if (error.response) {
                alert(`회원가입 실패: ${error.response.data?.message || "요청이 잘못되었습니다."}`);
                console.error("서버 응답 데이터:", error.response.data);
            } else {
                alert("알 수 없는 오류가 발생했습니다.");
                console.error("회원가입 오류:", error);
            }
        }
    };

    return (
        <Wrapper>
            <p>Create New Account</p>
            <input
                type="test"
                id="username"
                name="username"
                placeholder="name"
                onChange={(e) => setUsername(e.target.value)} 
                required
            />
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
                id="password1"
                name="password1"
                placeholder="password1"
                onChange={(e) => setPassword1(e.target.value)} // password 상태 업데이트
                required
            />
            <input
                type="password"
                id="password2"
                name="password2"
                placeholder="password2"
                onChange={(e) => setPassword2(e.target.value)} // password 상태 업데이트
                required
            />
            <button type="button" onClick={(e) => handleSignup(e)}>Sign up</button>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin-top: 15px;
    width: 387px;
    height: 300px;
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
        margin: 0 0 10px 0;
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
        margin-top: 10px;
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
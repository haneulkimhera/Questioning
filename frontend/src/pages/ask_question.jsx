import styled from 'styled-components';
import { useAuth } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { createQuestion } from "../apis/qna";

import Container from '../componenets/global/container';
import Header from '../componenets/global/header';
import Body from '../componenets/global/body';

import QuestionHeader from '../componenets/ask_question/questionHeader';
import QuestionInput from '../componenets/ask_question/questionInput';
import SubmitBtn from '../componenets/global/submitBtn';
import BackBtn from '../componenets/global/backBtn';

export default function AskQuestion() {

    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = location.state || {};

    const [content, setContent] = useState("");

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login");
        }
    }, [isLoggedIn, navigate]);

    if (!user) {
        // console.log("ask question : User state is null or undefined.");
        return <p>사용자 정보가 없습니다.</p>;
    }
    else{
        // console.log("ask question : ",location.state)
    }

    const handleSubmit = async () => {
        try {
            // console.log("content : ",content)
            await createQuestion({ targetId: user.id, content });
            alert("질문을 성공적으로 작성했습니다.");
            navigate(-1);
        } catch {
            alert("질문을 작성하는 데 실패했습니다.");
        }
    };

    return (
        <Container>
            <Header justifyContent="start" alignItems="center">
                <QuestionHeader/>
                <Name>{user.name}</Name>
            </Header>
            <Body padding='0px 5px' justifyContent="space-between">
                <QuestionInput onChange={(e) => setContent(e.target.value)}/>
                <Buttons>
                    <CenterButtonWrapper>
                        <SubmitBtn width="72px" height="72px"
                            onClick={() => {
                                handleSubmit();
                            }}
                        />
                    </CenterButtonWrapper>
                    <BackBtn url="/board"/>
                </Buttons>
            </Body>
        </Container>
    );
}

const Name = styled.div`
    width: 111px;
    margin-left: 15px;
    margin-top: 10px;
    font-family: 'Noto Sans';
    font-size: 40px;
    font-weight: 700;
    user-select: none;
    white-space: nowrap;
`

const Buttons = styled.div`
    width: 100%;
    height: 72px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;

    // border: 1px solid;
`

const CenterButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-grow: 1;
`
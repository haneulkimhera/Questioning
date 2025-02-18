import styled from 'styled-components';
import { useAuth } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { createAnswer } from "../apis/qna";

import Container from '../componenets/global/container';
import Header from '../componenets/global/header';
import Body from '../componenets/global/body';

import ReplyHeader from '../componenets/reply_question/replyHeader';
import QuestionRecieved from '../componenets/reply_question/questionRecieved';
import ReplyInput from '../componenets/reply_question/replyInput';
import SubmitBtn from '../componenets/global/submitBtn';
import BackBtn from '../componenets/global/backBtn';

export default function Question() {
    const location = useLocation();
    const { question } = location.state || {};
    const navigate = useNavigate();

    // console.log("Reply Question : ",question);

    const [content, setContent] = useState("");
    const questionId = question.questionId;

    const handleSubmit = async () => {
        try {
            // console.log(question.questionId, question.content);

            await createAnswer({ questionId, content });
            alert("답변을 성공적으로 작성했습니다.");
            navigate(-1);
        } catch {
            alert("답변을 작성하는 데 실패했습니다.");
        }
    };

    return (
        <Container>
            <Header justifyContent="start" alignItems="center">
                <ReplyHeader/>
            </Header>
            <Body padding='0px 5px' justifyContent="space-between">
                <Contents>
                    <QuestionRecieved questionText={question.content}/>
                    <ReplyInput initialText={question.answer ? question.answer.content : ""} onChange={(e) => setContent(e.target.value)}/>
                </Contents>

                <Buttons>
                    <CenterButtonWrapper>
                        <SubmitBtn width="72px" height="72px"
                            onClick={() => {
                                handleSubmit();
                            }}
                        />
                    </CenterButtonWrapper>
                    <BackBtn/>
                </Buttons>
            </Body>
        </Container>
    );
}

const Contents = styled.div`
    width: 100%;
    max-width: 1030px;
    height: auto;
    aspect-ratio: 1030 / 288;
    
    // border: 1px solid;
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
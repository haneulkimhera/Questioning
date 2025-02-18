import styled from 'styled-components';
import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Container from '../componenets/global/container';
// import Header from '../componenets/global/header';
// import Body from '../componenets/global/body';

import ViewHeader from '../componenets/view_question/viewHeader';
import QuestionBox from '../componenets/view_question/questionBox';
import ReplyBox from '../componenets/view_question/replyBox';
import BackBtn from '../componenets/global/backBtn';

export default function ViewQuestion() {
    const location = useLocation();
    const { question } = location.state || {};

    // console.log("View Question : ",question);

    return (
        <Container>
            <Header justifyContent="start" alignItems="center">
                <ViewHeader to={question.target} from={question.author}/>
            </Header>
            <Body>
                <Contents>
                    <QuestionBox questionText={question.content}/>
                    <ReplyBox replyText={question.answer ? question.answer.content : "not replied yet"}/>
                </Contents>

                <Buttons>
                    <BackBtn url="/board"/>
                </Buttons>
            </Body>
        </Container>
    );
}

const Header = styled.div`
    width: 100%;
    height: 70px;
    // border: 1px solid;
`

const Body = styled.div`
    width: 100%;
    height: auto;
    aspect-ratio: 1040 / 420;
    margin-top: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0px 5px;

    // border: 1px solid;
`

const Contents = styled.div`
    width: 100%;
    max-width: 1030px;
    height: auto;
    aspect-ratio: 1030 / 390;
    
    // border: 1px solid;
`


const Buttons = styled.div`
    width: 100%;
    height: 22px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: end;
    position: relative;

    // border: 1px solid;
`

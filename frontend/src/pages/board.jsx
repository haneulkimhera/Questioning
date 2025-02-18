import styled from 'styled-components';
import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { getReceivedQuestions, getSentQuestions } from "../apis/qna";

import Container from '../componenets/global/container';
import Header from '../componenets/global/header';
import Body from '../componenets/global/body';

import BoardHeader from '../componenets/board/boardHeader';
import QuestionCard from '../componenets/board/boardCard';
import AskBtn from '../componenets/board/askBtn';
import BackBtn from '../componenets/global/backBtn';

export default function Board() {
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = location.state || {};

    const [sentQuestions, setSentQuestions] = useState([]);
    const [receivedQuestions, setReceivedQuestions] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const sentQuestions = await getSentQuestions();
                const receivedQuestions = await getReceivedQuestions();
                setSentQuestions(sentQuestions);
                setReceivedQuestions(receivedQuestions);
                console.log("board.jsx>receivedQuestions:",receivedQuestions);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    // if (!user) {
    //     console.log("board : User state is null or undefined.");
    //     return;
    // }else{
    //     console.log("board : ",user)
    // }

    // if (!receivedQuestions){
    //     console.log("board: receivedQUestions is undefined");
    //     return;
    // }else{
    //     console.log("board: ",receivedQuestions)
    // }

    const handleAskBtn = () => {
        // console.log("Navigating to ask_question with state:", { user });
        navigate("/ask_question", { state: { user: user } });
    };

    return (
        <Container>
            <Header justifyContent="center" alignContent="center">
                <BoardHeader name={user.id}/>
            </Header>
            <Body padding='0px 5px' justifyContent="space-between">
                <CardContainer>
                    {receivedQuestions.map((question) => (
                        <QuestionCard question={question}/>
                    ))}
                </CardContainer>

                <Buttons>
                    <CenterButtonWrapper>
                    <AskBtn onClick={handleAskBtn}/>
                    </CenterButtonWrapper>
                    <BackBtn url="/main"/>
                </Buttons>
            </Body>
        </Container>
    );
}

const CardContainer = styled.div`
    width: 100%;
    height: auto;
    aspect-ratio: 1030 / 310;
    overflow: auto;

    // border: 1px solid;
`

const Buttons = styled.div`
    width: 100%;
    height: auto;
    aspect-ratio: 1030 / 60;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;
    // margin-top: 20px;
    padding: 5px 0px;

    // border: 1px solid;
`

const CenterButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`
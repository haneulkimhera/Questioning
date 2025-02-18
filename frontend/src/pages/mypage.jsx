import styled from 'styled-components';
import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getReceivedQuestions, getSentQuestions } from "../apis/qna";

import Container from '../componenets/global/container';
import Header from '../componenets/global/header';
import Body from '../componenets/global/body';

import MypageHeader from '../componenets/mypage/mypageHeader';
import QuestionCard from '../componenets/mypage/mypageCard';
import BackBtn from '../componenets/global/backBtn';

export default function Mypage() {
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
                // console.log(sentQuestions, receivedQuestions);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    return (
        <Container>
            <Header justifyContent="center" alignContent="center">
                <MypageHeader/>
            </Header>
            <Body padding='0px 5px' justifyContent="space-between">
                <CardContainer>
                    {receivedQuestions.map((question) => (
                        <QuestionCard question={question}/>
                    ))}
                </CardContainer>

                <Buttons>
                    <BackBtn/>
                </Buttons>
            </Body>
        </Container>
    );
}

const CardContainer = styled.div`
    width: 100%;
    height: auto;
    aspect-ratio: 1030 / 368;
    overflow: auto;

    // border: 1px solid;
`

const Buttons = styled.div`
    width: 100%;
    height: auto;
    aspect-ratio: 1030 / 22;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: end;
    position: relative;

    // border: 1px solid;
`

const CenterButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`
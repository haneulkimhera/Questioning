import styled from 'styled-components';
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../assets/font.css';

import CardImg from '../../assets/board/question_card.svg'
import Button from './mypageBtn'

export default function MypageCard({question}){
    const navigate = useNavigate();

    const [status, setStatus] = useState([]);
    useEffect(() => {
        if (question.answer.content==="") {
            setStatus("pending");
        } else {
            setStatus("replied");
        }
    }, [question.answer]);

    const handleBtn = () => {
        // console.log("mypage card: ",question)
        navigate("/reply_question", { state: { question: question } });
    };

    return(
        <Wrapper>
            <QuestionWrapper>
                <Writer>{question.author}</Writer>
                <Title>{question.content.slice(0, 10)}</Title>
                <Content>{question.content}</Content>
            </QuestionWrapper>
            <ButtonWrapper>
                {status === 'replied' ? (
                    <Button defaultText="edit" hoverText="go edit" onClick={handleBtn}/>
                ) : (
                    <Button defaultText="reply" hoverText="go reply" onClick={handleBtn}/>
                )}
            </ButtonWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    max-width: 1030px;
    height: auto;
    aspect-ratio: 1030 / 145;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-image: url(${CardImg});
    background-size: contain;
    background-repeat: no-repeat;
    margin-bottom: 15px;
    box-sizing: border-box;

    // border: 1px solid;
`

const QuestionWrapper = styled.div`
    width: 50%;
    height: auto;
    aspect-ratio: 500/90;
    overflow: hidden;
    margin: 0;

    // border: 1px solid;
`

const ButtonWrapper = styled.div`
    width: 40%;
    height: auto;
    aspect-ratio: calc(500 * (40 / 50)) / 90;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: end;
    margin: 0;

    // border: 1px solid;
`

const Writer = styled.div`
    line-height: 27px;
    width: 100%;
    color: #808080;
    font-size: 20px;
    font-family: 'Noto Sans';
    font-weight: 700;
`

const Title = styled.div`
    line-height: 34px;
    width: 100%;
    color: black;
    font-size: 25px;
    font-family: 'Noto Sans';
    font-weight: 700;
    letter-spacing: 0.8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

const Content = styled.div`
    line-height: 27px;
    width: 100%;
    color: #808080;
    font-size: 20px;
    font-family: 'Noto Sans';
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

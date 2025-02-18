import styled from 'styled-components';
import '../../assets/font.css';

import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import CardImg from '../../assets/board/question_card.svg'
import Button from './boardBtn'

export default function BoardCard({question}){
    const navigate = useNavigate();

    const [status, setStatus] = useState([]);
    useEffect(() => {
        if (question.answer.content==="") {
            // console.log("questionId:",question.questionId, ", content:",question.answer.content);
            setStatus("pending");
            // console.log("questionId:",question.questionId, ", status:",status);
        } else {
            // console.log("questionId:",question.questionId, ", content:",question.answer.content);
            setStatus("replied");
            // console.log("questionId:",question.questionId, ", status:",status);
        }
    }, [question.answer]);

    const handleBtn = () => {
        // console.log("board card: ",question)
        navigate("/view_question", { state: { question: question } });
    };

    return(
        <Wrapper writer={question.author} title={question.content.slice(0, 10)} content={question.content} status={status}>
            <QuestionWrapper>
                <Writer>{question.author}</Writer>
                <Title>{question.content.slice(0, 10)}</Title>
                <Content>{question.content}</Content>
            </QuestionWrapper>
            <ButtonWrapper>
                {status === 'replied' ? (
                    <Button defaultText="replied !" hoverText="see more" onClick={handleBtn}/>
                ) : (
                    <Button defaultText="pending..." hoverText="see more" theme="#b2b2b2" onClick={handleBtn}/>
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

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "../../assets/font.css"

import cardImage from "../../assets/main/user_card.svg";
import questionsReplied from '../../assets/main/questionsReplied.svg';

export default function UserCard({ profile }) {
    const navigate = useNavigate();

    const handleUserCard = () => {
        // console.log("board- card profile:",profile);
        navigate("/board", { state: { user: profile } });
    };

    return (
        <Wrapper onClick={handleUserCard}>
            <Icon>{profile.id}</Icon>
            <Name>{profile.name}</Name>
            <Bio>{profile.bio}</Bio>
            <ReplyCount>
                <img src={questionsReplied}/>
                <p>{profile.questionCount}</p>
            </ReplyCount>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 325px;
    height: 179px;
    background-image: url(${cardImage});
    background-size: cover;
    position: relative;

    &:hover {
        transform: scale(1.02);
    }

    // border: 1px solid;
`;

const Icon = styled.div`
    width: 75px;
    height: 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    font-family: 'Bevan';
    font-size: 40px;
    color: #ffffff;
    inset: 26px 0 0 30px;
    margin: 0;
    user-select: none;

    // border: 1px solid black;
`;

const Name = styled.h1`
    position: absolute;
    font-family: 'Noto Sans';
    font-size: 25px;
    inset: 32px 0 0 137px;
    color: #000000;
    margin: 0;
    user-select: none;
    font-weight: 700;
`;

const Bio = styled.span`
    position: absolute;
    font-family: 'Noto Sans';
    font-size: 13px;
    font-weight: 700;
    inset: 73px 0 0 137px;
    margin: 0;
    color: #808080;
    user-select: none;
`;

const ReplyCount = styled.div`
    width: 260px;
    height: 19px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    inset: 130px 0 26px 30px;
    user-select: none;

    // border: 1px solid;

    img {
        width: 232px;
        height: 19px;
        draggable: false;
    }

    p {
        color: #808080;
        font-family: 'Noto Sans';
        font-weight: 700;
        font-size: 13px;
    }
`

import styled from 'styled-components';
import { useEffect } from 'react'
import { useState } from 'react'

import Container from '../componenets/global/container';
import Header from '../componenets/global/header';
import Body from '../componenets/global/body';
import BrowseHeader from '../componenets/main/browseHeader';
import MeBtn from '../componenets/main/meBtn';
import UserCard from '../componenets/main/userCard';
import { getAllUsers } from "../apis/user";

export default function Main() {

    const [profiles, setProfiles] = useState([])

    useEffect(() => {
      const fetchProfiles = async () => {
          try {
              const data = await getAllUsers();
              setProfiles(data);
          } catch (error) {
              console.error("❌ 사용자 목록을 불러오는 데 실패했습니다.", error);
          }
      };

      fetchProfiles();
  }, []);

    return (
        <Container>
            <Header justifyContent="space-between" alignContent="center">
                <BrowseHeader />
                <MeBtn />
            </Header>
            <Body>
                <UserContainer>
                    {profiles.map((profile) => (
                        <UserCard
                        profile={profile}
                        />
                    ))}
                </UserContainer>
            </Body>
        </Container>
    );
}

const UserContainer = styled.div`
    width: 100%;
    aspect-ratio: 1040 / 390;
    padding: 2px 0px;
    display: grid;
    box-sizing: border-box;
    grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
    place-items: center;
    justify-content: center;
    align-items: center;
    column-gap: 1rem;
    row-gap: 22px;
    overflow-y: auto;

    // border: 1px solid;
`;

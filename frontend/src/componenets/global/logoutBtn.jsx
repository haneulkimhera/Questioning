import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import '../../assets/font.css';
import { logout } from "../../apis/user";
import { useAuth } from "../../context/AuthContext";

export default function LogoutBtn(){

    const navigate = useNavigate();
    const { setLogout } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
            setLogout();
            navigate("/login");
            alert("로그아웃 성공");
        } catch (error) {
            alert("로그아웃 실패");
        }
    };

    return (
        <Logout onClick={handleLogout}>logout</Logout>
    );

}

const Logout = styled.div`
    font-family: 'ABeeZee';
    font-size: 22px;
    height: 22px;
    text-decoration: underline;
    color: #808080;
    background-color: transparent;
    border: none;
    user-select: none;

    &:hover {
        color: black;
    }
`

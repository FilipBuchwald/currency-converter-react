import { DateTime } from "../Date";
import styled from "styled-components";

const StyledHeader = styled.header`
    text-align: center;
    padding: 10px;
    margin: 20px auto;
    border: 1px solid black;
    background-color: #ddd;
    padding: 10px;
    border-radius: 20px;
`;

const Header = ({title}) => (
    <StyledHeader className="header">
        <DateTime/>
        <h1>{title}</h1>
    </StyledHeader>
);

export default Header
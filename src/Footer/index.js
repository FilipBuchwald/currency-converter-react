import styled from "styled-components";

const StyledFooter = styled.footer`
    text-align: center;
    border: 1px solid black;
    margin: 10px;
    background-color: #ddd;
    padding: 10px;
    border-radius: 20px;
`; 

const Footer = ({ title }) => (
    <StyledFooter>
        <p>{title}</p>
    </StyledFooter>
);

export default Footer
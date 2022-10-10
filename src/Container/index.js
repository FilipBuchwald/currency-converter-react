import styled from "styled-components";

const Main = styled.main`
    max-width: 600px;
    margin: auto;
    padding: 10px;
`;

const Container = (props) => (
    <Main className="container">
        {props.children}
    </Main>
);

export default Container
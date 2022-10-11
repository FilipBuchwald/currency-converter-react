import { Main } from "./styled";

const Container = (props) => (
    <Main className="container">
        {props.children}
    </Main>
);

export default Container
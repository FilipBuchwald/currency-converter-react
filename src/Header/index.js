import { DateTime } from "../Date";
import { StyledHeader } from "./styled";

const Header = ({title}) => (
    <StyledHeader className="header">
        <DateTime/>
        <h1>{title}</h1>
    </StyledHeader>
);

export default Header
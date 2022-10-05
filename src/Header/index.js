import { DateTime } from "../Date";
import "./style.css"

const Header = ({title}) => (
    <header className="header">
        <DateTime/>
        <h1>{title}</h1>
    </header>
);

export default Header
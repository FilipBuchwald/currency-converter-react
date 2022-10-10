import styled from "styled-components";

export const StyledForm = styled.form`
    max-width: 500px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr;
`;

export const Fieldset = styled.fieldset`
    background-color: #ddd;
    border: 2px solid black;
    border-radius: 20px;
    box-shadow: rgb(145, 145, 145) 2px 2px 8px;
    padding: 30px;
    margin: 20px auto;
`;

export const Legend = styled.legend`
    background-color: hsl(0, 0%, 67%);
    padding: 5px;
    border: 2px solid black;
    border-radius: 10px;
`;

export const Input = styled.input`
    border: 1px solid black;
    border-radius: 5px;
    margin: 5px;
`;

export const Select = styled.select`
    border: 1px solid black;
    border-radius: 5px;
    margin: 10px 5px;
`;

export const Button = styled.button`
    border: 2px solid black;
    border-radius: 5px;
    background-color: hsl(0, 0%, 67%);
    width: 100%;
    margin: 10px 0px;

    &hover{
    background-color: hsl(0, 0%, 75%);
    }

    &:active {
    background-color: hsl(0, 0%, 80%);
    }
`;
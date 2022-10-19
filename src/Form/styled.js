import styled from "styled-components";

export const StyledForm = styled.form`
    /* max-width: 800px; */
    margin: auto;
    display: grid;
    grid-template-columns: 1fr;
   
`;

export const Fieldset = styled.fieldset`
    width: 600px;
    background-color: white;
    border: none;
    border-radius: 20px;
    box-shadow:  2px 2px 8px;
    margin: 20px auto;
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
    width: 200px;
`;

export const Button = styled.button`
    display: flex;
    border: none;
    box-shadow:  2px 2px 4px;
    border-radius: 5px;
    background-color: #CCCCCC;
    width: 80%;
    justify-content: center;
    margin: 10px auto;
    padding: 5px;

    &:hover{
    filter: brightness(105%);
    }

    &:active {
    filter: brightness(110%);
    }
`;

export const Error = styled.p`
    color: crimson;
    text-align: center;
`;

export const Loading = styled.p`
    color: black;
    text-align: center;
`;

export const Info = styled.p`
    color: black;
    font-size: 12px;
    display: flex;
    justify-content: center;
`;

export const StyledHeader = styled.h1`
    text-align: center;
    font-size: 2em;
   
`;

export const Wrapper = styled.label`
    display: flex;
    justify-content: space-between;
    margin: auto 20px ;
`;

export const Text = styled.p`
    margin: 10px;
`;
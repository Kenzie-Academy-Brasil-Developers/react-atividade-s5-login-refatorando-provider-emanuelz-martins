import styled from 'styled-components';

export const LoginScreen = styled.div`
    min-height: 70vh;
    background-color: #bbf0f3;
    background-image: linear-gradient(315deg, #bbf0f3 0%, #f6d285 74%);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    align-items: flex-end;
    justify-content: center;

    @media (min-width: 768px) {
        min-height: 100%;
    }

    @media (min-width: 900px) {
        min-height: 100vh;
        align-items: center;
    }

    @media (min-width: 1024px) {
        background-size: 100%;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    height: 20rem;
    width: 16rem;
    padding: 10px 10px 10px 5px;

    background: white;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    @media (min-width: 900px) {
        width: 20rem;
    }
`;

export const Title = styled.h2`
    text-align: center;
    margin: 1.5em 0;
`;

export const InputField = styled.input`
    border: none;
    border-bottom: 1px solid lightgray;

    color: lightgray;
    width: 100%;
    margin: 1em 0;

    :hover {
        color: gray;
        border-bottom: 1px solid gray;
    }

    :focus {
        color: green;
        border-bottom: 1px solid green;
    }
`;

export const Button = styled.button`
    padding: 0.5em;
    margin: 1em;

    letter-spacing: 2px;
    font-size: 12px;
    color: grey;

    border: 1px solid grey;
    border-radius: 5px;
    background-color: transparent;

    :hover {
        cursor: pointer;
        color: black;
        border: 1px solid black;
    }
`;

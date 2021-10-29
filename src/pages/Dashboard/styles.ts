import styled from 'styled-components';

export const DashboardContainer = styled.main`
    height: 100vh;
    background-image: linear-gradient(315deg, #bbf0f3 0%, #f6d285 74%);
`;

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 50vh;
`;

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
`;

export const Logout = styled.button`
    padding: 0.5em auto;
    margin: 1em;
    width: 7rem;

    letter-spacing: 2px;
    font-size: 12px;
    color: grey;

    border: 1px solid grey;
    border-radius: 5px;
    background-color: aliceblue;

    :hover {
        cursor: pointer;
        color: firebrick;
        border: 1px solid firebrick;

        padding: 5px;

        transition: all 0.4s;
    }
`;

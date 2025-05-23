import styled from "styled-components";

const StyledContainer = styled.div`
display: flex;
flex-direction: column;
    width: 100vw;

    @media screen and (min-width: 1400px) {
        flex-direction: row;
    }
`

export {StyledContainer}
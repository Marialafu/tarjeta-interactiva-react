import styled from "styled-components";
import { ROOTS } from "../../styles/roots";

const StyledContainer = styled.div`
    height: 15rem;
    position: relative;
    padding: 2rem 1rem 0 1rem;
    background-image: url(/assets/images/bg-main-mobile.png);
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 5.6875rem;

    @media screen and (min-width: 1400px) {
        background-image: url(/assets/images/bg-main-desktop.png);
        width: 30.1875rem;
        height: 100vh;
        margin-bottom: 0;
    }
`

const StyledCardContainer = styled.div`
    width: 17.8125rem;
    height: 9.75rem;
    border-radius: ${ROOTS.borderRadius};
    background-image: url(/assets/images/bg-card-back.png);
    background-repeat: no-repeat;
    background-size: cover;
    padding: 1.1875rem;

    @media screen and (min-width: 1400px) {
        width: 27.9375rem;
        height: 15.3125rem;
        box-shadow: 0 39px 60px 0 rgba(0 0 0 / 0.14);
    }
    
`

const StyledFrontCard = styled(StyledCardContainer)`
    position: absolute;
    top: 7.875rem;
    left: 1rem;
    z-index: 1;
    background-image: url(/assets/images/bg-card-front.png);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    translate: -50%;
    left: 45%;

    @media screen and (min-width: 1400px) {
        top: 10%;
        left: 164px;
        left: 80%;
    }
    
`

const StyledBackCard = styled(StyledCardContainer)`
    position: absolute;
    top: 2rem;
    left: 4.5625rem;
    translate: -50%;
    left: 55%;

    @media screen and (min-width: 1400px) {
        top: 50%;
        left: 100%;
    }
`

export {StyledContainer, StyledFrontCard ,StyledBackCard }
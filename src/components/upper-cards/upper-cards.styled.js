import styled from "styled-components";
import { ROOTS } from "../../styles/roots";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    padding: 2rem 1rem 0 1rem;
    background-image: url(/assets/images/bg-main-mobile.png);
    background-repeat: no-repeat;
    background-size: cover;
`

const StyledCardContainer = styled.div`
    width: 17.8125rem;
    height: 9.75rem;
    border-radius: ${ROOTS.borderRadius};
    background-image: url(/assets/images/bg-card-back.png);
    background-repeat: no-repeat;
    background-size: cover;
    padding: 1.1875rem;
`

const StyledFrontCard = styled(StyledCardContainer)`
    position: relative;
    top: -3.125rem;
    background-image: url(/assets/images/bg-card-front.png);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const StyledBackCard = styled(StyledCardContainer)`
    align-self: flex-end;
`

export {StyledContainer, StyledFrontCard ,StyledBackCard }
import styled from "styled-components";
import { ROOTS } from "../../styles/roots";

const StyledIcon = styled.div`
    width: 1.875rem;
    height: 1.875rem;
    border-radius: 50%;
    background-color: ${ROOTS.white};
    position: relative;
    display: flex;
    align-items: center;

    &::after{
        content: '';
        position: absolute;
        left: 2.5rem;
        border: 0.0625rem solid ${ROOTS.white};
        width: 0.8438rem;
        height: 0.8438rem;
        border-radius: 50%;
    }
`
const StyledTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.0625rem;
`

const StyledCardNumber = styled.span`
    font-size: ${ROOTS.textL};
    color: ${ROOTS.white};
    letter-spacing: 2.2px;
    margin: 0;

    @media screen and (min-width: 1400px) {
        font-size:  ${ROOTS.textDesktopL};
    }
`

const StyledSubtitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1.0625rem;

`

const StyledSubtitle = styled.span`
    font-size: ${ROOTS.textS};
    color: ${ROOTS.white};
    text-transform: uppercase;
    
    @media screen and (min-width: 1400px) {
        font-size:  ${ROOTS.textDesktopM};
    }
`

export {StyledIcon, StyledTextContainer, StyledCardNumber, StyledSubtitleContainer, StyledSubtitle}
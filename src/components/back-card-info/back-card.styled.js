import styled from "styled-components";
import { ROOTS } from "../../styles/roots";

const StyledSpan = styled.span`
    position: relative;
    color: ${ROOTS.white};
    font-size: ${ROOTS.textS};
    top: 2.8125rem;
    left: 13.125rem;

    @media screen and (min-width: 1400px) {
        font-size:  ${ROOTS.textDesktopM};
        top: 5.625rem;
        left: 21.25rem;
    }
`

export {StyledSpan}
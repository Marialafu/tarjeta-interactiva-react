import styled from "styled-components";
import { ROOTS } from "../../styles/roots";

const StyledFormContainer = styled.form`
    margin-inline: auto;
    padding: 0 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin-bottom: 1.25rem;
    max-width: 23.4375rem;

     @media screen and (min-width: 1400px) {
        margin-inline-end: 14.1875rem;
        margin-block: auto;
    }
`
const StyledInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5625rem;
`

const StyledInputTitle = styled.label`
    font-size: ${ROOTS.textM};
    letter-spacing: 0.125rem;
    color: ${ROOTS.primaryColor};
`

const StyledInput = styled.input`
    border-radius: ${ROOTS.borderRadius};
    border: 0.0625rem solid ${ROOTS.secondaryColor};
    padding: 0.6875rem 1rem;
    font-size: ${ROOTS.textL};
    color: ${ROOTS.primaryColor};
`

const StyledLargeInput = styled(StyledInput)`
    width: 10.25rem;
`
const StyledShortInputs = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    width: 9.5rem;
`
const StyledShortGroupInputs = styled.div`
    display: flex;
    gap: 0.6875rem;
`
const StyledShortInput = styled(StyledInput)`
    width: 4.5rem;
`

const StyledButton = styled.input`
    width: 20.4375rem;
    background-color: ${ROOTS.primaryColor};
    border: none;
    padding: 0.9375rem 0;
    border-radius: ${ROOTS.borderRadius};
    color: ${ROOTS.white};
    font-family: inherit;
`

const StyledErrorMessage = styled.span`
    color: ${ROOTS.errorColor};
    font-size: ${ROOTS.textS};
`

export {StyledFormContainer, StyledInputTitle, StyledLargeInput, StyledButton, StyledInputContainer, StyledErrorMessage, StyledShortInputs, StyledShortGroupInputs, StyledShortInput, StyledInput}
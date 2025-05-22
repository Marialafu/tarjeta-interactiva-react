import { useForm, useWatch } from "react-hook-form"
import { StyledButton, StyledErrorMessage, StyledFormContainer, StyledInput, StyledInputContainer, StyledInputTitle, StyledLargeInput, StyledShortGroupInputs, StyledShortInput, StyledShortInputs } from "./form.styled"
import { VALIDATION_VALUES } from "../../constants/validations"

const Form = ({setInfo}) => {

    const {
        handleSubmit,
        register,
        formState: {errors},
        watch,

    } = useForm()

    return (
        <StyledFormContainer 
        onSubmit={handleSubmit()}
        onChange={() => setInfo(watch)}>
            <StyledInputContainer>
            <StyledInputTitle>CARDHOLDER NAME</StyledInputTitle>
            <StyledInput
            placeholder="e.g. Jane Appleseed"
            {...register('name', VALIDATION_VALUES.NAME)}
            />
            <StyledErrorMessage>{errors?.name?.message}</StyledErrorMessage>
            </StyledInputContainer>

            <StyledInputContainer>
            <StyledInputTitle>CARD NUMBER</StyledInputTitle>
            <StyledInput
            placeholder="e.g. 1234 5678 9123 0000"
            {...register('number', VALIDATION_VALUES.CARD_NUMBER)}
            maxLength={16}
            />
            <StyledErrorMessage>{errors?.number?.message}</StyledErrorMessage>
            </StyledInputContainer>

            <StyledShortGroupInputs>
                <StyledShortGroupInputs>

                <StyledInputContainer>
                    <StyledInputTitle>EXP.DATE [MM/YY]</StyledInputTitle>

                    <StyledShortInputs>
                        <StyledShortInput  
                        placeholder="MM"
                        {...register('month', VALIDATION_VALUES.MONTH)}
                        maxLength={2}/>
                        <StyledShortInput 
                        placeholder="YY"
                        {...register('year', VALIDATION_VALUES.YEAR)}
                        maxLength={2} />
                    </StyledShortInputs>
                    <StyledErrorMessage>{errors?.month?.message || errors?.year?.message}</StyledErrorMessage>
                </StyledInputContainer>
                <StyledInputContainer>
                    <StyledInputTitle>CVC</StyledInputTitle>
                    <StyledLargeInput 
                    placeholder="e.g. 123"
                    {...register('cvc', VALIDATION_VALUES.CVC)}
                        maxLength={3}/>
                    <StyledErrorMessage>{errors?.cvc?.message}</StyledErrorMessage>
                </StyledInputContainer>

                </StyledShortGroupInputs>
                
            </StyledShortGroupInputs>

            <StyledButton type='submit'/>
        </StyledFormContainer>
    )
}

export default Form
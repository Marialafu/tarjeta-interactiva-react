import { StyledCardNumber, StyledIcon, StyledSubtitle, StyledSubtitleContainer, StyledTextContainer } from "./front-card.styled"

const FrontCardInfo = ({info}) => {
    return(
        <>
            <StyledIcon />
            <StyledTextContainer>

            <StyledCardNumber>
                {info.number ? info.number : '0000 0000 0000 0000'}
            </StyledCardNumber>
            <StyledSubtitleContainer>
                <StyledSubtitle>{info.name ? info.name : 'Jane applessed'}</StyledSubtitle>
                <StyledSubtitle>{info.month ? info.month : '00'}/{info.year ? info.year : '00'}</StyledSubtitle>
            </StyledSubtitleContainer>
            
            </StyledTextContainer>

        </>
    )
}

export default FrontCardInfo
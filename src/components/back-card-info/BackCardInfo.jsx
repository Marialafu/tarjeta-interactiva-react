import { StyledSpan } from "./back-card.styled"

const BackCardInfo = ({info}) => {
    return (
        <StyledSpan>{info.cvc ? info.cvc : '000'}</StyledSpan>
    )
}

export default BackCardInfo
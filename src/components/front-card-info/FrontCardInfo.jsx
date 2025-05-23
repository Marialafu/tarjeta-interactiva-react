import {
  StyledCardNumber,
  StyledIcon,
  StyledSubtitle,
  StyledSubtitleContainer,
  StyledTextContainer
} from './front-card.styled';

const FrontCardInfo = ({ info }) => {
  const formattedCardNumber = formatCardNumber(info.number);

  return (
    <>
      <StyledIcon />
      <StyledTextContainer>
        <StyledCardNumber>
          {formattedCardNumber || '0000 0000 0000 0000'}
        </StyledCardNumber>
        <StyledSubtitleContainer>
          <StyledSubtitle>{info.name || 'Jane applessed'}</StyledSubtitle>
          <StyledSubtitle>
            {info.month || '00'}/{info.year || '00'}
          </StyledSubtitle>
        </StyledSubtitleContainer>
      </StyledTextContainer>
    </>
  );
};

const formatCardNumber = number => {
  if (!number) return;
  return number.match(/.{1,4}/g).join(' ');
};

export default FrontCardInfo;

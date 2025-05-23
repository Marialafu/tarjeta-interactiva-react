import BackCardInfo from '../back-card-info/BackCardInfo';
import FrontCardInfo from '../front-card-info/FrontCardInfo';
import {
  StyledContainer,
  StyledBackCard,
  StyledFrontCard
} from './upper-cards.styled';

const UpperCards = ({ info }) => {
  console.log(info);

  return (
    <StyledContainer>
      <StyledFrontCard>
        <FrontCardInfo info={info} />
      </StyledFrontCard>
      <StyledBackCard>
        <BackCardInfo info={info} />
      </StyledBackCard>
    </StyledContainer>
  );
};

export default UpperCards;

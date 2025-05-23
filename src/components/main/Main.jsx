import { useForm } from 'react-hook-form';
import Form from '../form/Form';
import UpperCards from '../upper-cards/UpperCards';
import { StyledContainer } from './main.styled';

const Main = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch
  } = useForm({ mode: 'onChange' });

  return (
    <StyledContainer>
      <UpperCards info={watch()} />
      <Form
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
      />
    </StyledContainer>
  );
};

export default Main;

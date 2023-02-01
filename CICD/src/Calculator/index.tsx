import React from 'react';
import * as S from './styles';

export default () => {
  const [number, setNumber] = React.useState(0);

  const increaseNumber = () => {
    setNumber(number + 2);
  };

  const decreaseNumber = () => {
    setNumber(number - 1);
  };

  return (
    <S.Container>
      <S.NumberText>{number}</S.NumberText>
      <S.ButtonsContainer>
        <S.Button onPress={increaseNumber}>
          <S.ButtonText>+</S.ButtonText>
        </S.Button>
        <S.Button onPress={decreaseNumber}>
          <S.ButtonText>-</S.ButtonText>
        </S.Button>
      </S.ButtonsContainer>
    </S.Container>
  );
};

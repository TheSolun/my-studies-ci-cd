import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const NumberText = styled.Text`
  color: blue;
  font-size: 75px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 116px;
`;

export const Button = styled.TouchableOpacity`
  border-radius: 100px;
  height: 50px;
  width: 50px;
  background-color: grey;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 40px;
  line-height: 50px;
`;

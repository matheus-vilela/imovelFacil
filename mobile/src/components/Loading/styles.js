import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.Modal.attrs({
  contentContainerStyle: {
    backgroundColor: theme.colors.black,
  },
})`
  background-color: ${theme.colors.black};
  align-items: center;
  justify-content: center;
`;

export const Background = styled.View`
  flex: 1;
  background-color: ${theme.colors.black};
  align-items: center;
  justify-content: center;
`;
export const Indicator = styled.ActivityIndicator.attrs({
  color: theme.colors.primary,
  size: 'large',
})``;

export const Title = styled.Text`
  font-family: ${theme.font.semiBold};
  font-size: 20px;
  color: ${theme.colors.primary};
  height: 200px;
`;

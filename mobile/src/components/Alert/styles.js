import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.Modal.attrs({
})`
  background-color: ${theme.colors.black}70;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.View`
  flex: 1;
  background-color: ${theme.colors.black}70;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.View`
  width: 300px;
  background-color: ${theme.colors.background};
  border-radius: 17px;
  align-items: center;
  overflow: hidden;
  padding-bottom: 3px;
`;

export const DescriptionContainer = styled.View`
  min-height: 100px;

  align-items: center;
  justify-content: center;
  padding: 20px 10px;
`;
export const Title = styled.Text`
  font-family: ${theme.font.semiBold};
  font-size: 18px;
  color: ${theme.colors.black};
  margin-bottom: 5px;
`;
export const Description = styled.Text`
  font-family: ${theme.font.semiBold};
  font-size: 15px;
  color: ${theme.colors.gray};
  text-align: center;
  margin-top: 5px;
`;
export const Detail = styled.Text`
  font-family: ${theme.font.semiBold};
  font-size: 15px;
  color: ${theme.colors.title};
  text-align: center;
  margin-top: 5px;
`;

export const TouchContainer = styled.View`
  flex-direction: row;
  height: 50px;
  width: 100%;
  background-color: ${theme.colors.border};
  padding-top: 0.5px;
`;

export const Touch = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.background};
`;

export const TextTouch = styled.Text`
  font-family: ${theme.font.semiBold};
  font-size: 15px;
  color: ${(props) => (props.title === 'Sim' ? theme.colors.blue : theme.colors.blue)};
`;

export const Diviser = styled.View`
  border-left-width: 0.5px;
  border-left-color: ${theme.colors.border};
`;

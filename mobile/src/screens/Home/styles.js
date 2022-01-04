import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.View`
  flex:1;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.background};
`;
export const RowInfo = styled.View`
  flex-direction: row;
  width: ${Dimensions.get('window').width}px;
  justify-content: space-between;
  padding: 0 10px;
  background-color: ${theme.colors.background};

`;
export const View = styled.View`
  flex-direction: row;
`;
export const ButtonIcon = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;
export const Text = styled.Text`
  color: ${(props) => props.theme.colors.title};
  font-size: ${(props) => props.size || 14}px;
  font-family: ${(props) => props.theme.font.regular};
`;
export const Info = styled.Text`
  color: ${(props) => props.theme.colors.title};
  font-size: ${(props) => props.size || 14}px;
  font-family: ${(props) => props.theme.font.semiBold};
  text-align: left;
  margin-top: 10px;
  margin-left:20px;
  width: ${Dimensions.get('window').width}px;

`;
export const Diviser = styled.View`
  width: ${Dimensions.get('window').width - 20}px;
  border-bottom-width: 2px;
  border-bottom-color: ${(props) => props.theme.colors.border};
  padding: 5px 0;
`;

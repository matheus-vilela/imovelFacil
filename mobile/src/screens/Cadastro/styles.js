import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import theme from '../../theme';

export const Container = styled.View`
  align-items: center;
  flex:1;
  background-color: ${theme.colors.background};
`;
export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingVertical: 20,
  },
})`
`;
export const Button = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  border-radius: 6px;
  border-width: 2px;
  border-color: ${theme.colors.black};
  align-items: center;
  justify-content: center;
`;
export const ButtonIcon = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;
export const Row = styled.View`
  flex-direction: row;
  width: ${Dimensions.get('window').width - 40}px;
  justify-content: space-between;
  padding: 10px 0;
`;
export const RowInfo = styled.View`
  flex-direction: row;
  width: ${Dimensions.get('window').width - 40}px;
  justify-content: space-evenly;
  padding: 10px 0;
`;
export const View = styled.View`
  flex-direction: row;
`;
export const Diviser = styled.View`
  width: ${Dimensions.get('window').width - 40}px;
  border-bottom-width: 2px;
  border-bottom-color: ${(props) => props.theme.colors.border};
`;
export const Info = styled.Text`
  color: ${(props) => props.theme.colors.title};
  font-size: ${(props) => props.size || 14}px;
  font-family: ${(props) => props.theme.font.semiBold};
  text-align: center;
  margin-top: 10px;
  margin-bottom: 5px;
`;
export const Text = styled.Text`
  color: ${(props) => props.theme.colors.title};
  font-size: ${(props) => props.size || 14}px;
  font-family: ${(props) => props.theme.font.regular};
`;
export const Input = styled.TextInput`
  color: ${(props) => props.theme.colors.title};
  font-size: ${(props) => props.size || 14}px;
  font-family: ${(props) => props.theme.font.semiBold};
  background-color: ${(props) => props.theme.colors.foreground};
  width: ${Dimensions.get('window').width - 40}px;
  padding: 5px 10px;
  margin-bottom: 5px;
`;

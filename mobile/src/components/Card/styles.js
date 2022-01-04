import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  background-color: white;
  border-radius: 6px;
  elevation: 5;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  margin: 10px 10px;
  overflow: hidden;
  width: ${Dimensions.get('window').width - 20}px;
`;

export const CoverImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: ${Dimensions.get('window').width - 20}px;
  height: 170px;
`;
export const Info = styled.Text`
  color: ${(props) => props.theme.colors.title};
  font-size: ${(props) => props.size || 12}px;
  font-family: ${(props) => props.theme.font.semiBold};
`;
export const Descricao = styled.Text.attrs({
  numberOfLines: 3,
})`
  color: ${(props) => props.theme.colors.title};
  font-size: ${(props) => props.size || 12}px;
  font-family: ${(props) => props.theme.font.semiBold};
`;
export const Text = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.size || 12}px;
  font-family: ${(props) => props.theme.font.regular};
`;

export const Row = styled.View`
  flex-direction: row;
  width: ${Dimensions.get('window').width - 40}px;
  justify-content: space-between;
`;

export const ButtonIcon = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 10; 
  top: 0;
  right: 0;
  padding: 5px;
  background-color: white;

`;

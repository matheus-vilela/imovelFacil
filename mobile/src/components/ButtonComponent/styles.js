import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import theme from '../../theme';

export const ButtonShadow = styled.View`
  width: 100%;
  box-shadow: 0px 1px 2px #54545450;
  elevation: 3;
`;

export const Touchable = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: ${(props) => props.color};
  font-family: ${theme.font.bold};
`;

export const Container = styled(LinearGradient).attrs({
  start: { x: 0.0, y: 0.0 },
  end: { x: 1.0, y: 0.0 },
  colors: theme.colors.gradient.primary,
})`
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
  elevation: 3;
`;

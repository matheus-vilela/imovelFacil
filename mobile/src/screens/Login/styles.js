import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled(LinearGradient).attrs({
  start: { x: 0.0, y: 0.0 },
  end: { x: 1.0, y: 0.0 },
  colors: theme.colors.gradient.background,
})`
  flex:1;
  align-items: center;
  justify-content: center;
  padding: 20px
`;

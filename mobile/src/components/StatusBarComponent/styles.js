import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import Constants from 'expo-constants';

import theme from '../../theme';

export const StatusBar = styled(LinearGradient).attrs({
  start: { x: 0.0, y: 0.0 },
  end: { x: 1.0, y: 0.0 },
  colors: theme.colors.gradient.primary,
})`
  width: 100%;
  height: ${Constants.statusBarHeight}px;
`;

import React from 'react';
import { Platform } from 'react-native';
import { PacmanIndicator } from 'react-native-indicators';
import { useAppSelector } from '../../hooks/redux';
import theme from '../../theme';
import StatusBarComponent from '../StatusBarComponent';

import { Container, Title, Background } from './styles';

function Loading() {
  const load = useAppSelector((state) => state.load.status);
  return (
    <Container visible={load} animationType="fade" transparent>
      {Platform.OS === 'ios' && <StatusBarComponent />}
      <Background>
        <PacmanIndicator color={theme.colors.primary} size={48} />
        <Title>Loading...</Title>
      </Background>
    </Container>
  );
}

export default Loading;

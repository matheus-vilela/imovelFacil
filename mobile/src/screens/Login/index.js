import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import ButtonComponent from '../../components/ButtonComponent';

import { Container } from './styles';

function Login() {
  const navigation = useNavigation();
  return (
    <Container>
      <ButtonComponent title="Logar" action={() => navigation.navigate('Home')} />
    </Container>
  );
}

export default Login;

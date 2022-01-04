import React from 'react';

import {
  Container, Touchable, Text, ButtonShadow,
} from './styles';
import theme from '../../theme';

function ButtonComponent({ title, action, color = 'default' }) {
  const colorTheme = {
    background:
      color === 'default'
        ? theme.colors.gradient.primary
        : [theme.colors.foreground, theme.colors.foreground],
    title:
      color === 'default' ? theme.colors.secundary : theme.colors.secundary,
  };

  return (
    <ButtonShadow>
      <Container color={colorTheme.background}>
        <Touchable onPress={action}>
          <Text color={colorTheme.title}>{title}</Text>
        </Touchable>
      </Container>
    </ButtonShadow>
  );
}

export default ButtonComponent;

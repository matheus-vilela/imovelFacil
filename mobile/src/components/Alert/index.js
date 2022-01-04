import React from 'react';
import { useAppSelector } from '../../hooks/redux';

import {
  Container,
  Card,
  DescriptionContainer,
  Title,
  Description,
  TouchContainer,
  Touch,
  TextTouch,
  Background,
  Diviser,
  Detail,
} from './styles';

function Alert() {
  const alert = useAppSelector((state) => state.alert);
  return (
    <Container visible={alert.status} animationType="fade" transparent>
      <Background>
        <Card>
          <DescriptionContainer>
            <Title>{alert?.title}</Title>
            <Description>{alert?.description}</Description>
            {alert?.detail && <Detail>{alert?.detail}</Detail>}
            {alert?.footer && <Description>{alert?.footer}</Description>}
          </DescriptionContainer>
          {alert.options.map((item, index) => (
            <TouchContainer key={String(index)}>
              <Touch onPress={() => item.action()} activeOpacity={0.8}>
                <TextTouch>{item.title}</TextTouch>
              </Touch>
              {item.title2 && (
              <>
                <Diviser />
                <Touch
                  onPress={() => (item.action2 ? item.action2() : {})}
                  activeOpacity={0.8}
                >
                  <TextTouch title={item.title2}>{item.title2}</TextTouch>
                </Touch>
              </>
              )}
            </TouchContainer>
          ))}
        </Card>
      </Background>
    </Container>
  );
}

export default Alert;

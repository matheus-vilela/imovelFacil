import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import { formatCurrency } from '../../utils';

import {
  Text, Container, CoverImage, Info, Row, Descricao, ButtonIcon,
} from './styles';
import theme from '../../theme';
import { deleteIMovel } from '../../services';

function Card({ item, deleteCard }) {
  return (
    <Container>
      <ButtonIcon onPress={() => deleteCard(item.id_imovel)}>
        <Feather name="trash-2" color={theme.colors.black} size={20} />
      </ButtonIcon>
      <CoverImage source={{ uri: item.listImages.length > 0 ? item.listImages[0].url : '' }} />
      <Row>
        <Info>
          Tipo:
          {' '}
          <Text>{item.tipo.toUpperCase()}</Text>
        </Info>
        <Info>
          Objetivo:
          {' '}
          <Text>{item.objetivo[0].toUpperCase() + item.objetivo.substr(1)}</Text>
        </Info>
      </Row>
      <Row>
        <Info>
          Área:
          {' '}
          <Text>
            {item.area.toFixed(2)}
            {' '}
            m2
          </Text>
        </Info>
        <Info>
          Valor:
          <Text>{formatCurrency(item.valor)}</Text>
        </Info>
      </Row>
      <Row>
        <Info>
          Endereço:
          {' '}
          <Text>
            {item.endereco.rua[0].toUpperCase() + item.endereco.rua.substr(1)}
            ,
            {' '}
            {item.endereco.numero}
            ,
            {' '}
            {item.endereco.bairro}
            {' '}
            -
            {' '}
            {item.endereco.cidade}
            /
            {item.endereco.estado}
          </Text>
        </Info>
      </Row>
      <Row>
        <Info>
          Vagas de garagem:
          {' '}
          <Text>{item.garagem}</Text>
        </Info>
      </Row>
      {(item.tipo === 'casa' || item.tipo === 'apartamento') && (
        <>
          <Row>
            <Info>
              Quantidade de banheiros:
              {' '}
              <Text>{item.banheiro}</Text>
            </Info>
            <Info>
              Quantidade de quartos:
              {' '}
              <Text>{item.quartos}</Text>
            </Info>
          </Row>
          <Row>
            <Info>
              Quantidade de suites:
              {' '}
              <Text>{item.suite}</Text>
            </Info>
            <Info>
              Piscina:
              <Text>{item.piscina === false ? 'Não' : 'Sim'}</Text>
            </Info>
          </Row>
          {item.tipo === 'apartamento' && (
          <Row>
            <Info>
              Valor condomínio:
              <Text>{formatCurrency(item.condominio)}</Text>
            </Info>
            <Info>
              Portaria:
              <Text>{item.portaria === 'false' ? 'Não' : 'Sim'}</Text>
            </Info>
          </Row>
          )}
        </>
      )}
      <Row>
        <Descricao>
          Descrição:
          <Text>{item.descricao[0].toUpperCase() + item.descricao.substr(1)}</Text>
        </Descricao>
      </Row>
    </Container>
  );
}

export default Card;

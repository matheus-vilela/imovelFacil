import React, { useEffect, useState } from 'react';
import { FlatList, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather, AntDesign } from '@expo/vector-icons';
import Card from '../../components/Card';
import { deleteIMovel, getListImoveis } from '../../services';
import { loadImoveis } from '../../actions/load';

import {
  Container, RowInfo, View, ButtonIcon, Text, Info, Diviser,
} from './styles';
import theme from '../../theme';

function Home() {
  const navigation = useNavigation();
  const [imoveis, setImoveis] = useState([]);
  const [tipo, setTipo] = useState('all');

  async function loadData() {
    const list = await loadImoveis();
    setImoveis(list);
  }

  useEffect(() => {
    const refreshFeed = navigation.addListener('focus', () => {
      loadData();
    });
    return refreshFeed;
  }, []);

  async function deleteCard(id) {
    await deleteIMovel(id);
    loadData();
  }
  return (
    <Container>
      <Info>Filtros: </Info>
      <RowInfo>
        <View>
          <ButtonIcon onPress={() => setTipo('all')}>
            <Feather name={tipo === 'all' ? 'check-square' : 'square'} color={theme.colors.border} size={20} />
          </ButtonIcon>
          <Text> todos</Text>
        </View>
        <View>
          <ButtonIcon onPress={() => setTipo('apartamento')}>
            <Feather name={tipo === 'apartamento' ? 'check-square' : 'square'} color={theme.colors.border} size={20} />
          </ButtonIcon>
          <Text> apartamento</Text>
        </View>
        <View>
          <ButtonIcon onPress={() => setTipo('casa')}>
            <Feather name={tipo === 'casa' ? 'check-square' : 'square'} color={theme.colors.border} size={20} />
          </ButtonIcon>
          <Text> casa</Text>
        </View>
        <View>
          <ButtonIcon onPress={() => setTipo('quitinete')}>
            <Feather name={tipo === 'quitinete' ? 'check-square' : 'square'} color={theme.colors.border} size={20} />
          </ButtonIcon>
          <Text> quitinete</Text>
        </View>
      </RowInfo>
      <Diviser />
      <FlatList
        data={tipo === 'all' ? imoveis : imoveis.filter((imovel) => imovel.tipo === tipo)}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => <Card item={item} deleteCard={deleteCard} />}
        ListEmptyComponent={({ item, index }) => (
          <>
            {tipo !== 'all' ? (
              <Text>
                Não hà
                {' '}
                {tipo}
                {' '}
                disponível no momento
              </Text>
            ) : (
              <Text>
                Não hà imoveis cadastrados
              </Text>
            )}
          </>
        )}
      />
    </Container>
  );
}

export default Home;

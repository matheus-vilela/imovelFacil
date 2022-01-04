import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';

import {
  Button, ButtonIcon, Container, Diviser, Info, Input, Row, RowInfo, Text, View, Scroll,
} from './styles';
import theme from '../../theme';
import ButtonComponent from '../../components/ButtonComponent';
import { postCliente, postFiador, postImovel } from '../../services';
import { useAppDispatch } from '../../hooks/redux';
import { setShowLoader } from '../../reducers/load';
import { setShowAlert } from '../../actions/alert';

function Cadastro() {
  const [show, setShow] = useState('');
  const [tipo, setTipo] = useState('apartamento');
  const [objetivo, setObjetivo] = useState('venda');
  const [valor, setvalor] = useState('');
  const [area, setarea] = useState('');
  const [rua, setrua] = useState('');
  const [numero, setnumero] = useState('');
  const [bairro, setbairro] = useState('');
  const [complemento, setcomplemento] = useState('');
  const [cidade, setcidade] = useState('');
  const [estado, setestado] = useState('');
  const [cep, setcep] = useState('');
  const [descricao, setdescricao] = useState('');
  const [quartos, setquartos] = useState('');
  const [banheiro, setbanheiro] = useState('');
  const [garagem, setgaragem] = useState('');
  const [suite, setsuite] = useState('');
  const [piscina, setpiscina] = useState(false);
  const [condominio, setcondominio] = useState('');
  const [portaria, setportaria] = useState(false);
  const [image, setimage] = useState('');
  const [nome, setnome] = useState('');
  const [telefone, settelefone] = useState('');
  const [email, setemail] = useState('');
  const [salario, setsalario] = useState('');
  const dispatch = useAppDispatch();

  function clearInputs() {
    setvalor('');
    setarea('');
    setrua('');
    setnumero('');
    setbairro('');
    setcomplemento('');
    setcidade('');
    setestado('');
    setcep('');
    setdescricao('');
    setquartos('');
    setbanheiro('');
    setgaragem('');
    setsuite('');
    setpiscina(false);
    setcondominio('');
    setportaria(false);
    setimage('');
    setnome('');
    settelefone('');
    setemail('');
    setsalario('');
  }

  async function cadastrarImovel() {
    if (valor && area && rua && numero && image) {
      if (tipo === 'quitinete') {
        dispatch(setShowLoader({ status: true }));
        const body = {
          tipo,
          objetivo,
          area,
          descricao,
          endereco: {
            rua, numero, bairro, complemento, cidade, estado, cep,
          },
          valor,
          garagem,
          image,
        };
        await postImovel(body);
        dispatch(setShowLoader({ status: false }));
        clearInputs();
        dispatch(setShowAlert({ title: 'Sucesso', description: 'Quitinete cadastrada' }));
      } else if (tipo === 'casa') {
        dispatch(setShowLoader({ status: true }));
        const body = {
          tipo,
          objetivo,
          area,
          descricao,
          endereco: {
            rua, numero, bairro, complemento, cidade, estado, cep,
          },
          valor,
          garagem,
          image,
          quartos,
          suite,
          piscina,
          banheiro,
        };
        await postImovel(body);
        dispatch(setShowLoader({ status: false }));
        clearInputs();
        dispatch(setShowAlert({ title: 'Sucesso', description: 'Casa cadastrada' }));
      } else if (tipo === 'apartamento') {
        dispatch(setShowLoader({ status: true }));
        const body = {
          tipo,
          objetivo,
          area,
          descricao,
          endereco: {
            rua, numero, bairro, complemento, cidade, estado, cep,
          },
          valor,
          garagem,
          image,
          quartos,
          suite,
          piscina,
          banheiro,
          condominio,
          portaria,
        };
        await postImovel(body);
        dispatch(setShowLoader({ status: false }));
        clearInputs();
        dispatch(setShowAlert({ title: 'Sucesso', description: 'Apartamento cadastrado' }));
      }
    } else {
      dispatch(setShowAlert({ title: 'Ops!', description: 'Preencha todos os campos' }));
    }
  }

  async function cadastrar() {
    if (nome && telefone && email && rua && estado) {
      if (show === 'cliente') {
        dispatch(setShowLoader({ status: true }));
        const body = {
          nome,
          telefone,
          email,
          endereco: {
            rua, numero, bairro, complemento, cidade, estado, cep,
          },
        };
        const response = await postCliente(body);
        dispatch(setShowLoader({ status: false }));
        if (response.status === 200) {
          clearInputs();
          dispatch(setShowAlert({ title: 'Concluido', description: 'Cliente cadastrado com sucesso' }));
        }
      } else {
        dispatch(setShowLoader({ status: true }));
        const body = {
          nome,
          telefone,
          email,
          endereco: {
            rua, numero, bairro, complemento, cidade, estado, cep,
          },
          salario,
        };
        const response = await postFiador(body);
        dispatch(setShowLoader({ status: false }));
        if (response.status === 200) {
          clearInputs();
          dispatch(setShowAlert({ title: 'Concluido', description: 'Fiador cadastrado com sucesso' }));
        }
      }
    } else {
      dispatch(setShowAlert({ title: 'Ops!', description: 'Preencha todos os campos' }));
    }
  }

  return (
    <Container>
      <Scroll>
        <Row>
          <Button onPress={() => setShow('imovel')} style={{ borderColor: show === 'imovel' ? theme.colors.primary : theme.colors.black }}><Info>Cadastrar Imóvel</Info></Button>
          <Button onPress={() => setShow('cliente')} style={{ borderColor: show === 'cliente' ? theme.colors.primary : theme.colors.black }}><Info>Cadastrar Cliente</Info></Button>
          <Button onPress={() => setShow('fiador')} style={{ borderColor: show === 'fiador' ? theme.colors.primary : theme.colors.black }}><Info>Cadastrar Fiador</Info></Button>
        </Row>
        <Diviser />
        {show === 'imovel' && (
        <>
          <Info>Selecione o tipo do imóvel</Info>
          <RowInfo>
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
          <Info>Selecione o objetivo do anúncio</Info>
          <RowInfo>
            <View>
              <ButtonIcon onPress={() => setObjetivo('venda')}>
                <Feather name={objetivo === 'venda' ? 'check-square' : 'square'} color={theme.colors.border} size={20} />
              </ButtonIcon>
              <Text> venda</Text>
            </View>
            <View>
              <ButtonIcon onPress={() => setObjetivo('aluguel')}>
                <Feather name={objetivo === 'aluguel' ? 'check-square' : 'square'} color={theme.colors.border} size={20} />
              </ButtonIcon>
              <Text> aluguel</Text>
            </View>
          </RowInfo>
          <Info>Insira os dados abaixo</Info>
          <Input placeholder="Valor" value={valor} onChangeText={setvalor} />
          <Input placeholder="Area" value={area} onChangeText={setarea} />
          <Input placeholder="Vagas de garagem" value={garagem} onChangeText={setgaragem} />
          <Input placeholder="Descrição" value={descricao} onChangeText={setdescricao} />
          <Input placeholder="Url da imagem" value={image} onChangeText={setimage} />
          {tipo !== 'quitinete' && (
            <>
              <Input placeholder="Qnt. quartos" value={quartos} onChangeText={setquartos} />
              <Input placeholder="Qnt. banheiros" value={banheiro} onChangeText={setbanheiro} />
              <Input placeholder="Qnt suite" value={suite} onChangeText={setsuite} />
              {tipo === 'apartamento' && (<Input placeholder="Condominio" value={condominio} onChangeText={setcondominio} />)}
              <Info>Marque se houver no imóvel</Info>
              <RowInfo>
                <View>
                  <ButtonIcon onPress={() => setpiscina((prevState) => !prevState)}>
                    <Feather name={piscina ? 'check-square' : 'square'} color={theme.colors.border} size={20} />
                  </ButtonIcon>
                  <Text> piscina</Text>
                </View>
                {tipo === 'apartamento' && (
                <View>
                  <ButtonIcon onPress={() => setportaria((prevState) => !prevState)}>
                    <Feather name={portaria ? 'check-square' : 'square'} color={theme.colors.border} size={20} />
                  </ButtonIcon>
                  <Text> portaria</Text>
                </View>
                )}
              </RowInfo>
            </>
          )}
          <Info>Insira o endereço</Info>
          <Input placeholder="Rua" value={rua} onChangeText={setrua} />
          <Input placeholder="Numero" value={numero} onChangeText={setnumero} />
          <Input placeholder="Complemento" value={complemento} onChangeText={setcomplemento} />
          <Input placeholder="Bairro" value={bairro} onChangeText={setbairro} />
          <Input placeholder="Cidade" value={cidade} onChangeText={setcidade} />
          <Input placeholder="Estado" value={estado} onChangeText={setestado} />
          <Input placeholder="CEP" value={cep} onChangeText={setcep} />
          <ButtonComponent title="Cadastrar" action={() => cadastrarImovel()} />
        </>
        )}
        {(show === 'cliente' || show === 'fiador') && (
        <>
          <Info>
            Insira os dados do
            {' '}
            {show}
            {' '}
            abaixo
          </Info>
          <Input placeholder="Nome" value={nome} onChangeText={setnome} />
          <Input placeholder="Email" value={email} onChangeText={setemail} />
          <Input placeholder="Telefone" value={telefone} onChangeText={settelefone} />
          {show === 'fiador' && (<Input placeholder="Salario" value={salario} onChangeText={setsalario} />)}
          <Info>Insira o endereço</Info>
          <Input placeholder="Rua" value={rua} onChangeText={setrua} />
          <Input placeholder="Numero" value={numero} onChangeText={setnumero} />
          <Input placeholder="Complemento" value={complemento} onChangeText={setcomplemento} />
          <Input placeholder="Bairro" value={bairro} onChangeText={setbairro} />
          <Input placeholder="Cidade" value={cidade} onChangeText={setcidade} />
          <Input placeholder="Estado" value={estado} onChangeText={setestado} />
          <Input placeholder="CEP" value={cep} onChangeText={setcep} />
          <ButtonComponent title="Cadastrar" action={() => cadastrar()} />
        </>
        )}

      </Scroll>

    </Container>
  );
}

export default Cadastro;

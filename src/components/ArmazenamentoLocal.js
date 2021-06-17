/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-community/async-storage';

const Page = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

const Input = styled.TextInput`
  margin: 20px;
  font-size: 15px;
  border: 1px solid #000;
  height: 50px;
  width: 90%;
`;

const Salvar = styled.Button``;

const NameArea = styled.View`
  margin: 20px;
  padding: 20px;
  background-color: #ccc;
  width: 100%;
`;

const Nome = styled.Text`
  font-size: 18px;
`;

export default () => {
  const [nome, setNome] = useState('');
  const [novoNome, setNovoNome] = useState('');

  const SalvarNome = async () => {
    if (novoNome !== '') {
      await AsyncStorage.setItem('@nome', novoNome);
      setNome(novoNome);
      setNovoNome('');
    }
  };

  const PegaNome = async () => {
    const n = await AsyncStorage.getItem('@nome');
    setNome(n);
  };

  useEffect(() => {
    PegaNome();
  }, []);

  return (
    <Page>
      <Input
        placeholder="Qual seu nome?"
        value={novoNome}
        onChangeText={e => setNovoNome(e)}
      />
      <Salvar title="Salvar" onPress={SalvarNome} />
      <NameArea>
        <Nome>{nome}</Nome>
      </NameArea>
    </Page>
  );
};

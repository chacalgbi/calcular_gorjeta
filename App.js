import React, {useState, useEffect} from 'react';
import {Text, Platform} from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  margin-top: 30px;
  flex: 1;
  align-items: center;
`;

const HeaderText = styled.Text`
  font-size: 25px;
`;

const InputText = styled.TextInput`
  width: 80%;
  height: 50px;
  font-size: 18px;
  background-color: #dcdcdc;
  margin-top: 20px;
  border-radius: 15px;
  padding: 10px;
  padding-left: 20px;
`;

const BotaoCalcular = styled.TouchableOpacity`
  margin-top: 20px;
  border-radius: 15px;
  background-color: #add8e6;
  height: 50px;
  width: 150px;
  align-items: center;
  justify-content: center;
`;

const Resultado = styled.View`
  width: 80%;
  margin-top: 30px;
  background-color: #eee;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

const Valor = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const Item = styled.Text`
  font-size: 15px;
  margin-bottom: 15px;
`;

const PctArea = styled.View`
  flex-direction: row;
  margin: 10px;
`;

const PctItem = styled.TouchableOpacity`
  margin-top: 10px;
  border-radius: 15px;
  border-style: solid;
  border-width: 3px;
  border-color: #add8e6;
  height: 50px;
  width: 50px;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

export default () => {
  const [conta, setConta] = useState('');
  const [gorjeta, setGorjeta] = useState(0);
  const [pct, setPct] = useState(10);

  const calc = () => {
    let nConta = parseFloat(conta);
    if (nConta) {
      setGorjeta((pct / 100) * nConta);
    }
  };

  useEffect(() => {
    calc();
  }, [pct]);

  useEffect(() => {
    alert(`Sistema: ${Platform.OS} - ${Platform.Version}`);
  }, []);

  return (
    <Page>
      <HeaderText>Calculadora de Gorjeta</HeaderText>
      <InputText
        placeholder="Valor da conta?"
        placeholderTextColor="#6959CD"
        keyboardType="numeric"
        value={conta}
        onChangeText={n => setConta(n)}
      />
      <PctArea>
        <PctItem onPress={() => setPct(5)}>
          <Text>5%</Text>
        </PctItem>
        <PctItem onPress={() => setPct(10)}>
          <Text>10%</Text>
        </PctItem>
        <PctItem onPress={() => setPct(15)}>
          <Text>15%</Text>
        </PctItem>
        <PctItem onPress={() => setPct(20)}>
          <Text>20%</Text>
        </PctItem>
      </PctArea>
      <BotaoCalcular onPress={calc}>
        <Text>Calcular {pct}%</Text>
      </BotaoCalcular>
      {gorjeta > 0 && (
        <Resultado>
          <Valor>Valor da Conta</Valor>
          <Item>R$ {parseFloat(conta).toFixed(2)}</Item>
          <Valor>Valor da Gorjeta</Valor>
          <Item>
            R$ {gorjeta.toFixed(2)} ({pct}%)
          </Item>
          <Valor>Valor Total</Valor>
          <Item>R$ {(parseFloat(conta) + gorjeta).toFixed(2)}</Item>
        </Resultado>
      )}
    </Page>
  );
};

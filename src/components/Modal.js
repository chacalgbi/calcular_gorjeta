/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { Modal, Text } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Box = styled.View`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    justify-content: center;
    align-items: center;
`;
const Botao = styled.TouchableOpacity`
    margin-top: 20px;
    border-radius: 15px;
    background-color: #add8e6;
    height: 50px;
    width: 150px;
    justify-content: center;
    align-items: center;

`;
const Corpo = styled.View`
    width: 90%;
    height: 200px;
    background-color: #FFF;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
`;

export default function Modal_() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <Page>
            <Botao onPress={()=>setModalVisible(true)}>
            <Text>Mostrar</Text>
            </Botao>
            <Modal
                visible={modalVisible}
                animationType="fade"
                transparent={true}
                onRequestClose={()=>setModalVisible(false)}
             >
                 <Box>
                     <Corpo>
                     <Botao onPress={()=>setModalVisible(false)}>
                     <Text>Fechar Modal</Text>
                     </Botao>
                     <Text>Mostrado</Text>
                     </Corpo>
                 </Box>
            </Modal>
      </Page>
    );
}

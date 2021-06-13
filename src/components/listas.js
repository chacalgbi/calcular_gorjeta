import React from 'react';
import styled from 'styled-components/native';
import lista from './lista';
import ListaItem from './ListaItem';

const Page = styled.SafeAreaView`
    flex: 1;
    background-color: #add8e6;
`;

const Listagem = styled.FlatList`
    flex: 1;
`;

export default () => {

  return ( 
    <Page>
        <Listagem 
            data={lista}
            renderItem={({item})=><ListaItem data={item} />}
            keyExtractor={(item)=>item.id}
        />
    </Page>
    );
}
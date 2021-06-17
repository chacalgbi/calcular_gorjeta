import React, {useState} from 'react';
import styled from 'styled-components/native';
import lista from './lista';
import ListaItem from './ListaItem';
import AddItemArea from './additemarea';
import { SwipeListView } from 'react-native-swipe-list-view';
import ListaItemSwipe from './ListaItemSwipe';

const Page = styled.SafeAreaView`
    flex: 1;
    background-color: #FFFFFF;
`;

const Listagem = styled.FlatList`
    flex: 1;
`;

export default () => {
    const [items, setItems] = useState(lista);

    const addNewItem= (txt)=> {
        let newItems = [...items];
        let prox_item = newItems.length + 1; // pega a quantidade de items e soma mais um pra fazer o próximo ID
        newItems.push({
            id: prox_item.toString(),
            tarefa: txt,
            done: false
        });
        setItems(newItems);
    }

    const mudarDone = (index) =>{
        let newItems = [...items];
        newItems[index].done = !newItems[index].done;
        setItems(newItems);
    }

    const deleteItem= (index)=> {
        let newItems = [...items];
        newItems = newItems.filter((it, i)=>{ // vai retornar todos os items, menos o que vier de index, filtrando (tirando) o que queremos apagar
            if(i != index){
                return true;
            }else{
                return false; // Quando i == index, não coloca no novo array
            }
        });
        setItems(newItems);
    }

  return ( 
    <Page>
        <AddItemArea onAdd={addNewItem} />
        <SwipeListView 
            data={items}
            renderItem={({item, index})=><ListaItem aoPressionar={()=>mudarDone(index)} data={item} />}
            renderHiddenItem={({index})=>< ListaItemSwipe onDelete={()=>deleteItem(index)} />}
            leftOpenValue={50}
            disableLeftSwipe={true}


            keyExtractor={(item)=>item.id}
        />
    </Page>
    );
}
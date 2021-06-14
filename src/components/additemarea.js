import React, {useState} from 'react';
import styled from 'styled-components/native';

const AddItemArea = styled.View`
  padding:10px;
  background-color: #CCC;
`;

const AddItemInput = styled.TextInput`
background-color: #FFF;
font-size:15px;
height:50px;
border-radius:15px;
padding:10px;
`;

export default () => {

    const [item, setItem] = useState('');

    const handleSubmit = ()=>{

        alert(item);
        setItem('');
    }

  return ( 
    <AddItemArea>
      <AddItemInput
        placeholder="Digite um novo item"
        value={item}
        onChangeText={e=>setItem(e)}
        onSubmitEditing={handleSubmit}
        returnKeyType="send"
      />
    </AddItemArea>
    );
};